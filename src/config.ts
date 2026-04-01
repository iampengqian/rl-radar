/**
 * Loads and validates agents-radar configuration from config.yml.
 * Falls back to built-in defaults if the file is missing or a section is absent.
 */

import fs from "node:fs";
import path from "node:path";
import yaml from "js-yaml";
import type { RepoConfig } from "./github.ts";

// ---------------------------------------------------------------------------
// Schema types
// ---------------------------------------------------------------------------

interface RawRepoEntry {
  id: string;
  repo: string;
  name: string;
  paginated?: boolean;
}

interface RawConfig {
  cli_repos?: RawRepoEntry[];
  skills_repo?: string;
  openclaw?: RawRepoEntry;
  openclaw_peers?: RawRepoEntry[];
  rl_repos?: RawRepoEntry[];
  agent_orch_repos?: RawRepoEntry[];
}

export interface RadarConfig {
  cliRepos: RepoConfig[];
  skillsRepo: string;
  openclaw: RepoConfig;
  openclawPeers: RepoConfig[];
  rlRepos: RepoConfig[];
  agentOrchRepos: RepoConfig[];
}

// ---------------------------------------------------------------------------
// Defaults (mirrors the original hard-coded values)
// ---------------------------------------------------------------------------

const DEFAULT_CLI_REPOS: RepoConfig[] = [
  { id: "claude-code", repo: "anthropics/claude-code", name: "Claude Code" },
  { id: "codex", repo: "openai/codex", name: "OpenAI Codex" },
  { id: "gemini-cli", repo: "google-gemini/gemini-cli", name: "Gemini CLI" },
  { id: "copilot-cli", repo: "github/copilot-cli", name: "GitHub Copilot CLI" },
  { id: "kimi-cli", repo: "MoonshotAI/kimi-cli", name: "Kimi Code CLI" },
  { id: "opencode", repo: "anomalyco/opencode", name: "OpenCode" },
  { id: "qwen-code", repo: "QwenLM/qwen-code", name: "Qwen Code" },
];

const DEFAULT_SKILLS_REPO = "anthropics/skills";

const DEFAULT_OPENCLAW: RepoConfig = {
  id: "openclaw",
  repo: "openclaw/openclaw",
  name: "OpenClaw",
  paginated: true,
};

const DEFAULT_OPENCLAW_PEERS: RepoConfig[] = [
  { id: "nanobot", repo: "HKUDS/nanobot", name: "NanoBot", paginated: true },
  { id: "picoclaw", repo: "sipeed/picoclaw", name: "PicoClaw", paginated: true },
  { id: "nanoclaw", repo: "qwibitai/nanoclaw", name: "NanoClaw" },
  { id: "ironclaw", repo: "nearai/ironclaw", name: "IronClaw" },
  { id: "lobsterai", repo: "netease-youdao/LobsterAI", name: "LobsterAI" },
  { id: "tinyclaw", repo: "TinyAGI/tinyclaw", name: "TinyClaw" },
  { id: "copaw", repo: "agentscope-ai/CoPaw", name: "CoPaw" },
  { id: "zeptoclaw", repo: "qhkm/zeptoclaw", name: "ZeptoClaw" },
  { id: "easyclaw", repo: "gaoyangz77/easyclaw", name: "EasyClaw" },
];

const DEFAULT_RL_REPOS: RepoConfig[] = [
  { id: "roll", repo: "alibaba/ROLL", name: "ROLL", paginated: true },
  { id: "rock", repo: "alibaba/ROCK", name: "ROCK", paginated: true },
  { id: "slime", repo: "THUDM/slime", name: "slime", paginated: true },
  { id: "areal", repo: "inclusionAI/AReaL", name: "AReaL", paginated: true },
  { id: "trl", repo: "huggingface/trl", name: "TRL", paginated: true },
  { id: "tianshou", repo: "thu-ml/tianshou", name: "Tianshou", paginated: true },
  { id: "openrlhf", repo: "OpenRLHF/OpenRLHF", name: "OpenRLHF", paginated: true },
  { id: "verl", repo: "volcengine/verl", name: "verl", paginated: true },
  { id: "torchtune", repo: "pytorch/torchtune", name: "torchtune", paginated: true },
  { id: "open-instruct", repo: "allenai/open-instruct", name: "Open Instruct", paginated: true },
  { id: "cleanrl", repo: "vwxyzjn/cleanrl", name: "CleanRL", paginated: true },
  { id: "rl-games", repo: "Denys88/rl_games", name: "rl_games", paginated: true },
  { id: "gymnasium", repo: "Farama-Foundation/Gymnasium", name: "Gymnasium", paginated: true },
  { id: "pettingzoo", repo: "Farama-Foundation/PettingZoo", name: "PettingZoo", paginated: true },
  { id: "stable-baselines3", repo: "DLR-RM/stable-baselines3", name: "Stable Baselines3", paginated: true },
];

