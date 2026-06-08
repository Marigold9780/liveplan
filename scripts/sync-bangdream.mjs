import { readFile, writeFile } from "node:fs/promises";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const rootDir = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const dataPath = resolve(rootDir, "data/live-market.json");
const reportPath = resolve(rootDir, "data/source-checks.json");

const data = JSON.parse(await readFile(dataPath, "utf8"));

const checks = [];
for (const source of data.sources) {
  const result = {
    name: source.name,
    url: source.url,
    checkedAt: new Date().toISOString(),
    ok: false,
    note: "",
  };

  try {
    const response = await fetch(source.url);
    result.ok = response.ok;
    result.status = response.status;
    const html = await response.text();
    result.note = html.includes("BanG Dream") ? "Fetched official page and found BanG Dream marker." : "Fetched page, marker not found.";
  } catch (error) {
    result.note = `Fetch failed: ${error.message}`;
  }

  checks.push(result);
}

await writeFile(reportPath, `${JSON.stringify({ checkedAt: new Date().toISOString(), checks }, null, 2)}\n`);
console.log(`Wrote ${reportPath}`);
