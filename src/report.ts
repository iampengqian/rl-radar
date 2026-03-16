/**
 * LLM invocation, file I/O, and GitHub issue creation helpers.
 */

import fs from "node:fs";
import path from "node:path";

// ---------------------------------------------------------------------------
// LLM token budget constants
// ---------------------------------------------------------------------------

export const LLM_TOKENS_DEFAULT = 4096;
export const LLM_TOKENS_TRENDING = 6144;
export const LLM_TOKENS_WEB = 8192;
export const LLM_TOKENS_ROLLUP = 8192;
const DEFAULT_LLM_CONCURRENCY = 2;
const DEFAULT_LLM_MIN_INTERVAL_MS = 5_000;
import { type LlmProvider, createProvider } from "./providers/index.ts";

const provider: LlmProvider = createProvider();

// ---------------------------------------------------------------------------
// Concurrency limiter — prevents rate-limit (429) errors when many LLM calls
// are fired in parallel. At most LLM_CONCURRENCY requests are in-flight at
// any given time; the rest queue and run as slots free up.
// ---------------------------------------------------------------------------

function readPositiveInt(value: string | undefined, fallback: number): number {
  if (!value) return fallback;
  const parsed = Number.parseInt(value, 10);
  return Number.isFinite(parsed) && parsed > 0 ? parsed : fallback;
}

export function readLlmRuntimeConfig(env: NodeJS.ProcessEnv): {
  concurrency: number;
  minIntervalMs: number;
} {
  return {
    concurrency: readPositiveInt(env["LLM_CONCURRENCY"], DEFAULT_LLM_CONCURRENCY),
    minIntervalMs: readPositiveInt(env["LLM_MIN_INTERVAL_MS"], DEFAULT_LLM_MIN_INTERVAL_MS),
  };
}

const { concurrency: LLM_CONCURRENCY, minIntervalMs: LLM_MIN_INTERVAL_MS } = readLlmRuntimeConfig(
  process.env,
);
let llmSlots = LLM_CONCURRENCY;
const llmQueue: Array<() => void> = [];
let llmNextAllowedAt = 0;
let llmPacingTail = Promise.resolve();

function acquireSlot(): Promise<void> {
  if (llmSlots > 0) {
    llmSlots--;
    return Promise.resolve();
  }
  return new Promise((resolve) => llmQueue.push(resolve));
}

function releaseSlot(): void {
  const next = llmQueue.shift();
  if (next) {
    next();
  } else {
    llmSlots++;
  }
}

export function resetLlmStateForTest(): void {
  llmSlots = LLM_CONCURRENCY;
  llmQueue.length = 0;
  llmNextAllowedAt = 0;
  llmPacingTail = Promise.resolve();
}

// ---------------------------------------------------------------------------
// LLM
// ---------------------------------------------------------------------------

const MAX_RETRIES = 3;
const RETRY_BASE_MS = 5_000; // 5 s, 10 s, 20 s

export function is429(err: unknown): boolean {
  return (err as { status?: number })?.status === 429 || String(err).includes("429");
}

/** Check if error is retryable (429 rate limit or 5xx server error) */
export function isRetryable(err: unknown): boolean {
  const status = (err as { status?: number })?.status;
  const errStr = String(err);
  // 429 rate limit
  if (status === 429 || errStr.includes("429")) return true;
  // 5xx server errors (500, 502, 503, 504)
  if (status && status >= 500 && status < 600) return true;
  if (/Error:\s*5\d\d/.test(errStr)) return true;
  return false;
}

function sleep(ms: number): Promise<void> {
  return new Promise((r) => setTimeout(r, ms));
}

async function waitForLlmPacing(): Promise<void> {
  const prior = llmPacingTail;
  let release!: () => void;
  llmPacingTail = new Promise<void>((resolve) => {
    release = resolve;
  });

  await prior;
  try {
    const now = Date.now();
    const wait = Math.max(0, llmNextAllowedAt - now);
    if (wait > 0) await sleep(wait);
    llmNextAllowedAt = Date.now() + LLM_MIN_INTERVAL_MS;
  } finally {
    release();
  }
}

export async function callLlm(prompt: string, maxTokens = LLM_TOKENS_DEFAULT): Promise<string> {
  for (let attempt = 0; ; attempt++) {
    await acquireSlot();
    let released = false;
    try {
      await waitForLlmPacing();
      return await provider.call(prompt, maxTokens);
    } catch (err) {
      if (attempt < MAX_RETRIES && isRetryable(err)) {
        releaseSlot();
        released = true;
        const wait = RETRY_BASE_MS * 2 ** attempt;
        const status = (err as { status?: number })?.status ?? "unknown";
        console.error(`[llm] ${status} — retry ${attempt + 1}/${MAX_RETRIES} in ${wait / 1000}s...`);
        await sleep(wait);
        continue;
      }
      throw err;
    } finally {
      if (!released) releaseSlot();
    }
  }
}

// ---------------------------------------------------------------------------
// File output
// ---------------------------------------------------------------------------

export function saveFile(content: string, ...segments: string[]): string {
  const filepath = path.join("digests", ...segments);
  fs.mkdirSync(path.dirname(filepath), { recursive: true });
  fs.writeFileSync(filepath, content, "utf-8");
  return filepath;
}

export function autoGenFooter(lang: "zh" | "en" = "zh"): string {
  const digestRepo = process.env["DIGEST_REPO"] ?? "";
  if (!digestRepo) return "";
  return lang === "en"
    ? `\n\n---\n*This digest is auto-generated by [agents-radar](https://github.com/${digestRepo}).*`
    : `\n\n---\n*本日报由 [agents-radar](https://github.com/${digestRepo}) 自动生成。*`;
}
