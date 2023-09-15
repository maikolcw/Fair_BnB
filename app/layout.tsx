import './globals.css'
import type { Metadata } from 'next'
import { Nunito } from 'next/font/google'
import Navbar from './components/navbar/Navbar';
import ToasterProvider from './providers/ToasterProvider';
import getCurrentUser from './actions/getCurrentUser';

import LoginModal from './components/modals/LoginModal';
import RentModal from './components/modals/RentModal';
import RegisterModal from './components/modals/RegisterModal';
import SearchModal from './components/modals/SearchModal';
import ClientOnly from './components/ClientOnly';


// exposes classname for font
const font = Nunito({
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Fairbnb',
  description: 'An Airbnb clone',
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const currentUser = await getCurrentUser();

  return (
    <html lang="en">
      <body className={font.className}>
        <ClientOnly>
          <ToasterProvider />
          <LoginModal />
          <RegisterModal />
          <SearchModal />
          <RentModal />
          <Navbar currentUser={currentUser} />
        </ClientOnly>
        <div className="pb-20 pt-28">
          {children}
        </div>
      </body>
    </html>
  )
}
