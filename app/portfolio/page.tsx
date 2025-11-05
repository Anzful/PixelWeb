'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { FaExternalLinkAlt, FaCode } from 'react-icons/fa'

const PortfolioPage = () => {
  const [filter, setFilter] = useState('all')

  const projects = [
    {
      id: 1,
      title: 'მშენებლობის კომპანია "ბილდერი"',
      category: 'corporate',
      image: '/images/portfolio/builder.jpg',
      description: 'თანამედროვე საიტი მშენებლობის კომპანიისთვის პროექტების გალერეით და კონტაქტის ფორმით',
      technologies: ['Next.js', 'Tailwind CSS', 'Framer Motion'],
      deliveryTime: '7 დღე',
      price: '1,800 ₾',
      features: ['6 გვერდი', 'პროექტების გალერეა', 'კონტაქტის ფორმა', 'SEO ოპტიმიზაცია']
    },
    {
      id: 2,
      title: 'რესტორანი "საქართველო"',
      category: 'restaurant',
      image: '/images/portfolio/restaurant.jpg',
      description: 'ელეგანტური ვებსაიტი რესტორნისთვის მენიუთი და ონლაინ დაჯავშნის სისტემით',
      technologies: ['React', 'Node.js', 'MongoDB'],
      deliveryTime: '10 დღე',
      price: '2,200 ₾',
      features: ['ონლაინ დაჯავშნა', 'ციფრული მენიუ', 'მრავალენოვანი', 'ფოტო გალერეა']
    },
    {
      id: 3,
      title: 'ონლაინ მაღაზია "StyleHub"',
      category: 'ecommerce',
      image: '/images/portfolio/fashion-store.jpg',
      description: 'სრული ფუნქციონალის ონლაინ მაღაზია ტანსაცმლის გაყიდვისთვის',
      technologies: ['Next.js', 'Stripe', 'PostgreSQL'],
      deliveryTime: '18 დღე',
      price: '4,500 ₾',
      features: ['გადახდის სისტემა', 'ინვენტარის მართვა', '500+ პროდუქტი', 'ფილტრაცია']
    },
    {
      id: 4,
      title: 'ადვოკატის საიტი - ნინო გელაშვილი',
      category: 'personal',
      image: '/images/portfolio/lawyer.jpg',
      description: 'პროფესიონალური საიტი იურისტისთვის',
      technologies: ['Next.js', 'Tailwind CSS'],
      deliveryTime: '5 დღე',
      price: '1,200 ₾',
      features: ['პორტფოლიო', 'ბლოგი', 'კონსულტაციის დაჯავშნა', 'SEO']
    },
    {
      id: 5,
      title: 'ფიტნეს კლუბი "ActiveLife"',
      category: 'corporate',
      image: '/images/portfolio/fitness.jpg',
      description: 'ინტერაქტიული საიტი ფიტნეს ცენტრისთვის აბონემენტების სისტემით',
      technologies: ['React', 'Firebase', 'Stripe'],
      deliveryTime: '12 დღე',
      price: '2,800 ₾',
      features: ['აბონემენტების სისტემა', 'ჯგუფური ვარჯიშები', 'ონლაინ დაჯავშნა', 'გადახდა']
    },
    {
      id: 6,
      title: 'კაფე "Coffee Corner"',
      category: 'restaurant',
      image: '/images/portfolio/cafe.jpg',
      description: 'მინიმალისტური Landing Page კაფესთვის',
      technologies: ['Next.js', 'Tailwind CSS'],
      deliveryTime: '3 დღე',
      price: '650 ₾',
      features: ['1 გვერდი', 'მენიუ', 'მდებარეობა', 'სოციალური მედია']
    },
    {
      id: 7,
      title: 'სამედიცინო კლინიკა "MediCare"',
      category: 'healthcare',
      image: '/images/portfolio/medical.jpg',
      description: 'თანამედროვე საიტი კლინიკისთვის ექიმებთან ვიზიტის დაჯავშნით',
      technologies: ['Next.js', 'PostgreSQL', 'Calendar API'],
      deliveryTime: '14 დღე',
      price: '3,200 ₾',
      features: ['ვიზიტის დაჯავშნა', 'ექიმების პროფილები', 'ბლოგი', 'ონლაინ კონსულტაცია']
    },
    {
      id: 8,
      title: 'IT სპეციალისტის პორტფოლიო',
      category: 'personal',
      image: '/images/portfolio/dev-portfolio.jpg',
      description: 'კრეატიული პორტფოლიო საიტი დეველოპერისთვის',
      technologies: ['Next.js', 'Three.js', 'Framer Motion'],
      deliveryTime: '6 დღე',
      price: '900 ₾',
      features: ['3D ანიმაციები', 'პროექტების showcase', 'ბლოგი', 'კონტაქტის ფორმა']
    },
    {
      id: 9,
      title: 'უძრავი ქონების სააგენტო "HomeHub"',
      category: 'realestate',
      image: '/images/portfolio/realestate.jpg',
      description: 'ვებ პლატფორმა უძრავი ქონების ყიდვა-გაყიდვისთვის',
      technologies: ['Next.js', 'MongoDB', 'Mapbox'],
      deliveryTime: '16 დღე',
      price: '3,800 ₾',
      features: ['ძიების ფილტრები', 'ინტერაქტიული რუკა', 'ფოტო გალერეა', 'CRM სისტემა']
    }
  ]

  const categories = [
    { id: 'all', label: 'ყველა' },
    { id: 'corporate', label: 'კორპორატიული' },
    { id: 'ecommerce', label: 'E-Commerce' },
    { id: 'restaurant', label: 'რესტორანი/კაფე' },
    { id: 'personal', label: 'პირადი/პორტფოლიო' },
    { id: 'healthcare', label: 'ჯანდაცვა' },
    { id: 'realestate', label: 'უძრავი ქონება' }
  ]

  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(project => project.category === filter)

  return (
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
              ჩვენი პროექტები
            </h1>
            <p className="text-xl text-primary-100">
              ნახეთ რას ვქმნით ჩვენი კლიენტებისთვის. თითოეული პროექტი არის უნიკალური და შექმნილია სიყვარულით.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-white border-b">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto text-center">
            <div>
              <div className="text-3xl lg:text-4xl font-bold text-primary-600 mb-2">100+</div>
              <div className="text-gray-600">დასრულებული პროექტი</div>
            </div>
            <div>
              <div className="text-3xl lg:text-4xl font-bold text-primary-600 mb-2">85+</div>
              <div className="text-gray-600">კმაყოფილი კლიენტი</div>
            </div>
            <div>
              <div className="text-3xl lg:text-4xl font-bold text-primary-600 mb-2">99%</div>
              <div className="text-gray-600">წარმატების მაჩვენებელი</div>
            </div>
            <div>
              <div className="text-3xl lg:text-4xl font-bold text-primary-600 mb-2">24/7</div>
              <div className="text-gray-600">მხარდაჭერა</div>
            </div>
          </div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-8 bg-gray-50 sticky top-20 z-40 shadow-sm">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setFilter(category.id)}
                className={`px-6 py-2.5 rounded-lg font-medium transition-all ${
                  filter === category.id
                    ? 'bg-primary-600 text-white shadow-lg'
                    : 'bg-white text-gray-700 hover:bg-primary-50 hover:text-primary-600'
                }`}
              >
                {category.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 group"
              >
                {/* Image Placeholder */}
                <div className="relative h-64 bg-gradient-to-br from-primary-100 to-primary-200 overflow-hidden">
                  <div className="absolute inset-0 flex items-center justify-center bg-primary-600 bg-opacity-0 group-hover:bg-opacity-90 transition-all duration-300">
                    <div className="transform scale-0 group-hover:scale-100 transition-transform duration-300 flex gap-4">
                      <button className="bg-white text-primary-600 p-3 rounded-full hover:bg-primary-50">
                        <FaExternalLinkAlt size={20} />
                      </button>
                      <button className="bg-white text-primary-600 p-3 rounded-full hover:bg-primary-50">
                        <FaCode size={20} />
                      </button>
                    </div>
                  </div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-6xl text-primary-300 opacity-30">
                      {project.category === 'ecommerce' && '🛒'}
                      {project.category === 'restaurant' && '🍽️'}
                      {project.category === 'corporate' && '🏢'}
                      {project.category === 'personal' && '👤'}
                      {project.category === 'healthcare' && '⚕️'}
                      {project.category === 'realestate' && '🏠'}
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-primary-600 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 mb-4 text-sm">
                    {project.description}
                  </p>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech, i) => (
                      <span
                        key={i}
                        className="text-xs bg-primary-50 text-primary-700 px-3 py-1 rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Features */}
                  <div className="mb-4">
                    <div className="flex flex-wrap gap-2">
                      {project.features.slice(0, 3).map((feature, i) => (
                        <span key={i} className="text-xs text-gray-500">
                          ✓ {feature}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Footer */}
                  <div className="flex justify-between items-center pt-4 border-t">
                    <div>
                      <div className="text-xs text-gray-500">მიწოდება</div>
                      <div className="font-semibold text-gray-900">{project.deliveryTime}</div>
                    </div>
                    <div className="text-right">
                      <div className="text-xs text-gray-500">ღირებულება</div>
                      <div className="text-xl font-bold text-primary-600">{project.price}</div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {filteredProjects.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-500 text-lg">ამ კატეგორიაში პროექტები არ მოიძებნა</p>
            </div>
          )}
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              რას ამბობენ კლიენტები
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              {
                name: 'გიორგი მელაძე',
                company: 'მშენებლობის კომპანია',
                text: 'შესანიშნავი სამუშაო! საიტი მზად იყო 7 დღეში და ფასი ნამდვილად ხელმისაწვდომი იყო. რეკომენდაციას ვუწევ!',
                rating: 5
              },
              {
                name: 'ნინო ლობჟანიძე',
                company: 'ონლაინ მაღაზია',
                text: 'პროფესიონალური გუნდი, მაღალი ხარისხი. E-commerce საიტმა გაყიდვები 40%-ით გაზარდა. მადლობა!',
                rating: 5
              },
              {
                name: 'დავით წულაძე',
                company: 'რესტორანი',
                text: 'სწრაფი მიწოდება, თანამედროვე დიზაინი და ხელმისაწვდომი ფასი. ზუსტად ის რაც მჭირდებოდა!',
                rating: 5
              }
            ].map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gray-50 p-6 rounded-xl"
              >
                <div className="flex mb-3">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <span key={i} className="text-yellow-400 text-xl">★</span>
                  ))}
                </div>
                <p className="text-gray-600 mb-4 italic">"{testimonial.text}"</p>
                <div>
                  <div className="font-semibold text-gray-900">{testimonial.name}</div>
                  <div className="text-sm text-gray-500">{testimonial.company}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary-600 to-primary-700 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">
              მზად ხართ შექმნათ თქვენი საიტი?
            </h2>
            <p className="text-xl text-primary-100 mb-8 max-w-2xl mx-auto">
              დაგვიკავშირდით და მიიღეთ უფასო კონსულტაცია
            </p>
            <a
              href="/contact"
              className="inline-block bg-white text-primary-600 px-8 py-4 rounded-lg hover:bg-gray-100 transition-all hover:shadow-xl transform hover:-translate-y-1 font-semibold text-lg"
            >
              დაიწყეთ პროექტი
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default PortfolioPage

