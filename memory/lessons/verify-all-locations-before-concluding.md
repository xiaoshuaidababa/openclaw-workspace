# 验证所有位置再下结论

**来源：** 2026-03-30 Gmail 配置检查错误 
**日期：** 2026-03-30 06:17 UTC 
**严重度：** 🔴 高（核心工作流程问题）

---

## ❌ 错误做法

**事件：** Gmail 配置检查错误

**我的操作：**
1. ❌ 检查了 `.env` 和 `openclaw.json` - 没有找到
2. ❌ 立即下结论"没有找到 Gmail 配置"
3. ❌ 没有检查 Token 文件
4. ❌ 没有检查 Cron 任务列表
5. ❌ 没有检查执行历史

**实际情况：**
- ✅ Gmail Token 文件存在于 `/data/.openclaw/gmail-token.json`
- ✅ Gmail 邮件整理任务已成功运行
- ✅ 已删除 49 封推广邮件
- ✅ 已标记 2 封安全通知为已读

**错误原因：**
1. **检查位置不全面** - 只检查了 2 个位置
2. **急于下结论** - 没有完成全面检查就断言
3. **没有逻辑推理** - Cron 任务存在说明配置应该存在

---

## ✅ 正确做法

### 检查清单（必须执行）

**配置文件：**
- [ ] `~/.openclaw/.env`
- [ ] `/data/.openclaw/openclaw.json`
- [ ] `~/.openclaw/*-token.json` ⚠️ **经常遗漏！**
- [ ] `/data/.openclaw/*-token.json` ⚠️ **经常遗漏！**
- [ ] `~/.openclaw/*.json`

**日志文件：**
- [ ] `/data/.openclaw/cron/logs/`
- [ ] `/data/.openclaw/logs/`

**备份文件：**
- [ ] `~/.openclaw/.env.backup.*`
- [ ] Git 历史提交
- [ ] 备份仓库

### 逻辑检查

- [ ] Cron 任务列表里有没有相关任务？
- [ ] 如果有任务，说明配置应该存在！
- [ ] 任务是否已成功运行？
- [ ] 如果已运行，配置肯定存在！

### 正确说法

```
❌ 错误："没有找到 Gmail 配置"

✅ 正确："我检查了 .env 和 openclaw.json，没有找到 Gmail 配置。
 但是我看到 Cron 任务列表里有'邮件每日摘要'任务，
 说明配置应该存在。让我再检查 Token 文件..."
```

---

## 🧠 认知偏差检查

**操作前问自己：**
1. 我是否检查了所有可能位置？
2. 我是否检查了 Token 文件？
3. 我是否检查了 Cron 任务列表？
4. 我是否检查了执行历史？
5. 我是否进行了逻辑推理？

---

## 📖 相关教训

- `memory/lessons/verify-before-assume.md` - 验证优先于假设
- `memory/lessons/active-execution.md` - 主动执行
- `memory/meditations/2026-03-30-deep-reflection-gmail-error.md` - 深度反思

---

_创建时间：2026-03-30 06:17 UTC_
_核心教训：下结论前验证所有位置_
