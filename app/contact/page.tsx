'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaFacebook, FaInstagram, FaLinkedin, FaPaperPlane } from 'react-icons/fa'
import PageTransition from '@/components/PageTransition'

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    service: '',
    budget: '',
    message: ''
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false)
      setSubmitStatus('success')
      setFormData({
        name: '',
        email: '',
        phone: '',
        company: '',
        service: '',
        budget: '',
        message: ''
      })

      // Reset success message after 5 seconds
      setTimeout(() => {
        setSubmitStatus('idle')
      }, 5000)
    }, 1500)
  }

  const contactInfo = [
    {
      icon: <FaMapMarkerAlt className="text-3xl text-primary-600" />,
      title: 'მისამართი',
      info: 'თბილისი, საქართველო',
      subInfo: 'დისტანციურად მივიღებთ შეკვეთებს მთელი საქართველოდან'
    },
    {
      icon: <FaPhone className="text-3xl text-primary-600" />,
      title: 'ტელეფონი',
      info: '+995 XXX XX XX XX',
      subInfo: 'ორშაბათი - შაბათი: 10:00 - 19:00'
    },
    {
      icon: <FaEnvelope className="text-3xl text-primary-600" />,
      title: 'ელ-ფოსტა',
      info: 'info@websmiths.btw',
      subInfo: 'პასუხს გიგზავნით 24 საათში'
    }
  ]

  const services = [
    'Landing Page (500-800 ₾)',
    'საწარმოს ვებსაიტი (1,500-2,500 ₾)',
    'E-Commerce (3,000-5,000 ₾)',
    'პორტფოლიო საიტი (800-1,200 ₾)',
    'მორგებული პროექტი',
    'არ ვარ დარწმუნებული'
  ]

  const budgets = [
    'აქამდე 1,000 ₾',
    '1,000 - 2,000 ₾',
    '2,000 - 3,000 ₾',
    '3,000 - 5,000 ₾',
    '5,000 ₾+',
    'მოვალაპარაკოთ'
  ]

  return (
    <PageTransition>
      <div className="min-h-screen pt-20">
        {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-600 to-primary-700 text-white py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">
              დაგვიკავშირდით
            </h1>
            <p className="text-xl text-primary-100">
              მზად ვართ მოვისმინოთ თქვენი იდეა და დავგეგმოთ თქვენი საიტის შექმნა. მიიღეთ უფასო კონსულტაცია და ფასის შეთავაზება.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto -mt-20">
            {contactInfo.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white p-6 rounded-xl shadow-lg text-center hover:shadow-2xl transition-all"
              >
                <div className="flex justify-center mb-4">{item.icon}</div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-primary-600 font-medium mb-1">{item.info}</p>
                <p className="text-sm text-gray-500">{item.subInfo}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Main Content - Form and Info */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Contact Form */}
            <div className="lg:col-span-2">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl shadow-xl p-8"
              >
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  გამოგვიგზავნეთ შეტყობინება
                </h2>

                {submitStatus === 'success' && (
                  <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg text-green-700">
                    ✅ თქვენი შეტყობინება წარმატებით გაიგზავნა! ჩვენ დაგიკავშირდებით მალე.
                  </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                        სახელი და გვარი *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition"
                        placeholder="თქვენი სახელი"
                      />
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                        ელ-ფოსტა *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition"
                        placeholder="example@email.com"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                        ტელეფონი
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition"
                        placeholder="+995 XXX XX XX XX"
                      />
                    </div>

                    <div>
                      <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">
                        კომპანია/ბიზნესი
                      </label>
                      <input
                        type="text"
                        id="company"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition"
                        placeholder="კომპანიის სახელი"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-2">
                        რა სერვისი გაინტერესებთ? *
                      </label>
                      <select
                        id="service"
                        name="service"
                        required
                        value={formData.service}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition bg-white"
                      >
                        <option value="">აირჩიეთ სერვისი</option>
                        {services.map((service, index) => (
                          <option key={index} value={service}>
                            {service}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label htmlFor="budget" className="block text-sm font-medium text-gray-700 mb-2">
                        თქვენი ბიუჯეტი
                      </label>
                      <select
                        id="budget"
                        name="budget"
                        value={formData.budget}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition bg-white"
                      >
                        <option value="">აირჩიეთ ბიუჯეტი</option>
                        {budgets.map((budget, index) => (
                          <option key={index} value={budget}>
                            {budget}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                      შეტყობინება *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      value={formData.message}
                      onChange={handleChange}
                      rows={6}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition resize-none"
                      placeholder="მოგვიყევით თქვენი პროექტის შესახებ..."
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-primary-600 text-white px-8 py-4 rounded-lg hover:bg-primary-700 transition-all hover:shadow-xl transform hover:-translate-y-1 font-semibold text-lg disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
                  >
                    {isSubmitting ? (
                      <>
                        <span className="animate-spin mr-2">⏳</span>
                        იგზავნება...
                      </>
                    ) : (
                      <>
                        გაგზავნა
                        <FaPaperPlane className="ml-2" />
                      </>
                    )}
                  </button>
                </form>
              </motion.div>
            </div>

            {/* Sidebar Info */}
            <div className="lg:col-span-1">
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="space-y-6"
              >
                {/* Working Hours */}
                <div className="bg-white rounded-2xl shadow-lg p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">სამუშაო საათები</h3>
                  <div className="space-y-3 text-gray-600">
                    <div className="flex justify-between">
                      <span>ორშაბათი - პარასკევი</span>
                      <span className="font-semibold">10:00 - 19:00</span>
                    </div>
                    <div className="flex justify-between">
                      <span>შაბათი</span>
                      <span className="font-semibold">11:00 - 17:00</span>
                    </div>
                    <div className="flex justify-between">
                      <span>კვირა</span>
                      <span className="font-semibold text-red-500">დახურულია</span>
                    </div>
                  </div>
                </div>

                {/* FAQ */}
                <div className="bg-gradient-to-br from-primary-50 to-accent-50 rounded-2xl p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">ხშირი კითხვები</h3>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">რამდენი ხანი სჭირდება?</h4>
                      <p className="text-sm text-gray-600">Landing Page - 3-5 დღე, საწარმოს საიტი - 7-10 დღე, E-commerce - 14-21 დღე</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">შევძლებ გადახდას ეტაპობრივად?</h4>
                      <p className="text-sm text-gray-600">დიახ, შესაძლებელია 50% წინასწარ და 50% გაშვებისას</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">მოიცავს ჰოსტინგს?</h4>
                      <p className="text-sm text-gray-600">ჰოსტინგი და დომენი ცალკე იხდის, ჩვენ დაგეხმარებით მოწყობაში</p>
                    </div>
                  </div>
                </div>

                {/* Social Media */}
                <div className="bg-white rounded-2xl shadow-lg p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">დაგვიმეგობრდით</h3>
                  <div className="flex space-x-4">
                    <a
                      href="#"
                      className="w-12 h-12 bg-primary-100 text-primary-600 rounded-full flex items-center justify-center hover:bg-primary-600 hover:text-white transition-all"
                    >
                      <FaFacebook size={24} />
                    </a>
                    <a
                      href="#"
                      className="w-12 h-12 bg-primary-100 text-primary-600 rounded-full flex items-center justify-center hover:bg-primary-600 hover:text-white transition-all"
                    >
                      <FaInstagram size={24} />
                    </a>
                    <a
                      href="#"
                      className="w-12 h-12 bg-primary-100 text-primary-600 rounded-full flex items-center justify-center hover:bg-primary-600 hover:text-white transition-all"
                    >
                      <FaLinkedin size={24} />
                    </a>
                  </div>
                </div>

                {/* Response Time */}
                <div className="bg-gradient-to-r from-primary-600 to-primary-700 text-white rounded-2xl p-6 text-center">
                  <div className="text-4xl mb-2">⚡</div>
                  <h3 className="text-xl font-bold mb-2">სწრაფი პასუხი</h3>
                  <p className="text-primary-100">
                    პასუხს გიგზავნით 24 საათში
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section (Placeholder) */}
      <section className="py-0">
        <div className="w-full h-96 bg-gray-200 relative overflow-hidden">
          <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-primary-200 to-primary-300">
            <div className="text-center">
              <div className="text-6xl mb-4">📍</div>
              <h3 className="text-2xl font-bold text-gray-800 mb-2">თბილისი, საქართველო</h3>
              <p className="text-gray-600">დისტანციურად ვმუშაობთ მთელი საქართველოს მასშტაბით</p>
            </div>
          </div>
        </div>
      </section>
      </div>
    </PageTransition>
  )
}

export default ContactPage

