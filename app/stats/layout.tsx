import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Stats | PixelWeb.ge',
  robots: {
    index: false,
    follow: false,
    googleBot: {
      index: false,
      follow: false,
    },
  },
}

export default function StatsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
