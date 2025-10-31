#!/usr/bin/env node
const fs = require("fs");
const path = require("path");
const { execSync } = require("child_process");

console.log("\n🚀 Slash CLI — AI Button Generator");

let corePath = path.join(__dirname, "..", "core", "index.js");
let usePrivateCore = fs.existsSync(corePath);

let model;
if (usePrivateCore) {
  console.log("🔒 Using private core logic...");
  model = require(corePath);
} else {
  console.log("🧩 Using public fallback model...");
  model = {
    generate: (prompt) => {
      if (prompt.includes("outline")) return "<button style='border:1px solid #000'>Outline Button</button>";
      if (prompt.includes("ghost")) return "<button style='background:none'>Ghost Button</button>";
      return "<button style='background:#2563eb;color:#fff'>Primary Button</button>";
    }
  };
}

const prompt = process.argv.slice(2).join(" ") || "primary button";
const result = model.generate(prompt);

console.log("\n💡 Generated Button Code:\n");
console.log(result);
console.log("\n✅ Done!\n");
