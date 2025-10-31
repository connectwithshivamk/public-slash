#!/usr/bin/env node
const fs = require('fs');
const path = require('path');
const readline = require('readline');

console.log('🚀 Slash CLI — AI UI Builder');

let core = null;

// Try to load private core
try {
  const privateCorePath = path.resolve('../slash-core/ai.js');
  if (fs.existsSync(privateCorePath)) {
    console.log('🔒 Using Private Core');
    core = require(privateCorePath);
  } else {
    console.log('🌍 Using Public Fallback Core');
    core = require('../utils/publicModel.js');
  }
} catch (err) {
  console.log('🌍 Using Public Fallback Core');
  core = require('../utils/publicModel.js');
}

const rl = readline.createInterface({ input: process.stdin, output: process.stdout });

function ask() {
  rl.question('🧠 Enter component prompt: ', (prompt) => {
    const output = core.generateComponent(prompt);
    console.log('\n💡 Output:\n', output, '\n');
    ask();
  });
}

ask();
