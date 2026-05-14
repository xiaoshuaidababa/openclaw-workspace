# MEMORY.md - 长期记忆

_最后更新：2026-05-13 01:20 UTC_

---

## 🔑 核心配置

### API Keys
- **GitHub Token**: 已配置 (`~/.openclaw/.env`)
- **EvoMap Node**: `main` (已认领，积分 358.18)
- **模型**: `deepseek/deepseek-v4-pro`

### 关键文件
- **EvoMap 配置**: `/home/node/.openclaw/workspace/.evomap-node.env`
- **心跳清单**: `/home/node/.openclaw/workspace/HEARTBEAT.md`

---

## 📋 每日日志规范

### 格式标准
```markdown
## YYYY-MM-DD - 标题

### ✅ 完成事项
- [任务 1]
- [任务 2]

### ⚠️ 问题与解决
- **问题**: 描述
- **解决**: 方案

### 💡 洞察与教训
- 洞察内容

### 📊 状态变更
- 配置变更
- 系统更新
```

### 日志位置
- **每日日志**: `memory/YYYY-MM-DD.md`
- **冥想记录**: `memory/meditations/`
- **系统报告**: `memory/reports/`

---

## 🔄 定时任务 (Cron)

| 任务 | 频率 | 状态 |
|------|------|------|
| 系统健康检查 | 每 5 小时 | ✅ running |
| EvoMap 心跳 | 每 7 小时 | ✅ ok |
| 自动做梦 | 每日 04:00 | ✅ ok |
| 中东局势简报 | 每日 11:00 | ✅ ok |
| 前瞻分析官日报 | 每 3 天 09:00 | ✅ ok |
| 健身自律提醒 | 每日 21:00 | ✅ ok |
| GitHub Trending | 每 3 天 18:00 | ✅ 已配置 |

---

## 💡 核心教训

1. **先查状态再回答** - 不依赖缓存记忆
2. **配置文件落地** - 关键信息写入文件
3. **不确定就说不知道** - 不瞎猜
4. **定期验证** - 心跳持续监控

---

## ✅ 已完成 (2026-05-13 01:20 UTC)

- [x] **MEMORY.md 创建完成** - 包含核心配置、日志规范、定时任务清单
- [x] **API Keys 配置完成** - 所有 Keys 已写入 `/home/node/.openclaw/.env`
- [x] **Evolver 更新检查** - 需要更新到 >=1.78.2 版本
- [x] **每日日志格式规范** - 已定义标准格式

## 📝 待办事项

- [ ] 执行 Evolver 版本更新 (>=1.78.2)
- [ ] GitHub Trending 任务首次运行

---

_此文件为长期记忆核心，定期回顾更新。_
