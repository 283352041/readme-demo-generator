import test from "node:test";
import assert from "node:assert/strict";
import fs from "node:fs";
import os from "node:os";
import path from "node:path";
import { execFileSync } from "node:child_process";
test("injects demo block", () => {
  const dir = fs.mkdtempSync(path.join(os.tmpdir(), "readme-demo-"));
  fs.writeFileSync(path.join(dir, "README.md"), "# App\n");
  execFileSync(process.execPath, [path.resolve("bin/readme-demo.js"), "--readme", path.join(dir, "README.md"), "--image", "demo.png"]);
  assert.match(fs.readFileSync(path.join(dir, "README.md"), "utf8"), /demo-generator/);
});