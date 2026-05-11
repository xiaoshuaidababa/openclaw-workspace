# 备份策略 v2.0

_最后更新：2026-05-11 17:45 UTC_
_状态：✅ 已激活_

---

## 📋 备份范围（按优先级）

### ✅ 必须备份
- [x] 会话记录 (`sessions/*.jsonl`)
- [x] 学习笔记 (`memory/learning/*.md`)
- [x] 教训文件 (`memory/lessons/*.md`)
- [x] 方法论 (`memory/methods/*.md`)
- [x] 配置文档 (`memory/config/*.md`)
- [x] 记忆快照 (`memory/snapshots/*.md`)

### ❌ 不再备份（已删除）
- [ ] 自动备份任务（每 3 天）
- [ ] 备份验证任务（每 3 天）
- [ ] 恢复验证任务（每周日）
- [ ] 技能质量监控（每小时）

---

## 🕒 当前活跃任务清单

| 时间 | 任务名称 | 状态 | 备注 |
|------|---------|------|------|
| 02:00 | 深夜学习 - 凌晨 2 点 | ✅ 活跃 | |
| 04:00 | 学习报告 - 凌晨 4 点 | ✅ 活跃 | |
| 06:00 | ~~技能质量监控~~ | ❌ 已删除 | 每小时 |
| 08:00 | newstoady 早报推送 | ✅ 活跃 | |
| 09:00 | 教训复习提醒 | ✅ 活跃 | |
| 11:00 | 中东局势每日简报 | ✅ 活跃 | |
| 11:00 | 冥想系统 - 早上 11 点 | ✅ 活跃 | |
| 12:30 | 每日前瞻 - 阿瞻 | ✅ 活跃 | |
| 14:00 | 系统全面巡检 | ✅ 活跃 | |
| 17:00 | 日报生成 | ✅ 活跃 | |
| 17:00 | 冥想系统 - 晚上 17 点 | ✅ 活跃 | |
| 20:00 | newstoady 晚报推送 | ✅ 活跃 | |
| 22:00 | 每日自动清理 | ✅ 活跃 | |
| 23:00 | 每日记忆备份 - Git 推送 | ✅ 活跃 | **核心备份任务** |
| 每 7 小时 | 系统健康检查 | ✅ 活跃 | |
| 每周一 | 每周清理 GitHub 备份 | ✅ 活跃 | |
| 每周一 | daily-openclaw-backup | ✅ 活跃 | |
| 每月 1 号 | backup-restore-test | ✅ 活跃 | |

---

## 📦 备份内容规范

### 会话记录备份
```
位置：/data/.openclaw/agents/main/sessions/
格式：sessions/*.jsonl
频率：每日 23:00
```

### 学习笔记备份
```
位置：/home/node/.openclaw/workspace/memory/learning/
格式：*.md
频率：每日 23:00
```

### 教训文件备份
```
位置：/home/node/.openclaw/workspace/memory/lessons/
格式：*.md
频率：每日 23:00
```

### 方法论备份
```
位置：/home/node/.openclaw/workspace/memory/methods/
格式：*.md
频率：每日 23:00
```

### 配置文档备份
```
位置：/home/node/.openclaw/workspace/memory/config/
格式：*.md
频率：每日 23:00
```

### 记忆快照备份
```
位置：/home/node/.openclaw/workspace/memory/snapshots/
格式：*.md
频率：每日 23:00
```

---

## 🔒 安全规则

1. **敏感信息排除**
   - `memory/api-keys-backup.md` 不备份（已在 .gitignore）
   - `.env` 文件不备份
   - 所有包含 `token`、`key`、`secret` 的文件不备份

2. **备份验证**
   - 每月 1 号执行恢复测试
   - 验证备份完整性
   - 记录测试结果

3. **Git 推送规则**
   - 仅推送非敏感文件
   - 使用 `.gitignore` 保护敏感信息
   - 推送前自动检查

---

_此策略文档优先于所有之前的备份规则。_