const DEFAULT_AGENT_ORCH_REPOS: RepoConfig[] = [
  // Original coding agent orchestrators
  { id: "claude-squad", repo: "smtg-ai/claude-squad", name: "Claude Squad", paginated: true },
  { id: "crystal", repo: "stravu/crystal", name: "Crystal", paginated: true },
  { id: "dmux", repo: "standardagents/dmux", name: "dmux", paginated: true },
  { id: "symphony", repo: "openai/symphony", name: "Symphony", paginated: true },
  { id: "claude-code-bridge", repo: "bfly123/claude_code_bridge", name: "Claude Code Bridge" },
  { id: "dorothy", repo: "Charlie85270/Dorothy", name: "Dorothy" },
  { id: "jean", repo: "coollabsio/jean", name: "Jean" },
  { id: "openkanban", repo: "TechDufus/openkanban", name: "OpenKanban" },
  { id: "claude-flow", repo: "ruvnet/claude-flow", name: "Claude Flow", paginated: true },
  { id: "kodo", repo: "ikamensh/kodo", name: "Kodo" },
  { id: "orch", repo: "oxgeneral/ORCH", name: "ORCH" },
  { id: "gnap", repo: "farol-team/gnap", name: "GNAP" },
  { id: "swarm-protocol", repo: "phuryn/swarm-protocol", name: "Swarm Protocol" },
  // Coding Agent Orchestration Tools (from awesome-agent-orchestrators)
  { id: "vibe-kanban", repo: "BloopAI/vibe-kanban", name: "Vibe Kanban", paginated: true },
  { id: "openfang", repo: "RightNow-AI/openfang", name: "OpenFang", paginated: true },
  { id: "aperant", repo: "AndyMik90/Aperant", name: "Aperant", paginated: true },
  { id: "gastown", repo: "gastownhall/gastown", name: "Gastown", paginated: true },
  { id: "humanlayer", repo: "humanlayer/humanlayer", name: "HumanLayer", paginated: true },
  {
    id: "ralph-claude-code",
    repo: "frankbria/ralph-claude-code",
    name: "Ralph Claude Code",
    paginated: true,
  },
  { id: "superset", repo: "superset-sh/superset", name: "Superset", paginated: true },
  { id: "t3code", repo: "pingdotgg/t3code", name: "T3Code", paginated: true },
  {
    id: "agent-orchestrator",
    repo: "ComposioHQ/agent-orchestrator",
    name: "Agent Orchestrator",
    paginated: true,
  },
  { id: "1code", repo: "21st-dev/1code", name: "1Code", paginated: true },
  { id: "clawteam", repo: "HKUDS/ClawTeam", name: "ClawTeam", paginated: true },
  { id: "emdash", repo: "generalaction/emdash", name: "Emdash", paginated: true },
  { id: "collaborator", repo: "collaborator-ai/collab-public", name: "Collaborator" },
  { id: "agent-deck", repo: "asheshgoplani/agent-deck", name: "Agent Deck" },
  { id: "mux-desktop", repo: "coder/mux", name: "Mux Desktop" },
  // General Multi-Agent Frameworks (from awesome-agent-orchestration)
  { id: "autogpt", repo: "Significant-Gravitas/AutoGPT", name: "AutoGPT", paginated: true },
  { id: "metagpt", repo: "FoundationAgents/MetaGPT", name: "MetaGPT", paginated: true },
  { id: "autogen", repo: "microsoft/autogen", name: "AutoGen", paginated: true },
  { id: "gpt-engineer", repo: "AntonOsika/gpt-engineer", name: "GPT-Engineer", paginated: true },
  { id: "llamaindex", repo: "run-llama/llama_index", name: "LlamaIndex", paginated: true },
  { id: "crewai", repo: "crewAIInc/crewAI", name: "CrewAI", paginated: true },
  { id: "agno", repo: "agno-agi/agno", name: "Agno", paginated: true },
  { id: "ruflo", repo: "ruvnet/ruflo", name: "Ruflo", paginated: true },
  { id: "langgraph", repo: "langchain-ai/langgraph", name: "LangGraph", paginated: true },
  { id: "semantic-kernel", repo: "microsoft/semantic-kernel", name: "Semantic Kernel", paginated: true },
  { id: "smolagents", repo: "huggingface/smolagents", name: "SmolAgents", paginated: true },
  { id: "haystack", repo: "deepset-ai/haystack", name: "Haystack", paginated: true },
  { id: "babyagi", repo: "yoheinakajima/babyagi", name: "BabyAGI", paginated: true },
  { id: "openai-swarm", repo: "openai/swarm", name: "OpenAI Swarm", paginated: true },
  { id: "openai-agents", repo: "openai/openai-agents-python", name: "OpenAI Agents", paginated: true },
  { id: "deepagents", repo: "langchain-ai/deepagents", name: "DeepAgents", paginated: true },
  { id: "pydantic-ai", repo: "pydantic/pydantic-ai", name: "PydanticAI", paginated: true },
];

