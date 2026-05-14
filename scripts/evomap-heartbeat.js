#!/usr/bin/env node
/**
 * EvoMap Node Heartbeat Script
 * Sends heartbeat to EvoMap server to keep node alive
 * Run every 5 minutes via cron
 */

const fs = require('fs');
const path = require('path');
const https = require('https');
const crypto = require('crypto');

// Configuration paths
const WORKSPACE = process.env.WORKSPACE || '/home/node/.openclaw/workspace';
const ENV_FILE = path.join(WORKSPACE, '.evomap-node.env');
const CREDENTIALS_FILE = path.join(WORKSPACE, 'memory', 'evomap-node-credentials.md');
const HEARTBEAT_STATE_FILE = path.join(WORKSPACE, 'memory', 'evomap-heartbeat-state.json');

// Load environment from .evomap-node.env
function loadEnv() {
  if (!fs.existsSync(ENV_FILE)) {
    console.error('Error: .evomap-node.env not found');
    process.exit(1);
  }
  
  const envContent = fs.readFileSync(ENV_FILE, 'utf8');
  const env = {};
  
  envContent.split('\n').forEach(line => {
    line = line.trim();
    if (line && !line.startsWith('#')) {
      const [key, ...valueParts] = line.split('=');
      if (key && valueParts.length > 0) {
        env[key.trim()] = valueParts.join('=').trim();
      }
    }
  });
  
  return env;
}

// Send heartbeat to EvoMap
async function sendHeartbeat(nodeId, nodeSecret) {
  const timestamp = new Date().toISOString();
  const messageId = `msg_${Date.now()}_heartbeat`;
  
  const payload = {
    protocol: 'gep-a2a',
    protocol_version: '1.0.0',
    message_type: 'heartbeat',
    message_id: messageId,
    sender_id: nodeId,
    timestamp: timestamp,
    payload: {
      status: 'alive',
      capabilities: ['publish', 'fetch', 'validate'],
      evolver_version: '1.78.2'
    }
  };
  
  return new Promise((resolve, reject) => {
    const url = new URL('https://evomap.ai/a2a/heartbeat');
    const options = {
      hostname: url.hostname,
      port: url.port,
      path: url.pathname,
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${nodeSecret}`
      }
    };
    
    const req = https.request(options, (res) => {
      let body = '';
      res.on('data', chunk => body += chunk);
      res.on('end', () => {
        try {
          resolve(JSON.parse(body));
        } catch {
          resolve({ raw: body });
        }
      });
    });
    
    req.on('error', reject);
    req.write(JSON.stringify(payload));
    req.end();
  });
}

// Update heartbeat state file
function updateState(result, nodeId) {
  const state = {
    heartbeat_timestamp: new Date().toISOString(),
    node_id: nodeId,
    node_status: result.node_status || 'unknown',
    survival_status: result.survival_status || 'unknown',
    credit_balance: result.credit_balance || 0,
    claimed: result.claimed || false,
    claim_code: process.env.CLAIM_CODE || 'NRGM-ZNKZ',
    claim_url: `https://evomap.ai/claim/${process.env.CLAIM_CODE || 'NRGM-ZNKZ'}`,
    next_heartbeat_ms: result.next_heartbeat_ms || 300000,
    next_heartbeat_due: new Date(Date.now() + (result.next_heartbeat_ms || 300000)).toISOString(),
    update_required: result.force_update || null,
    recommended_assets: result.recommended_assets || []
  };
  
  fs.writeFileSync(HEARTBEAT_STATE_FILE, JSON.stringify(state, null, 2));
  return state;
}

// Main function
async function main() {
  console.log('EvoMap Heartbeat Script');
  console.log('======================');
  
  // Load configuration
  const env = loadEnv();
  const nodeId = env.NODE_ID;
  const nodeSecret = env.NODE_SECRET;
  
  if (!nodeId || !nodeSecret) {
    console.error('Error: NODE_ID or NODE_SECRET not found in .evomap-node.env');
    process.exit(1);
  }
  
  console.log(`Node ID: ${nodeId}`);
  console.log(`Timestamp: ${new Date().toISOString()}`);
  
  try {
    // Send heartbeat
    console.log('Sending heartbeat...');
    const result = await sendHeartbeat(nodeId, nodeSecret);
    
    console.log('\nHeartbeat Response:');
    console.log(`  Status: ${result.status || 'unknown'}`);
    console.log(`  Node Status: ${result.node_status || 'unknown'}`);
    console.log(`  Survival Status: ${result.survival_status || 'unknown'}`);
    console.log(`  Claimed: ${result.claimed || false}`);
    console.log(`  Credit Balance: ${result.credit_balance || 0}`);
    console.log(`  Next Heartbeat: ${result.next_heartbeat_ms || 300000}ms`);
    
    if (result.force_update) {
      console.log(`  Update Required: ${result.force_update.required_version}`);
    }
    
    // Update state file
    const state = updateState(result, nodeId);
    console.log(`\nState saved to: ${HEARTBEAT_STATE_FILE}`);
    
    // Check if claiming is needed
    if (!result.claimed) {
      console.log('\n⚠️  Node is NOT claimed!');
      console.log(`   Claim Code: ${env.CLAIM_CODE || 'NRGM-ZNKZ'}`);
      console.log(`   Claim URL: https://evomap.ai/claim/${env.CLAIM_CODE || 'NRGM-ZNKZ'}`);
    }
    
    console.log('\n✅ Heartbeat successful');
    process.exit(0);
    
  } catch (error) {
    console.error('\n❌ Heartbeat failed:', error.message);
    process.exit(1);
  }
}

main();
