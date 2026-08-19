import { cpSync, existsSync, mkdirSync } from "node:fs";
import { join } from "node:path";

const standaloneDir = join(".next", "standalone");
const standaloneNextDir = join(standaloneDir, ".next");

if (!existsSync(standaloneDir)) {
  throw new Error("Missing .next/standalone. Did next build run with output: 'standalone'?");
}

mkdirSync(standaloneNextDir, { recursive: true });
cpSync(join(".next", "static"), join(standaloneNextDir, "static"), {
  recursive: true,
});

if (existsSync("public")) {
  cpSync("public", join(standaloneDir, "public"), { recursive: true });
}

console.log("Copied static assets into .next/standalone");
