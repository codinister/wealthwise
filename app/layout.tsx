import type { Metadata } from 'next';
import './globals.css';
import QueryDataProvider from '@/data/query/queryprovider/QueryDataProvider';
import Nav from '@/components/nav/Nav';
import Footer from '@/components/footer/Footer';

export const metadata: Metadata = {
  title: 'Wealth Wise Investment',
  description: 'Generated by create next app',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <QueryDataProvider>
          <Nav />
          {children}
          <Footer />
        </QueryDataProvider>
      </body>
    </html>
  );
}
