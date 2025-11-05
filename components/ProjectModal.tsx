'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FaChevronLeft, FaChevronRight, FaTimes, FaExternalLinkAlt } from 'react-icons/fa'
import Image from 'next/image'

interface ProjectModalProps {
  isOpen: boolean
  onClose: () => void
  project: {
    title: string
    images: string[]
    description: string
    technologies: string[]
    features: string[]
    liveUrl?: string
  }
}

const ProjectModal = ({ isOpen, onClose, project }: ProjectModalProps) => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [direction, setDirection] = useState(0) // 1 for next, -1 for prev

  // Reset to first image when modal opens
  useEffect(() => {
    if (isOpen) {
      setCurrentIndex(0)
      setDirection(0)
    }
  }, [isOpen, project])

  const nextSlide = () => {
    setDirection(1)
    setCurrentIndex((prev) => (prev + 1) % project.images.length)
  }

  const prevSlide = () => {
    setDirection(-1)
    setCurrentIndex((prev) => (prev - 1 + project.images.length) % project.images.length)
  }

  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      onClose()
    }
  }

  if (!isOpen) return null

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-2 sm:p-4"
          onClick={handleBackdropClick}
        >
          <motion.div
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.95, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="bg-white dark:bg-gray-800 rounded-xl sm:rounded-2xl max-w-6xl w-full max-h-[95vh] sm:max-h-[90vh] overflow-y-auto relative"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={onClose}
              className="sticky top-2 sm:top-4 right-2 sm:right-4 float-right z-50 bg-white/95 dark:bg-gray-800/95 text-gray-800 dark:text-white p-2 sm:p-3 rounded-full hover:bg-white dark:hover:bg-gray-700 transition-all shadow-lg backdrop-blur-sm"
              aria-label="Close modal"
            >
              <FaTimes size={20} className="sm:w-6 sm:h-6" />
            </button>

            {/* Image Gallery */}
            <div className="relative bg-gray-100 dark:bg-gray-900 overflow-hidden rounded-t-xl sm:rounded-t-2xl">
              <div className="relative h-[40vh] sm:h-[50vh] md:h-[60vh] lg:h-[70vh]">
                <AnimatePresence initial={false} custom={direction}>
                  <motion.div
                    key={currentIndex}
                    custom={direction}
                    initial={{ x: direction > 0 ? '100%' : '-100%', opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    exit={{ x: direction > 0 ? '-100%' : '100%', opacity: 0 }}
                    transition={{ 
                      x: { type: "spring", stiffness: 300, damping: 30 },
                      opacity: { duration: 0.2 }
                    }}
                    className="absolute inset-0"
                  >
                    <Image
                      src={project.images[currentIndex]}
                      alt={`${project.title} - ${currentIndex + 1}`}
                      fill
                      className="object-contain"
                      sizes="(max-width: 768px) 100vw, 90vw"
                      priority={currentIndex === 0}
                      loading={currentIndex === 0 ? "eager" : "lazy"}
                    />
                  </motion.div>
                </AnimatePresence>

                {/* Navigation Arrows */}
                {project.images.length > 1 && (
                  <>
                    <button
                      onClick={prevSlide}
                      className="absolute left-1 sm:left-2 md:left-4 top-1/2 -translate-y-1/2 bg-white/90 dark:bg-gray-800/90 text-gray-800 dark:text-white p-2 sm:p-3 md:p-4 rounded-full hover:bg-white dark:hover:bg-gray-700 transition-all z-10 shadow-lg"
                      aria-label="Previous image"
                    >
                      <FaChevronLeft size={16} className="sm:w-5 sm:h-5" />
                    </button>
                    <button
                      onClick={nextSlide}
                      className="absolute right-1 sm:right-2 md:right-4 top-1/2 -translate-y-1/2 bg-white/90 dark:bg-gray-800/90 text-gray-800 dark:text-white p-2 sm:p-3 md:p-4 rounded-full hover:bg-white dark:hover:bg-gray-700 transition-all z-10 shadow-lg"
                      aria-label="Next image"
                    >
                      <FaChevronRight size={16} className="sm:w-5 sm:h-5" />
                    </button>

                    {/* Dots Indicator */}
                    <div className="absolute bottom-2 sm:bottom-4 left-1/2 -translate-x-1/2 flex gap-1.5 sm:gap-2 z-10">
                      {project.images.map((_, index) => (
                        <button
                          key={index}
                          onClick={() => {
                            setDirection(index > currentIndex ? 1 : -1)
                            setCurrentIndex(index)
                          }}
                          className={`w-1.5 h-1.5 sm:w-2 sm:h-2 md:w-3 md:h-3 rounded-full transition-all ${
                            index === currentIndex
                              ? 'bg-white w-4 sm:w-6 md:w-8'
                              : 'bg-white/50 hover:bg-white/75'
                          }`}
                          aria-label={`Go to image ${index + 1}`}
                        />
                      ))}
                    </div>

                    {/* Image Counter */}
                    <div className="absolute top-2 sm:top-4 left-2 sm:left-4 bg-black/50 text-white px-2 sm:px-3 py-1 sm:py-1.5 rounded-full text-xs sm:text-sm font-medium z-10">
                      {currentIndex + 1} / {project.images.length}
                    </div>
                  </>
                )}
              </div>
            </div>

            {/* Project Details */}
            <div className="p-4 sm:p-6 md:p-8">
              <div className="flex flex-col gap-3 sm:gap-4 mb-4">
                <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 dark:text-white pr-8">
                  {project.title}
                </h2>
                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 bg-primary-600 text-white px-4 sm:px-6 py-2.5 sm:py-3 rounded-lg hover:bg-primary-700 transition-all font-semibold text-sm sm:text-base shadow-lg hover:shadow-xl hover:scale-105 w-full sm:w-auto"
                  >
                    <FaExternalLinkAlt size={14} className="sm:w-4 sm:h-4" />
                    ვებსაიტის ნახვა
                  </a>
                )}
              </div>

              <p className="text-gray-600 dark:text-gray-300 mb-4 sm:mb-6 text-sm sm:text-base leading-relaxed">
                {project.description}
              </p>

              {/* Technologies */}
              <div className="mb-4 sm:mb-6">
                <h3 className="text-base sm:text-lg font-semibold text-gray-900 dark:text-white mb-2 sm:mb-3">
                  გამოყენებული ტექნოლოგიები
                </h3>
                <div className="flex flex-wrap gap-1.5 sm:gap-2">
                  {project.technologies.map((tech, i) => (
                    <span
                      key={i}
                      className="text-xs sm:text-sm bg-primary-50 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Features */}
              <div>
                <h3 className="text-base sm:text-lg font-semibold text-gray-900 dark:text-white mb-2 sm:mb-3">
                  მთავარი ფუნქციები
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-3">
                  {project.features.map((feature, i) => (
                    <div key={i} className="flex items-start text-gray-600 dark:text-gray-300 text-xs sm:text-sm md:text-base">
                      <span className="text-green-500 mr-2 mt-0.5 flex-shrink-0">✓</span>
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export default ProjectModal

