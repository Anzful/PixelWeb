import type { Metadata } from 'next'
import ClientPortfolio from '@/components/ClientPortfolio'

export const metadata: Metadata = {
  title: 'პორტფოლიო | შესრულებული პროექტები - PixelWeb',
  description: 'ჩვენი შესრულებული პროექტები: ვებსაიტები, მობილური აპლიკაციები და ელექტრონული კომერცია. ნახეთ PixelWeb-ის ნამუშევრები.',
  keywords: 'პორტფოლიო, ვებსაიტების ნამუშევრები, შესრულებული პროექტები, ვებ დეველოპმენტი პორტფოლიო',
  alternates: {
    canonical: 'https://pixelweb.ge/portfolio',
  },
}

export default function PortfolioPage() {
  return <ClientPortfolio />
}
