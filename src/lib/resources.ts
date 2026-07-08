import fs from 'node:fs/promises';
import path from 'node:path';
import { compileMDX } from 'next-mdx-remote/rsc';

const CONTENT_DIR = path.join(process.cwd(), 'src/content/resources');

export type ArticleMeta = {
  slug: string;
  title: string;
  category: string;
  excerpt: string;
  readTime: string;
  date: string;
  author: string;
  image?: string;
};

type Frontmatter = {
  title: string;
  category: string;
  excerpt: string;
  readTime: string;
  date: string;
  updated?: string;
  author?: string;
  image?: string;
};

export async function getAllArticles(): Promise<ArticleMeta[]> {
  const files = (await fs.readdir(CONTENT_DIR)).filter((f) => f.endsWith('.mdx'));
  const metas = await Promise.all(
    files.map(async (file) => {
      const source = await fs.readFile(path.join(CONTENT_DIR, file), 'utf8');
      const { frontmatter } = await compileMDX<Frontmatter>({
        source,
        options: { parseFrontmatter: true },
      });
      return {
        slug: file.replace(/\.mdx$/, ''),
        title: frontmatter.title,
        category: frontmatter.category,
        excerpt: frontmatter.excerpt,
        readTime: frontmatter.readTime,
        date: frontmatter.date,
        author: frontmatter.author ?? 'Trueyy Team',
        image: frontmatter.image,
      };
    })
  );
  return metas.sort((a, b) => (a.date < b.date ? 1 : -1));
}
