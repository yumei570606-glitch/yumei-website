'use client';
import { useState } from 'react';

const CTA_URL = 'https://appointmentform2026.netlify.app';

const faqs = [
  {
    q: '育玫聊聊是什麼？是要來我公司嗎？',
    a: '不是。育玫聊聊是線上一對一對話。整場 30 分鐘全程 Zoom 或 Google Meet。育玫不會出門，你也不需要準備會議室、不需要安排員工、不需要請假。',
  },
  {
    q: '我適合嗎？我公司很小／很傳統。',
    a: '如果你是用本事把公司做起來的中小企業老闆，你就是育玫服務的對象。不需要多大規模、不需要懂商業術語。你只需要願意說、願意聽。',
  },
  {
    q: '我上過很多管理課了，育玫跟那些有什麼不一樣？',
    a: '管理課在「教你知識」，育玫在「陪你看見」。知識是你帶不走的東西，看見是你帶不走也丟不掉的東西。如果你上過很多課還是用不出來，那不是課的問題，是「看見」這一塊還沒裝上。',
  },
  {
    q: '育玫聊聊是免費還是收費？',
    a: '收費 NT$500。收費的目的不是賺這個錢，是篩選掉純好奇者，讓我們的 30 分鐘對話更有重量。願意付一杯精品咖啡價走進這扇門的老闆，通常也是真的準備好聽真話的老闆。',
  },
  {
    q: '預約之後多久能跟育玫對話？',
    a: '育玫親自看每一份問卷、親自對話，每月名額有限。一般等候期 1-3 週。如果你的情況急迫，請在問卷裡寫清楚，我會優先安排。',
  },
];

export default function Faq() {
  const [openIndex, setOpenIndex] = useState(0);
  return (
    <section className="faq" id="faq">
      <div className="faq-layout">
        <div className="faq-left">
          <div className="eyebrow">FAQ · 你可能想問的</div>
          <h2>先把疑慮<br />講清楚。</h2>
          <p>
            找不到你想問的？<br />
            <a href={CTA_URL} target="_blank" rel="noopener noreferrer">
              直接預約聊聊問我
            </a>
            ，30 分鐘一次問完。
          </p>
        </div>

        <div className="faq-list">
          {faqs.map((f, i) => (
            <div key={i} className={`fi ${openIndex === i ? 'fi-open' : ''}`}>
              <button
                className="fq"
                onClick={() => setOpenIndex(openIndex === i ? -1 : i)}
                type="button"
              >
                <span className="fq-index">{String(i + 1).padStart(2, '0')}</span>
                <span style={{ flex: 1 }}>{f.q}</span>
                <span className="fq-plus">{openIndex === i ? '−' : '+'}</span>
              </button>
              {openIndex === i && <div className="fa">{f.a}</div>}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
