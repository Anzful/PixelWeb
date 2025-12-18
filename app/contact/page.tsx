import type { Metadata } from 'next'
import ClientContact from '@/components/ClientContact'

export const metadata: Metadata = {
  title: 'კონტაქტი | უფასო კონსულტაცია - PixelWeb',
  description: 'დაგვიკავშირდით უფასო კონსულტაციისთვის. მოგვწერეთ თქვენი პროექტის შესახებ და ჩვენ დაგეხმარებით საუკეთესო ვებსაიტის შექმნაში.',
  keywords: 'კონტაქტი, ვებსაიტის შეკვეთა, უფასო კონსულტაცია, ვებ დეველოპმენტი საქართველო',
  alternates: {
    canonical: 'https://pixelweb.ge/contact',
  },
}

export default function ContactPage() {
  return <ClientContact />
}
