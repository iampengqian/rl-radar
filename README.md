# rl-radar

English | [中文](./README.zh.md)

`rl-radar` is a TypeScript + pnpm daily digest pipeline for the open-source RL ecosystem. It runs on GitHub Actions, tracks curated GitHub repositories in RL / RLHF / post-training / general RL frameworks, and publishes bilingual Markdown digests to `digests/YYYY-MM-DD/`.

Current phase:
- `rl-daily.md`: Chinese RL daily digest
- `rl-daily-en.md`: English RL daily digest
- GitHub Pages site: <https://iampengqian.github.io/rl-radar>
- RSS feed: <https://iampengqian.github.io/rl-radar/feed.xml>

## What It Tracks

The RL report is currently based on a manually curated repository pool defined in [`config.yml`](./config.yml). The default seed list includes:

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

Today this list is curated manually. The pipeline does not auto-add newly discovered repositories yet.

## How It Works

Each daily run:

1. Fetches issues, pull requests, and releases updated in the last 24 hours for each tracked RL repository.
2. Builds RL-specific prompts from the fetched activity.
3. Calls the configured LLM provider to summarize each repository in Chinese and English.
4. Renders `rl-daily.md` and `rl-daily-en.md`.
5. Regenerates `manifest.json` and `feed.xml` for GitHub Pages and RSS.

Generated files are committed back into this repository and served directly by GitHub Pages.

## Configure The Repo Pool

Edit [`config.yml`](./config.yml) to add or remove RL repositories:

```yaml
rl_repos:
  - id: my-rl-project
    repo: owner/my-rl-project
    name: My RL Project
    paginated: true
```

The file is read on every workflow run. If `config.yml` is missing, the built-in defaults from [`src/config.ts`](./src/config.ts) are used.

## Setup

### 1. Enable GitHub Pages

In GitHub:
- `Settings -> Pages`
- `Deploy from a branch`
- Branch: `master`
- Folder: `/ (root)`

### 2. Add GitHub Actions secrets and variables

Go to `Settings -> Secrets and variables -> Actions`.

Repository secrets:
- `ANTHROPIC_API_KEY`
- `ANTHROPIC_BASE_URL` (optional, for Anthropic-compatible gateways)
- `TELEGRAM_BOT_TOKEN` (optional)
- `TELEGRAM_CHAT_ID` (optional)

Repository variables:
- `ANTHROPIC_MODEL`

If you use an Anthropic-compatible GLM endpoint, set all three RL digest inputs:
- `ANTHROPIC_API_KEY`
- `ANTHROPIC_BASE_URL`
- `ANTHROPIC_MODEL`

### 3. Run the workflow

Manual run:
- `Actions -> Daily Agents Radar -> Run workflow`

Local run:

```bash
pnpm install

export GITHUB_TOKEN=ghp_xxxxx
export ANTHROPIC_API_KEY=sk-xxxx
export ANTHROPIC_BASE_URL=https://your-anthropic-compatible-endpoint
export ANTHROPIC_MODEL=your-model-name

pnpm start
```

## Development Notes

- Main implementation entry: [`src/index.ts`](./src/index.ts)
- RL prompt builder: [`src/prompts.ts`](./src/prompts.ts)
- RL report renderer: [`src/report-builders.ts`](./src/report-builders.ts)
- RL digest helper: [`src/rl-daily.ts`](./src/rl-daily.ts)
- Site manifest generator: [`src/generate-manifest.ts`](./src/generate-manifest.ts)

## Roadmap

Not done yet:
- automatic RL repo discovery / candidate pool
- RL-first homepage refinements
- stronger RSS / landing-page emphasis for RL reports
- cleanup of legacy non-RL report types inherited from `agents-radar`
