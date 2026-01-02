'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { FaCheck, FaTimes, FaStar, FaArrowRight } from 'react-icons/fa'
import { ReactNode } from 'react'

export interface PricingService {
    icon: ReactNode
    name: string
    price: string
    duration: string
    description: string
    features: string[]
    notIncluded: string[]
    marketPrice?: string
    popular?: boolean
    color: string
    bgColor: string
}

interface PricingCardProps {
    service: PricingService
    index: number
    delay?: number
}

const PricingCard = ({ service, index, delay = 0 }: PricingCardProps) => {
    const gradients = [
        { main: 'from-blue-500 via-cyan-500 to-teal-400', glow: 'blue' },
        { main: 'from-primary-500 via-primary-400 to-primary-600', glow: 'primary' },
        { main: 'from-purple-500 via-pink-500 to-rose-400', glow: 'purple' },
    ]
    const gradient = gradients[index % 3]

    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: delay + index * 0.15 }}
            viewport={{ once: true }}
            whileHover={{ y: -10, scale: 1.02 }}
            className={`relative group ${service.popular ? 'lg:-mt-8 lg:mb-8 z-20' : 'z-10'}`}
        >
            {/* Glow effect behind card */}
            <div className={`absolute -inset-1 bg-gradient-to-r ${gradient.main} rounded-3xl blur-xl opacity-0 group-hover:opacity-30 transition-all duration-500`} />

            {/* Card */}
            <div className={`relative h-full backdrop-blur-sm rounded-2xl overflow-hidden transition-all duration-500 ${service.popular
                    ? 'bg-white/95 dark:bg-gray-900/95 ring-2 ring-primary-500 shadow-2xl'
                    : 'bg-white/80 dark:bg-gray-900/80 border border-gray-200/50 dark:border-gray-700/50 shadow-xl hover:shadow-2xl'
                }`}>

                {/* Animated gradient border top */}
                <div className={`h-1.5 bg-gradient-to-r ${gradient.main} relative overflow-hidden`}>
                    <motion.div
                        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/50 to-transparent"
                        animate={{ x: ['-100%', '100%'] }}
                        transition={{ duration: 2, repeat: Infinity, ease: 'linear' }}
                    />
                </div>

                {/* Popular badge */}
                {service.popular && (
                    <div className="absolute -top-0 left-1/2 -translate-x-1/2 z-10">
                        <motion.div
                            initial={{ y: -20, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ delay: 0.5 }}
                            className="flex items-center gap-1.5 bg-gradient-to-r from-primary-500 to-primary-600 text-white text-xs font-bold px-4 py-2 rounded-b-xl shadow-lg"
                        >
                            <FaStar className="text-yellow-300 animate-pulse" />
                            <span>რეკომენდებული</span>
                            <FaStar className="text-yellow-300 animate-pulse" />
                        </motion.div>
                    </div>
                )}

                <div className="p-6 lg:p-8">
                    {/* Icon & Title */}
                    <div className="flex items-start gap-4 mb-6 mt-4">
                        <motion.div
                            whileHover={{ rotate: 10, scale: 1.1 }}
                            className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${gradient.main} flex items-center justify-center text-2xl text-white shadow-lg relative overflow-hidden`}
                        >
                            {/* Inner glow */}
                            <div className="absolute inset-0 bg-white/20 rounded-2xl" />
                            <div className="relative z-10">{service.icon}</div>
                        </motion.div>
                        <div className="flex-1">
                            <h3 className="text-xl lg:text-2xl font-bold text-gray-900 dark:text-white mb-1 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
                                {service.name}
                            </h3>
                            <p className="text-sm text-gray-500 dark:text-gray-400">{service.description}</p>
                        </div>
                    </div>

                    {/* Price section with glassmorphism */}
                    <div className="relative mb-6 p-5 rounded-2xl bg-gradient-to-br from-gray-50/80 to-gray-100/50 dark:from-gray-800/50 dark:to-gray-700/30 border border-gray-100/50 dark:border-gray-700/50">
                        {/* Price */}
                        <div className="flex items-baseline gap-2 mb-3">
                            <span className={`text-4xl lg:text-5xl font-black bg-gradient-to-r ${gradient.main} bg-clip-text text-transparent`}>
                                {service.price}
                            </span>
                            <span className="text-xl font-bold text-gray-400">₾</span>
                        </div>

                        {/* Duration & market price */}
                        <div className="flex flex-wrap items-center gap-3">
                            <span className="inline-flex items-center gap-1.5 text-sm text-gray-600 dark:text-gray-400 bg-white/50 dark:bg-gray-800/50 px-3 py-1.5 rounded-full border border-gray-200/50 dark:border-gray-600/50">
                                ⏱️ {service.duration}
                            </span>
                            {service.marketPrice && (
                                <span className="inline-flex items-center gap-1.5 text-sm text-red-500 dark:text-red-400">
                                    <span className="line-through opacity-70">ბაზარზე: {service.marketPrice}₾</span>
                                    <span className="bg-red-100 dark:bg-red-900/30 text-red-600 dark:text-red-400 text-xs font-bold px-2 py-0.5 rounded">
                                        -30%
                                    </span>
                                </span>
                            )}
                        </div>
                    </div>

                    {/* Features with stagger animation */}
                    <div className="space-y-3 mb-8">
                        {service.features.map((feature, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, x: -10 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ delay: 0.1 * i }}
                                viewport={{ once: true }}
                                className="flex items-start gap-3 group/feature"
                            >
                                <div className="w-5 h-5 rounded-full bg-gradient-to-br from-green-400 to-emerald-500 flex items-center justify-center flex-shrink-0 mt-0.5 shadow-sm group-hover/feature:scale-110 transition-transform">
                                    <FaCheck className="text-white text-[9px]" />
                                </div>
                                <span className="text-sm text-gray-700 dark:text-gray-300 group-hover/feature:text-gray-900 dark:group-hover/feature:text-white transition-colors">
                                    {feature}
                                </span>
                            </motion.div>
                        ))}
                        {service.notIncluded.map((feature, i) => (
                            <div key={`not-${i}`} className="flex items-start gap-3 opacity-40">
                                <div className="w-5 h-5 rounded-full bg-gray-200 dark:bg-gray-700 flex items-center justify-center flex-shrink-0 mt-0.5">
                                    <FaTimes className="text-gray-400 text-[9px]" />
                                </div>
                                <span className="text-sm text-gray-400 line-through">{feature}</span>
                            </div>
                        ))}
                    </div>

                    {/* CTA Button with hover effect */}
                    <Link
                        href="/contact"
                        className={`group/btn relative block w-full text-center py-4 rounded-xl font-bold text-base overflow-hidden transition-all duration-300 ${service.popular
                                ? 'text-white shadow-lg hover:shadow-xl'
                                : 'bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-white hover:bg-gray-200 dark:hover:bg-gray-700 border border-gray-200 dark:border-gray-600'
                            }`}
                    >
                        {service.popular && (
                            <>
                                <div className={`absolute inset-0 bg-gradient-to-r ${gradient.main}`} />
                                <motion.div
                                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/25 to-transparent"
                                    animate={{ x: ['-100%', '100%'] }}
                                    transition={{ duration: 1.5, repeat: Infinity, ease: 'linear', repeatDelay: 1 }}
                                />
                            </>
                        )}
                        <span className="relative z-10 flex items-center justify-center gap-2">
                            დაიწყე ახლავე
                            <FaArrowRight className="group-hover/btn:translate-x-1 transition-transform" />
                        </span>
                    </Link>
                </div>

                {/* Bottom accent line on hover */}
                <div className={`absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r ${gradient.main} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left`} />
            </div>
        </motion.div>
    )
}

export default PricingCard
