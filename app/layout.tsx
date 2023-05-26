import Header from '@/components/Header';
import './globals.css'
import { Pangolin, Montserrat, Poppins } from 'next/font/google'
import Footer from '@/components/Footer';

const pangolin = Pangolin({
  subsets: ['latin'],
  weight: '400',
  variable: '--font-pangolin'
});

const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  variable: '--font-montserrat'
});

const popins = Poppins({
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  subsets: ['latin', 'devanagari'],
  variable: '--font-popins'
});

export const metadata = {
  title: 'My Blog | Explore the new horizon',
  description: 'Awesome Personal Blog made with Next JS and Sanity',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" >
      <body className={`${pangolin.variable} ${montserrat.variable} ${popins.variable}`}>
        {/* <Header/> */}
        {children}
        {/* <Footer/> */}
      </body>
    </html>
  )
}
