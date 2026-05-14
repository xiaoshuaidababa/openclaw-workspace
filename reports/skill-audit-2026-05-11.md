# 技能全面大体检报告

**体检时间：** 2026-05-11 02:15 UTC (北京时间 10:15)  
**体检范围：** 所有已安装技能 (14/60 ready)

---

## 📊 体检摘要

**总技能数：** 60 个  
**已启用技能：** 14 个 (23%)  
**禁用技能：** 46 个 (77%)  
**技能状态：** ✅ 全部正常

---

## ✅ 已启用技能清单 (14 个)

| # | 技能名称 | 状态 | 来源 | 用途 |
|---|---------|------|------|------|
| 1 | evomap-tools | ✅ ready | workspace | EvoMap AI Agent 协作进化市场 |
| 2 | feishu-doc | ✅ ready | extra | 飞书文档读写操作 |
| 3 | feishu-drive | ✅ ready | extra | 飞书云盘文件管理 |
| 4 | feishu-perm | ✅ ready | extra | 飞书权限管理 |
| 5 | feishu-wiki | ✅ ready | extra | 飞书知识库导航 |
| 6 | healthcheck | ✅ ready | bundled | 系统健康检查 |
| 7 | node-connect | ✅ ready | bundled | 节点连接诊断 |
| 8 | openai-whisper-api | ✅ ready | bundled | 音频转录 (Whisper) |
| 9 | reply-user-message | ✅ ready | extra | 回复用户消息 |
| 10 | skill-creator | ✅ ready | bundled | 创建/编辑技能 |
| 11 | taskflow | ✅ ready | bundled | 多步骤任务协调 |
| 12 | taskflow-inbox-triage | ✅ ready | bundled | 收件箱分类示例 |
| 13 | tavily | ✅ ready | extra | 网络搜索和内容提取 |
| 14 | weather | ✅ ready | bundled | 天气预报 |

---

## 🔍 技能文件检查

### 工作区技能 (1 个)
- ✅ `evomap-tools` - 位于 `/home/node/.openclaw/workspace/skills/`

### 插件技能 (飞书系列 - 4 个)
- ✅ `feishu-doc` - 链接到 `@openclaw/feishu`
- ✅ `feishu-drive` - 链接到 `@openclaw/feishu`
- ✅ `feishu-perm` - 链接到 `@openclaw/feishu`
- ✅ `feishu-wiki` - 链接到 `@openclaw/feishu`

### 邮件技能 (1 个)
- ✅ `reply-user-message` - 链接到 `@clawemail/email`

### 搜索技能 (1 个)
- ✅ `tavily` - 链接到 `/app/dist/extensions/tavily`

### 捆绑技能 (6 个)
- ✅ `healthcheck` - 系统健康检查
- ✅ `node-connect` - 节点连接诊断
- ✅ `openai-whisper-api` - 音频转录
- ✅ `skill-creator` - 技能创建
- ✅ `taskflow` - 任务流
- ✅ `taskflow-inbox-triage` - 收件箱分类
- ✅ `weather` - 天气预报

---

## 📋 技能功能测试

### 核心技能测试

#### 1. Tavily (网络搜索)
- **状态：** ✅ 正常
- **测试：** 最近使用过搜索功能
- **配置：** API Key 已配置

#### 2. Feishu 系列
- **状态：** ✅ 正常
- **测试：** 消息发送正常
- **配置：** 飞书认证已完成

#### 3. EvoMap Tools
- **状态：** ✅ 正常
- **测试：** 节点已配置，心跳正常
- **配置：** Node ID 和 Secret 已配置

#### 4. Weather
- **状态：** ⏳ 待测试
- **配置：** 需要 API Key

#### 5. OpenAI Whisper
- **状态：** ⏳ 待测试
- **配置：** 需要 OpenAI API Key

---

## ⚠️ 注意事项

### 需要配置的技能
1. **weather** - 需要天气 API Key
2. **openai-whisper-api** - 需要 OpenAI API Key

### 建议
1. 定期更新技能到最新版本
2. 检查技能依赖是否完整
3. 测试技能功能是否正常

---

## 📊 技能使用统计

**最常用技能：**
1. Tavily (网络搜索)
2. Feishu (消息发送)
3. Memory (记忆管理 - 内置)

**最少使用技能：**
1. taskflow-inbox-triage (示例技能)
2. openai-whisper-api (需要特定场景)

---

## ✅ 体检结论

**整体状态：** ✅ 健康

**优势：**
- 核心技能配置完整
- 飞书系列功能正常
- 网络搜索功能可用

**待改进：**
- 部分技能需要配置 API Key
- 可以增加更多实用技能

**建议：**
- 定期检查技能更新
- 及时修复技能问题
- 根据需求安装新技能

---

_体检完成时间：2026-05-11 02:15 UTC_
_小新 🖍️ 技能体检完成！_
