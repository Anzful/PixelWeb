import type { Metadata } from 'next'
import SeoServiceLandingPage from '@/components/SeoServiceLandingPage'
import { baseUrl, seoServicePages } from '@/constants/seoServices'

const page = seoServicePages['saitis-damzadeba-fasi']

export const metadata: Metadata = {
  title: page.metaTitle,
  description: page.description,
  keywords: page.keywords,
  alternates: {
    canonical: `${baseUrl}/${page.slug}`,
  },
  openGraph: {
    title: page.metaTitle,
    description: page.description,
    url: `${baseUrl}/${page.slug}`,
    type: 'website',
    locale: 'ka_GE',
    siteName: 'PixelWeb.ge',
  },
}

export default function SaitisDamzadebaFasiPage() {
  return <SeoServiceLandingPage page={page} />
}

