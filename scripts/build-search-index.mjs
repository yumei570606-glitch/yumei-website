#!/usr/bin/env node
import fs from 'node:fs';
import path from 'node:path';
import matter from 'gray-matter';

const root = process.cwd();
const contentDir = path.join(root, 'content');

function toDateString(v) {
  if (!v) return '';
  if (v instanceof Date) return v.toISOString().slice(0, 10);
  return String(v);
}

function stripMd(md) {
  return md
    .replace(/[#>*_`~\-]/g, '')
    .replace(/\[([^\]]+)\]\([^)]+\)/g, '$1')
    .replace(/\s+/g, ' ')
    .trim();
}

function listMd(dir) {
  if (!fs.existsSync(dir)) return [];
  return fs.readdirSync(dir).filter((f) => f.endsWith('.md'));
}

const items = [];

// Posts
{
  const dir = path.join(contentDir, 'posts');
  for (const f of listMd(dir)) {
    const slug = f.replace(/\.md$/, '');
    const raw = fs.readFileSync(path.join(dir, f), 'utf8');
    const { data, content } = matter(raw);
    const stripped = stripMd(content);
    items.push({
      type: 'post',
      slug,
      title: data.title || slug,
      excerpt: data.excerpt || stripped.slice(0, 120),
      body: stripped,
      url: `/posts/${slug}`,
    });
  }
}

// FAQs
{
  const dir = path.join(contentDir, 'faqs');
  for (const f of listMd(dir)) {
    const slug = f.replace(/\.md$/, '');
    const raw = fs.readFileSync(path.join(dir, f), 'utf8');
    const { data, content } = matter(raw);
    const stripped = stripMd(content);
    items.push({
      type: 'faq',
      slug,
      title: data.question || slug,
      excerpt: stripped.slice(0, 140),
      body: stripped,
      url: '/#faq',
    });
  }
}

// Testimonials
{
  const dir = path.join(contentDir, 'testimonials');
  for (const f of listMd(dir)) {
    const slug = f.replace(/\.md$/, '');
    const raw = fs.readFileSync(path.join(dir, f), 'utf8');
    const { data, content } = matter(raw);
    const stripped = stripMd(content);
    items.push({
      type: 'testimonial',
      slug,
      title: data.name || slug,
      excerpt: stripped.slice(0, 140),
      body: stripped,
      url: '/#testi',
    });
  }
}

const outDir = path.join(root, 'public');
fs.mkdirSync(outDir, { recursive: true });
const outPath = path.join(outDir, 'search-index.json');
fs.writeFileSync(outPath, JSON.stringify(items));
console.log(`[search-index] wrote ${items.length} items -> ${outPath}`);
