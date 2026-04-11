import Link from 'next/link';

export default function SiteNav() {
  return (
    <nav className="nav">
      <div className="nav-inner">
        <Link href="/" className="nav-brand">育玫｜陪老闆看見自己公司</Link>
        <div className="nav-links">
          <Link href="/#funnel">服務</Link>
          <Link href="/#faq">FAQ</Link>
          <Link href="/posts">文章</Link>
          <Link href="/search">搜尋</Link>
          <Link href="/#cta" className="btn btn-gold" style={{ padding: '10px 20px', fontSize: 13 }}>
            預約聊聊
          </Link>
        </div>
      </div>
    </nav>
  );
}
