# rl-radar

[English](./README.md) | 中文

`rl-radar` 是从 `agents-radar` fork 过来的。当前目标不是把原工程一次性删掉重做，而是在保留原有 agent 工程结构的基础上，逐步把它演进成一个以 RL 开源生态为主的日报系统。

所以这个仓库当前有两层内容：
- 已经落地的 RL-radar 适配部分
- 还保留在仓库里的 `agents-radar` 继承模块和报告类型

## 当前 RL 范围

已经适配完成的部分：
- 通过 [`config.yml`](./config.yml) 维护 RL 项目池
- 中英文 RL 日报：
  - `rl-daily.md`
  - `rl-daily-en.md`
- GitHub Pages 站点：<https://iampengqian.github.io/rl-radar>
- RSS：<https://iampengqian.github.io/rl-radar/feed.xml>

当前 RL 日报追踪的是一组人工维护的项目：

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

现在这套机制还是人工 curated，不会自动把新的 RL 仓库纳入追踪。

## 仓库里还保留的 Agents-Radar 能力

这些模块目前还在仓库里，也仍然是代码现实的一部分：
- AI CLI 日报链路
- OpenClaw / AI agents 生态日报链路
- Anthropic / OpenAI 官网内容抓取
- GitHub trending 报告
- Hacker News 报告
- weekly / monthly rollup
- [`mcp/`](./mcp/) 里的 MCP server

所以当前项目并不是“纯 RL-only 仓库”，而是“以 RL 为新目标、但仍保留原 agents-radar 主体工程结构的 fork”。

## 当前日报链路

Daily workflow 每天 `00:00 UTC` 运行一次，也支持手动触发。

RL 部分当前每次运行会：
1. 抓取过去 24 小时内更新的 issues、pull requests、releases
2. 构造 RL 专用 prompt
3. 调用配置好的 LLM
4. 写出 `rl-daily.md` 和 `rl-daily-en.md`
5. 更新 `manifest.json` 和 `feed.xml`

主流程入口在 [`src/index.ts`](./src/index.ts)，RL 相关实现主要在：
- [`src/rl-daily.ts`](./src/rl-daily.ts)
- [`src/prompts.ts`](./src/prompts.ts)
- [`src/report-builders.ts`](./src/report-builders.ts)

## 配置方式

### RL 项目池

直接修改 [`config.yml`](./config.yml)：

```yaml
rl_repos:
  - id: my-rl-project
    repo: owner/my-rl-project
    name: My RL Project
    paginated: true
```

每次 workflow 运行都会重新读取该文件。如果文件不存在，则回退到 [`src/config.ts`](./src/config.ts) 中的内置默认值。

### Secrets 和 variables

进入 `Settings -> Secrets and variables -> Actions`。

`Repository secrets`：
- `ANTHROPIC_API_KEY`
- `ANTHROPIC_BASE_URL`：如果你使用兼容 Anthropic 的网关
- `TELEGRAM_BOT_TOKEN`：可选
- `TELEGRAM_CHAT_ID`：可选

`Repository variables`：
- `ANTHROPIC_MODEL`

如果使用兼容 Anthropic 的 GLM 网关，最小可运行配置是：
- `ANTHROPIC_API_KEY`
- `ANTHROPIC_BASE_URL`
- `ANTHROPIC_MODEL`

## 本地运行

```bash
pnpm install

export GITHUB_TOKEN=ghp_xxxxx
export ANTHROPIC_API_KEY=sk-xxxx
export ANTHROPIC_BASE_URL=https://your-anthropic-compatible-endpoint
export ANTHROPIC_MODEL=your-model-name

pnpm start
```

## README 待办清单

下面这些内容还没有完全从 `agents-radar` 切到 `rl-radar`：

1. MCP server 元数据还是旧的。
   - [`mcp/src/index.ts`](./mcp/src/index.ts) 里仍然使用 `agents-radar` 命名
   - 仍然指向旧的 `duanyytop.github.io/agents-radar` Pages 地址
   - report label 和示例仍偏 AI / agent 语境

2. workflow 和通知品牌还是混合状态。
   - workflow 名称仍然是 `Daily Agents Radar`、`Weekly Agents Radar`、`Monthly Agents Radar`
   - Telegram 默认频道仍然是 `@agents_radar`

3. weekly / monthly 还不是 RL-first。
   - 当前 weekly/monthly 仍然是继承下来的 AI 工具汇总
   - 还没有专门的 RL 周报 / 月报

4. 继承下来的报告类型还没有被重新梳理。
   - `ai-cli`
   - `ai-agents`
   - `ai-web`
   - `ai-trending`
   - `ai-hn`

5. 自动发现 RL 新仓库还没做。
   - 当前仍然是固定 curated 列表

6. Pages 和 RSS 还没有完全变成 RL 中心。
   - RL 日报已经发布
   - 但首页和 feed 里仍然和继承下来的旧报告类型并存

7. 文档还需要继续收敛。
   - 保留 `agents-radar` 的继承背景
   - 但需要持续明确哪些模块是 legacy，哪些是当前有效能力，哪些是未来 RL 方向
