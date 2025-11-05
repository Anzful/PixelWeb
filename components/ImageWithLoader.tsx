'use client'

import { useState } from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'

interface ImageWithLoaderProps {
  src: string
  alt: string
  fill?: boolean
  className?: string
  sizes?: string
  priority?: boolean
  width?: number
  height?: number
}

const ImageWithLoader = ({ 
  src, 
  alt, 
  fill, 
  className, 
  sizes, 
  priority,
  width,
  height 
}: ImageWithLoaderProps) => {
  const [isLoading, setIsLoading] = useState(true)

  return (
    <div className="relative w-full h-full">
      {/* Loading Skeleton */}
      {isLoading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="absolute inset-0 bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 dark:from-gray-700 dark:via-gray-600 dark:to-gray-700 animate-shimmer bg-[length:200%_100%]"
        />
      )}
      
      {/* Actual Image */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: isLoading ? 0 : 1 }}
        transition={{ duration: 0.3 }}
        className="relative w-full h-full"
      >
        {fill ? (
          <Image
            src={src}
            alt={alt}
            fill
            className={className}
            sizes={sizes}
            priority={priority}
            onLoadingComplete={() => setIsLoading(false)}
          />
        ) : (
          <Image
            src={src}
            alt={alt}
            width={width}
            height={height}
            className={className}
            priority={priority}
            onLoadingComplete={() => setIsLoading(false)}
          />
        )}
      </motion.div>
    </div>
  )
}

export default ImageWithLoader

