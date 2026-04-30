import Hero from './components/Hero';
import Pain from './components/Pain';
import Funnel from './components/Funnel';
import About from './components/About';
import Testimonials from './components/Testimonials';
import Faq from './components/Faq';
import FooterCta from './components/FooterCta';
import Footer from './components/Footer';


const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.yumeiot.com';

export default function HomePage() {
  const personLd = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: '育玫',
    url: SITE_URL,
    image: `${SITE_URL}/og-image.jpg`,
    jobTitle: '企業管理顧問',
    description:
      '30 年實戰經驗，專注陪伴台中中小企業老闆進行企業診斷、組織梳理與管理系統建立。',
    address: { '@type': 'PostalAddress', addressLocality: '台中市', addressCountry: 'TW' },
    sameAs: [
      'https://www.facebook.com/yumeiot8',
      'https://www.instagram.com/yumeiot',
      'https://www.threads.com/@yumeiot',
      'https://www.youtube.com/@yumeiot',
      'https://www.tiktok.com/@yumeiot',
    ],
  };

  const businessLd = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: '育玫｜企業管理顧問',
    url: SITE_URL,
    image: `${SITE_URL}/og-image.jpg`,
    description:
      '台中中小企業管理顧問，提供企業診斷、接班輔導、組織梳理與管理系統建立服務。',
    address: { '@type': 'PostalAddress', addressLocality: '台中市', addressCountry: 'TW' },
    priceRange: 'NT$500 – NT$450,000',
    areaServed: { '@type': 'City', name: '台中市' },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(businessLd) }}
      />

      <Hero />
      <Pain />
      <Funnel />
      <About />
      <Testimonials />
      <Faq />
      <FooterCta />
      <Footer />

    </>
  );
}
