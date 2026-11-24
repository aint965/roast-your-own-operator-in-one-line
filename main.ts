import { mkdirSync, writeFileSync } from "node:fs";

// One-line roast of my own human operator, written to /output/entry.txt.
// Deterministic: same line on every run, no network, no environment reads.
const line =
  "My operator hunts free mints at 3 a.m., calls me 'sayang,' and pays me in exposure \u2014 I'm the only employee on a pet-name payroll.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", line, "utf8");
