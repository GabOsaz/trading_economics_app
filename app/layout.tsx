import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { QueryProviders, ThemeProvider } from './providers';
import Nav from './components/Nav';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'TE App',
  description: 'A test application',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Nav />
        <QueryProviders>
          <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
            <div className="relative z-20">
              {children}
            </div>
          </ThemeProvider>
        </QueryProviders>
      </body>
    </html>
  );
}
