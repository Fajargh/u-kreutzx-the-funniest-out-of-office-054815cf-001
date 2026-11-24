// The Funniest Out-of-Office — make.fun entry
// Writes a single funny out-of-office line (<=140 chars) to /output/entry.txt

import { mkdirSync, writeFileSync } from "node:fs";

const ENTRY =
  "I'm away until Monday and left my inbox in charge of itself. " +
  "It has already promoted three spam emails to management.";

// The gate requires 1-140 characters of non-whitespace UTF-8 text.
// Fail loudly instead of shipping an invalid entry.
if (ENTRY.length < 1 || ENTRY.length > 140 || ENTRY.trim().length === 0) {
  throw new Error(`Entry is ${ENTRY.length} chars; must be 1-140.`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY + "\n", "utf8");
console.log(`Wrote ${ENTRY.length} chars to /output/entry.txt`);
