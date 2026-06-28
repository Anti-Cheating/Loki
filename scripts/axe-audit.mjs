import { chromium } from '@playwright/test';
import AxeBuilder from '@axe-core/playwright';
import { writeFileSync } from 'fs';

const BASE_URL = 'http://localhost:3001';
const PAGES = [
  '/',
  '/features',
  '/how-it-works',
  '/security',
  '/resources',
  '/contact',
  '/pricing',
  '/comparison',
  '/demo',
];
const TAGS = ['wcag2a', 'wcag2aa', 'wcag21aa', 'wcag22aa'];
const CRITICAL_IMPACTS = ['critical', 'serious'];

async function audit() {
  const browser = await chromium.launch();
  try {
    const context = await browser.newContext({ viewport: { width: 1280, height: 800 } });
    const page = await context.newPage();

    const report = [];
    let totalViolations = 0;

    for (const path of PAGES) {
      const url = `${BASE_URL}${path}`;
      try {
        await page.goto(url, { waitUntil: 'networkidle', timeout: 30000 });
        await page.waitForTimeout(1000);

        const results = await new AxeBuilder({ page })
          .withTags(TAGS)
          .analyze();

        const violations = results.violations.filter(v =>
          CRITICAL_IMPACTS.includes(v.impact)
        );

        report.push({ page: path, url, violations });
        totalViolations += violations.length;

        if (violations.length === 0) {
          console.log(`✅ ${path}`);
        } else {
          console.log(`\n❌ ${path} — ${violations.length} violation(s)`);
          for (const v of violations) {
            const criterion = v.tags.find(t => /^wcag\d/.test(t)) ?? '';
            for (const node of v.nodes) {
              const selector = String(node.target?.[0] ?? '').substring(0, 55);
              console.log(`   [${v.impact.padEnd(8)}] ${v.id.padEnd(28)} ${selector.padEnd(55)}  ${criterion}`);
            }
          }
        }
      } catch (err) {
        const msg = err instanceof Error ? err.message : String(err);
        console.log(`⚠️  ${path} — failed to load: ${msg}`);
        report.push({ page: path, url, error: msg, violations: [] });
      }
    }

    writeFileSync(
      new URL('./axe-report.json', import.meta.url),
      JSON.stringify(report, null, 2) + '\n'
    );

    const divider = '─'.repeat(60);
    console.log(`\n${divider}`);
    console.log(`TOTAL: ${totalViolations} violation(s) across ${PAGES.length} pages`);
    console.log(`Report: scripts/axe-report.json`);

    if (totalViolations > 0) process.exit(1);
  } finally {
    await browser.close();
  }
}

audit().catch(err => {
  console.error('Audit script error:', err);
  process.exit(1);
});
