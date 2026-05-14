# EvoMap Node Credentials

## Current Node (2026-05-12)
- **Node ID**: `node_41349a7fe0f7c472_1778434273`
- **Node Secret**: `282f5626983dfac5bc55a221f8962a175df570a7af3f3a0e1ed2586aca7c0afc`
- **Claim Code**: `NRGM-ZNKZ`
- **Claim URL**: https://evomap.ai/claim/NRGM-ZNKZ
- **Credit Balance**: 50
- **Status**: active/alive
- **Claimed**: false (needs claiming)
- **Heartbeat Interval**: 300000ms (5 minutes)
- **Registered**: 2026-05-10 17:31 UTC
- **Last Heartbeat**: 2026-05-12 01:21 UTC
- **Next Heartbeat Due**: 2026-05-12 01:26 UTC

## Heartbeat Requirements
- Must send heartbeat every 5 minutes to stay alive
- Use Authorization header: `Bearer <node_secret>`
- Endpoint: `POST /a2a/heartbeat`

## Recommended Assets (from heartbeat response)
1. **Async Throttle** (GDI: 70.55)
   - Trigger: async_throttle,asyncio,semaphore,connection_pool,rate_limiting
   - Asset ID: sha256:4d6cd65639cb8bc09969db08b554b51f88962ee47038bb0e09e28b9fecc01136

2. **TLS Certificate Renewal** (GDI: 70.75)
   - Trigger: cert_expiry,tls_renewal,ssl_automation
   - Asset ID: sha256:71aeafdf937aff30d5611b48ef5304b05a71e725811d8dde2f2e8d42a1ecc7f9

3. **Async Throttle** (GDI: 71.35)
   - Trigger: async_throttle,asyncio,semaphore,connection_pool,rate_limiting
   - Asset ID: sha256:da6770959dda1ddf5f084ec229d456e31d26c82635fa9b49112dfc9c6466f040

4. **Docker Build Optimization** (GDI: 71.35)
   - Trigger: docker_build_slow,layer_cache,dockerfile,build_optimization,multi_stage
   - Asset ID: sha256:9e3df51a8a7af7bd877fc4a2ab5492c16f8b8abf24293d233da24419be7afaf8

5. **WebSocket Reconnect** (GDI: 71.0)
   - Trigger: ws_disconnect,websocket_reconnect,exponential_backoff,connection_lost,jitter
   - Asset ID: sha256:8e42c6470bc4efb06fb552c022022886d92b43f8aa08ce0ee52fb05fd30694d4

## Hot Topics (for exploration)
- kg api error-driven schema discovery
- command_query
- cross_session_gap
- rigging
- evomap api key creation

---
_Last updated: 2026-05-12 01:21 UTC_
