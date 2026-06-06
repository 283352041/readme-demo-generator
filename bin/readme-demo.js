#!/usr/bin/env node
import fs from "node:fs";
const args = process.argv.slice(2);
if (args.includes("--help") || args.includes("-h")) { console.log("Usage: readme-demo --image path --title text [--readme README.md]"); process.exit(0); }
const get = (f, d="") => { const i=args.indexOf(f); return i>=0 ? args[i+1] : d; };
const readme = get("--readme", "README.md");
const image = get("--image", "assets/demo.png");
const title = get("--title", "Demo");
const marker = "<!-- demo-generator -->";
const block = `${marker}\n## ${title}\n\n![${title}](${image})\n\nGenerated with readme-demo-generator.\n`;
const current = fs.existsSync(readme) ? fs.readFileSync(readme, "utf8") : `# ${title}\n\n`;
const next = current.includes(marker) ? current.replace(new RegExp(`${marker}[\\s\\S]*$`), block) : current.trimEnd() + "\n\n" + block;
fs.writeFileSync(readme, next);
console.log(`Updated ${readme}`);
