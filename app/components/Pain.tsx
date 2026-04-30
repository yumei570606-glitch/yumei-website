const cards = [
  { main: '「算了，下次還是我自己來好了。」', sub: '交辦了不放心，不管了又看不下去。' },
  { main: '公司賺錢，但你不知道為什麼賺。', sub: '公司越大，心裡越虛。' },
  { main: '問題解決了，三個月後換個樣子又冒出來。', sub: '你真的解決了嗎？' },
  { main: '開會講半天，員工點頭如搗蒜。', sub: '散會之後？完全不是那回事。' },
  { main: '你以為缺人才。', sub: '但你不知道該找誰，也不知道這個位子該不該在。' },
  { main: '你的本事讓你走到今天。', sub: '但光靠本事，做不上去了。' },
];

export default function Pain() {
  return (
    <section className="pain">
      <div className="pain-header">
        <div>
          <div className="eyebrow">SELF-CHECK · 你是不是這樣的老闆</div>
          <h2>
            這些不是員工的問題。<br />
            是「<span className="accent">你看公司的角度</span>」。
          </h2>
        </div>
        <div className="pain-header-right" style={{ textWrap: 'pretty' }}>
          30 年來我看過太多老闆——他們都不缺能力、不缺勤奮、不缺野心。
          他們缺的，是一雙「能看自己公司」的眼睛。
        </div>
      </div>

      <div className="pain-g">
        {cards.map((c, i) => (
          <div key={i} className="pc">
            <div className="n">{String(i + 1).padStart(2, '0')} / 06</div>
            <div>
              <div className="card-title">{c.main}</div>
              <div className="card-sub">{c.sub}</div>
            </div>
          </div>
        ))}
      </div>

      <div className="quote-band">
        <div className="quote-big">你不是不夠努力。你只是看不見。</div>
        <div className="quote-sub">
          我做的事，就是陪你把這雙眼睛裝上——
          直到你能自己看見你公司現在的樣子。
        </div>
      </div>
    </section>
  );
}
