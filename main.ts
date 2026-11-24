import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const LINE =
  "We rent professional mourners who weep on cue at strangers' funerals, because grieving families pay $400 a head to look deeply loved in front of relatives who flew in to judge them.";

function assertValidLine(line: string): void {
  if (line.length < 1 || line.length > 200) {
    throw new Error(`entry must be 1-200 characters, got ${line.length}`);
  }
  if (line !== line.trim()) {
    throw new Error("entry must not have leading or trailing whitespace");
  }
  if (line.includes("\n") || line.includes("\r")) {
    throw new Error("entry must be a single line");
  }
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
mkdirSync(outDir, { recursive: true });
assertValidLine(LINE);
writeFileSync(join(outDir, "entry.txt"), LINE, "utf8");
