import fs from 'node:fs';
import path from 'node:path';
import matter from 'gray-matter';
import { remark } from 'remark';
import remarkHtml from 'remark-html';

const root = path.join(process.cwd(), 'content');

export type Post = {
  slug: string;
  title: string;
  date: string;
  excerpt: string;
  tags: string[];
  body: string;
};

export type PostWithHtml = Post & { html: string };

export type Testimonial = {
  slug: string;
  name: string;
  role?: string;
  quote: string;
  date?: string;
};

export type Faq = {
  question: string;
  order: number;
  answerText: string;
  answerHtml: string;
};

function listMd(dir: string): string[] {
  if (!fs.existsSync(dir)) return [];
  return fs.readdirSync(dir).filter((f) => f.endsWith('.md'));
}

async function mdToHtml(md: string): Promise<string> {
  const result = await remark().use(remarkHtml, { sanitize: false }).process(md);
  return result.toString();
}

function toDateString(v: unknown): string {
  if (!v) return '1970-01-01';
  if (v instanceof Date) return v.toISOString().slice(0, 10);
  return String(v);
}

function stripMd(md: string): string {
  return md
    .replace(/[#>*_`~\-]/g, '')
    .replace(/\[([^\]]+)\]\([^)]+\)/g, '$1')
    .replace(/\s+/g, ' ')
    .trim();
}

/* ---------- Posts ---------- */
export function getPosts(): Post[] {
  const dir = path.join(root, 'posts');
  return listMd(dir)
    .map((f) => {
      const slug = f.replace(/\.md$/, '');
      const raw = fs.readFileSync(path.join(dir, f), 'utf8');
      const { data, content } = matter(raw);
      return {
        slug,
        title: (data.title as string) ?? slug,
        date: toDateString(data.date),
        excerpt: (data.excerpt as string) ?? stripMd(content).slice(0, 120),
        tags: (data.tags as string[]) ?? [],
        body: content,
      };
    })
    .sort((a, b) => b.date.localeCompare(a.date));
}

export async function getPost(slug: string): Promise<PostWithHtml | null> {
  const post = getPosts().find((p) => p.slug === slug);
  if (!post) return null;
  const html = await mdToHtml(post.body);
  return { ...post, html };
}

/* ---------- Testimonials ---------- */
export async function getTestimonials(): Promise<Testimonial[]> {
  const dir = path.join(root, 'testimonials');
  return listMd(dir).map((f) => {
    const slug = f.replace(/\.md$/, '');
    const raw = fs.readFileSync(path.join(dir, f), 'utf8');
    const { data, content } = matter(raw);
    return {
      slug,
      name: (data.name as string) ?? '匿名',
      role: data.role as string | undefined,
      quote: content.trim(),
      date: data.date ? toDateString(data.date) : undefined,
    };
  });
}

/* ---------- FAQ ---------- */
export async function getFaqs(): Promise<Faq[]> {
  const dir = path.join(root, 'faqs');
  const files = listMd(dir);
  const items = await Promise.all(
    files.map(async (f) => {
      const raw = fs.readFileSync(path.join(dir, f), 'utf8');
      const { data, content } = matter(raw);
      const answerHtml = await mdToHtml(content);
      return {
        question: (data.question as string) ?? '',
        order: typeof data.order === 'number' ? (data.order as number) : 99,
        answerText: stripMd(content),
        answerHtml,
      };
    }),
  );
  return items.sort((a, b) => a.order - b.order);
}
