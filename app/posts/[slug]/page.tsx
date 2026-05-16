import { Fragment } from 'react';
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { getPost, getPosts, inlineTitle } from '@/lib/content';

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.yumeiot.com';

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return getPosts().map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = await getPost(slug);
  if (!post) return { title: '找不到文章' };
  const flatTitle = inlineTitle(post.title);
  return {
    title: flatTitle,
    description: post.excerpt,
    alternates: { canonical: `/posts/${post.slug}` },
    openGraph: {
      type: 'article',
      title: `${flatTitle} ｜ 育玫`,
      description: post.excerpt,
      url: `/posts/${post.slug}`,
      publishedTime: post.date,
      tags: post.tags,
    },
    twitter: {
      card: 'summary_large_image',
      title: `${flatTitle} ｜ 育玫`,
      description: post.excerpt,
    },
  };
}

export default async function PostPage({ params }: Props) {
  const { slug } = await params;
  const post = await getPost(slug);
  if (!post) notFound();

  const titleLines = post.title.split(/\n/).map((s) => s.trim()).filter(Boolean);
  const articleLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: inlineTitle(post.title),
    datePublished: post.date,
    author: { '@type': 'Person', name: '育玫' },
    publisher: { '@type': 'Organization', name: '育玫｜陪老闆看見自己公司' },
    description: post.excerpt,
    mainEntityOfPage: { '@type': 'WebPage', '@id': `${SITE_URL}/posts/${post.slug}` },
    keywords: post.tags?.join(', '),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleLd) }}
      />
      <section className="sec">
        <div className="c">
          <article className="post-detail">
            <h1>
              {titleLines.map((line, i) => (
                <Fragment key={i}>
                  {i > 0 && <br />}
                  {line}
                </Fragment>
              ))}
            </h1>
            <div className="meta">{post.date}</div>
            <div className="post-body" dangerouslySetInnerHTML={{ __html: post.html }} />
          </article>
        </div>
      </section>
    </>
  );
}