// ---------------------------------------------------------------------------
// Loader
// ---------------------------------------------------------------------------

export function toRepoConfig(e: RawRepoEntry): RepoConfig {
  return { id: e.id, repo: e.repo, name: e.name, ...(e.paginated ? { paginated: true } : {}) };
}

export function loadConfig(configPath = "config.yml"): RadarConfig {
  const resolved = path.resolve(configPath);

  if (!fs.existsSync(resolved)) {
    console.log(`[config] ${configPath} not found — using built-in defaults.`);
    return {
      cliRepos: DEFAULT_CLI_REPOS,
      skillsRepo: DEFAULT_SKILLS_REPO,
      openclaw: DEFAULT_OPENCLAW,
      openclawPeers: DEFAULT_OPENCLAW_PEERS,
      rlRepos: DEFAULT_RL_REPOS,
      agentOrchRepos: DEFAULT_AGENT_ORCH_REPOS,
    };
  }

  const raw = yaml.load(fs.readFileSync(resolved, "utf-8")) as RawConfig;

  const cliRepos =
    Array.isArray(raw?.cli_repos) && raw.cli_repos.length > 0
      ? raw.cli_repos.map(toRepoConfig)
      : DEFAULT_CLI_REPOS;

  const skillsRepo =
    typeof raw?.skills_repo === "string" && raw.skills_repo.trim()
      ? raw.skills_repo.trim()
      : DEFAULT_SKILLS_REPO;

  const openclaw = raw?.openclaw?.id && raw.openclaw.repo ? toRepoConfig(raw.openclaw) : DEFAULT_OPENCLAW;

  const openclawPeers =
    Array.isArray(raw?.openclaw_peers) && raw.openclaw_peers.length > 0
      ? raw.openclaw_peers.map(toRepoConfig)
      : DEFAULT_OPENCLAW_PEERS;

  const rlRepos =
    Array.isArray(raw?.rl_repos) && raw.rl_repos.length > 0
      ? raw.rl_repos.map(toRepoConfig)
      : DEFAULT_RL_REPOS;

  const agentOrchRepos =
    Array.isArray(raw?.agent_orch_repos) && raw.agent_orch_repos.length > 0
      ? raw.agent_orch_repos.map(toRepoConfig)
      : DEFAULT_AGENT_ORCH_REPOS;

  console.log(
    `[config] Loaded from ${configPath}: ` +
      `${cliRepos.length} CLI repos, ${openclawPeers.length} OpenClaw peers, ${rlRepos.length} RL repos, ${agentOrchRepos.length} Agent Orch repos`,
  );

  return { cliRepos, skillsRepo, openclaw, openclawPeers, rlRepos, agentOrchRepos };
}
