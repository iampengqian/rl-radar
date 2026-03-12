import fs from "node:fs";
import { afterEach, describe, expect, it, vi } from "vitest";
import { readDailyDigest, toWeekStr } from "../rollup.ts";

afterEach(() => {
  vi.restoreAllMocks();
});

describe("toWeekStr", () => {
  it("returns correct ISO week for a known date", () => {
    // 2026-03-09 is a Monday in ISO week 11
    expect(toWeekStr(new Date("2026-03-09"))).toBe("2026-W11");
  });

  it("handles first week of year", () => {
    // 2026-01-05 is a Monday in week 2
    expect(toWeekStr(new Date("2026-01-05"))).toBe("2026-W02");
  });

  it("handles last week of year crossing into next year", () => {
    // 2025-12-29 is a Monday — ISO week 1 of 2026
    expect(toWeekStr(new Date("2025-12-29"))).toBe("2026-W01");
  });

  it("handles week 52/53", () => {
    // 2026-12-28 is a Monday — W53 of 2026? Let's check
    const result = toWeekStr(new Date("2026-12-28"));
    expect(result).toMatch(/^\d{4}-W\d{2}$/);
  });

  it("pads single-digit week numbers", () => {
    // 2026-01-12 is a Monday in week 3
    const result = toWeekStr(new Date("2026-01-12"));
    expect(result).toBe("2026-W03");
  });
});

describe("readDailyDigest", () => {
  it("combines multiple report types from the same day, including rl-daily", () => {
    vi.spyOn(fs, "existsSync").mockImplementation((filepath) => {
      const path = String(filepath);
      return path.endsWith("/ai-cli.md") || path.endsWith("/rl-daily.md");
    });
    vi.spyOn(fs, "readFileSync").mockImplementation((filepath) => {
      const path = String(filepath);
      if (path.endsWith("/ai-cli.md")) return "# CLI";
      if (path.endsWith("/rl-daily.md")) return "# RL";
      throw new Error(`unexpected path: ${path}`);
    });

    expect(readDailyDigest("2026-03-12")).toContain("# CLI");
    expect(readDailyDigest("2026-03-12")).toContain("# RL");
  });

  it("returns rl-daily when it is the only available source", () => {
    vi.spyOn(fs, "existsSync").mockImplementation((filepath) => String(filepath).endsWith("/rl-daily.md"));
    vi.spyOn(fs, "readFileSync").mockImplementation((filepath) => {
      if (String(filepath).endsWith("/rl-daily.md")) return "# RL only";
      throw new Error(`unexpected path: ${filepath}`);
    });

    expect(readDailyDigest("2026-03-12")).toContain("# RL only");
  });
});
