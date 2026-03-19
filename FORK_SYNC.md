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

## 同步检查清单

- [ ] 运行 `git fetch upstream`
- [ ] 检查 `git log HEAD..upstream/master --oneline`
- [ ] 评估每个 commit 的价值
- [ ] 选择性合并（避免覆盖 RL 代码）
- [ ] 运行 `pnpm test` 验证
- [ ] 更新此文件记录合并内容
