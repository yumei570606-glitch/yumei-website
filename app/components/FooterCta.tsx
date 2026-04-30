const CTA_URL = 'https://appointmentform2026.netlify.app';

export default function FooterCta() {
  return (
    <section className="cta-band" id="cta">
      <div className="cta-band-inner">
        <div className="cta-band-grid">
          <div>
            <div className="eyebrow" style={{ color: 'var(--accent-soft)' }}>
              NEXT STEP · 下一步
            </div>
            <h2>
              你只需要 30 分鐘，<br />
              就能看見<br />
              你看不見的那個洞。
            </h2>
          </div>
          <div>
            <div className="cta-sub">
              線上 Zoom / Google Meet · 全程 30 分鐘 · 育玫親自對話<br />
              每月限量名額，等候期 1-3 週。
            </div>
            <a
              href={CTA_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-big"
            >
              預約育玫聊聊 · NT$500 →
            </a>
            <div className="cta-note">
              填完問卷後，育玫會親自讀過<br />
              並安排對話時間。
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
