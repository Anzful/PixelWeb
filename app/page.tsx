'use client'

import Link from 'next/link'
import { FaRocket, FaMoneyBillWave, FaClock, FaCheck, FaArrowRight, FaCode, FaMobile, FaPalette, FaChevronDown, FaHtml5, FaCss3Alt, FaReact, FaNodeJs } from 'react-icons/fa'
import { SiNextdotjs, SiTailwindcss, SiTypescript } from 'react-icons/si'
import { motion, AnimatePresence, useInView } from 'framer-motion'
import PageTransition from '@/components/PageTransition'
import { useState, useEffect, useRef } from 'react'

// Animated counter component
const AnimatedCounter = ({ end, duration = 2000 }: { end: number; duration?: number }) => {
  const [count, setCount] = useState(0)
  const ref = useRef<HTMLSpanElement>(null)
  const isInView = useInView(ref, { once: true, amount: 0.5 })
  const hasAnimated = useRef(false)

  useEffect(() => {
    if (!isInView || hasAnimated.current) return
    hasAnimated.current = true

    let startTime: number | null = null
    let animationFrame: number

    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime
      const progress = Math.min((currentTime - startTime) / duration, 1)
      const easeOutQuart = 1 - Math.pow(1 - progress, 4)
      setCount(Math.floor(easeOutQuart * end))

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate)
      }
    }

    animationFrame = requestAnimationFrame(animate)
    return () => cancelAnimationFrame(animationFrame)
  }, [isInView, end, duration])

  return <span ref={ref}>{count}</span>
}

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
    { number: 30, suffix: '%', label: 'იაფი ბაზართან შედარებით' },
    { number: 10, suffix: '+', label: 'დასრულებული პროექტი' },
    { number: 100, suffix: '%', label: 'კმაყოფილი კლიენტები' }
  ]


  const pricingPreview = [
    {
      name: 'Landing Page',
      price: '500-800',
      features: ['1-2 გვერდი', 'რესპონსიული დიზაინი', 'კონტაქტის ფორმა', 'მიწოდების ვადა (მაქს. 3 დღე)']
    },
    {
      name: 'საიტი ბიზნესისთვის',
      price: '1000-2500',
      popular: true,
      features: ['3-7 გვერდი', 'თანამედროვე დიზაინი', 'ადმინ პანელი', 'SEO ოპტიმიზაცია', 'მიწოდების ვადა (მაქს. 7 დღე)']
    },
    {
      name: 'მასშტაბური პროექტები',
      price: '3000-5000',
      features: ['უსასრულო პროდუქტი', 'გადახდის სისტემა', 'ინვენტარის მართვა', 'ანალიტიკა', '14 დღიანი მიწოდება']
    }
  ]

  const faqs = [
    {
      q: 'რამდენი დრო სჭირდება საიტის დამზადებას?',
      a: 'სტანდარტული „საიტის დამზადება“ (Landing ან მცირე ბიზნესი) სრულდება 3-7 დღეში (შეიძლება უფრო სწრაფადაც.). უფრო მასშტაბური „ვებგვერდების დამზადება“ შეიძლება გაგრძელდეს 2-3 კვირა, მოთხოვნებიდან გამომდინარე.'
    },
    {
      q: 'რა ღირს საიტის გაკეთება?',
      a: '„საიტების დამზადება“ იწყება 500-700 ₾-დან (Landing), ბიზნეს საიტები 1,000-2,500 ₾, ხოლო E‑commerce 3,000-5,000 ₾+. ფასები დამოკიდებულია ფუნქციონალზე და დიზაინზე.'
    },
    {
      q: 'შესაძლებელია საიტები იაფად?',
      a: 'კი — PixelWeb გვთავაზობს საიტების დამზადებას ხელმისაწვდომ ფასად ხარისხის დაკარგვის გარეშე.'
    },
    {
      q: 'შესაძლებელია „საიტები სწრაფად“?',
      a: 'დიახ. ვთავაზობთ დაჩქარებულ მიწოდებას — მცირე პროექტები მზად არის 3-5 დღეში. ასევე გვაქვს მკაფიო და მკაცრი გრაფიკი.'
    },
    {
      q: 'შედის თუ არა SEO ოპტიმიზაცია?',
      a: 'ძირითად SEO-ს ვაკეთებთ სტანდარტულად: სუფთა კოდი, სწრაფი ჩატვირთვა, სათაურები/აღწერები, სტრუქტურული მონაცემები. სურვილის შემთხვევაში ვამატებთ გაფართოებულ SEO‑ს და კონტენტის გეგმას.'
    }
  ]

  const [openIndex, setOpenIndex] = useState<number | null>(null)

  // Animated stat component
  const AnimatedStat = ({ number, suffix, label }: { number: number; suffix: string; label: string }) => {
    return (
      <div className="text-center">
        <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-primary-600 dark:text-primary-400 mb-1 sm:mb-2">
          <AnimatedCounter end={number} />{suffix}
        </div>
        <div className="text-xs sm:text-sm md:text-base text-gray-600 dark:text-gray-300">{label}</div>
      </div>
    )
  }

  return (
    <PageTransition>
      <div className="min-h-screen">
        {/* Hero Section */}
      <section className="relative pt-24 sm:pt-28 md:pt-32 pb-12 sm:pb-16 md:pb-20 bg-gradient-to-br from-primary-50 via-white to-accent-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 overflow-hidden transition-colors duration-300">
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
        {/* Animated decorative gradient orbs */}
        <motion.div 
          className="pointer-events-none absolute -top-10 -left-10 w-72 h-72 rounded-full bg-primary-400/25 blur-3xl"
          animate={{ 
            x: [0, 30, 0],
            y: [0, 20, 0],
            scale: [1, 1.1, 1]
          }}
          transition={{ 
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div 
          className="pointer-events-none absolute bottom-0 right-0 w-80 h-80 rounded-full bg-accent-400/25 blur-3xl"
          animate={{ 
            x: [0, -20, 0],
            y: [0, -30, 0],
            scale: [1, 1.15, 1]
          }}
          transition={{ 
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div 
          className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full bg-primary-300/10 dark:bg-primary-400/5 blur-3xl"
          animate={{ 
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3]
          }}
          transition={{ 
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />

        {/* Floating Tech Icons */}
        <motion.div
          className="absolute top-20 left-[5%] text-4xl text-orange-500/60 dark:text-orange-400/40 hidden lg:block"
          animate={{ y: [0, -15, 0], rotate: [0, 10, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        >
          <FaHtml5 />
        </motion.div>
        <motion.div
          className="absolute top-32 right-[8%] text-4xl text-blue-500/60 dark:text-blue-400/40 hidden lg:block"
          animate={{ y: [0, 15, 0], rotate: [0, -10, 0] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
        >
          <FaCss3Alt />
        </motion.div>
        <motion.div
          className="absolute top-48 left-[10%] text-4xl text-cyan-500/60 dark:text-cyan-400/40 hidden lg:block"
          animate={{ y: [0, 12, 0], x: [0, 5, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        >
          <FaReact />
        </motion.div>
        <motion.div
          className="absolute bottom-32 right-[12%] text-4xl text-black/40 dark:text-white/30 hidden lg:block"
          animate={{ y: [0, -10, 0], rotate: [0, 5, 0] }}
          transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 0.3 }}
        >
          <SiNextdotjs />
        </motion.div>
        <motion.div
          className="absolute bottom-48 left-[7%] text-4xl text-green-500/60 dark:text-green-400/40 hidden lg:block"
          animate={{ y: [0, 10, 0], x: [0, -5, 0] }}
          transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut", delay: 0.8 }}
        >
          <FaNodeJs />
        </motion.div>
        <motion.div
          className="absolute top-40 right-[15%] text-3xl text-cyan-400/60 dark:text-cyan-300/40 hidden lg:block"
          animate={{ y: [0, -8, 0], rotate: [0, -5, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1.2 }}
        >
          <SiTailwindcss />
        </motion.div>
        <motion.div
          className="absolute bottom-40 right-[5%] text-3xl text-blue-600/60 dark:text-blue-400/40 hidden lg:block"
          animate={{ y: [0, 12, 0] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.6 }}
        >
          <SiTypescript />
        </motion.div>

        {/* Floating Code Snippet */}
        <motion.div
          className="absolute top-28 right-[3%] hidden xl:block pointer-events-none"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            className="bg-gray-900/90 dark:bg-gray-800/90 backdrop-blur-sm rounded-lg p-4 shadow-2xl border border-gray-700/50"
          >
            <div className="flex items-center gap-2 mb-3">
              <div className="w-3 h-3 rounded-full bg-red-500"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
              <div className="w-3 h-3 rounded-full bg-green-500"></div>
              <span className="text-gray-400 text-xs ml-2">index.tsx</span>
            </div>
            <pre className="text-xs font-mono">
              <code>
                <span className="text-purple-400">const</span> <span className="text-blue-300">Website</span> <span className="text-white">=</span> <span className="text-yellow-300">()</span> <span className="text-purple-400">=&gt;</span> <span className="text-yellow-300">{'{'}</span>{'\n'}
                {'  '}<span className="text-purple-400">return</span> <span className="text-yellow-300">(</span>{'\n'}
                {'    '}<span className="text-gray-400">&lt;</span><span className="text-green-400">div</span><span className="text-gray-400">&gt;</span>{'\n'}
                {'      '}<span className="text-orange-300">✨ თქვენი საიტი</span>{'\n'}
                {'    '}<span className="text-gray-400">&lt;/</span><span className="text-green-400">div</span><span className="text-gray-400">&gt;</span>{'\n'}
                {'  '}<span className="text-yellow-300">)</span>{'\n'}
                <span className="text-yellow-300">{'}'}</span>
              </code>
            </pre>
          </motion.div>
        </motion.div>

        {/* Floating Browser Mockup with Real Content */}
        <motion.div
          className="absolute bottom-20 left-[3%] hidden xl:block pointer-events-none"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
            className="bg-white dark:bg-gray-900 backdrop-blur-sm rounded-lg shadow-2xl border border-gray-200 dark:border-gray-700 overflow-hidden w-72"
          >
            {/* Browser Header */}
            <div className="bg-gray-100 dark:bg-gray-800 px-3 py-2 flex items-center gap-2">
              <div className="w-2.5 h-2.5 rounded-full bg-red-500"></div>
              <div className="w-2.5 h-2.5 rounded-full bg-yellow-500"></div>
              <div className="w-2.5 h-2.5 rounded-full bg-green-500"></div>
              <div className="flex-1 bg-white dark:bg-gray-700 rounded text-[10px] px-2 py-1 text-gray-600 dark:text-gray-300 ml-2 flex items-center">
                <span className="text-green-500 mr-1">🔒</span> pixelweb.ge
              </div>
            </div>
            {/* Mini Website Content */}
            <div className="p-3 bg-gradient-to-br from-primary-50 to-white dark:from-gray-900 dark:to-gray-800">
              {/* Mini Navbar */}
              <div className="flex items-center justify-between mb-3">
                <div className="text-[8px] font-bold text-primary-600 dark:text-primary-400">PixelWeb</div>
                <div className="flex gap-1">
                  <div className="w-4 h-1 bg-gray-300 dark:bg-gray-600 rounded"></div>
                  <div className="w-4 h-1 bg-gray-300 dark:bg-gray-600 rounded"></div>
                  <div className="w-4 h-1 bg-gray-300 dark:bg-gray-600 rounded"></div>
                </div>
              </div>
              {/* Mini Hero */}
              <motion.div
                initial={{ opacity: 0, y: 5 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.2 }}
              >
                <div className="text-[7px] font-bold text-gray-800 dark:text-white mb-1">პროფესიონალური</div>
                <div className="text-[7px] font-bold text-primary-600 dark:text-primary-400 mb-2">ვებსაიტები</div>
                <div className="flex gap-1">
                  <motion.div 
                    className="bg-primary-600 text-white text-[5px] px-1.5 py-0.5 rounded"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 1.5 }}
                  >
                    სერვისები
                  </motion.div>
                  <motion.div 
                    className="border border-primary-600 text-primary-600 text-[5px] px-1.5 py-0.5 rounded"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 1.7 }}
                  >
                    პორტფოლიო
                  </motion.div>
                </div>
              </motion.div>
              {/* Mini Stats */}
              <motion.div 
                className="flex justify-between mt-3 pt-2 border-t border-gray-200 dark:border-gray-700"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 2 }}
              >
                <div className="text-center">
                  <div className="text-[8px] font-bold text-primary-600 dark:text-primary-400">30%</div>
                  <div className="text-[5px] text-gray-500">იაფი</div>
                </div>
                <div className="text-center">
                  <div className="text-[8px] font-bold text-primary-600 dark:text-primary-400">10+</div>
                  <div className="text-[5px] text-gray-500">პროექტი</div>
                </div>
                <div className="text-center">
                  <div className="text-[8px] font-bold text-primary-600 dark:text-primary-400">100%</div>
                  <div className="text-[5px] text-gray-500">კმაყოფილი</div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-4 sm:mb-6">
              პროფესიონალური ვებსაიტები
              <span className="block text-primary-600 dark:text-primary-400 mt-2">ხელმისაწვდომ ფასად</span>
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-gray-600 dark:text-gray-300 mb-6 sm:mb-8 max-w-2xl mx-auto px-4">
              ჩვენ ვქმნით თანამედროვე, სწრაფ და ხარისხიან ვებსაიტებს საქართველოში, ბაზრის ფასებზე 30%-მდე იაფად.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center px-4">
              <Link
                href="/services"
                className="bg-primary-600 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg hover:bg-primary-700 transition-all hover:shadow-xl transform hover:-translate-y-1 font-semibold text-base sm:text-lg inline-flex items-center justify-center"
              >
                იხილეთ სერვისები
                <FaArrowRight className="ml-2" />
              </Link>
              <Link
                href="/portfolio"
                className="bg-white text-primary-600 border-2 border-primary-600 px-6 sm:px-8 py-3 sm:py-4 rounded-lg hover:bg-primary-50 transition-all hover:shadow-xl transform hover:-translate-y-1 font-semibold text-base sm:text-lg"
              >
                ნახეთ პორტფოლიო
              </Link>
            </div>
          </motion.div>

          {/* Stats with animated counters */}
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8 md:gap-12 mt-10 sm:mt-12 md:mt-16 max-w-3xl mx-auto"
          >
            {stats.map((stat, index) => (
              <AnimatedStat key={index} number={stat.number} suffix={stat.suffix} label={stat.label} />
            ))}
          </motion.div>
        </div>
      </section>

      {/* Features Section - Enhanced */}
      <section className="py-12 sm:py-16 md:py-20 bg-white dark:bg-gray-900 transition-colors duration-300 relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute top-0 left-0 w-72 h-72 bg-primary-100 dark:bg-primary-900/20 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2 opacity-50"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent-100 dark:bg-accent-900/20 rounded-full blur-3xl translate-x-1/2 translate-y-1/2 opacity-50"></div>
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-8 sm:mb-12 md:mb-16"
          >
            <span className="inline-block px-4 py-1.5 bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 rounded-full text-sm font-medium mb-4">
              რატომ ჩვენ?
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-3 sm:mb-4">
              რატომ უნდა ავირჩიოთ PixelWeb?
            </h2>
            <p className="text-base sm:text-lg lg:text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              ჩვენ გთავაზობთ საუკეთესო ხარისხს ხელმისაწვდომ ფასად საქართველოში
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -8, scale: 1.02 }}
                className="group bg-white dark:bg-gray-800 p-6 sm:p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 dark:border-gray-700 relative overflow-hidden"
              >
                {/* Gradient overlay on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary-500/5 to-accent-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                {/* Icon with gradient background */}
                <div className="relative mb-4 sm:mb-5">
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary-100 to-primary-50 dark:from-primary-900/30 dark:to-primary-800/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    {feature.icon}
                  </div>
                </div>
                
                <h3 className="relative text-lg sm:text-xl font-semibold text-gray-900 dark:text-white mb-2 sm:mb-3 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
                  {feature.title}
                </h3>
                <p className="relative text-sm sm:text-base text-gray-600 dark:text-gray-300">
                  {feature.description}
                </p>
                
                {/* Bottom accent line */}
                <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-primary-500 to-accent-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Preview Section - Clean Design */}
      <section className="py-12 sm:py-16 md:py-20 bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-8 sm:mb-12 md:mb-16"
          >
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-3 sm:mb-4">
              მარტივი და ოპტიმალური ფასები
            </h2>
            <p className="text-base sm:text-lg lg:text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              აირჩიეთ თქვენთვის შესაფერისი პაკეტი. ყველა პაკეტი მოიცავს უფასო ტექნიკურ მხარდაჭერას.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 max-w-5xl mx-auto items-start">
            {pricingPreview.map((plan, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`relative bg-white dark:bg-gray-800 rounded-2xl p-6 lg:p-8 transition-all duration-300 hover:shadow-xl ${
                  plan.popular 
                    ? 'ring-2 ring-primary-500 shadow-lg md:-mt-4 md:mb-4' 
                    : 'shadow-md hover:-translate-y-1'
                }`}
              >
                {/* Popular Badge - Inside Card */}
                {plan.popular && (
                  <div className="mb-4">
                    <span className="inline-flex items-center gap-1.5 bg-primary-500 text-white text-xs font-semibold px-3 py-1 rounded-full">
                      <span>⭐</span> რეკომენდებული
                    </span>
                  </div>
                )}
                
                {/* Plan Name */}
                <h3 className="text-lg sm:text-xl font-bold text-gray-900 dark:text-white mb-3">
                  {plan.name}
                </h3>
                
                {/* Price */}
                <div className="mb-6">
                  <span className="text-3xl sm:text-4xl font-bold text-primary-600 dark:text-primary-400">
                    {plan.price}
                  </span>
                  <span className="text-gray-500 dark:text-gray-400 ml-1">₾</span>
                </div>
                
                {/* Divider */}
                <div className="h-px bg-gray-200 dark:bg-gray-700 mb-6"></div>
                
                {/* Features */}
                <ul className="space-y-3 mb-6">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <FaCheck className="text-green-500 mt-0.5 flex-shrink-0" />
                      <span className="text-sm text-gray-600 dark:text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                {/* Button */}
                <Link
                  href="/services"
                  className={`block w-full text-center py-3 rounded-lg font-semibold transition-all duration-300 ${
                    plan.popular
                      ? 'bg-primary-600 text-white hover:bg-primary-700'
                      : 'bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-white hover:bg-gray-200 dark:hover:bg-gray-600'
                  }`}
                >
                  შეიტყვეთ მეტი
                </Link>
              </motion.div>
            ))}
          </div>

          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
            className="text-center mt-8 sm:mt-10 md:mt-12"
          >
            <Link
              href="/services"
              className="inline-flex items-center gap-2 text-primary-600 dark:text-primary-400 font-semibold text-base sm:text-lg hover:text-primary-700 dark:hover:text-primary-300 group"
            >
              იხილეთ ყველა სერვისი
              <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* FAQ Section (accordion) */}
      <section className="py-12 sm:py-16 md:py-20 bg-white dark:bg-gray-900 transition-colors duration-300">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-3 sm:mb-4">
              ხშირად დასმული კითხვები (FAQ)
            </h2>
            <p className="text-base sm:text-lg lg:text-xl text-gray-600 dark:text-gray-300">
              ყველაფერი ვებგვერდების დამზადების შესახებ
            </p>
          </div>
          <div className="max-w-4xl mx-auto divide-y divide-gray-200 dark:divide-gray-800 rounded-2xl border border-gray-200 dark:border-gray-700 overflow-hidden bg-white dark:bg-gray-900">
            {faqs.map((item, index) => {
              const isOpen = openIndex === index
              return (
                <div key={index} className="group">
                  <button
                    className="w-full flex items-center justify-between text-left px-5 sm:px-6 py-4 sm:py-5 hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors"
                    onClick={() => setOpenIndex(isOpen ? null : index)}
                    aria-expanded={isOpen}
                    aria-controls={`faq-panel-${index}`}
                  >
                    <span className="text-base sm:text-lg font-semibold text-gray-900 dark:text-white">
                      {item.q}
                    </span>
                    <FaChevronDown
                      className={`text-gray-500 dark:text-gray-400 transition-transform duration-300 ${
                        isOpen ? 'rotate-180' : ''
                      }`}
                      aria-hidden="true"
                    />
                  </button>
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        id={`faq-panel-${index}`}
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.25 }}
                        className="px-5 sm:px-6"
                      >
                        <div className="pb-5 sm:pb-6 text-gray-600 dark:text-gray-300">
                          {item.a}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              )
            })}
          </div>
          <div className="text-center pt-8">
            <a href="/contact" className="inline-block bg-primary-600 text-white px-8 py-4 rounded-lg hover:bg-primary-700 transition-all font-semibold">
              დაგვიკავშირდით ფასისა და ვადების მისაღებად
            </a>
          </div>
        </div>
      </section>

      {/* CTA Section - Enhanced */}
      <section className="py-12 sm:py-16 md:py-20 bg-gradient-to-br from-primary-600 via-primary-700 to-primary-800 dark:from-primary-700 dark:via-primary-800 dark:to-gray-900 transition-colors duration-300 relative overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <motion.div
            className="absolute top-0 left-1/4 w-64 h-64 bg-white/10 rounded-full blur-3xl"
            animate={{ y: [0, 30, 0], x: [0, 20, 0] }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div
            className="absolute bottom-0 right-1/4 w-96 h-96 bg-primary-400/10 rounded-full blur-3xl"
            animate={{ y: [0, -20, 0], x: [0, -30, 0] }}
            transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          />
        </div>
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="inline-block mb-6"
            >
              <span className="text-5xl">🚀</span>
            </motion.div>
            
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-4 sm:mb-6">
              მზად ხართ დასაწყებად?
            </h2>
            <p className="text-base sm:text-lg lg:text-xl text-primary-100 dark:text-primary-200 mb-6 sm:mb-8 max-w-2xl mx-auto">
              დაგვიკავშირდით დღესვე და მიიღეთ უფასო კონსულტაცია თქვენი პროექტის შესახებ
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
                className="group bg-white text-primary-600 px-6 sm:px-8 py-3 sm:py-4 rounded-xl hover:bg-gray-100 transition-all hover:shadow-xl hover:shadow-white/20 transform hover:-translate-y-1 font-semibold text-base sm:text-lg inline-flex items-center justify-center gap-2"
            >
              დაგვიკავშირდით
                <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
            </Link>
              <a
                href="https://wa.me/995591410914"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-green-500 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-xl hover:bg-green-600 transition-all hover:shadow-xl hover:shadow-green-500/20 transform hover:-translate-y-1 font-semibold text-base sm:text-lg inline-flex items-center justify-center gap-2"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
                WhatsApp
              </a>
            </div>
          </motion.div>
        </div>
      </section>
      </div>
    </PageTransition>
  )
}

export default HomePage

