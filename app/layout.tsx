import './globals.css'
import type { Metadata } from 'next'
import { Nunito } from 'next/font/google'
import Navbar from './components/navbar/Navbar';
import RegisterModal from './components/modals/RegisterModal';

// exposes classname for font
const font = Nunito({
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Fairbnb',
  description: 'An Airbnb clone',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={font.className}>
        <RegisterModal />
        <Navbar />
        {children}
      </body>
    </html>
  )
}
