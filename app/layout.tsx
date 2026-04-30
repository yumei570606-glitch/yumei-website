import type { Metadata } from 'next';
import { Noto_Sans_TC, Noto_Serif_TC } from 'next/font/google';
import './globals.css';
import GA4 from './components/GA4';
import SiteNav from './components/SiteNav';

const notoSansTC = Noto_Sans_TC({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800'],
  variable: '--font-noto-sans-tc',
  display: 'swap',
});

const notoSerifTC = Noto_Serif_TC({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-serif',
  display: 'swap',
});

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.yumeiot.com';

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: '育玫｜台中中小企業管理顧問・陪老闆看見自己公司',
    template: '%s ｜ 育玫',
  },
  description:
    '30 年實戰，陪台中中小企業老闆看見自己公司真正的樣子。企業管理諮詢、接班輔導、組織診斷，從聊聊開始。',
  alternates: { canonical: '/' },
  openGraph: {
    type: 'website',
    url: SITE_URL,
    title: '育玫｜台中中小企業管理顧問・陪老闆看見自己公司',
    description:
      '30 年實戰，陪台中中小企業老闆看見自己公司真正的樣子。企業管理諮詢、接班輔導、組織診斷，從聊聊開始。',
    siteName: '育玫｜陪老闆看見自己公司',
    locale: 'zh_TW',
    images: [{ url: '/og-image.jpg', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: '育玫｜台中中小企業管理顧問・陪老闆看見自己公司',
    description: '30 年實戰，陪台中中小企業老闆看見自己公司真正的樣子。從 30 分鐘的聊聊開始。',
    images: ['/og-image.jpg'],
  },
  verification: {
    google: 'br0AEv6Kl_yj2oXYJfC1eWDnVP0f507gzv7nxsfINVI',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="zh-Hant" className={`${notoSansTC.variable} ${notoSerifTC.variable}`}>
      <body>
        <SiteNav />
        {children}
        <GA4 />
      </body>
    </html>
  );
}
