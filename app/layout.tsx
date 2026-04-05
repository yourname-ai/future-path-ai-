import { Analytics } from '@vercel/analytics/next';
import './globals.css';

export const metadata = {
  title: 'Future Path AI',
  description: 'AI-powered future path guidance for high school students',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja">
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
