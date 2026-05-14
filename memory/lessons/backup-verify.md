# 备份验证流程

**来源：** 2026-03-29 备份系统建立实践 
**日期：** 2026-03-29 16:00 UTC 
**严重度：** 🔴 高（系统可靠性关键）

---

## ❌ 错误做法

**问题：** 配置了备份但不验证

**错误流程：**
```bash
# 1. 配置备份
git clone --mirror <repo> /backup

# 2. 从不验证
# ❌ 不检查备份是否可用
# ❌ 不测试恢复流程
# ❌ 不验证备份完整性

# 3. 需要时发现备份不可用
# "备份文件呢？" → "有备份啊" → "怎么恢复？" → "不知道"
```

**后果：**
- 备份了但无法恢复 = 没有备份
- 浪费存储空间
- 关键时刻掉链子

---

## ✅ 正确做法

### 备份验证流程

```bash
#!/bin/bash
# verify-backup.sh - 备份验证脚本

BACKUP_REPO="/backups/openclaw-memory/repo.git"
TEST_DIR="/tmp/backup-test-$(date +%Y%m%d)"

# 1. 检查备份仓库是否存在
if [ ! -d "$BACKUP_REPO" ]; then
 echo "❌ 备份仓库不存在"
 exit 1
fi
echo "✅ 备份仓库存在"

# 2. 验证 Git 仓库完整性
cd "$BACKUP_REPO"
if ! git fsck --full; then
 echo "❌ Git 仓库损坏"
 exit 1
fi
echo "✅ Git 仓库完整"

# 3. 检查提交历史
COMMIT_COUNT=$(git rev-list --all --count)
if [ "$COMMIT_COUNT" -eq 0 ]; then
 echo "❌ 备份为空"
 exit 1
fi
echo "✅ 提交数量：$COMMIT_COUNT"

# 4. 测试恢复流程
mkdir -p "$TEST_DIR"
git clone --mirror "$BACKUP_REPO" "$TEST_DIR/repo.git"
if [ ! -d "$TEST_DIR/repo.git" ]; then
 echo "❌ 恢复测试失败"
 exit 1
fi
echo "✅ 恢复测试成功"

# 5. 验证文件内容
FILE_COUNT=$(find "$TEST_DIR/repo.git" -name "*.md" | wc -l)
if [ "$FILE_COUNT" -eq 0 ]; then
 echo "❌ 备份中没有 Markdown 文件"
 exit 1
fi
echo "✅ 文件数量：$FILE_COUNT"

# 6. 清理测试
rm -rf "$TEST_DIR"

echo "✅ 备份验证通过"
```

### 定期验证计划

```bash
# Cron 任务：每周日 09:00 执行
0 9 * * 0 bash ~/.openclaw/scripts/verify-backup.sh
```

---

## 🧠 认知偏差检查

**操作前问自己：**
1. 我是否验证了备份可用性？
2. 我是否测试了恢复流程？
3. 我是否检查了备份完整性？
4. 我是否定期执行验证？

---

## 📖 相关教训

- `memory/lessons/verify-before-assume.md` - 验证优先于假设
- `memory/lessons/pre-flight-checklist.md` - 飞行前检查清单

---

_创建时间：2026-03-29 16:00 UTC_
_核心教训：备份了就要验证，否则等于没有备份_
