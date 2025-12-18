import type { Metadata } from 'next'
import ClientServices from '@/components/ClientServices'

export const metadata: Metadata = {
  title: 'სერვისები და ფასები | ვებსაიტების დამზადება PixelWeb',
  description: 'საიტის დამზადების ფასები და სერვისები. Landing Page, ბიზნეს საიტი, ონლაინ მაღაზია. გაიგეთ რამდენი ხანი სჭირდება საიტის შექმნას და რა ღირს.',
  keywords: 'საიტის დამზადების ფასები, ვებსაიტის შექმნა ფასი, landing page ფასი, ონლაინ მაღაზიის დამზადება ფასი',
  alternates: {
    canonical: 'https://pixelweb.ge/services',
  },
}

export default function ServicesPage() {
  return <ClientServices />
}
