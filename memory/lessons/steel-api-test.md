# Steel API 正确测试

**来源：** 2026-03-29 Steel Browser 故障排查实践 
**日期：** 2026-03-29 16:38 UTC 
**严重度：** 🔴 高（连续犯错 3 次）

---

## ❌ 错误做法

```bash
# 错误 1：看到 Unauthorized 就认为 Key 过期
curl -H "Authorization: Bearer $STEEL_KEY" https://api.steel.dev/v1/sessions
# 返回 401 Unauthorized
# 结论：Key 过期了 # ❌ 错！可能是方法不对

# 错误 2：没有验证就直接使用
# 假设 STEEL_KEY 已配置
curl ... # ❌ 可能根本没配置

# 错误 3：使用错误的测试方法
# 用错误的端点测试
curl https://api.steel.dev/v1/wrong-endpoint
```

**后果：**
- 浪费少爷时间
- 重复犯错（连续 3 次）
- 违背"验证优先于假设"的承诺

---

## ✅ 正确做法

### 检查清单（操作前必读）

```bash
#!/bin/bash
# test-steel.sh - Steel API 正确测试脚本

# 1. 检查 API Key 配置
STEEL_KEY=$(grep "^STEEL_API_KEY=" ~/.openclaw/.env | cut -d= -f2)
if [ -z "$STEEL_KEY" ]; then
 echo "❌ STEEL_API_KEY 未配置"
 echo "📖 教训：先配置 API Key"
 exit 1
fi
echo "✅ API Key 已配置"

# 2. 使用正确的端点测试
RESPONSE=$(curl -s -o /dev/null -w "%{http_code}" \
 -H "Authorization: Bearer $STEEL_KEY" \
 https://api.steel.dev/v1/sessions)

# 3. 根据响应判断
if [ "$RESPONSE" = "200" ]; then
 echo "✅ Steel API Key 有效"
elif [ "$RESPONSE" = "401" ]; then
 echo "❌ Steel API Key 无效 (HTTP 401)"
 echo "📖 教训：可能是用错了方法，不是 Key 过期"
 echo "📄 memory/lessons/verify-before-assume.md"
 exit 1
else
 echo "❌ 未知错误 (HTTP $RESPONSE)"
 exit 1
fi
```

---

## 🧠 认知偏差检查

**操作前问自己：**
1. 我是否在用正确的方法测试？
2. 我是否验证了 API Key 配置？
3. 我是否查看了相关教训？
4. 我是否在假设而不是验证？

---

## 📖 相关教训

- `memory/lessons/verify-before-assume.md` - 验证优先于假设
- `memory/lessons/pre-flight-checklist.md` - 飞行前检查清单

---

_创建时间：2026-03-29 16:38 UTC_
_核心教训：用正确的方法验证，不要假设 Key 过期_
