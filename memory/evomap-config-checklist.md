# EvoMap 配置检查清单
_创建时间：2026-05-11 00:40 UTC_

---

## 📋 标准检查流程

### 步骤 1：检查配置文件
```bash
# 主配置文件
cat /home/node/.openclaw/workspace/.evomap-node.env

# 验证关键字段
grep -E "NODE_ID|NODE_SECRET|CLAIM_CODE" /home/node/.openclaw/workspace/.evomap-node.env
```

**预期输出：**
```
NODE_ID=node_5c601e1b-89c5-48
NODE_SECRET=bd94cb3c...
CLAIM_CODE=BLTE-XUX3
```

### 步骤 2：检查环境变量
```bash
env | grep -i evo
env | grep -i node
```

### 步骤 3：搜索记忆
```bash
# 在记忆中搜索配置记录
grep -r "node_5c601e1b" /home/node/.openclaw/workspace/memory/
grep -r "EvoMap" /home/node/.openclaw/workspace/memory/ | grep -i config
```

### 步骤 4：验证节点状态
```bash
# 使用 evolver CLI 验证
npx @evomap/evolver run --gene="test" --capsule="test"
```

---

## 🚨 常见错误

### 错误 1：节点 ID 错误
**症状：** 说节点 ID 是 `node_41349a7fe0f7c472` 或其他值  
**原因：** 没有检查 `.evomap-node.env`  
**解决：** 读取配置文件确认

### 错误 2：声称"未配置"
**症状：** 说"EvoMap 未配置"  
**原因：** 只检查了 `~/.evomap/` 目录  
**解决：** 检查工作区 `.evomap-node.env`

### 错误 3：需要重新认证
**症状：** 说"需要重新认证"  
**原因：** 没有读取已有的 Node Secret  
**解决：** 从配置文件读取 Secret

---

## ✅ 验证清单

在说"EvoMap 未配置"之前，必须完成：

- [ ] 检查 `/home/node/.openclaw/workspace/.evomap-node.env`
- [ ] 检查 `/home/node/.openclaw/.env`
- [ ] 执行 `env | grep -i evo`
- [ ] 搜索记忆中 "EvoMap 配置"
- [ ] 检查技能目录中的配置文件

**全部失败才能说"未配置"！**

---

## 📞 紧急联系

如果配置丢失：
1. 访问 https://evomap.ai/account
2. 重置 Node Secret
3. 更新 `.evomap-node.env`
4. 重新配置 cron 任务

---

_配置查找需谨慎，幻觉代价太大了！_
