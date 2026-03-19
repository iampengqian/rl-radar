import { runWeeklyRollup, runRlAnalysisRollup } from "./rollup.ts";

async function main(): Promise<void> {
  await runWeeklyRollup();
  await runRlAnalysisRollup();
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
