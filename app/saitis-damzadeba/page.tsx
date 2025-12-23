import type { Metadata } from 'next'
import Link from 'next/link'
import { FaCheck, FaClock, FaMoneyBillWave, FaRocket, FaSearch, FaMobileAlt, FaShieldAlt, FaCogs } from 'react-icons/fa'
import PageTransition from '@/components/PageTransition'

export const metadata: Metadata = {
  title: 'საიტის დამზადება | ვებსაიტების შექმნა იაფად და ხარისხიანად',
  description:
    'საიტის დამზადება უახლესი ტექნოლოგიებით. ვქმნით სწრაფ, უსაფრთხო და SEO ოპტიმიზირებულ ვებსაიტებს. Landing Page, ინტერნეტ მაღაზია, სავიზიტო საიტი.',
  keywords:
    'საიტის დამზადება, ვებსაიტის შექმნა, საიტის გაკეთება, ვებგვერდების დამზადება, web development georgia, საიტები იაფად, ონლაინ მაღაზიის შექმნა',
  alternates: {
    canonical: 'https://pixelweb.ge/saitis-damzadeba',
  },
}

export default function SaitisDamzadebaPage() {
  return (
    <PageTransition>
      <div className="min-h-screen pt-20">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-primary-800 to-gray-900 text-white py-20 sm:py-32 relative overflow-hidden">
          <div className="absolute inset-0 bg-grid-white/[0.05] bg-[length:20px_20px]" />
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold mb-6 leading-tight tracking-tight">
              საიტის დამზადება
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-accent-400 mt-2">
                თქვენი ბიზნესის წარმატებისთვის
              </span>
            </h1>
            <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto mb-10 leading-relaxed">
              ჩვენ არ ვქმნით მხოლოდ ვებსაიტებს, ჩვენ ვქმნით ციფრული გაყიდვების ინსტრუმენტებს.
              მიიღეთ <strong>თანამედროვე</strong>, <strong>სწრაფი</strong> და <strong>SEO-ზე მორგებული</strong> ვებგვერდი.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
                className="bg-primary-600 text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-primary-500 transition-all shadow-lg hover:shadow-primary-500/30 hover:-translate-y-1"
              >
                უფასო კონსულტაცია
              </Link>
              <Link
                href="#prices"
                className="bg-white/10 backdrop-blur-sm text-white border border-white/20 px-8 py-4 rounded-xl font-bold text-lg hover:bg-white/20 transition-all"
            >
                იხილეთ ფასები
            </Link>
            </div>
          </div>
        </section>

        {/* SEO Text Block - Critical for Ranking */}
        <section className="py-16 bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-200">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
            <h2 className="text-3xl font-bold mb-8 text-center text-gray-900 dark:text-white">
              რატომ არის ჩვენი მომსახურება გამორჩეული?
            </h2>
            
            <div className="prose dark:prose-invert lg:prose-lg max-w-none space-y-6">
              <p>
                დღევანდელ ციფრულ სამყაროში <strong>საიტის დამზადება</strong> (Website Creation) არის პირველი ნაბიჯი ბიზნესის გაციფრულებისკენ. თუმცა, ყველა საიტი ერთნაირი არ არის. ბევრი სტუდია გვთავაზობს შაბლონურ გადაწყვეტილებებს, რომლებიც ნელია და რთულად მოსახმარი.
              </p>
              
              <p>
                PixelWeb-ში ჩვენ ვიყენებთ <strong>Next.js</strong>-ს და <strong>React</strong>-ს — ტექნოლოგიებს, რომლებსაც იყენებენ Facebook, Netflix და Airbnb. ეს ნიშნავს, რომ თქვენი საიტი იქნება:
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8 not-prose">
                <div className="flex items-start p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
                  <FaRocket className="text-primary-600 text-2xl mt-1 mr-4" />
                  <div>
                    <h3 className="font-bold text-lg mb-2 text-gray-900 dark:text-white">ელვისებურად სწრაფი</h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400">Google-ის კვლევებით, სისწრაფე პირდაპირ კავშირშია გაყიდვებთან. ჩვენი საიტები იტვირთება წამებში.</p>
                  </div>
                </div>
                <div className="flex items-start p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
                  <FaSearch className="text-primary-600 text-2xl mt-1 mr-4" />
                  <div>
                    <h3 className="font-bold text-lg mb-2 text-gray-900 dark:text-white">SEO ოპტიმიზირებული</h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400">სწორი სტრუქტურა და მეტა მონაცემები ეხმარება Google-ს თქვენი საიტის პოვნაში.</p>
                  </div>
                </div>
                <div className="flex items-start p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
                  <FaMobileAlt className="text-primary-600 text-2xl mt-1 mr-4" />
                  <div>
                    <h3 className="font-bold text-lg mb-2 text-gray-900 dark:text-white">100% მობილური</h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400">მომხმარებლების 70% შემოდის ტელეფონით. ჩვენი დიზაინი იდეალურია ნებისმიერი ეკრანისთვის.</p>
                  </div>
                </div>
                <div className="flex items-start p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
                  <FaShieldAlt className="text-primary-600 text-2xl mt-1 mr-4" />
                  <div>
                    <h3 className="font-bold text-lg mb-2 text-gray-900 dark:text-white">დაცული და უსაფრთხო</h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400">თანამედროვე დაცვის სისტემები და SSL სერტიფიკატი საჩუქრად.</p>
                  </div>
                </div>
              </div>

              <h3 className="text-2xl font-bold mt-10 mb-4 text-gray-900 dark:text-white">რას მოიცავს საიტის შექმნა?</h3>
              <p>
                ჩვენი პროცესი გამჭვირვალეა. <strong>ვებსაიტის დამზადება</strong> იწყება თქვენი ბიზნესის შესწავლით. ჩვენ არ ვიწყებთ კოდის წერას, სანამ არ გავიგებთ, ვინ არის თქვენი მომხმარებელი.
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>დიზაინი (UI/UX):</strong> ვქმნით უნიკალურ ვიზუალს.</li>
                <li><strong>Development:</strong> ვწერთ სუფთა კოდს.</li>
                <li><strong>Content:</strong> გეხმარებით ტექსტების გამართვაში.</li>
                <li><strong>Testing:</strong> ვტესტავთ ყველა მოწყობილობაზე.</li>
                <li><strong>Deployment:</strong> ვუშვებთ საიტს ინტერნეტში.</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Process Steps */}
        <section className="py-16 bg-gray-50 dark:bg-gray-800">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12 text-gray-900 dark:text-white">
              მუშაობის ეტაპები
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {[
                { step: '01', title: 'კონსულტაცია', desc: 'განვიხილავთ იდეას და მიზნებს' },
                { step: '02', title: 'დიზაინი', desc: 'ვქმნით ვიზუალურ პროტოტიპს' },
                { step: '03', title: 'დამზადება', desc: 'ვწერთ კოდს და ვაწყობთ საიტს' },
                { step: '04', title: 'გშვება', desc: 'საიტი ჰაერშია!' },
              ].map((item, idx) => (
                <div key={idx} className="bg-white dark:bg-gray-900 p-6 rounded-xl shadow-md text-center relative overflow-hidden group">
                  <div className="text-6xl font-black text-gray-100 dark:text-gray-800 absolute -top-4 -right-4 transition-transform group-hover:scale-110 select-none">
                    {item.step}
                  </div>
                  <h3 className="text-xl font-bold mb-2 relative z-10 text-gray-900 dark:text-white">{item.title}</h3>
                  <p className="text-gray-600 dark:text-gray-400 relative z-10">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Anchor */}
        <div id="prices" className="py-4"></div>

        {/* Detailed Pricing */}
        <section className="py-16 bg-white dark:bg-gray-900">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4 text-gray-900 dark:text-white">საიტის დამზადების ფასები</h2>
              <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                ფასი დამოკიდებულია პროექტის სირთულეზე. აქ მოცემულია საორიენტაციო ფასები.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {/* Plan 1 */}
              <div className="border border-gray-200 dark:border-gray-700 rounded-2xl p-8 hover:shadow-xl transition-shadow bg-gray-50 dark:bg-gray-800/50">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">Landing Page</h3>
                <div className="text-4xl font-bold text-primary-600 mb-6">400 ₾<span className="text-lg text-gray-500 font-normal">-დან</span></div>
                <p className="text-gray-600 dark:text-gray-400 mb-6 text-sm">
                  იდეალურია სარეკლამო კამპანიებისთვის, ერთი კონკრეტული პროდუქტის ან სერვისის გასაყიდად.
                </p>
                <ul className="space-y-3 mb-8">
                  {['1 გვერდი', 'მობილური ვერსია', 'სწრაფი ჩატვირთვა', 'კონტაქტის ფორმა', 'სოციალური ქსელები'].map((f, i) => (
                    <li key={i} className="flex items-center text-gray-700 dark:text-gray-300">
                      <FaCheck className="text-green-500 mr-3 text-sm" /> {f}
                    </li>
                  ))}
                </ul>
                <Link href="/contact" className="block text-center bg-gray-900 dark:bg-white text-white dark:text-gray-900 py-3 rounded-lg font-bold hover:opacity-90 transition-opacity">
                  შეკვეთა
                </Link>
              </div>

              {/* Plan 2 - Popular */}
              <div className="border-2 border-primary-500 rounded-2xl p-8 shadow-2xl relative bg-white dark:bg-gray-800 transform md:-translate-y-4">
                <div className="absolute top-0 right-0 bg-primary-500 text-white text-xs font-bold px-3 py-1 rounded-bl-lg rounded-tr-lg">
                  პოპულარული
                </div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">ბიზნეს საიტი</h3>
                <div className="text-4xl font-bold text-primary-600 mb-6">1000 ₾<span className="text-lg text-gray-500 font-normal">-დან</span></div>
                <p className="text-gray-600 dark:text-gray-400 mb-6 text-sm">
                  სრული კორპორატიული ვებგვერდი კომპანიისთვის. მოიცავს რამდენიმე გვერდს (მთავარი, ჩვენ შესახებ, სერვისები).
                </p>
                <ul className="space-y-3 mb-8">
                  {['3-7 გვერდი', 'ადმინ პანელი', 'Google რუკა', 'SEO ოპტიმიზაცია', 'ბლოგის სექცია', 'მრავალენოვნება (სურვილისამებრ)'].map((f, i) => (
                    <li key={i} className="flex items-center text-gray-700 dark:text-gray-300">
                      <FaCheck className="text-primary-500 mr-3 text-sm" /> {f}
                    </li>
                  ))}
                </ul>
                <Link href="/contact" className="block text-center bg-primary-600 text-white py-3 rounded-lg font-bold hover:bg-primary-700 transition-colors shadow-lg shadow-primary-600/30">
                  შეკვეთა
                </Link>
              </div>

              {/* Plan 3 */}
              <div className="border border-gray-200 dark:border-gray-700 rounded-2xl p-8 hover:shadow-xl transition-shadow bg-gray-50 dark:bg-gray-800/50">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">E-commerce</h3>
                <div className="text-4xl font-bold text-primary-600 mb-6">3000 ₾<span className="text-lg text-gray-500 font-normal">-დან</span></div>
                <p className="text-gray-600 dark:text-gray-400 mb-6 text-sm">
                  სრულყოფილი ონლაინ მაღაზია გადახდის სისტემით და პროდუქტების მართვის პანელით.
                </p>
                <ul className="space-y-3 mb-8">
                  {['ონლაინ გადახდები (TBC, BoG)', 'პროდუქტების კატალოგი', 'კალათის სისტემა', 'მომხმარებლის კაბინეტი', 'შეკვეთების მართვა'].map((f, i) => (
                    <li key={i} className="flex items-center text-gray-700 dark:text-gray-300">
                      <FaCheck className="text-green-500 mr-3 text-sm" /> {f}
                    </li>
                  ))}
                </ul>
                <Link href="/contact" className="block text-center bg-gray-900 dark:bg-white text-white dark:text-gray-900 py-3 rounded-lg font-bold hover:opacity-90 transition-opacity">
                  შეკვეთა
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 bg-primary-700 text-white text-center">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-6">გაქვთ კითხვები?</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto text-primary-100">
              დაგვიკავშირდით და მიიღეთ უფასო კონსულტაცია. ჩვენ დაგეხმარებით საუკეთესო გადაწყვეტილების მიღებაში.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link
              href="/contact"
                className="bg-white text-primary-700 px-8 py-4 rounded-xl font-bold hover:bg-gray-100 transition-all shadow-xl hover:scale-105"
            >
                მოგვწერეთ
            </Link>
              <a
                href="tel:+995591410914"
                className="bg-primary-800 text-white px-8 py-4 rounded-xl font-bold hover:bg-primary-900 transition-all border border-primary-600"
              >
                დაგვირეკეთ: 591 410 914
              </a>
            </div>
          </div>
        </section>
      </div>
    </PageTransition>
  )
}
