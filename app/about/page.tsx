'use client'

import { motion } from 'framer-motion'
import { FaCheckCircle, FaHeart, FaLightbulb, FaRocket, FaUsers, FaAward } from 'react-icons/fa'
import PageTransition from '@/components/PageTransition'

const AboutPage = () => {
  const values = [
    {
      icon: <FaHeart className="text-4xl text-primary-600" />,
      title: 'ვაფასებთ თითოეულ კლიენტს',
      description: 'თითოეული პროექტი ჩვენთვის უნიკალურია. ჩვენ ვუსმენთ თქვენს საჭიროებებს და ვქმნით გადაწყვეტას, რომელიც აღემატება მოლოდინებს.'
    },
    {
      icon: <FaLightbulb className="text-4xl text-primary-600" />,
      title: 'ინოვაცია და ხარისხი',
      description: 'ვიყენებთ უახლეს ტექნოლოგიებს და საუკეთესო პრაქტიკას, რათა შევქმნათ თანამედროვე, სწრაფი და მომხმარებლისთვის მოსახერხებელი ვებსაიტები.'
    },
    {
      icon: <FaRocket className="text-4xl text-primary-600" />,
      title: 'სწრაფი მიწოდება',
      description: 'დრო ფულია. ჩვენ ვასრულებთ პროექტებს დროულად, მაღალი ხარისხის შენარჩუნებით. არანაირი დაყოვნება.'
    },
    {
      icon: <FaCheckCircle className="text-4xl text-primary-600" />,
      title: 'გამჭვირვალობა',
      description: 'ღია და გამჭვირვალე ფასები, ნათელი კომუნიკაცია და რეგულარული განახლებები პროექტის მიმდინარეობის შესახებ.'
    }
  ]

  const achievements = [
    {
      icon: <FaUsers className="text-5xl text-primary-600" />,
      number: '85+',
      label: 'კმაყოფილი კლიენტი'
    },
    {
      icon: <FaRocket className="text-5xl text-primary-600" />,
      number: '100+',
      label: 'დასრულებული პროექტი'
    },
    {
      icon: <FaAward className="text-5xl text-primary-600" />,
      number: '99%',
      label: 'წარმატების მაჩვენებელი'
    },
    {
      icon: <FaHeart className="text-5xl text-primary-600" />,
      number: '3+',
      label: 'წლიანი გამოცდილება'
    }
  ]

  const whyChooseUs = [
    {
      title: 'ხელმისაწვდომი ფასები',
      description: 'ბაზრის ფასებთან შედარებით 60%-მდე იაფია, ხარისხის შენარჩუნებით'
    },
    {
      title: 'სწრაფი მიწოდება',
      description: 'Landing Page - 3 დღე, კორპორატიული საიტი - 7 დღე, E-commerce - 14 დღე'
    },
    {
      title: 'უახლესი ტექნოლოგიები',
      description: 'React, Next.js, Node.js - სწრაფი, უსაფრთხო და მასშტაბირებადი გადაწყვეტები'
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
      <section className="bg-gradient-to-br from-primary-600 to-primary-700 text-white py-12 sm:py-16 md:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6">
              ჩვენ შესახებ
            </h1>
            <p className="text-base sm:text-lg lg:text-xl text-primary-100">
              ჩვენ ვართ ახალგაზრდა და ენერგიული გუნდი, რომელიც მიზნად ისახავს ხარისხიანი ვებსაიტების შექმნას ხელმისაწვდომ ფასად საქართველოში.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-12 sm:py-16 md:py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4 sm:mb-6">
                ჩვენი მისია
              </h2>
              <p className="text-base sm:text-lg lg:text-xl text-gray-600 leading-relaxed mb-4 sm:mb-6">
                <strong className="text-primary-600">WebSmiths.btw</strong> შეიქმნა იმ იდეით, რომ პროფესიონალური ვებსაიტები ხელმისაწვდომი უნდა იყოს ყველასთვის - პატარა ბიზნესიდან დიდ კორპორაციებამდე.
              </p>
              <p className="text-sm sm:text-base lg:text-lg text-gray-600 leading-relaxed">
                ჩვენ გვესმის, რომ საქართველოში ბევრი მცირე და საშუალო ბიზნესი ვერ იძენს ვებსაიტს მაღალი ფასების გამო. ჩვენი მიზანია შევცვალოთ ეს რეალობა და შევთავაზოთ ბაზარზე არსებულზე 60%-მდე იაფი, მაგრამ იგივე ხარისხის ან უფრო მაღალი ხარისხის ვებსაიტები.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-primary-50 to-accent-50 p-6 sm:p-8 rounded-xl sm:rounded-2xl"
            >
              <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3 sm:mb-4">რატომ ვართ იაფი?</h3>
              <ul className="space-y-2 sm:space-y-3 text-sm sm:text-base text-gray-700">
                <li className="flex items-start">
                  <FaCheckCircle className="text-green-500 mt-1 mr-3 flex-shrink-0" />
                  <span>ვმუშაობთ გარე თანამშრომლების გარეშე, რაც ამცირებს ხარჯებს</span>
                </li>
                <li className="flex items-start">
                  <FaCheckCircle className="text-green-500 mt-1 mr-3 flex-shrink-0" />
                  <span>ვიყენებთ თანამედროვე ინსტრუმენტებს და ფრეიმვორკებს, რაც აჩქარებს დეველოპმენტს</span>
                </li>
                <li className="flex items-start">
                  <FaCheckCircle className="text-green-500 mt-1 mr-3 flex-shrink-0" />
                  <span>გვაქვს ოპტიმიზირებული სამუშაო პროცესები</span>
                </li>
                <li className="flex items-start">
                  <FaCheckCircle className="text-green-500 mt-1 mr-3 flex-shrink-0" />
                  <span>ჩვენი მიზანია დავეხმაროთ საქართველოს ციფრულ განვითარებას, არა მხოლოდ მოგება</span>
                </li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-12 sm:py-16 md:py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 sm:mb-12 md:mb-16">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-3 sm:mb-4">
              ჩვენი ღირებულებები
            </h2>
            <p className="text-base sm:text-lg lg:text-xl text-gray-600">
              ის პრინციპები, რომლითაც ვხელმძღვანელობთ ყოველდღიურ სამუშაოში
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
                className="bg-white p-6 sm:p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all hover:-translate-y-1 duration-300"
              >
                <div className="mb-3 sm:mb-4">{value.icon}</div>
                <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2 sm:mb-3">{value.title}</h3>
                <p className="text-sm sm:text-base text-gray-600">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section className="py-12 sm:py-16 md:py-20 bg-gradient-to-br from-primary-600 to-primary-700 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 sm:mb-10 md:mb-12">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4">
              ჩვენი მიღწევები
            </h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 max-w-6xl mx-auto">
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
      <section className="py-12 sm:py-16 md:py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 sm:mb-12 md:mb-16">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              რატომ ავირჩიოთ WebSmiths?
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
                className="bg-white p-5 sm:p-6 rounded-xl shadow-md hover:shadow-lg transition-all hover:-translate-y-1 duration-300"
              >
                <div className="flex items-start">
                  <FaCheckCircle className="text-primary-600 text-lg sm:text-xl mt-1 mr-2 sm:mr-3 flex-shrink-0" />
                  <div>
                    <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-1 sm:mb-2">{reason.title}</h3>
                    <p className="text-gray-600 text-xs sm:text-sm">{reason.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 sm:py-16 md:py-20 bg-gradient-to-r from-primary-600 to-primary-700 text-white">
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

export default AboutPage

