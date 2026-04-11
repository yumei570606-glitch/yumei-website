import Link from 'next/link';
import type { Metadata } from 'next';
import { getPosts } from '@/lib/content';

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
  return (
    <section className="sec">
      <div className="c">
        <div className="sh">
          <h2>文章</h2>
          <p>那些我想跟你說的事。</p>
        </div>
        <div className="post-list">
          {posts.length === 0 ? (
            <p style={{ textAlign: 'center', color: 'var(--muted)' }}>文章整理中。</p>
          ) : (
            posts.map((p) => (
              <Link href={`/posts/${p.slug}`} key={p.slug} className="post-item">
                <div className="meta">{p.date}</div>
                <h3>{p.title}</h3>
                <p>{p.excerpt}</p>
              </Link>
            ))
          )}
        </div>
      </div>
    </section>
  );
}
