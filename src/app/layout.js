import './globals.css'
// import { Inter } from 'next/font/google'
import { Poppins,Volkhov,Montserrat,Open_Sans} from 'next/font/google';
  const poppins = Poppins({
    variable: '--font-ps', 
    weight: '700',
    subsets: ['latin'], 
  });const volkhov = Volkhov({
    variable: '--font-vk',
    weight: '700',
    subsets: ['latin'],  
  });const montserrat = Montserrat({
    variable: '--font-ms',
    weight: '700',
    subsets: ['latin'],  
  });const opensans = Open_Sans({
    variable: '--font-os', 
    weight: '700',
    subsets: ['latin'], 
  });
export const metadata = {
  title: 'Jadoo',
  description: 'Your Travel Guide',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={` ${poppins.variable} ${volkhov.variable} ${montserrat.variable} ${opensans.variable}`}>{children}</body>
    </html>
  )
}
