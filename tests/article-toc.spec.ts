import { test, expect } from '@playwright/test';

const ARTICLE = '/resources/monitoring-privacy-line';

for (const article of ['/resources/monitoring-privacy-line', '/resources/detect-cluely-interviews']) {
  test(`every TOC link points at a real heading id (${article})`, async ({ page }) => {
    await page.setViewportSize({ width: 1280, height: 900 });
    await page.goto(article);
    const hrefs = await page.locator('.toc a').evaluateAll((as) =>
      as.map((a) => (a as HTMLAnchorElement).getAttribute('href')!)
    );
    expect(hrefs.length).toBeGreaterThan(0);
    for (const href of hrefs) {
      const id = href.replace(/^#/, '');
      // Use an attribute selector rather than `#${id}` + CSS.escape: `CSS` is a
      // browser global and isn't available in this Node.js test context.
      await expect(page.locator(`[id="${id}"]`)).toHaveCount(1);
    }
  });
}

test('TOC is sticky and visible on desktop', async ({ page }) => {
  await page.setViewportSize({ width: 1280, height: 900 });
  await page.goto(ARTICLE);
  const toc = page.locator('.toc');
  await expect(toc).toBeVisible();
  await expect(toc).toHaveCSS('position', 'sticky');
});

test('scrollspy highlights the section in view', async ({ page }) => {
  await page.setViewportSize({ width: 1280, height: 900 });
  await page.goto(ARTICLE);
  const third = page.locator('.article-body h2').nth(2);
  const id = await third.getAttribute('id');
  // scrollIntoViewIfNeeded() only scrolls the minimum distance to make the
  // element visible, which can leave it well below the viewport's top 30%
  // band that the component's IntersectionObserver (rootMargin -70% bottom)
  // requires to mark a section active. Align it to the top like the TOC's
  // own click handler does (`scrollIntoView({ block: 'start' })`).
  await third.evaluate((el) => el.scrollIntoView({ block: 'start' }));
  await page.waitForTimeout(500);
  await expect(page.locator(`.toc a[href="#${id}"]`)).toHaveClass(/is-active/);
});

test('TOC is hidden on mobile', async ({ page }) => {
  await page.setViewportSize({ width: 390, height: 800 });
  await page.goto(ARTICLE);
  await expect(page.locator('.toc')).toBeHidden();
});
