import '@/app/global.css';
import { RootProvider } from 'fumadocs-ui/provider/next';
import type { Metadata } from 'next';
import {
  Caveat,
  Cormorant_Garamond,
  Ma_Shan_Zheng,
  Noto_Sans_SC,
  Noto_Serif_SC,
} from 'next/font/google';

const notoSansSC = Noto_Sans_SC({
  subsets: ['latin'],
  display: 'swap',
});

const caveat = Caveat({
  subsets: ['latin'],
  weight: ['600', '700'],
  display: 'swap',
  variable: '--font-display-en',
});

const maShanZheng = Ma_Shan_Zheng({
  subsets: ['latin'],
  weight: '400',
  display: 'swap',
  variable: '--font-display-zh',
});

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['500', '600'],
  display: 'swap',
  variable: '--font-reading-en',
});

const notoSerifSC = Noto_Serif_SC({
  subsets: ['latin'],
  weight: ['500', '600'],
  display: 'swap',
  variable: '--font-reading-zh',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://ech0.soopy.cn'),
  title: {
    default: 'Ech0',
    template: '%s | Ech0',
  },
};

export default function Layout({ children }: LayoutProps<'/'>) {
  return (
    <html
      lang="en"
      className={`${notoSansSC.className} ${caveat.variable} ${maShanZheng.variable} ${cormorant.variable} ${notoSerifSC.variable}`}
      suppressHydrationWarning
    >
      <body className="flex flex-col min-h-screen" suppressHydrationWarning>
        <RootProvider>{children}</RootProvider>
      </body>
    </html>
  );
}
