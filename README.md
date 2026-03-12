# rl-radar

English | [中文](./README.zh.md)

`rl-radar` is forked from `agents-radar`. The current goal is to evolve that codebase into an RL-focused digest system without losing the inherited agent-oriented infrastructure all at once.

That means the repository currently has two layers:
- RL-radar adaptations that are already live
- inherited `agents-radar` modules and report types that are still present in the codebase

## Current RL Scope

Already adapted:
- RL repository tracking via [`config.yml`](./config.yml)
- bilingual RL daily digests:
  - `rl-daily.md`
  - `rl-daily-en.md`
- GitHub Pages site: <https://iampengqian.github.io/rl-radar>
- RSS feed: <https://iampengqian.github.io/rl-radar/feed.xml>

The RL report currently tracks a manually curated project pool:

| Project | Repository |
|---|---|
| ROLL | [alibaba/ROLL](https://github.com/alibaba/ROLL) |
| ROCK | [alibaba/ROCK](https://github.com/alibaba/ROCK) |
| slime | [THUDM/slime](https://github.com/THUDM/slime) |
| AReaL | [inclusionAI/AReaL](https://github.com/inclusionAI/AReaL) |
| TRL | [huggingface/trl](https://github.com/huggingface/trl) |
| Tianshou | [thu-ml/tianshou](https://github.com/thu-ml/tianshou) |
| OpenRLHF | [OpenRLHF/OpenRLHF](https://github.com/OpenRLHF/OpenRLHF) |
| verl | [volcengine/verl](https://github.com/volcengine/verl) |
| torchtune | [pytorch/torchtune](https://github.com/pytorch/torchtune) |
| Open Instruct | [allenai/open-instruct](https://github.com/allenai/open-instruct) |
| CleanRL | [vwxyzjn/cleanrl](https://github.com/vwxyzjn/cleanrl) |
| rl_games | [Denys88/rl_games](https://github.com/Denys88/rl_games) |
| Gymnasium | [Farama-Foundation/Gymnasium](https://github.com/Farama-Foundation/Gymnasium) |
| PettingZoo | [Farama-Foundation/PettingZoo](https://github.com/Farama-Foundation/PettingZoo) |
| Stable Baselines3 | [DLR-RM/stable-baselines3](https://github.com/DLR-RM/stable-baselines3) |

Today this list is still curated manually. New RL repositories are not auto-added yet.

## Inherited Agents-Radar Capabilities Still In Repo

These parts are still in the codebase and still matter:
- AI CLI digest pipeline
- OpenClaw / AI agents ecosystem digest pipeline
- web content tracking for Anthropic and OpenAI
- GitHub trending digest
- Hacker News digest
- weekly and monthly rollups
- MCP server in [`mcp/`](./mcp/)

So this repository is not yet a pure RL-only project. It is currently an RL-first fork built on top of the broader `agents-radar` structure.

## What The Daily Pipeline Does

The daily workflow runs at `00:00 UTC` every day and can also be triggered manually.

For the RL part, each run:
1. fetches issues, pull requests, and releases updated in the last 24 hours
2. builds RL-specific prompts
3. calls the configured LLM provider
4. writes `rl-daily.md` and `rl-daily-en.md`
5. updates `manifest.json` and `feed.xml`

The main implementation entry is [`src/index.ts`](./src/index.ts). The RL-specific helpers live in:
- [`src/rl-daily.ts`](./src/rl-daily.ts)
- [`src/prompts.ts`](./src/prompts.ts)
- [`src/report-builders.ts`](./src/report-builders.ts)

## Configuration

### Repository pool

Edit [`config.yml`](./config.yml) to add or remove RL repositories:

```yaml
rl_repos:
  - id: my-rl-project
    repo: owner/my-rl-project
    name: My RL Project
    paginated: true
```

The file is loaded on every workflow run. If it does not exist, built-in defaults from [`src/config.ts`](./src/config.ts) are used.

### Secrets and variables

Go to `Settings -> Secrets and variables -> Actions`.

Repository secrets:
- `ANTHROPIC_API_KEY`
- `ANTHROPIC_BASE_URL` if you use an Anthropic-compatible gateway
- `TELEGRAM_BOT_TOKEN` optional
- `TELEGRAM_CHAT_ID` optional

Repository variables:
- `ANTHROPIC_MODEL`

For an Anthropic-compatible GLM deployment, the minimal working set is:
- `ANTHROPIC_API_KEY`
- `ANTHROPIC_BASE_URL`
- `ANTHROPIC_MODEL`

## Local Run

```bash
pnpm install

export GITHUB_TOKEN=ghp_xxxxx
export ANTHROPIC_API_KEY=sk-xxxx
export ANTHROPIC_BASE_URL=https://your-anthropic-compatible-endpoint
export ANTHROPIC_MODEL=your-model-name

pnpm start
```

## README TODO

The following areas are still not fully adapted from `agents-radar` to `rl-radar`:

1. MCP server metadata is still stale.
   - [`mcp/src/index.ts`](./mcp/src/index.ts) still uses `agents-radar` naming
   - it still points to the old `duanyytop.github.io/agents-radar` Pages URL
   - report labels and examples are still AI/agent-oriented

2. Workflow and notification branding is still mixed.
   - workflow names are still `Daily Agents Radar`, `Weekly Agents Radar`, `Monthly Agents Radar`
   - Telegram default channel is still `@agents_radar`

3. Weekly and monthly rollups are not RL-first yet.
   - current weekly/monthly outputs are inherited AI tool rollups
   - no dedicated RL weekly/monthly report exists yet

4. Legacy report families are still present but not yet re-documented cleanly.
   - `ai-cli`
   - `ai-agents`
   - `ai-web`
   - `ai-trending`
   - `ai-hn`

5. Automatic RL repo discovery is not implemented yet.
   - current mode is fixed curated list only

6. Pages and RSS are only partially RL-centered.
   - RL daily is published
   - but the homepage/feed still coexist with inherited legacy report families

7. Documentation should continue being cleaned up.
   - keep the inherited `agents-radar` context
   - but explicitly mark which modules are legacy, which are active, and which are future RL work
