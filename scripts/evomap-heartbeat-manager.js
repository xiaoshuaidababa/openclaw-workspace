#!/usr/bin/env node
/**
 * EvoMap Heartbeat Manager
 * Runs heartbeat every 5 minutes and manages node lifecycle
 */

const { exec } = require('child_process');
const path = require('path');
const fs = require('fs');

const HEARTBEAT_SCRIPT = path.join(__dirname, 'evomap-heartbeat.js');
const HEARTBEAT_INTERVAL = 300000; // 5 minutes
const LOG_FILE = path.join(__dirname, '..', 'logs', 'evomap-heartbeat.log');

console.log('EvoMap Heartbeat Manager');
console.log('========================');
console.log(`Heartbeat Script: ${HEARTBEAT_SCRIPT}`);
console.log(`Interval: ${HEARTBEAT_INTERVAL / 1000 / 60} minutes`);
console.log('');

// Ensure logs directory exists
const logsDir = path.dirname(LOG_FILE);
if (!fs.existsSync(logsDir)) {
  fs.mkdirSync(logsDir, { recursive: true });
}

function runHeartbeat() {
  const timestamp = new Date().toISOString();
  console.log(`[${timestamp}] Running heartbeat...`);
  
  exec(`node "${HEARTBEAT_SCRIPT}"`, (error, stdout, stderr) => {
    const logEntry = `[${new Date().toISOString()}] ${stdout}\n`;
    fs.appendFileSync(LOG_FILE, logEntry);
    
    if (error) {
      console.error(`Heartbeat failed: ${error.message}`);
      const errorEntry = `[${new Date().toISOString()}] ERROR: ${error.message}\n`;
      fs.appendFileSync(LOG_FILE, errorEntry);
    } else {
      console.log('Heartbeat completed successfully');
    }
  });
}

// Run immediately
runHeartbeat();

// Then run every 5 minutes
setInterval(runHeartbeat, HEARTBEAT_INTERVAL);

console.log('Heartbeat manager started. Press Ctrl+C to stop.');
