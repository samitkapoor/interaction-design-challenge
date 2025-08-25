import type { Metadata } from 'next';
import { Geist } from 'next/font/google';
import { Analytics } from '@vercel/analytics/next';
import './globals.css';
import Topbar from '@/components/ui/top-bar';

const geist = Geist({
  variable: '--font-geist',
  subsets: ['latin']
});

export const metadata: Metadata = {
  title: 'Peerlist Interaction Design Challenge',
  description: 'Peerlist Interaction Design Challenge Submissions by Samit Kapoor'
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geist.className} antialiased relative`}>
        <Topbar />
        {children}
      </body>
      <Analytics />
    </html>
  );
}
