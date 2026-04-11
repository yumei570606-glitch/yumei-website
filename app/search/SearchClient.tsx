'use client';

import { useEffect, useMemo, useState } from 'react';
import Fuse from 'fuse.js';
import Link from 'next/link';

type Item = {
  type: 'post' | 'faq' | 'testimonial';
  slug: string;
  title: string;
  excerpt?: string;
  body: string;
  url: string;
};

const KIND_LABEL: Record<Item['type'], string> = {
  post: '文章',
  faq: 'FAQ',
  testimonial: '見證',
};

export default function SearchClient() {
  const [index, setIndex] = useState<Item[] | null>(null);
  const [q, setQ] = useState('');

  useEffect(() => {
    fetch('/search-index.json')
      .then((r) => r.json())
      .then((d) => setIndex(d))
      .catch(() => setIndex([]));
  }, []);

  const fuse = useMemo(() => {
    if (!index) return null;
    return new Fuse(index, {
      keys: [
        { name: 'title', weight: 0.6 },
        { name: 'excerpt', weight: 0.3 },
        { name: 'body', weight: 0.1 },
      ],
      threshold: 0.35,
      ignoreLocation: true,
      minMatchCharLength: 2,
    });
  }, [index]);

  const results: Item[] = useMemo(() => {
    if (!fuse || !q.trim()) return [];
    return fuse.search(q).slice(0, 30).map((r) => r.item);
  }, [fuse, q]);

  return (
    <>
      <div className="search-box">
        <input
          type="search"
          placeholder="輸入關鍵字，例如：接班、組織、看見"
          value={q}
          onChange={(e) => setQ(e.target.value)}
          autoFocus
        />
      </div>
      <div className="search-results">
        {!index && <p style={{ textAlign: 'center', color: 'var(--muted)' }}>載入索引中…</p>}
        {index && q.trim() && results.length === 0 && (
          <p style={{ textAlign: 'center', color: 'var(--muted)' }}>沒有找到「{q}」相關內容。</p>
        )}
        {results.map((r) => (
          <Link href={r.url} key={`${r.type}-${r.slug}`} className="s-item">
            <div className="kind">{KIND_LABEL[r.type]}</div>
            <h3>{r.title}</h3>
            {r.excerpt && <p>{r.excerpt}</p>}
          </Link>
        ))}
      </div>
    </>
  );
}
