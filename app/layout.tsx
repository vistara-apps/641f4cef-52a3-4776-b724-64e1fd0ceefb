import type { Metadata } from 'next';
import { Providers } from './providers';
import './globals.css';

export const metadata: Metadata = {
  title: 'HealthPulse Hub',
  description: 'Your curated intelligence and collaboration network for proactive public health.',
  openGraph: {
    title: 'HealthPulse Hub',
    description: 'Your curated intelligence and collaboration network for proactive public health.',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'HealthPulse Hub',
    description: 'Your curated intelligence and collaboration network for proactive public health.',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  );
}
