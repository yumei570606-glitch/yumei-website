export default function Hero() {
  return (
    <section className="hero">
      <div className="c">
        <div className="hero-g">
          <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
            <div className="eyebrow-pill">
              <span className="dot" />
              每月限量名額 · 育玫親自對話
            </div>

            <h1>
              30 年，<br />
              200 個老闆，<br />
              <span className="hero-hl">
                <span style={{ whiteSpace: 'nowrap' }}>一雙看自己</span>
                <wbr />
                <span style={{ whiteSpace: 'nowrap' }}>公司的眼睛。</span>
              </span>
            </h1>

            <p className="sub">
              嗨，我是育玫。如果你也是靠本事把公司做起來的人——
              這間公司長到今天的樣子，有多少是你真的看得見的？
            </p>

            <div className="hero-ctas">
              <a
                href="https://appointmentform2026.netlify.app"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-dark"
              >
                預約 30 分鐘聊聊 · NT$500 →
              </a>
              <a href="#funnel" className="link-s">
                看看這段路
              </a>
            </div>

            <div className="stat-band">
              {[
                ['30', '年現場實戰'],
                ['200+', '位老闆陪伴'],
                ['1:1', '不開大班'],
              ].map(([num, label]) => (
                <div key={num}>
                  <div className="stat-num">{num}</div>
                  <div className="stat-label">{label}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="hero-photo-wrap">
            <img
              src="/yumei-hero.jpg"
              alt="育玫與老闆學員現場對話"
            />
            <div className="postit">
              <div className="postit-eye">育玫手記</div>
              答案一直在你身上。<br />
              只是需要有人陪你，<br />
              把它拉出來。
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
