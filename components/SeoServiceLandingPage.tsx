import Link from 'next/link'
import { FaArrowRight, FaCheck, FaClock, FaEnvelope, FaPhone, FaSearch, FaWhatsapp } from 'react-icons/fa'
import { baseUrl, seoServicePages, type SeoServicePage } from '@/constants/seoServices'

type SeoServiceLandingPageProps = {
  page: SeoServicePage
}

const contactHref = '/contact'
const whatsappHref = 'https://wa.me/995591410914?text=%E1%83%92%E1%83%90%E1%83%9B%E1%83%90%E1%83%A0%E1%83%AF%E1%83%9D%E1%83%91%E1%83%90%2C%20%E1%83%9B%E1%83%90%E1%83%98%E1%83%9C%E1%83%A2%E1%83%94%E1%83%A0%E1%83%94%E1%83%A1%E1%83%94%E1%83%91%E1%83%A1%20%E1%83%A1%E1%83%90%E1%83%98%E1%83%A2%E1%83%98%E1%83%A1%20%E1%83%93%E1%83%90%E1%83%9B%E1%83%96%E1%83%90%E1%83%93%E1%83%94%E1%83%91%E1%83%90'

export default function SeoServiceLandingPage({ page }: SeoServiceLandingPageProps) {
  const pageUrl = `${baseUrl}/${page.slug}`
  const relatedPages = page.related.map((slug) => seoServicePages[slug])

  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    '@id': `${pageUrl}#service`,
    name: page.title,
    description: page.description,
    serviceType: page.title,
    provider: {
      '@type': 'LocalBusiness',
      '@id': `${baseUrl}/#localbusiness`,
      name: 'PixelWeb.ge',
      url: baseUrl,
      telephone: '+995591410914',
      email: 'pixelweb2026@gmail.com',
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'თბილისი',
        addressCountry: 'GE',
      },
    },
    areaServed: {
      '@type': 'Country',
      name: 'Georgia',
    },
    offers: {
      '@type': 'Offer',
      priceCurrency: 'GEL',
      priceSpecification: {
        '@type': 'PriceSpecification',
        priceCurrency: 'GEL',
        description: page.price,
      },
      availability: 'https://schema.org/InStock',
      url: pageUrl,
    },
  }

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: page.faq.map((item) => ({
      '@type': 'Question',
      name: item.q,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.a,
      },
    })),
  }

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'მთავარი',
        item: baseUrl,
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: page.title,
        item: pageUrl,
      },
    ],
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      <div className="min-h-screen pt-20 bg-white text-gray-900 dark:bg-gray-950 dark:text-white">
        <section className="border-b border-gray-100 bg-gray-50 py-16 dark:border-white/10 dark:bg-gray-900 sm:py-24">
          <div className="container mx-auto grid gap-12 px-4 sm:px-6 lg:grid-cols-[1.1fr_0.9fr] lg:px-8">
            <div>
              <p className="mb-4 inline-flex items-center gap-2 rounded-full border border-primary-200 bg-white px-4 py-2 text-sm font-semibold text-primary-700 dark:border-primary-700/60 dark:bg-gray-950 dark:text-primary-300">
                <FaSearch aria-hidden="true" />
                {page.eyebrow}
              </p>
              <h1 className="max-w-4xl text-4xl font-black leading-tight tracking-normal text-gray-950 dark:text-white sm:text-5xl lg:text-6xl">
                {page.h1}
              </h1>
              <p className="mt-6 max-w-3xl text-lg leading-8 text-gray-700 dark:text-gray-300">
                {page.lead}
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Link
                  href={contactHref}
                  className="inline-flex items-center justify-center gap-2 rounded-xl bg-primary-600 px-6 py-4 font-bold text-white transition hover:bg-primary-700"
                >
                  {page.primaryCta}
                  <FaArrowRight aria-hidden="true" />
                </Link>
                <a
                  href={whatsappHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-xl bg-green-500 px-6 py-4 font-bold text-white transition hover:bg-green-600"
                >
                  <FaWhatsapp aria-hidden="true" />
                  WhatsApp
                </a>
                <a
                  href="tel:+995591410914"
                  className="inline-flex items-center justify-center gap-2 rounded-xl border border-gray-300 bg-white px-6 py-4 font-bold text-gray-900 transition hover:border-primary-300 hover:text-primary-700 dark:border-gray-700 dark:bg-gray-950 dark:text-white"
                >
                  <FaPhone aria-hidden="true" />
                  დარეკვა
                </a>
              </div>
            </div>

            <aside className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm dark:border-white/10 dark:bg-gray-950 sm:p-8">
              <div className="grid grid-cols-2 gap-4">
                <div className="rounded-xl bg-primary-50 p-4 dark:bg-primary-900/20">
                  <p className="text-sm font-semibold text-gray-500 dark:text-gray-400">ფასი</p>
                  <p className="mt-1 text-3xl font-black text-primary-700 dark:text-primary-300">{page.price}</p>
                </div>
                <div className="rounded-xl bg-gray-50 p-4 dark:bg-gray-900">
                  <p className="text-sm font-semibold text-gray-500 dark:text-gray-400">ვადა</p>
                  <p className="mt-1 flex items-center gap-2 text-2xl font-black text-gray-950 dark:text-white">
                    <FaClock className="text-primary-600" aria-hidden="true" />
                    {page.delivery}
                  </p>
                </div>
              </div>
              <p className="mt-6 text-sm leading-6 text-gray-600 dark:text-gray-300">
                <strong className="text-gray-950 dark:text-white">ვისთვისაა:</strong> {page.audience}
              </p>
              <div className="mt-6 space-y-3">
                {page.highlights.map((item) => (
                  <div key={item} className="flex gap-3 text-sm text-gray-700 dark:text-gray-300">
                    <FaCheck className="mt-1 shrink-0 text-green-500" aria-hidden="true" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </aside>
          </div>
        </section>

        <section id="prices" className="py-16 dark:bg-gray-950 sm:py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
              <div>
                <h2 className="text-3xl font-black text-gray-950 dark:text-white">რას მოიცავს მომსახურება</h2>
                <p className="mt-4 leading-7 text-gray-600 dark:text-gray-300">
                  აქ ჩამოთვლილია აუცილებელი ნაწილი, რომელიც პირდაპირ ეხმარება მომხმარებელს გადაწყვეტილების მიღებაში და Google-ს გვერდის შინაარსის სწორად გაგებაში.
                </p>
              </div>
              <div className="grid gap-3 sm:grid-cols-2">
                {page.included.map((item) => (
                  <div key={item} className="rounded-xl border border-gray-200 bg-gray-50 p-4 dark:border-white/10 dark:bg-gray-900">
                    <div className="flex gap-3">
                      <FaCheck className="mt-1 shrink-0 text-green-500" aria-hidden="true" />
                      <p className="text-sm leading-6 text-gray-700 dark:text-gray-300">{item}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="border-y border-gray-100 bg-gray-50 py-16 dark:border-white/10 dark:bg-gray-900 sm:py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-10 max-w-2xl">
              <h2 className="text-3xl font-black text-gray-950 dark:text-white">როგორ ვმუშაობთ</h2>
              <p className="mt-4 leading-7 text-gray-600 dark:text-gray-300">
                პროცესი მოკლეა, მაგრამ არა ბრმა: ჯერ ვიგებთ ბიზნეს მიზანს, შემდეგ ვქმნით გვერდს, რომელიც კონკრეტულ შედეგზე მუშაობს.
              </p>
            </div>
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
              {page.process.map((step, index) => (
                <div key={step.title} className="rounded-xl border border-gray-200 bg-white p-5 dark:border-white/10 dark:bg-gray-950">
                  <p className="text-sm font-black text-primary-600 dark:text-primary-300">0{index + 1}</p>
                  <h3 className="mt-3 text-xl font-black text-gray-950 dark:text-white">{step.title}</h3>
                  <p className="mt-3 text-sm leading-6 text-gray-600 dark:text-gray-300">{step.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 dark:bg-gray-950 sm:py-20">
          <div className="container mx-auto grid gap-10 px-4 sm:px-6 lg:grid-cols-[0.8fr_1.2fr] lg:px-8">
            <div>
              <h2 className="text-3xl font-black text-gray-950 dark:text-white">ხშირი კითხვები</h2>
              <p className="mt-4 leading-7 text-gray-600 dark:text-gray-300">
                ეს კითხვები პირდაპირ პასუხობს იმაზე, რასაც მომხმარებელი ეძებს Google-ში: ფასი, ვადა, SEO და შეკვეთის გზა.
              </p>
            </div>
            <div className="space-y-4">
              {page.faq.map((item) => (
                <div key={item.q} className="rounded-xl border border-gray-200 p-5 dark:border-white/10 dark:bg-gray-900">
                  <h3 className="font-black text-gray-950 dark:text-white">{item.q}</h3>
                  <p className="mt-2 leading-7 text-gray-600 dark:text-gray-300">{item.a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="border-t border-gray-100 bg-gray-50 py-16 dark:border-white/10 dark:bg-gray-900">
          <div className="container mx-auto px-4 text-center sm:px-6 lg:px-8">
            <h2 className="text-3xl font-black text-gray-950 dark:text-white">გსურთ საიტის დაწყება?</h2>
            <p className="mx-auto mt-4 max-w-2xl leading-7 text-gray-600 dark:text-gray-300">
              მოგვწერეთ მოკლედ რა სერვისი ან ბიზნესი გაქვთ. გეტყვით რომელი პაკეტი გჭირდებათ, რა დაჯდება და რა დრო დასჭირდება.
            </p>
            <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
              <Link
                href={contactHref}
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-primary-600 px-7 py-4 font-bold text-white transition hover:bg-primary-700"
              >
                <FaEnvelope aria-hidden="true" />
                ფორმის შევსება
              </Link>
              <a
                href={whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-green-500 px-7 py-4 font-bold text-white transition hover:bg-green-600"
              >
                <FaWhatsapp aria-hidden="true" />
                WhatsApp-ზე მოწერა
              </a>
            </div>
            <div className="mt-10 flex flex-wrap justify-center gap-3 text-sm">
              {relatedPages.map((related) => (
                <Link
                  key={related.slug}
                  href={`/${related.slug}`}
                  className="rounded-full border border-gray-300 bg-white px-4 py-2 font-semibold text-gray-700 transition hover:border-primary-400 hover:text-primary-700 dark:border-gray-700 dark:bg-gray-950 dark:text-gray-300"
                >
                  {related.title}
                </Link>
              ))}
            </div>
          </div>
        </section>
      </div>
    </>
  )
}

