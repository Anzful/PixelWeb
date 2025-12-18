import type { Metadata } from 'next'
import ClientHome from '@/components/ClientHome'

export const metadata: Metadata = {
  title: 'PixelWeb.ge - საიტის დამზადება და ვებსაიტების შექმნა საქართველოში',
  description: 'საიტის დამზადება და ვებსაიტების შექმნა საქართველოში ხელმისაწვდომ ფასად. ვქმნით თანამედროვე, სწრაფ და ხარისხიან ვებგვერდებს თქვენი ბიზნესისთვის.',
  keywords: 'საიტის დამზადება, ვებსაიტის შექმნა, საიტის გაკეთება, ვებ დეველოპმენტი, საქართველო, ხელმისაწვდომი ფასები, PixelWeb',
  alternates: {
    canonical: 'https://pixelweb.ge',
  },
}

export default function HomePage() {
  return <ClientHome />
}
