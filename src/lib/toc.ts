import GithubSlugger from 'github-slugger';

export type TocItem = { id: string; text: string };

export function extractToc(source: string): TocItem[] {
  // Strip leading YAML frontmatter so its lines are never scanned.
  let body = source;
  if (body.startsWith('---')) {
    const close = body.indexOf('\n---', 3);
    if (close !== -1) {
      const nl = body.indexOf('\n', close + 1);
      body = nl !== -1 ? body.slice(nl + 1) : '';
    }
  }

  const slugger = new GithubSlugger();
  const items: TocItem[] = [];
  let inFence = false;

  for (const line of body.split('\n')) {
    if (/^\s*(```|~~~)/.test(line)) {
      inFence = !inFence;
      continue;
    }
    if (inFence) continue;
    // exactly H2: two hashes then whitespace (## foo). Excludes # and ###+.
    const m = line.match(/^##\s+(.+?)\s*#*\s*$/);
    if (m) {
      const text = m[1].trim();
      items.push({ id: slugger.slug(text), text });
    }
  }
  return items;
}
