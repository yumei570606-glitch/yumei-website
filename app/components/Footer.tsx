import Link from 'next/link';

const CTA_URL = 'https://appointmentform2026.netlify.app';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-grid">
        <div>
          <div className="footer-brand">
            育玫 Yumei
            <small>陪老闆看見自己公司</small>
          </div>
          <div className="footer-desc">
            30 年中小企業現場實戰。<br />
            服務過超過 200 位中小企業老闆。<br />
            一對一陪伴，不開大班、不規模化。
          </div>
        </div>

        <div className="footer-col">
          <div className="footer-col-title">SITEMAP</div>
          <Link href="/about">關於育玫</Link>
          <Link href="/#funnel">服務方案</Link>
          <Link href="/#faq">FAQ</Link>
          <Link href="/posts">部落格</Link>
          <a href={CTA_URL} target="_blank" rel="noopener noreferrer">預約聊聊</a>
        </div>

        <div className="footer-col">
          <div className="footer-col-title">CONTACT</div>
          <a href="https://lin.ee/VXj5ImO" target="_blank" rel="noopener noreferrer">
            <span className="line-badge">L</span>
            LINE 官方帳號
          </a>
          <span style={{ fontSize: 13, color: 'var(--ink-mute)', display: 'block', marginBottom: 10 }}>
            預約聊聊後取得育玫個人 Line
          </span>
          <span style={{ fontSize: 13, color: 'var(--ink-mute)', display: 'block' }}>
            台中｜一對一陪伴
          </span>
        </div>

        <div className="footer-col">
          <div className="footer-col-title">FOLLOW</div>
          <a href="https://www.facebook.com/yumeiot8" target="_blank" rel="noopener noreferrer">
            Facebook
          </a>
          <a href="https://www.instagram.com/yumeiot" target="_blank" rel="noopener noreferrer">
            Instagram
          </a>
        </div>
      </div>

      <div className="footer-copy">
        <div>© {new Date().getFullYear()} 育玫｜陪老闆看見自己公司．All rights reserved.</div>
        <div style={{ display: 'flex', gap: 16 }}>
          <span>隱私權政策</span>
          <span>服務條款</span>
        </div>
      </div>
    </footer>
  );
}
