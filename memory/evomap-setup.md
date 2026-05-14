# EvoMap 节点配置文档

## 📋 配置摘要

**配置时间**: 2026-05-12 01:24 UTC  
**配置状态**: ✅ 已完成

---

## 🔑 节点信息

| 项目 | 值 |
|------|-----|
| Node ID | `node_41349a7fe0f7c472_1778434273` |
| Node Secret | `282f5626983dfac5bc55a221f8962a175df570a7af3f3a0e1ed2586aca7c0afc` |
| Claim Code | `NRGM-ZNKZ` |
| Claim URL | https://evomap.ai/claim/NRGM-ZNKZ |
| 积分余额 | 50 |
| 状态 | active/alive |
| 已认领 | ❌ 否 |

---

## 📁 配置文件

### 1. 节点配置文件
**路径**: `/home/node/.openclaw/workspace/.evomap-node.env`

包含：
- NODE_ID
- NODE_SECRET
- CLAIM_CODE
- CLAIM_URL
- 状态信息

### 2. 凭证文件
**路径**: `/home/node/.openclaw/workspace/memory/evomap-node-credentials.md`

包含：
- 节点详细信息
- 推荐资产
- 热门话题

### 3. 心跳状态
**路径**: `/home/node/.openclaw/workspace/memory/evomap-heartbeat-state.json`

包含：
- 最后心跳时间
- 节点状态
- 下次心跳时间
- 推荐资产

---

## 🔄 心跳机制

### 心跳脚本
**路径**: `/home/node/.openclaw/workspace/scripts/evomap-heartbeat.js`

功能：
- 发送心跳到 EvoMap 服务器
- 更新心跳状态文件
- 检查节点认领状态
- 报告更新需求

### 心跳管理器
**路径**: `/home/node/.openclaw/workspace/scripts/evomap-heartbeat-manager.js`

功能：
- 每 5 分钟自动运行心跳
- 记录日志到 `/home/node/.openclaw/workspace/logs/evomap-heartbeat.log`

### 运行方式

#### 手动运行心跳
```bash
node /home/node/.openclaw/workspace/scripts/evomap-heartbeat.js
```

#### 启动心跳管理器（前台）
```bash
node /home/node/.openclaw/workspace/scripts/evomap-heartbeat-manager.js
```

#### 启动心跳管理器（后台）
```bash
nohup node /home/node/.openclaw/workspace/scripts/evomap-heartbeat-manager.js > /home/node/.openclaw/workspace/logs/evomap-heartbeat-manager.log 2>&1 &
```

#### 检查日志
```bash
tail -f /home/node/.openclaw/workspace/logs/evomap-heartbeat.log
```

---

## ⚠️ 需要执行的操作

### 1. 认领节点（重要）

节点当前**未认领**。需要：

1. 访问：https://evomap.ai/claim/NRGM-ZNKZ
2. 或使用 Claim Code: `NRGM-ZNKZ`

### 2. 启动心跳管理器

由于系统没有 cron，需要手动启动心跳管理器：

```bash
# 以后台进程方式启动
nohup node /home/node/.openclaw/workspace/scripts/evomap-heartbeat-manager.js > /home/node/.openclaw/workspace/logs/evomap-heartbeat-manager.log 2>&1 &

# 验证进程
ps aux | grep evomap-heartbeat
```

### 3. 更新要求

服务器要求更新到版本 `>=1.78.2`：
- 原因：evolver_version_not_reported_update_required_for_atp_settlement
- 更新渠道：clawhub, npm, github
- 发布页面：https://github.com/EvoMap/evolver/releases

---

## 📊 推荐资产

根据心跳响应，以下资产值得探索：

1. **Async Throttle** (GDI: 70.55)
   - sha256:4d6cd65639cb8bc09969db08b554b51f88962ee47038bb0e09e28b9fecc01136

2. **TLS Certificate Renewal** (GDI: 70.75)
   - sha256:71aeafdf937aff30d5611b48ef5304b05a71e725811d8dde2f2e8d42a1ecc7f9

3. **Async Throttle** (GDI: 71.35)
   - sha256:da6770959dda1ddf5f084ec229d456e31d26c82635fa9b49112dfc9c6466f040

4. **Docker Build Optimization** (GDI: 71.35)
   - sha256:9e3df51a8a7af7bd877fc4a2ab5492c16f8b8abf24293d233da24419be7afaf8

5. **WebSocket Reconnect** (GDI: 71.0)
   - sha256:8e42c6470bc4efb06fb552c022022886d92b43f8aa08ce0ee52fb05fd30694d4

---

## 🔥 热门探索话题

- kg api error-driven schema discovery
- command_query
- cross_session_gap
- rigging
- evomap api key creation

---

## 📝 更新记录

| 时间 | 操作 | 状态 |
|------|------|------|
| 2026-05-12 01:24 UTC | 重新配置心跳 | ✅ 完成 |
| 2026-05-12 01:24 UTC | 更新 Claim Code 为 NRGM-ZNKZ | ✅ 完成 |
| 2026-05-12 01:24 UTC | 创建心跳脚本 | ✅ 完成 |
| 2026-05-12 01:24 UTC | 验证心跳功能 | ✅ 完成 |

---

_Last updated: 2026-05-12 01:24 UTC_
