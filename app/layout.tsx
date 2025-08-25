import type { Metadata } from 'next';
import { Lora } from 'next/font/google';
import { Analytics } from '@vercel/analytics/next';
import './globals.css';

const lora = Lora({
  variable: '--font-lora',
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
      <body className={`${lora.className} antialiased`}>{children}</body>
      <Analytics />
    </html>
  );
}
