'use client'

import { motion } from 'framer-motion'
import { FaSnowflake } from 'react-icons/fa'

interface SnowToggleProps {
    enabled: boolean
    onToggle: () => void
}

const SnowToggle = ({ enabled, onToggle }: SnowToggleProps) => {
    return (
        <button
            onClick={onToggle}
            className={`relative w-10 h-10 sm:w-11 sm:h-11 rounded-full flex items-center justify-center transition-all duration-300 flex-shrink-0 ${enabled
                    ? 'bg-gradient-to-br from-sky-400 via-blue-500 to-indigo-600 shadow-lg shadow-blue-500/50 hover:shadow-blue-500/70'
                    : 'bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600'
                }`}
            aria-label={enabled ? 'Disable snow effect' : 'Enable snow effect'}
            title={enabled ? 'Turn off snow' : 'Turn on snow'}
        >
            <motion.div
                animate={{
                    rotate: enabled ? [0, 360] : 0,
                    scale: enabled ? [1, 1.1, 1] : 1,
                }}
                transition={{
                    rotate: {
                        duration: 8,
                        repeat: Infinity,
                        ease: 'linear',
                    },
                    scale: {
                        duration: 2,
                        repeat: Infinity,
                        ease: 'easeInOut',
                    },
                }}
            >
                <FaSnowflake
                    className={`text-lg sm:text-xl transition-colors duration-300 ${enabled ? 'text-white' : 'text-gray-500 dark:text-gray-400'
                        }`}
                />
            </motion.div>

            {/* Sparkle effects when enabled */}
            {enabled && (
                <>
                    <motion.div
                        className="absolute w-1 h-1 bg-white rounded-full"
                        animate={{
                            opacity: [0, 1, 0],
                            scale: [0.5, 1.5, 0.5],
                            x: [-5, -8, -5],
                            y: [-5, -8, -5],
                        }}
                        transition={{
                            duration: 2,
                            repeat: Infinity,
                            delay: 0,
                        }}
                    />
                    <motion.div
                        className="absolute w-1 h-1 bg-white rounded-full"
                        animate={{
                            opacity: [0, 1, 0],
                            scale: [0.5, 1.2, 0.5],
                            x: [5, 8, 5],
                            y: [-3, -6, -3],
                        }}
                        transition={{
                            duration: 2,
                            repeat: Infinity,
                            delay: 0.5,
                        }}
                    />
                    <motion.div
                        className="absolute w-1 h-1 bg-white rounded-full"
                        animate={{
                            opacity: [0, 1, 0],
                            scale: [0.5, 1, 0.5],
                            x: [0, 2, 0],
                            y: [5, 8, 5],
                        }}
                        transition={{
                            duration: 2,
                            repeat: Infinity,
                            delay: 1,
                        }}
                    />
                </>
            )}
        </button>
    )
}

export default SnowToggle
