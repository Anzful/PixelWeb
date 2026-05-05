import type { Metadata } from 'next'
import ClientServices from '@/components/ClientServices'

export const metadata: Metadata = {
  title: 'სერვისები და ფასები | საიტის დამზადება 400₾-დან',
  description: 'საიტის დამზადების ფასები PixelWeb-ში: Landing Page 400-700₾, ბიზნეს საიტი 1000₾-დან, ონლაინ მაღაზია 3000₾-დან.',
  keywords: 'საიტის დამზადების ფასები, ვებსაიტის შექმნა ფასი, landing page ფასი, ონლაინ მაღაზიის დამზადება ფასი, ბიზნეს საიტის დამზადება',
  alternates: {
    canonical: 'https://pixelweb.ge/services',
  },
}

export default function ServicesPage() {
  return <ClientServices />
}
