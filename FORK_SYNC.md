# Fork 同步追踪

本文件记录 rl-radar 与上游 [duanyytop/agents-radar](https://github.com/duanyytop/agents-radar) 的同步状态。

## 同步原则

1. **定期同步** - 每周检查上游更新
2. **选择性合并** - 只合并有价值的特性
3. **保留 RL 特性** - 不覆盖 RL 相关代码
4. **记录变更** - 在下方表格记录每次合并

## 已合并的上游特性

| 日期 | 上游 PR/Commit | 功能描述 | 合并提交 |
|------|---------------|---------|---------|
| 2026-03-16 | #182, #192 | Telegram Highlights | 7a77933 |
| 2026-03-19 | e551332, a9744c2 | @mentions 中和化 + 74dfa10 |
| 2026-03-19 | f4922ce | OpenAI web 报告误报修复 | 74dfa10 |
| 2026-03-19 | b01853a | 周报/月报 Highlights 生成 | 2c472b7 (#21) |
| 2026-03-30 | a7854e3 | 移除 zeroclaw + repo fetch 错误处理 | 8063aa1 (#23) |
| 2026-03-30 | ba2d9ef | Telegram highlights HTML 转义 | 8063aa1 (#23) |
| 2026-03-30 | 7e4579d, e32f4a2, a76ad93 | RSS feed 完整 HTML + CDATA + content:encoded | 8063aa1 (#23) |
| 2026-03-30 | 6b31f5d, 802e1c8 | 小红书/微信内容生成器 (social.ts) | 0ca1b0b (#23) |
| 2026-03-30 | a49b786 | 飞书 webhook 通知 (feishu.ts) | 0ca1b0b (#23) |
| 2026-04-29 | 3566e84 | 移除 EasyClaw，保留 TinyClaw 仓库修正后的 peer 列表 | 待本次 PR |

## RL 特有代码（不可覆盖）

| 文件 | 功能 | 说明 |
|------|------|------|
| `src/prompts.ts` | `buildRlPrompt()` | RL 项目日报 prompt |
| `src/prompts.ts` | `buildRlComparisonPrompt()` | RL 横向对比 prompt |
| `src/rl-daily.ts` | `generateRlDigests()` | RL 日报生成 |
| `src/report-builders.ts` | `buildRlReportContent()` | RL 报告构建 |
| `src/i18n.ts` | `rl-daily` 标签 | 中英文标签 |
| `src/notify.ts` | `@rl_radar` | Telegram 频道 |

## 待评估的上游更新

运行以下命令查看上游未合并的更新：

```bash
git fetch upstream
git log HEAD..upstream/master --oneline --no-merges
```

截至 2026-04-29，本 fork 与上游主线的功能差距已经很小。已确认无需再同步的大项包括：

- `fix(provider): handle models that return thinking blocks before text`
- `feat(web): add github, telegram, feishu links to header`
- Product Hunt / ArXiv / Hugging Face / Dev.to / Lobste.rs 数据源
- daily workflow 40 分钟 timeout

当前优先级最高的剩余同步项是配置和文档层的小幅收口，而不是新的功能迁移。

## 同步检查清单

- [ ] 运行 `git fetch upstream`
- [ ] 检查 `git log HEAD..upstream/master --oneline`
- [ ] 评估每个 commit 的价值
- [ ] 选择性合并（避免覆盖 RL 代码）
- [ ] 运行 `pnpm test` 验证
- [ ] 更新此文件记录合并内容
