import type { Metadata } from 'next';
import SearchClient from './SearchClient';

export const metadata: Metadata = {
  title: '搜尋',
  description: '搜尋育玫網站的文章、FAQ 與客戶見證。',
  alternates: { canonical: '/search' },
};

export default function SearchPage() {
  return (
    <section className="sec">
      <div className="c">
        <div className="sh">
          <h2>搜尋</h2>
          <p>找你想找的故事、方法或答案。</p>
        </div>
        <SearchClient />
      </div>
    </section>
  );
}
