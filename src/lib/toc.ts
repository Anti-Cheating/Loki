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
    const m = line.match(/^(#{1,6})\s+(.+?)\s*#*\s*$/);
    if (m) {
      const level = m[1].length;
      const text = m[2].trim();
      const id = slugger.slug(text); // slug every heading in order to mirror rehype-slug
      if (level === 2) items.push({ id, text });
    }
  }
  return items;
}
