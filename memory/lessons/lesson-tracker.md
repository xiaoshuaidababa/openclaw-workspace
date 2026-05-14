# 教训库
_创建时间：2026-03-29 16:38 UTC (原始创建)_
_更新时间：2026-05-11 01:15 UTC (今天添加 2 个新教训)_

---

## 📖 教训库说明

**目的：** 确保教训转化为行动，避免重复犯错

**核心原则：**
1. **验证优先于假设** - 永远不要假设，必须验证
2. **检查所有位置** - 在说"没有找到"之前必须全面检查
3. **相信客观证据** - Cron 任务存在 = 配置存在
4. **教训转化为行动** - 每个教训必须有对应的行动项

---

## 🔴 教训→行动追踪表

| 教训 | 日期 | 行动项 | 状态 | 验证 |
|------|------|--------|------|------|
| Steel API 用 SDK | 03-29 | 创建 test-steel.sh | ✅ 已完成 | scripts/test-steel.sh |
| 配置后验证 | 03-29 | 创建 verify-env.sh | ✅ 已完成 | scripts/verify-env.sh |
| 不假设要验证 | 03-29 | 添加到检查清单 | ✅ 已完成 | HEARTBEAT.md |
| 记忆要"活"化 | 03-29 | 创建教训库 | ✅ 已完成 | memory/lessons/ |
| 教训 Executable 化 | 03-29 | 创建 pre-action-check.sh | ✅ 已完成 | scripts/ |
| 教训要复习 | 03-29 | 添加到 HEARTBEAT | ✅ 已完成 | HEARTBEAT.md |
| **EvoMap 配置查找错误** | **05-11** | **创建检查清单** | **✅ 已完成** | **本文件** |
| **GitHub 推送失败检查** | **05-11** | **添加逻辑验证** | **✅ 已完成** | **本文件** |

---

## 🔴 事件 1：EvoMap 节点配置查找错误（2026-05-11）

### 事件描述
**时间：** 2026-05-11 00:00-01:00 UTC

**事件：**
少爷要求检查 EvoMap 进化引擎状态，我说节点配置丢失需要重新认证。

**我的操作：**
1. ❌ 只检查了 `~/.evomap/` 目录（不存在）
2. ❌ 只检查了记忆中的旧节点 ID
3. ❌ 没有检查 `.evomap-node.env` 文件
4. ❌ 立即下结论"需要重新认证"
5. ❌ 产生幻觉编造了错误的节点 ID

**实际情况：**
- ✅ 配置文件存在于 `/home/node/.openclaw/workspace/.evomap-node.env`
- ✅ Node ID: `node_5c601e1b-89c5-48`
- ✅ Node Secret: 已配置
- ✅ 节点状态：alive
- ✅ 积分余额：50

**错误原因：**
1. **检查位置不全面** - 只检查了默认目录，没有全局搜索
2. **急于下结论** - 没有完成全面检查就断言
3. **依赖记忆中的旧信息** - 没有以实际配置文件为准
4. **产生幻觉** - 编造了节点 ID 和认证状态

**正确做法：**
```bash
# 1. 全局搜索配置文件
find /home/node/.openclaw -name "*.env" | xargs grep -l "NODE_ID"

# 2. 检查工作区配置文件
cat /home/node/.openclaw/workspace/.evomap-node.env

# 3. 检查环境变量
env | grep -i evo

# 4. 搜索记忆
memory_search("EvoMap 配置")

# 5. 交叉验证
openclaw cron list | grep evomap
```

**教训：**
> 在说"配置丢失"之前，必须全局搜索所有可能位置，特别是工作区配置文件！

---

## 🔴 事件 2：GitHub 推送失败（2026-05-11）

### 事件描述
**时间：** 2026-05-11 00:00-01:00 UTC

**事件：**
少爷要求推送 GitHub Trending 报告，我说推送失败（400 错误）。

**我的操作：**
1. ❌ 只检查了推送日志
2. ❌ 没有检查 GitHub Token 文件
3. ❌ 没有检查 Cron 任务状态
4. ❌ 立即下结论"推送失败"

**实际情况：**
- ✅ Cron 任务存在：`github-trending-001`
- ✅ 任务状态：idle（正常）

**错误原因：**
1. **检查不全面** - 没有检查 Token 文件和 Cron 状态
2. **急于下结论** - 看到 400 错误就说失败
3. **没有逻辑推理** - 如果任务存在，说明配置应该存在

**正确做法：**
```bash
# 1. 检查 GitHub Token 文件
find /home/node/.openclaw -name "*github*token*" -o -name "*token*github*"

# 2. 检查 Cron 任务状态
openclaw cron list | grep github

# 3. 检查执行历史
cat /home/node/.openclaw/cron/logs/*.log | grep -i github

# 4. 检查 Git 配置
git remote -v
git config --list | grep github
```

**教训：**
> 在说"推送失败"之前，必须检查 Token 文件、Cron 状态和执行历史！

---

## 📋 通用检查清单（所有配置查找）

### 必须检查的位置

**配置文件：**
- [ ] `/home/node/.openclaw/.env`
- [ ] `/home/node/.openclaw/workspace/.env`
- [ ] `/home/node/.openclaw/workspace/*.env`
- [ ] `/data/.openclaw/openclaw.json`
- [ ] `/home/node/.openclaw/*.json`
- [ ] `/home/node/.openclaw/*-token.json` ⚠️ **经常遗漏！**
- [ ] `/data/.openclaw/*-token.json` ⚠️ **经常遗漏！**

**日志文件：**
- [ ] `/home/node/.openclaw/cron/logs/`
- [ ] `/data/.openclaw/cron/logs/`
- [ ] `/home/node/.openclaw/logs/`

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
❌ 错误："没有找到配置"

✅ 正确："我检查了 [位置列表]，没有找到 [配置]。
 但是我看到 Cron 任务列表里有 [任务名] 任务，
 说明配置应该存在。让我再检查 Token 文件..."
```

---

## 🎯 核心原则

### 原则 1：相信客观证据

```
客观证据 > 自己假设
```

如果 Cron 任务存在，说明配置应该存在。
如果任务已运行，说明配置肯定存在。

### 原则 2：永远保留不确定性

```
错误：检查 20% → 下 100% 结论
正确：检查 100% → 谨慎下结论
```

### 原则 3：相信用户的记忆

```
用户说有的时候，很可能是有的
问题很可能在我检查的方法不对
```

### 原则 4：检查要全面

```
宁可多花 5 分钟检查完整
不要为了快而漏掉关键位置
一次做对比快速做错更重要
```

---

## 📝 历史教训关联

**相关教训文件：**
- `memory/lessons/verify-all-locations-before-concluding.md` - 验证所有位置
- `memory/lessons/verify-before-assume.md` - 验证优先于假设
- `memory/meditations/2026-03-30-deep-reflection-gmail-error.md` - Gmail 错误反思

**历史案例：**
- 2026-03-30: Gmail 配置检查错误（相同模式）
- 2026-05-11: EvoMap 配置查找错误（相同模式）
- 2026-05-11: GitHub 推送失败检查（相同模式）

---

## 📊 改进指标

| 指标 | 目标 | 当前 | 状态 |
|------|------|------|------|
| 教训库文件数 | ≥ 5 个 | 1 个 | ⚠️ 待增加 |
| 行动完成率 | 100% | 100% | ✅ 完成 |
| 复习频率 | 每天 1 次 | 0 次 | ❌ 未开始 |
| 重复犯错次数 | 0 次 | 2 次 | ❌ 需改进 |

---

_最后更新：2026-05-11 01:15 UTC_
_小新 🖍️ 这次真的记住了！_
