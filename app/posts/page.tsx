import Link from 'next/link';
import type { Metadata } from 'next';
import { getPosts, inlineTitle } from '@/lib/content';

export const metadata: Metadata = {
  title: '文章',
  description: '育玫分享 30 年陪老闆看公司的故事、思考與方法。',
  alternates: { canonical: '/posts' },
  openGraph: {
    title: '文章 ｜ 育玫',
    description: '育玫分享 30 年陪老闆看公司的故事、思考與方法。',
    url: '/posts',
  },
};

export default function PostsPage() {
  const posts = getPosts();
  const [hero, ...rest] = posts;
  return (
    <section className="sec">
      <div className="c">
        <div className="sh">
          <h2>文章</h2>
          <p>那些我想跟你說的事。</p>
        </div>
        {posts.length === 0 ? (
          <p style={{ textAlign: 'center', color: 'var(--ink-mute)' }}>文章整理中。</p>
        ) : (
          <div className="post-list">
            <Link href={`/posts/${hero.slug}`} className="post-hero">
              <span className="eyebrow-pill"><span className="dot"></span>最新發佈</span>
              <div className="post-hero-date">{hero.date}</div>
              <h3 className="post-hero-title">{inlineTitle(hero.title)}</h3>
              {hero.excerpt && <p className="post-hero-excerpt">{hero.excerpt}</p>}
              <span className="post-hero-cta">閱讀全文 →</span>
            </Link>
            {rest.length > 0 && (
              <div className="post-grid">
                {rest.map((p) => (
                  <Link href={`/posts/${p.slug}`} key={p.slug} className="post-grid-card">
                    <span className="post-grid-date">{p.date}</span>
                    <h3 className="post-grid-title">{inlineTitle(p.title)}</h3>
                    {p.excerpt && <p className="post-grid-excerpt">{p.excerpt}</p>}
                  </Link>
                ))}
              </div>
            )}
          </div>
        )}
      </div>
    </section>
  );
}
