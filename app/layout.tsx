import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })

export const metadata: Metadata = {
  title: 'WebSmiths.btw - ხელმისაწვდომი ვებსაიტების შექმნა საქართველოში',
  description: 'პროფესიონალური ვებსაიტები ხელმისაწვდომ ფასად. ჩვენ ვქმნით თანამედროვე, სწრაფ და ხარისხიან ვებსაიტებს თქვენი ბიზნესისთვის.',
  keywords: 'ვებსაიტის შექმნა, ვებ დეველოპმენტი, საქართველო, ხელმისაწვდომი ფასები, WebSmiths',
  authors: [{ name: 'WebSmiths.btw' }],
  openGraph: {
    title: 'WebSmiths.btw - ხელმისაწვდომი ვებსაიტების შექმნა',
    description: 'პროფესიონალური ვებსაიტები ხელმისაწვდომ ფასად',
    type: 'website',
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ka">
      <body className={inter.variable}>
        <Navbar />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}

