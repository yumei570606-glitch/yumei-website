const PAINS: { n: string; lines: [string, string] }[] = [
  { n: '01', lines: ['「算了，下次還是我自己來好了。」', '交辦了不放心，不管了又看不下去。'] },
  { n: '02', lines: ['公司賺錢，但你不知道為什麼賺。', '公司越大，心裡越虛。'] },
  { n: '03', lines: ['問題解決了，三個月後換個樣子又冒出來。', '你真的解決了嗎？'] },
  { n: '04', lines: ['開會講半天，員工點頭如搗蒜。', '散會之後？完全不是那回事。'] },
  { n: '05', lines: ['你以為缺人才。', '但你不知道該找誰，也不知道這個位子該不該在。'] },
  { n: '06', lines: ['你的本事讓你走到今天。', '但你心裡知道——光靠本事，做不上去了。'] },
];

export default function Pain() {
  return (
    <section className="sec pain">
      <div className="c">
        <div className="sh">
          <h2>你是不是這樣的老闆？</h2>
          <p>這些不是員工的問題。這些是「你看公司的角度」的問題。</p>
        </div>
        <div className="pain-g">
          {PAINS.map((p) => (
            <div className="pc" key={p.n}>
              <div className="n">{p.n}</div>
              {p.lines[0]}
              <br />
              {p.lines[1]}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
