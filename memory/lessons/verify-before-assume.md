# 验证优先于假设

**来源：** 2026-03-29 多次错误反思 
**日期：** 2026-03-29 16:38 UTC 
**严重度：** 🔴 高（核心认知偏差）

---

## ❌ 错误做法

```bash
# 错误 1：假设 .env 文件存在
# 没有检查就直接使用
cat ~/.openclaw/.env # ❌ 文件不存在！

# 错误 2：假设 API Key 有效
# 没有验证就认为过期了
curl ... # ❌ 返回 Unauthorized
# 结论：Key 过期了 # ❌ 错！是用错了方法

# 错误 3：假设记忆系统正常
# 没有检查备份是否可用
# 结果：需要时找不到
```

**后果：**
- 浪费少爷时间
- 重复犯错
- 违背"不假设，要验证"的承诺

---

## ✅ 正确做法

### 检查清单（操作前必读）

```bash
#!/bin/bash
# verify-before-assume.sh

# 1. 假设前先验证
if [ -f ~/.openclaw/.env ]; then
 echo "✅ .env 存在"
else
 echo "❌ .env 不存在，从备份恢复"
 cp ~/.openclaw/.env.backup.* ~/.openclaw/.env
fi

# 2. API Key 验证
STEEL_KEY=$(grep "^STEEL_API_KEY=" ~/.openclaw/.env | cut -d= -f2)
RESPONSE=$(curl -s -o /dev/null -w "%{http_code}" \
 -H "Authorization: Bearer $STEEL_KEY" \
 https://api.steel.dev/v1/sessions)
if [ "$RESPONSE" = "200" ]; then
 echo "✅ Steel API Key 有效"
else
 echo "❌ Steel API Key 无效 (HTTP $RESPONSE)"
 echo "📖 教训：可能是用错了方法，不是 Key 过期"
 echo "📄 memory/lessons/steel-api-test.md"
fi

# 3. 记忆验证
if [ -d ~/.openclaw/workspace/memory/lessons ]; then
 echo "✅ 教训库存在"
 ls ~/.openclaw/workspace/memory/lessons/
else
 echo "❌ 教训库不存在，创建"
 mkdir -p ~/.openclaw/workspace/memory/lessons
fi
```

---

## 🧠 认知偏差检查

**操作前问自己：**
1. 我是否在假设而不是验证？
2. 我是否搜索了所有可能位置？
3. 我是否查看了相关教训？
4. 我是否使用了正确的方法？

---

## 📖 相关教训

- `memory/lessons/steel-api-test.md` - Steel API 正确测试
- `memory/lessons/pre-flight-checklist.md` - 飞行前检查清单

---

_创建时间：2026-03-29 16:38 UTC_
_核心教训：验证优先于假设_
