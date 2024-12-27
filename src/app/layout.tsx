import { Inter } from 'next/font/google'

import { cn } from '@/lib/utils'

import Footer from './_components/footer'
import Header from './_components/header'
import './globals.css'

import type { Metadata } from 'next'

const inter = Inter({ subsets: ['latin'], variable: '--font-sans' })

export const metadata: Metadata = {
  title: 'Home | Karintou Blog',
  description: 'かりんとうの気軽なブログ',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='ja'>
      <body
        className={cn(
          'flex min-h-screen flex-col bg-background font-sans antialiased',
          inter.variable,
        )}
      >
        <Header />
        <main className='grow'>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
