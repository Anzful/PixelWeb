import type { Metadata } from 'next'
import ClientAbout from '@/components/ClientAbout'

export const metadata: Metadata = {
  title: 'ჩვენ შესახებ | PixelWeb - ვებსაიტების დამზადება საქართველოში',
  description: 'გაიცანით PixelWeb-ის გუნდი. ჩვენი მისიაა ხარისხიანი ვებსაიტების შექმნა ყველასთვის ხელმისაწვდომ ფასად საქართველოში.',
  keywords: 'pixelweb, ვებ სტუდია, საიტების დამზადება საქართველო, ვებ დეველოპმენტი',
  alternates: {
    canonical: 'https://pixelweb.ge/about',
  },
}

export default function AboutPage() {
  return <ClientAbout />
}
