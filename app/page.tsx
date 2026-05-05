import type { Metadata } from 'next'
import ClientHome from '@/components/ClientHome'

export const metadata: Metadata = {
  title: 'PixelWeb.ge - საიტის დამზადება საქართველოში 400₾-დან',
  description: 'საიტის დამზადება საქართველოში 400₾-დან. სწრაფი მიწოდება, თანამედროვე დიზაინი, მობილურზე მორგებული ვებსაიტები და ხელმისაწვდომი ფასები.',
  keywords: 'საიტის დამზადება, ვებსაიტის შექმნა, საიტის გაკეთება, საიტების დამზადება საქართველოში, საიტები იაფად, ვებ დეველოპმენტი საქართველო',
  alternates: {
    canonical: 'https://pixelweb.ge',
  },
}

export default function HomePage() {
  return <ClientHome />
}
