# rl-radar

[English](./README.md) | 中文

`rl-radar` 是一个基于 TypeScript + pnpm 的 RL 开源生态日报项目。它运行在 GitHub Actions 上，追踪一组人工维护的 RL / RLHF / post-training / 通用 RL framework GitHub 仓库，并将中英文日报输出到 `digests/YYYY-MM-DD/`。

当前已接通：
- `rl-daily.md`：中文 RL 日报
- `rl-daily-en.md`：英文 RL 日报
- GitHub Pages：<https://iampengqian.github.io/rl-radar>
- RSS：<https://iampengqian.github.io/rl-radar/feed.xml>

## 当前追踪的 RL 项目

RL 项目池目前来自 [`config.yml`](./config.yml) 中的人工维护列表，默认种子包括：

| 项目 | 仓库 |
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

现在这套机制还是人工 curated，不会自动把新仓库纳入追踪。

## 每日生成链路

每次日报运行会做这几件事：

1. 抓取每个 RL 仓库过去 24 小时内更新的 issues、pull requests、releases。
2. 基于这些活动构造 RL 专用 prompt。
3. 调用配置好的 LLM 生成中英文摘要。
4. 渲染 `rl-daily.md` 和 `rl-daily-en.md`。
5. 重建 `manifest.json` 和 `feed.xml`，供 GitHub Pages 和 RSS 使用。

生成后的 Markdown 会直接提交回本仓库，再由 GitHub Pages 对外提供浏览。

## 如何调整 RL 项目池

直接修改 [`config.yml`](./config.yml)：

```yaml
rl_repos:
  - id: my-rl-project
    repo: owner/my-rl-project
    name: My RL Project
    paginated: true
```

工作流每次运行都会重新读取这个文件。如果 `config.yml` 不存在，则回退到 [`src/config.ts`](./src/config.ts) 中的内置默认值。

## 部署配置

### 1. 开启 GitHub Pages

在 GitHub 仓库中：
- `Settings -> Pages`
- 选择 `Deploy from a branch`
- Branch 选 `master`
- Folder 选 `/ (root)`

### 2. 配置 GitHub Actions secrets 和 variables

进入 `Settings -> Secrets and variables -> Actions`。

`Repository secrets`：
- `ANTHROPIC_API_KEY`
- `ANTHROPIC_BASE_URL`：可选，兼容 Anthropic 的网关地址
- `TELEGRAM_BOT_TOKEN`：可选
- `TELEGRAM_CHAT_ID`：可选

`Repository variables`：
- `ANTHROPIC_MODEL`

如果你使用兼容 Anthropic 的 GLM 网关，至少要配置：
- `ANTHROPIC_API_KEY`
- `ANTHROPIC_BASE_URL`
- `ANTHROPIC_MODEL`

### 3. 运行日报

手动触发：
- `Actions -> Daily Agents Radar -> Run workflow`

本地运行：

```bash
pnpm install

export GITHUB_TOKEN=ghp_xxxxx
export ANTHROPIC_API_KEY=sk-xxxx
export ANTHROPIC_BASE_URL=https://your-anthropic-compatible-endpoint
export ANTHROPIC_MODEL=your-model-name

pnpm start
```

## 开发入口

- 主流程入口：[`src/index.ts`](./src/index.ts)
- RL prompt 构造：[`src/prompts.ts`](./src/prompts.ts)
- RL 报告渲染：[`src/report-builders.ts`](./src/report-builders.ts)
- RL 日报 helper：[`src/rl-daily.ts`](./src/rl-daily.ts)
- 站点清单生成：[`src/generate-manifest.ts`](./src/generate-manifest.ts)

## 后续事项

当前还没做：
- 自动发现 RL 新仓库 / 候选池
- 以 RL 为中心进一步收敛首页和 RSS 展示
- 清理从 `agents-radar` 继承下来的非 RL 报告类型
