import type { Metadata } from 'next'
import ClientContact from '@/components/ClientContact'

export const metadata: Metadata = {
  title: 'კონტაქტი | საიტის დამზადების უფასო კონსულტაცია',
  description: 'დაგვიკავშირდით საიტის დამზადებისთვის. მოგვწერეთ WhatsApp-ზე, დაგვირეკეთ ან შეავსეთ ფორმა და მიიღეთ უფასო კონსულტაცია.',
  keywords: 'ვებსაიტის შეკვეთა, საიტის დამზადება კონსულტაცია, უფასო კონსულტაცია, ვებ დეველოპმენტი საქართველო, PixelWeb კონტაქტი',
  alternates: {
    canonical: 'https://pixelweb.ge/contact',
  },
}

export default function ContactPage() {
  return <ClientContact />
}
