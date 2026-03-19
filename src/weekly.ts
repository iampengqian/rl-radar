import { runWeeklyRollup, runRlAnalysisRollup } from "./rollup.ts";

async function main(): Promise<void> {
  // Run weekly and RL analysis reports in parallel for better performance
  await Promise.all([runWeeklyRollup(), runRlAnalysisRollup()]);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
