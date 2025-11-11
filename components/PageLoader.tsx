'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const PageLoader = () => {
  const [isLoading, setIsLoading] = useState(true)
  const [activeDot, setActiveDot] = useState(0)

  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 1500)

    return () => clearTimeout(timer)
  }, [])

  useEffect(() => {
    if (!isLoading) return
    const interval = setInterval(() => {
      setActiveDot((prev) => (prev + 1) % 3)
    }, 280)
    return () => clearInterval(interval)
  }, [isLoading])

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-gradient-to-br from-primary-600 via-primary-700 to-primary-800"
        >
          <div className="text-center">
            {/* Animated Logo */}
            <motion.div
              initial={{ scale: 0.5, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="mb-8"
            >
              <div className="text-5xl sm:text-6xl md:text-7xl font-bold">
                <motion.span
                  initial={{ x: -50, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.2, duration: 0.5 }}
                  className="text-white"
                >
                  Pixel
                </motion.span>
                <motion.span
                  initial={{ x: -50, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.3, duration: 0.5 }}
                  className="text-accent-400"
                >
                  Web
                </motion.span>
                <motion.span
                  initial={{ x: -50, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.4, duration: 0.5 }}
                  className="text-primary-200"
                >
                  .ge
                </motion.span>
              </div>
            </motion.div>

            {/* Loading Animation */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="flex justify-center space-x-2"
            >
              {[0, 1, 2].map((i) => {
                const isActive = i === activeDot
                return (
                  <motion.div
                    key={i}
                    animate={{
                      scale: isActive ? 1.25 : 1,
                      opacity: isActive ? 1 : 0.7,
                    }}
                    transition={{
                      type: 'spring',
                      stiffness: 300,
                      damping: 20,
                    }}
                    className={`w-3 h-3 rounded-full ${
                      isActive
                        ? 'bg-accent-400'
                        : 'bg-white dark:bg-gray-500'
                    }`}
                  />
                )
              })}
            </motion.div>

            {/* Loading Text */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7 }}
              className="mt-6 text-white/80 text-sm sm:text-base"
            >
              იტვირთება...
            </motion.p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export default PageLoader

