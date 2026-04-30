const CTA_URL = 'https://appointmentform2026.netlify.app';

const stations = [
  {
    num: '01',
    label: 'STATION 01',
    title: '育玫聊聊',
    dur: '線上 30 分鐘',
    price: 'NT$500',
    lead: '讓 30 年實戰的眼睛看一次你的公司。',
    body: '你先填一份現況問卷，我會在對話前先看完。最後 5 分鐘，我會直接告訴你我聽到的三個不對勁。',
    grads: ['線上 Zoom / Meet，不需出門', '育玫親自看每一份問卷', '每月限量名額'],
    cta: '預約育玫聊聊 →',
    active: true,
  },
  {
    num: '02',
    label: 'STATION 02',
    title: '育玫精準拆解',
    dur: '3 次深度對話 · 6–8 週',
    lead: '把你以為的問題拆給你看，找出你看不見的真問題。',
    body: '3 次 90 分鐘深度對話：拆解真問題 → 看清卡在哪 → 30 天行動清單。',
    grads: ['現況診斷書（5-8 頁）', '「我終於知道我卡在哪了」', '育玫個人 Line 30 天'],
    cta: '先預約聊聊 →',
    active: false,
  },
  {
    num: '03',
    label: 'STATION 03',
    title: '育玫陪跑',
    dur: '3–6 個月',
    lead: '把「知道」變成「做到」，把「做到」變成「習慣」。',
    body: '每月兩次深度會議、每週 check-in、工作時間內 24 小時 Line 回覆。然後我開始退一步。',
    grads: ['公司可量化的階段性成果', '「我能開始自己看公司了」', '成果報告書 + 推薦信'],
    cta: '先預約聊聊 →',
    active: false,
  },
];

export default function Funnel() {
  return (
    <section className="funnel" id="funnel">
      <div className="sh" style={{ maxWidth: 640, margin: '0 auto 72px' }}>
        <div className="eyebrow">YOUR JOURNEY · 育玫陪你走的這段路</div>
        <h2>不是上一門課，<br />是走一段路。</h2>
        <p>從看見、到看清楚、到變成自己公司的顧問。</p>
      </div>

      <div className="stations-wrap">
        <div className="progress-line" />
        <div className="stations-grid">
          {stations.map((s) => (
            <div key={s.num} className={`st ${s.active ? 'st-active' : ''}`}>
              <div className="st-num">{s.num}</div>
              <div className="lab">{s.label}</div>
              <h3>{s.title}</h3>
              <div className="dur">{s.dur}</div>
              {s.price && <div className="price">{s.price}</div>}
              <div className="tag">{s.lead}</div>
              <div className="desc"><p>{s.body}</p></div>
              <hr className="st-sep" />
              <div className="grad-eye">畢業時帶走</div>
              {s.grads.map((g, i) => (
                <div key={i} className="grad-item">{g}</div>
              ))}
              <div style={{ marginTop: 24 }}>
                <a
                  href={CTA_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`btn ${s.active ? 'btn-accent' : 'btn-outline'}`}
                  style={{ width: '100%' }}
                >
                  {s.cta}
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
