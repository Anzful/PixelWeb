'use client'

import Link from 'next/link'
import { FaRocket, FaMoneyBillWave, FaClock, FaCheck, FaArrowRight, FaCode, FaMobile, FaPalette } from 'react-icons/fa'
import { motion } from 'framer-motion'

const HomePage = () => {
  const features = [
    {
      icon: <FaMoneyBillWave className="text-4xl text-primary-600 dark:text-primary-400" />,
      title: 'ხელმისაწვდომი ფასები',
      description: 'ბაზრის ფასებთან შედარებით 60%-მდე იაფია. ხარისხიანი ვებსაიტები ყველასთვის ხელმისაწვდომ ფასად.'
    },
    {
      icon: <FaClock className="text-4xl text-primary-600 dark:text-primary-400" />,
      title: 'სწრაფი მიწოდება',
      description: 'თქვენი პროექტი მზად იქნება მოკლე ვადებში. ჩვენ ვაფასებთ თქვენს დროს.'
    },
    {
      icon: <FaRocket className="text-4xl text-primary-600 dark:text-primary-400" />,
      title: 'თანამედროვე დიზაინი',
      description: 'ულტრა თანამედროვე, სწრაფი და მობილურზე ოპტიმიზირებული ვებსაიტები.'
    },
    {
      icon: <FaCode className="text-4xl text-primary-600 dark:text-primary-400" />,
      title: 'პროფესიონალური კოდი',
      description: 'სუფთა, ოპტიმიზირებული და მასშტაბირებადი კოდი უახლესი ტექნოლოგიებით.'
    },
    {
      icon: <FaMobile className="text-4xl text-primary-600 dark:text-primary-400" />,
      title: 'რესპონსიული დიზაინი',
      description: 'თქვენი საიტი იდეალურად გამოიყურება ყველა მოწყობილობაზე.'
    },
    {
      icon: <FaPalette className="text-4xl text-primary-600 dark:text-primary-400" />,
      title: 'მორგებული გადაწყვეტილებები',
      description: 'ყველა პროექტი უნიკალურია და შექმნილია თქვენი საჭიროებების მიხედვით.'
    }
  ]

  const stats = [
    { number: '60%', label: 'იაფია ბაზართან' },
    { number: '100+', label: 'დასრულებული პროექტი' },
    { number: '7', label: 'დღიანი მიწოდება' },
    { number: '99%', label: 'კმაყოფილი კლიენტები' }
  ]

  const pricingPreview = [
    {
      name: 'Landing Page',
      price: '500',
      features: ['1 გვერდი', 'რესპონსიული დიზაინი', 'კონტაქტის ფორმა', '3 დღიანი მიწოდება']
    },
    {
      name: 'საწარმოს საიტი',
      price: '1,500',
      popular: true,
      features: ['5-7 გვერდი', 'თანამედროვე დიზაინი', 'ადმინ პანელი', 'SEO ოპტიმიზაცია', '7 დღიანი მიწოდება']
    },
    {
      name: 'E-Commerce',
      price: '3,500',
      features: ['უსასრულო პროდუქტი', 'გადახდის სისტემა', 'ინვენტარის მართვა', 'ანალიტიკა', '14 დღიანი მიწოდება']
    }
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-gradient-to-br from-primary-50 via-white to-accent-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 overflow-hidden transition-colors duration-300">
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-6">
              პროფესიონალური ვებსაიტები
              <span className="block text-primary-600 dark:text-primary-400 mt-2">ხელმისაწვდომ ფასად</span>
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
              ჩვენ ვქმნით თანამედროვე, სწრაფ და ხარისხიან ვებსაიტებს საქართველოში, ბაზრის ფასებზე 60%-მდე იაფად.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/services"
                className="bg-primary-600 text-white px-8 py-4 rounded-lg hover:bg-primary-700 transition-all hover:shadow-xl transform hover:-translate-y-1 font-semibold text-lg inline-flex items-center justify-center"
              >
                იხილეთ სერვისები
                <FaArrowRight className="ml-2" />
              </Link>
              <Link
                href="/portfolio"
                className="bg-white text-primary-600 border-2 border-primary-600 px-8 py-4 rounded-lg hover:bg-primary-50 transition-all hover:shadow-xl transform hover:-translate-y-1 font-semibold text-lg"
              >
                ნახეთ პორტფოლიო
              </Link>
            </div>
          </motion.div>

          {/* Stats */}
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="grid grid-cols-2 lg:grid-cols-4 gap-8 mt-16 max-w-4xl mx-auto"
          >
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl lg:text-4xl font-bold text-primary-600 dark:text-primary-400 mb-2">{stat.number}</div>
                <div className="text-gray-600 dark:text-gray-300">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white dark:bg-gray-900 transition-colors duration-300">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              რატომ ავირჩიოთ WebSmiths?
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              ჩვენ გთავაზობთ საუკეთესო ხარისხს ყველაზე ხელმისაწვდომ ფასად საქართველოში
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 dark:border-gray-700 hover:-translate-y-2"
              >
                <div className="mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">{feature.title}</h3>
                <p className="text-gray-600 dark:text-gray-300">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Preview Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-primary-50 dark:from-gray-800 dark:to-gray-900 transition-colors duration-300">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              მარტივი და გამჭვირვალე ფასები
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              აირჩიეთ თქვენთვის შესაფერისი პაკეტი. ყველა პაკეტი მოიცავს უფასო ტექნიკურ მხარდაჭერას.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {pricingPreview.map((plan, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8 transition-colors duration-300 ${
                  plan.popular ? 'ring-4 ring-primary-600 dark:ring-primary-400 transform scale-105' : ''
                }`}
              >
                {plan.popular && (
                  <div className="bg-primary-600 dark:bg-primary-500 text-white text-sm font-semibold px-4 py-1 rounded-full inline-block mb-4">
                    ყველაზე პოპულარული
                  </div>
                )}
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">{plan.name}</h3>
                <div className="mb-6">
                  <span className="text-4xl font-bold text-primary-600 dark:text-primary-400">{plan.price}</span>
                  <span className="text-gray-600 dark:text-gray-300 ml-2">₾</span>
                </div>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-start">
                      <FaCheck className="text-green-500 dark:text-green-400 mt-1 mr-3 flex-shrink-0" />
                      <span className="text-gray-600 dark:text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Link
                  href="/services"
                  className="block text-center bg-primary-600 text-white px-6 py-3 rounded-lg hover:bg-primary-700 transition-all font-semibold"
                >
                  შეიტყვეთ მეტი
                </Link>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              href="/services"
              className="text-primary-600 dark:text-primary-400 font-semibold text-lg hover:text-primary-700 dark:hover:text-primary-300 inline-flex items-center"
            >
              იხილეთ ყველა სერვისი
              <FaArrowRight className="ml-2" />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary-600 to-primary-700 dark:from-primary-700 dark:to-primary-800 transition-colors duration-300">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
              მზად ხართ დავიწყოთ თქვენი პროექტი?
            </h2>
            <p className="text-xl text-primary-100 dark:text-primary-200 mb-8 max-w-2xl mx-auto">
              დაგვიკავშირდით დღესვე და მიიღეთ უფასო კონსულტაცია თქვენი პროექტის შესახებ
            </p>
            <Link
              href="/contact"
              className="bg-white text-primary-600 px-8 py-4 rounded-lg hover:bg-gray-100 transition-all hover:shadow-xl transform hover:-translate-y-1 font-semibold text-lg inline-block"
            >
              დაგვიკავშირდით
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default HomePage

