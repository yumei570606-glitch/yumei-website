const testimonials = [
  {
    tag: '製造業 · 二代接班',
    before: '接班第一年什麼都想改，但改一樣壞三樣。',
    after: '育玫陪我第三個月的時候，我突然發現自己在問的問題不一樣了。不再問「怎麼改」，開始問「現在到底長什麼樣子」。',
    meta: '陪跑 6 個月 · 員工數 35 → 48',
  },
  {
    tag: '服務業 · 創業 12 年',
    before: '我一直以為問題是找不到對的人。',
    after: '育玫拆給我看的時候我才知道，我不是缺人——我是不知道這個位子該不該在。那一刻對我來說就值了。',
    meta: '精準拆解 · 6 週',
  },
  {
    tag: '電子製造 · 年營收破億',
    before: '公司是賺錢的，但我心裡一直虛。',
    after: '聊了 30 分鐘，育玫跟我說了三個不對勁。其中一個我已經假裝看不見五年了。',
    meta: '聊聊 · 後續進入陪跑',
  },
];

export default function Testimonials() {
  return (
    <section className="testi" id="testi">
      <div style={{ maxWidth: 720, marginBottom: 64 }}>
        <div className="eyebrow">VOICES · 走過這段路的老闆</div>
        <h2 style={{ textWrap: 'balance' }}>
          他們沒帶走答案。<br />
          帶走的是<span className="accent">看自己公司的眼睛</span>。
        </h2>
        <p style={{ color: 'var(--ink-soft)', fontSize: 15, lineHeight: 1.9, marginTop: 16 }}>
          為保護隱私，以下皆為匿名化對話片段，經本人授權整理。
          想知道育玫陪過哪些老闆走過什麼路？預約聊聊時直接問我。
        </p>
      </div>

      <div className="testi-g">
        {testimonials.map((t, i) => (
          <div key={i} className="tcard">
            <div className="t-tag">{t.tag}</div>
            <div>
              <div className="t-label">BEFORE</div>
              <div className="t-before">「{t.before}」</div>
            </div>
            <hr className="t-sep" />
            <div>
              <div className="t-label t-label-after">AFTER</div>
              <div className="t-after">「{t.after}」</div>
            </div>
            <div className="t-meta">{t.meta}</div>
          </div>
        ))}
      </div>

    </section>
  );
}
