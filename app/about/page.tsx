import type { Metadata } from 'next';

const CTA_URL = 'https://appointmentform2026.netlify.app';

export const metadata: Metadata = {
  title: '關於育玫｜陪老闆看見自己公司',
  description:
    '30 年實戰經驗，陪靠本事做起來的中小企業老闆走過組織、帶人、接班的關卡。我不當你的顧問，我讓你成為自己的顧問。',
  alternates: { canonical: '/about' },
  openGraph: {
    type: 'profile',
    title: '關於育玫｜陪老闆看見自己公司',
    description:
      '30 年實戰經驗，陪靠本事做起來的中小企業老闆走過組織、帶人、接班的關卡。',
    url: '/about',
  },
};

export default function AboutPage() {
  return (
    <>
      <section className="sec about-top">
        <div className="c">
          <div className="hero-g">
            <div className="about-photo">
              <img
                src="/yumei-about.jpg"
                alt="育玫｜老闆成長顧問"
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  borderRadius: 20,
                  display: 'block',
                }}
              />
            </div>
            <div>
              <span className="eyebrow">關於育玫</span>
              <h1
                style={{
                  fontSize: 34,
                  lineHeight: 1.5,
                  marginBottom: 24,
                  textWrap: 'balance',
                }}
              >
                我不當你的顧問，
                <br />
                <span style={{ color: 'var(--accent)' }}>
                  我讓你成為自己的顧問。
                </span>
              </h1>
              <p style={{ fontSize: 17, lineHeight: 2, marginBottom: 20 }}>
                我是育玫。<br />
                30 年來，我陪了超過 200 個中小企業老闆，
                走過創業、成長、帶人、接班的每一道關卡。
              </p>
              <p style={{ fontSize: 17, lineHeight: 2, marginBottom: 20 }}>
                我做的不是教你怎麼經營公司，
                而是陪你看見——你公司現在真正的樣子。
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="about-body">
        <div className="c narrow">
          <h2 className="about-h2">我服務的人</h2>
          <p>
            我服務的，是靠本事把公司做起來的中小企業老闆。
          </p>
          <p>
            你可能是工程師出身、業務出身、設計師出身，
            也可能是從家裡公司接手的二代——
            你不是天生就要當老闆，
            是因為事情做著做著，公司就長到今天的樣子。
          </p>
          <p>
            你不是沒能力。<br />
            你的本事，讓你走到了這裡。
          </p>
          <p>
            但公司到了這個階段，你開始發現——
            有些事光靠你的本事，推不動了。
          </p>

          <h2 className="about-h2">我看見的事</h2>
          <p>
            200 個老闆教我一件事——
            公司會卡住，從來不是員工的問題，
            是「你看公司的角度」還沒對上。
          </p>
          <p>我看過太多老闆——</p>
          <ul className="about-list">
            <li>明明公司在賺錢，但每天醒來都覺得心裡很虛</li>
            <li>員工請了一批又一批，問題還是同一個面孔</li>
            <li>某個問題以為解決了，三個月後換個樣子又冒出來</li>
            <li>開會時員工點頭如搗蒜，散會後完全不是那回事</li>
          </ul>
          <p>
            這些不是員工的錯。
            是公司長到某個規模之後，
            老闆原本的「看公司的方式」，跟不上了。
          </p>
          <p className="about-quote">
            你不是不夠努力。<br />
            你只是看不見。
          </p>
          <p>
            我做的事，就是陪你把這雙眼睛裝上——
            直到你能自己看見你公司現在的樣子。
          </p>

          <h2 className="about-h2">我怎麼工作</h2>
          <p>我不教方法、不講框架、不開大班。</p>
          <p>
            不是因為我沒方法。
            是我看過太多老闆——
            上完課、學了框架、做了筆記，
            回到公司還是同一個卡點，
            因為框架是別人的，不是你的。
          </p>
          <p>
            我的工作方式很簡單——
            陪你看清楚問題、拆出真正卡住的環節、
            然後把方法在你的公司，從零做出來。
          </p>
          <p>
            我不替你決定。<br />
            我只是讓你看得見、想得清楚、做得下手。
          </p>
          <p>
            因為答案一直在你身上，
            只是需要有人陪你，把它拉出來。
          </p>

          <h2 className="about-h2">我跟一般顧問不一樣的地方</h2>
          <p>
            一般顧問交給你一份報告。<br />
            我交給你一雙看自己公司的眼睛。
          </p>
          <p>
            一般顧問希望你長期需要他。<br />
            我希望你做完三個月、半年之後，
            你不再需要我。
          </p>
          <p>
            一般顧問規模化、開大班、複製流程。<br />
            我不開大班、不規模化，每月只接固定名額，
            育玫親自對話、親自陪跑。
          </p>
          <p>
            因為我相信——
            一個老闆要真正改變，
            不是上一門課、買一本書能做到的。
            是要有人陪他走一段路。
          </p>

          <h2 className="about-h2">適合誰來找我</h2>
          <p>如果你是——</p>
          <ul className="about-list">
            <li>專業出身、靠本事把公司做起來的老闆</li>
            <li>員工很多但所有決策都得自己回的老闆</li>
            <li>公司在轉、但其實只有你一個人在轉的老闆</li>
            <li>想交棒卻找不到人能接的老闆</li>
            <li>每天忙著解決問題、卻沒時間想公司未來的老闆</li>
          </ul>
          <p>
            那麼你需要的，不是再請一個人。
            是先看見自己公司現在的樣子。
          </p>

          <h2 className="about-h2">怎麼開始</h2>
          <p>從一場 30 分鐘的對話開始。</p>
          <p>
            我不開大班、不規模化，每月只接固定名額。
            育玫親自看每一份問卷、親自對話。
          </p>
          <p>
            如果你也走到這個階段，
            我們可以先把問題，講清楚。
          </p>

          <div className="about-cta">
            <a
              href={CTA_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-accent"
            >
              預約育玫聊聊 → 線上 30 分鐘 · NT$500
            </a>
          </div>
        </div>
      </section>

      <style>{`
        .about-photo {
          aspect-ratio: 4/5;
          border-radius: 20px;
          overflow: hidden;
          box-shadow: 0 16px 48px rgba(33,42,81,.12);
          border: 1px solid var(--line);
        }
        .about-top { padding-bottom: 60px; }
        .about-body {
          padding: 20px 60px 120px;
          background: var(--bg);
        }
        .about-h2 {
          font-size: 28px;
          line-height: 1.4;
          margin-top: 56px;
          margin-bottom: 22px;
          padding-left: 16px;
          border-left: 4px solid var(--accent);
        }
        .about-body p {
          font-size: 17px;
          line-height: 2.05;
          color: var(--ink);
          margin-bottom: 18px;
        }
        .about-list {
          margin: 0 0 22px 0;
          padding: 0;
          list-style: none;
        }
        .about-list li {
          font-size: 17px;
          line-height: 2;
          color: var(--ink);
          padding-left: 22px;
          position: relative;
          margin-bottom: 6px;
        }
        .about-list li::before {
          content: "";
          position: absolute;
          left: 4px;
          top: 16px;
          width: 6px;
          height: 6px;
          background: var(--accent);
          border-radius: 50%;
        }
        .about-quote {
          font-size: 22px !important;
          line-height: 1.7 !important;
          color: var(--ink) !important;
          font-weight: 700;
          padding: 24px 0;
          margin: 28px 0 !important;
          border-top: 1px solid var(--line);
          border-bottom: 1px solid var(--line);
          text-align: center;
        }
        .about-cta {
          margin-top: 64px;
          padding-top: 48px;
          border-top: 1px solid var(--line);
          text-align: center;
        }
        @media (max-width: 780px) {
          .about-photo { max-width: 360px; margin: 0 auto; aspect-ratio: 4/5; }
          .about-body { padding: 20px 24px 80px; }
          .about-h2 { font-size: 24px; margin-top: 44px; }
        }
      `}</style>
    </>
  );
}
