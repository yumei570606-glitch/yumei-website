import type { Faq as FaqType } from '@/lib/content';

export default function Faq({ items }: { items: FaqType[] }) {
  return (
    <section className="sec faq" id="faq">
      <div className="c">
        <div className="sh">
          <h2>你可能想問的</h2>
        </div>
        <div className="faq-list">
          {items.map((f, i) => (
            <div className="fi" key={i}>
              <div className="fq">{f.question}</div>
              <div className="fa" dangerouslySetInnerHTML={{ __html: f.answerHtml }} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
