import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import NavBar from './components/navbar'
import Footer from './components/footer'

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: 'RISE',
  description: "The Research in Science and Engineering Conference!",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className='flex flex-col justify-stretch'>
      <body className={inter.className}>
        <NavBar />
        {children}
        <Footer />
      </body>
    </html>
  )
}
