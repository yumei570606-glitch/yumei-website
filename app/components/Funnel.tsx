export default function Funnel() {
  return (
    <section className="sec funnel" id="funnel">
      <div className="c">
        <div className="sh">
          <h2>育玫陪你走的這段路</h2>
          <p>不是上一門課，是走一段路。從看見、到看清楚、到變成自己公司的顧問。</p>
        </div>

        {/* Station 1 */}
        <div className="st">
          <div className="lab">STATION 01</div>
          <h3>育玫聊聊</h3>
          <div className="tag">線上 30 分鐘，讓 30 年實戰的眼睛看一次你的公司。</div>
          <div className="desc">
            <p>
              這是我們認識的第一步。你先填一份簡單的公司現況問卷，我會在對話前先看完，然後我們會有 30
              分鐘的線上一對一對話。
            </p>
            <p>
              最後 5
              分鐘，我會直接告訴你：從你給我的資料跟對話裡，我聽到了三個不對勁。你會帶走一份私訪總結卡，還有一個從沒有人這樣看過你公司的經驗。
            </p>
          </div>
          <div className="feat">
            <div>
              🟢 線上一對一（Zoom / Google Meet），<strong>不需出門</strong>
            </div>
            <div>🟢 全程 30 分鐘，嚴格控時</div>
            <div>🟢 不需要準備任何資料，只要你願意說</div>
            <div>🟢 每月限量名額，育玫親自看每一份問卷</div>
          </div>
          <a href="#cta" className="btn btn-gold">
            預約育玫聊聊
          </a>
        </div>

        {/* Station 2 */}
        <div className="st">
          <div className="lab">STATION 02</div>
          <h3>育玫精準拆解</h3>
          <div className="tag">3 次深度對話，把你以為的問題拆給你看，找出你看不見的真問題。</div>
          <div className="desc">
            <p>
              如果育玫聊聊讓你覺得「我想要更多」，育玫精準拆解就是給你的下一步。3 次 90
              分鐘的深度對話，分布在 6-8 週內。
            </p>
            <p>
              <strong>第一次</strong>，我陪你拆解「真問題」——你以為的問題不是真的問題。
              <br />
              <strong>第二次</strong>，我陪你看清「卡在哪一層」——是人、結構、還是系統？
              <br />
              <strong>第三次</strong>，我給你一份 30 天行動清單——下週就能開始做。
            </p>
          </div>
          <div className="take">
            <strong>畢業時你會帶走</strong>
            ✓ 一份現況診斷書（5-8 頁）
            <br />
            ✓「我終於知道我卡在哪了」的清晰感
            <br />
            ✓ 育玫個人 Line（30 天回應權）
          </div>
          <div className="gate">入場條件：完成育玫聊聊，育玫評估邀請。</div>
          <a href="#cta" className="btn btn-navy">
            我想先預約育玫聊聊
          </a>
        </div>

        {/* Station 3 */}
        <div className="st">
          <div className="lab">STATION 03</div>
          <h3>育玫陪跑</h3>
          <div className="tag">3-6 個月，我陪你把「知道」變成「做到」，把「做到」變成「習慣」。</div>
          <div className="desc">
            <p>
              知道 ≠ 做到。做到 ≠ 持續。我會在你身邊 3 到 6 個月——每月兩次深度會議，每週一次
              check-in，工作時間內 24 小時 Line 回覆。
            </p>
            <p>
              我們把行動清單變成你每天的節奏，把第一波成果固化下來。然後我會開始故意退一步——讓你開始用自己的眼睛看公司。
            </p>
          </div>
          <div className="take">
            <strong>畢業時你會帶走</strong>
            ✓ 公司可量化的階段性成果
            <br />
            ✓「我能開始自己看公司了」的肌肉感
            <br />
            ✓ 育玫陪跑成果報告書 + 推薦信
          </div>
          <div className="gate">入場條件：完成育玫精準拆解，雙方確認長期合作目標。</div>
          <a href="#cta" className="btn btn-navy">
            我想先預約育玫聊聊
          </a>
        </div>
      </div>
    </section>
  );
}
