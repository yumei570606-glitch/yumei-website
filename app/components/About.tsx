export default function About() {
  return (
    <section className="about" id="about">
      <div className="about-g">
        <div className="about-photo-col">
          <div className="about-photo-frame">
            <img src="/yumei-about.jpg" alt="育玫｜老闆成長顧問" />
          </div>
        </div>

        <div>
          <div className="eyebrow">ABOUT · 為什麼是育玫</div>
          <h2>
            我不當你的顧問。<br />
            我讓你<span className="accent">成為自己的顧問</span>。
          </h2>
          <p>
            這 30 年裡，我看過從一個人的工作室長成 80 人團隊的故事，也看過營收三倍成長後 18
            個月內崩盤的故事。看過二代接班一年就把公司接上新高度的，也看過一輩子心血壓在一個錯誤決策上的。
          </p>
          <p>
            我看過太多老闆，所以我知道一件事——公司會長成什麼樣子，從來不是看老闆有多努力，
            是看老闆有沒有那雙<strong>看自己公司的眼睛</strong>。
          </p>
          <p>
            而那雙眼睛，是可以被陪出來的。我做的事，不是教你管理。
            是陪你走一段路，直到你能自己看見你公司現在的樣子。
          </p>

          <div className="number-grid">
            {[
              ['30 年', '中小企業現場實戰'],
              ['200+', '位中小企業老闆'],
              ['技術出身', '靠本事做起來的老闆'],
              ['1 對 1', '不開大班、不規模化'],
            ].map(([val, label], i) => (
              <div key={i} className="number-cell">
                <div className="number-val">{val}</div>
                <div className="number-label">{label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
