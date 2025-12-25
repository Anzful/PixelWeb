'use client'

import { motion } from 'framer-motion'
import { FaCheckCircle, FaHeart, FaLightbulb, FaRocket, FaAward } from 'react-icons/fa'
import PageTransition from '@/components/PageTransition'

const ClientAbout = () => {
  const values = [
    {
      icon: <FaHeart className="text-4xl text-primary-600 dark:text-primary-400" />,
      title: 'ვაფასებთ თითოეულ კლიენტს',
      description: 'თითოეული პროექტი ჩვენთვის უნიკალურია. ჩვენ ვუსმენთ თქვენს საჭიროებებს და მაქსიმალურად ვცდილობთ დაგეხმაროთ მათ გადაჭრაში.'
    },
    {
      icon: <FaLightbulb className="text-4xl text-primary-600 dark:text-primary-400" />,
      title: 'ინოვაცია და ხარისხი',
      description: 'ვიყენებთ უახლეს ტექნოლოგიებს და საუკეთესო პრაქტიკას, რათა შევქმნათ თანამედროვე, სწრაფი და მომხმარებლისთვის მოსახერხებელი ვებსაიტები.'
    },
    {
      icon: <FaRocket className="text-4xl text-primary-600 dark:text-primary-400" />,
      title: 'სწრაფი მიწოდება',
      description: 'ჩვენ ვაფასებთ და გვესმის დროის მნიშვნელობა ჩვენი მომხმარებლებისთვის და ვმუშაობთ წინასწარ გათვალისწინებული ვადების მკაცრად დაცვით.'
    },
    {
      icon: <FaCheckCircle className="text-4xl text-primary-600 dark:text-primary-400" />,
      title: 'გამჭვირვალობა',
      description: 'ღია და გამჭვირვალე ფასები, ნათელი კომუნიკაცია და რეგულარული განახლებები პროექტის მიმდინარეობის შესახებ.'
    }
  ]

  const achievements = [
    {
      icon: <FaRocket className="text-5xl text-primary-600 dark:text-primary-400" />,
      number: '10+',
      label: 'დასრულებული პროექტი'
    },
    {
      icon: <FaAward className="text-5xl text-primary-600 dark:text-primary-400" />,
      number: '100%',
      label: 'წარმატების მაჩვენებელი'
    },
    {
      icon: <FaHeart className="text-5xl text-primary-600 dark:text-primary-400" />,
      number: '4+',
      label: 'წლიანი გამოცდილება'
    }
  ]

  const whyChooseUs = [
    {
      title: 'ხელმისაწვდომი ფასები',
      description: 'ბაზრის ფასებთან შედარებით 30%-მდე იაფია, ხარისხის შენარჩუნებით'
    },
    {
      title: 'სწრაფი მიწოდება',
      description: 'Landing Page - 3 დღე, კორპორატიული საიტი - 7 დღე, E-commerce - 14 დღე (საშუალოდ)'
    },
    {
      title: 'უახლესი ტექნოლოგიები',
      description: 'React, Next.js, Node.js - სწრაფი, უსაფრთხო და უახლესი ტექნოლოგიები'
    },
    {
      title: 'რესპონსიული დიზაინი',
      description: 'იდეალურად მუშაობს ყველა მოწყობილობაზე - მობილური, ტაბლეტი, დესკტოპი'
    },
    {
      title: 'SEO ოპტიმიზაცია',
      description: 'თქვენი საიტი გამოჩნდება Google-ში და მოიზიდავს მეტ კლიენტებს'
    },
    {
      title: 'უფასო მხარდაჭერა',
      description: 'ყველა პროექტი მოიცავს უფასო ტექნიკურ მხარდაჭერას და ტრენინგს'
    }
  ]

  return (
    <PageTransition>
      <div className="min-h-screen pt-20">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-primary-600 to-primary-700 dark:from-gray-950 dark:to-gray-900 text-white py-12 sm:py-16 md:py-20 relative overflow-hidden">
          <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center max-w-3xl mx-auto"
            >
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6">
                ჩვენ შესახებ
              </h1>
              <p className="text-base sm:text-lg lg:text-xl text-primary-100 dark:text-gray-300">
                ჩვენ ვართ ახალგაზრდა და ენერგიული გუნდი, რომელიც მიზნად ისახავს ხარისხიანი ვებსაიტების შექმნას ხელმისაწვდომ ფასად.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Mission Section */}
        <section className="py-12 sm:py-16 md:py-20 bg-white dark:bg-transparent transition-colors duration-300 border-b border-gray-100 dark:border-white/5">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="text-center mb-12"
              >
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-4 sm:mb-6">
                  ჩვენი მისია
                </h2>
                <p className="text-base sm:text-lg lg:text-xl text-gray-600 dark:text-gray-300 leading-relaxed mb-4 sm:mb-6">
                  <strong className="text-primary-600 dark:text-primary-400">PixelWeb</strong> შეიქმნა იმ იდეით, რომ პროფესიონალური ვებსაიტები ხელმისაწვდომი უნდა იყოს ყველასთვის - პატარა ბიზნესიდან დიდ კორპორაციებამდე.
                </p>
                <p className="text-sm sm:text-base lg:text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                  ჩვენ გვესმის, რომ საქართველოში გადაჭარბებული ფასების გამო მცირე და საშუალო ბიზნესებს არ აქვთ საშუალება რომ ქონდეთ გამართული ვებსაიტი. ჩვენი მიზანია შევცვალოთ ეს რეალობა და შევთავაზოთ ქართულ ბაზარს არსებულზე 30%-ით იაფი პროდუქცია.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
                className="bg-gradient-to-br from-primary-50 to-accent-50 dark:from-gray-900 dark:to-gray-800 p-6 sm:p-8 rounded-xl sm:rounded-2xl border border-primary-100 dark:border-gray-700"
              >
                <h3 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white mb-3 sm:mb-4">რატომ არის ფასები ჩვენთან ხელმისაწვდომი?</h3>
                <ul className="space-y-2 sm:space-y-3 text-sm sm:text-base text-gray-700 dark:text-gray-300">
                  <li className="flex items-start">
                    <FaCheckCircle className="text-green-500 dark:text-green-400 mt-1 mr-3 flex-shrink-0" />
                    <span className="text-gray-700 dark:text-gray-300">ვმუშაობთ გარე თანამშრომლების გარეშე, რაც ამცირებს ხარჯებს</span>
                  </li>
                  <li className="flex items-start">
                    <FaCheckCircle className="text-green-500 dark:text-green-400 mt-1 mr-3 flex-shrink-0" />
                    <span className="text-gray-700 dark:text-gray-300">ვიყენებთ თანამედროვე ინსტრუმენტებს და ფრეიმვორკებს, რაც აჩქარებს დეველოპმენტს</span>
                  </li>
                  <li className="flex items-start">
                    <FaCheckCircle className="text-green-500 dark:text-green-400 mt-1 mr-3 flex-shrink-0" />
                    <span className="text-gray-700 dark:text-gray-300">გვაქვს ოპტიმიზირებული სამუშაო პროცესები</span>
                  </li>
                  <li className="flex items-start">
                    <FaCheckCircle className="text-green-500 dark:text-green-400 mt-1 mr-3 flex-shrink-0" />
                    <span className="text-gray-700 dark:text-gray-300">ჩვენი მიზანია დავეხმაროთ საქართველოს ციფრულ განვითარებას.</span>
                  </li>
                </ul>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-12 sm:py-16 md:py-20 bg-gray-50 dark:bg-transparent transition-colors duration-300">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-8 sm:mb-12 md:mb-16">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-3 sm:mb-4">
                ჩვენი ღირებულებები
              </h2>
              <p className="text-base sm:text-lg lg:text-xl text-gray-600 dark:text-gray-300">
                პრინციპები და სამუშაო ეთიკა, რომელსაც არასდროს ვუღალატებთ
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 max-w-5xl mx-auto">
              {values.map((value, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white dark:bg-gray-900 p-6 sm:p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all hover:-translate-y-1 duration-300 border border-gray-100 dark:border-gray-800"
                >
                  <div className="mb-3 sm:mb-4">{value.icon}</div>
                  <h3 className="text-lg sm:text-xl font-semibold text-gray-900 dark:text-white mb-2 sm:mb-3">{value.title}</h3>
                  <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300">{value.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Achievements Section */}
        <section className="py-12 sm:py-16 md:py-20 bg-gradient-to-br from-primary-600 to-primary-700 dark:from-gray-900 dark:to-gray-950 text-white border-t border-primary-500/20 dark:border-white/5">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-8 sm:mb-10 md:mb-12">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4">
                ჩვენი მიღწევები
              </h2>
            </div>

            <div className="flex flex-wrap justify-center gap-8 sm:gap-12 md:gap-16 max-w-6xl mx-auto">
              {achievements.map((achievement, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="text-center"
                >
                  <div className="mb-3 sm:mb-4 flex justify-center scale-90 sm:scale-100">{achievement.icon}</div>
                  <div className="text-3xl sm:text-4xl font-bold mb-1 sm:mb-2">{achievement.number}</div>
                  <div className="text-sm sm:text-base text-primary-100">{achievement.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose Us Section */}
        <section className="py-12 sm:py-16 md:py-20 bg-gray-50 dark:bg-transparent transition-colors duration-300 border-t border-gray-100 dark:border-white/5">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-8 sm:mb-12 md:mb-16">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-4">
                რატომ ავირჩიოთ PixelWeb?
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 max-w-6xl mx-auto">
              {whyChooseUs.map((reason, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white dark:bg-gray-900 p-5 sm:p-6 rounded-xl shadow-md hover:shadow-lg transition-all hover:-translate-y-1 duration-300 border border-gray-100 dark:border-gray-800"
                >
                  <div className="flex items-start">
                    <FaCheckCircle className="text-primary-600 dark:text-primary-400 text-lg sm:text-xl mt-1 mr-2 sm:mr-3 flex-shrink-0" />
                    <div>
                      <h3 className="text-base sm:text-lg font-semibold text-gray-900 dark:text-white mb-1 sm:mb-2">{reason.title}</h3>
                      <p className="text-gray-600 dark:text-gray-300 text-xs sm:text-sm">{reason.description}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-12 sm:py-16 md:py-20 bg-gradient-to-r from-primary-600 to-primary-700 dark:from-gray-950 dark:to-gray-900 text-white border-t border-primary-500/20 dark:border-white/5">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 sm:mb-6">
                გაიგეთ მეტი ჩვენს შესახებ
              </h2>
              <p className="text-base sm:text-lg lg:text-xl text-primary-100 mb-6 sm:mb-8 max-w-2xl mx-auto">
                გვაქვს პასუხი თქვენს ყველა კითხვაზე
              </p>
              <a
                href="/contact"
                className="inline-block bg-white text-primary-600 px-6 sm:px-8 py-3 sm:py-4 rounded-lg hover:bg-gray-100 transition-all hover:shadow-xl transform hover:-translate-y-1 font-semibold text-base sm:text-lg"
              >
                დაგვიკავშირდით
              </a>
            </motion.div>
          </div>
        </section>
      </div>
    </PageTransition>
  )
}

export default ClientAbout

