import type { Metadata, Viewport } from 'next';
import { Roboto } from 'next/font/google';
import Providers from './providers';
import '@/styles/globals.css';
import '@/styles/stars.css';

const roboto = Roboto({
  subsets: ['latin'],
  weight: ['100', '300', '400', '700', '900'],
  display: 'swap',
  variable: '--font-roboto'
});

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#000000'
};

export const metadata: Metadata = {
  metadataBase: new URL('https://jvalero.dev'),
  title: 'Jesús Valero - Web Developer',
  description:
    'Portfolio of Jesús Valero, software developer who is dedicated to the development of web pages and web applications.',
  keywords: ['Jesus Valero', 'jvalero', 'jvalerodev', 'web developer'],
  openGraph: {
    type: 'website',
    url: 'https://jvalero.dev',
    title: 'Jesús Valero - Web Developer',
    description:
      'Portfolio of Jesús Valero, software developer who is dedicated to the development of web pages and web applications.',
    images: [{ url: 'https://jvalero.dev/img/portfolio.png' }],
    emails: ['jvalerodev@gmail.com']
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Jesús Valero - Web Developer',
    description:
      'Portfolio of Jesús Valero, software developer who is dedicated to the development of web pages and web applications.',
    images: ['https://jvalero.dev/img/portfolio.png']
  }
};

interface Props {
  children: React.ReactNode;
}

const RootLayout = ({ children }: Props) => {
  return (
    <html lang="en" className={roboto.variable}>
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
};

export default RootLayout;
