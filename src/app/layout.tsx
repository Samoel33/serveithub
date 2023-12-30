import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Navigation from './Navigation'
import Footer from './Footer'
import { ToastContainer } from 'react-toastify'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title:{
    default:'SERVES IT HUB',
    template:'%s- SERVES IT HUB',
  }, 
  description: 'SERVICE DONE RIGHT FIRST TIME,EVERYTIME',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col">
        <Navigation />
        {children}
        <Footer />
        <ToastContainer />
      </body>
    </html>
  );
}
