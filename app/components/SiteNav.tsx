import Link from 'next/link';

export default function SiteNav() {
  return (
    <nav className="nav">
      <div className="nav-inner">
        <Link href="/" className="nav-brand">
          <img src="/yumei-logo.png" alt="育玫 logo" width={44} height={44} style={{ objectFit: 'contain' }} />
          <div className="nav-brand-text">
            育玫 Yumei
            <span className="nav-brand-sub">陪老闆看見自己公司</span>
          </div>
        </Link>

        <div className="nav-links">
          <Link href="/about" className="nav-link">關於</Link>
          <Link href="/#funnel" className="nav-link">服務</Link>
          <Link href="/#faq" className="nav-link">FAQ</Link>
          <Link href="/posts" className="nav-link">部落格</Link>
          <a
            href="https://appointmentform2026.netlify.app"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-accent nav-cta-desktop"
            style={{ padding: '10px 20px', fontSize: 14 }}
          >
            預約聊聊 →
          </a>
        </div>
      </div>

      <style>{`
        @media (max-width: 767px) {
          .nav-cta-desktop { display: none !important; }
          .nav-inner { padding: 14px 20px; }
          .nav-links {
            gap: 18px !important;
            font-size: 14px !important;
          }
          .nav-link { font-weight: 500 !important; }
          .nav-brand img { width: 36px; height: 36px; }
          .nav-brand-text { font-size: 14px !important; }
          .nav-brand-sub { font-size: 10px !important; }
        }
      `}</style>
    </nav>
  );
}
