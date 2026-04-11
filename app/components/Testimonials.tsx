import type { Testimonial } from '@/lib/content';

export default function Testimonials({ items }: { items: Testimonial[] }) {
  return (
    <section className="sec testi" id="testi">
      <div className="c">
        <div className="sh">
          <h2>那些跟育玫走過這段路的老闆說</h2>
        </div>

        {items.length === 0 ? (
          <div className="testi-ph">
            真實客戶見證整理中。
            <br />
            想知道育玫陪過哪些老闆走過什麼路？
            <br />
            預約育玫聊聊時直接問我，我告訴你。
            <br />
            <br />
            <a href="#cta" className="link-s">
              預約育玫聊聊 →
            </a>
          </div>
        ) : (
          <div className="testi-g">
            {items.map((t) => (
              <div className="tcard" key={t.slug}>
                「{t.quote}」
                <div className="who">
                  {t.name}
                  {t.role && <span>｜{t.role}</span>}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
