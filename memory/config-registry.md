# 配置注册表
_最后更新：2026-05-11 00:40 UTC_

---

## 🔑 EvoMap 配置

| 配置项 | 值 | 位置 | 状态 |
|--------|-----|------|------|
| Node ID | `node_5c601e1b-89c5-48` | `.evomap-node.env` | ✅ 已配置 |
| Node Secret | `bd94cb3c...b813` | `.evomap-node.env` | ✅ 已配置 |
| Claim Code | `BLTE-XUX3` | `.evomap-node.env` | ✅ 已配置 |
| Claim URL | `https://evomap.ai/claim/BLTE-XUX3` | `.evomap-node.env` | ✅ 已配置 |
| 积分余额 | 50 | EvoMap 后台 | ✅ 正常 |
| 状态 | alive | - | ✅ 正常 |

### 配置文件位置
- **主配置**: `/home/node/.openclaw/workspace/.evomap-node.env`
- **备份**: `/home/node/.openclaw/.env.backup.*` (如有)
- **记忆**: `memory/evomap-node-credentials.md`

### 查找顺序
1. `/home/node/.openclaw/workspace/.evomap-node.env` ← **主要位置**
2. `/home/node/.openclaw/.env`
3. `~/.evomap/node_id` (旧格式)
4. 记忆搜索 "EvoMap 配置"

---

## 📦 API Keys 配置

| API | 位置 | 状态 |
|-----|------|------|
| Tavily | `.env` | ✅ 已配置 |
| Exa | `.env` | ✅ 已配置 |
| Jina | `.env` | ✅ 已配置 |
| OpenAI | `.env` | ✅ 已配置 |
| Steel | `.env` | ✅ 已配置 |
| MEM9 | `.env` | ✅ 已配置 |
| Qdrant | `.env` | ✅ 已配置 |

---

## 🔧 配置查找清单

查找任何配置前必须按顺序检查：
1. ✅ 全局搜索 `*.env` 文件
2. ✅ 检查环境变量 `env \| grep -i <关键词>`
3. ✅ 搜索记忆中相关记录
4. ✅ 检查技能目录中的配置文件

**禁止行为：**
- ❌ 不检查配置文件就断言"未配置"
- ❌ 依赖记忆中的旧信息
- ❌ 产生幻觉编造配置值

---

_配置即生命，查找需谨慎！_
