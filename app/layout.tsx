import type {Metadata} from 'next';
import { Inter, Anton } from 'next/font/google';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
});

const anton = Anton({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-anton',
});

export const metadata: Metadata = {
  title: 'TOTEME - Official Store',
  description: 'Explore the latest collection from TOTEME.',
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${anton.variable} font-sans bg-[#f4f4f4] text-[#111] antialiased`} suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
