'use client'

import { motion } from 'framer-motion'

function Octagon({ className }: { className?: string }) {
  return (
    <motion.svg
      viewBox="0 0 100 100"
      className={className}
      initial={{ rotate: 0, scale: 0 }}
      animate={{ 
        rotate: 360,
        scale: [0, 1, 1, 0],
      }}
      transition={{
        duration: 8,
        repeat: Infinity,
        repeatDelay: Math.random() * 5,
        ease: "easeInOut"
      }}
    >
      <motion.path
        d="M50 0 L85 15 L100 50 L85 85 L50 100 L15 85 L0 50 L15 15 Z"
        fill="none"
        stroke="currentColor"
        strokeWidth="1"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{
          duration: 4,
          repeat: Infinity,
          repeatDelay: Math.random() * 5,
          ease: "easeInOut"
        }}
      />
    </motion.svg>
  )
}

export default function GeometricAnimations() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <div className="absolute top-1/4 left-1/4 w-16 h-16 text-[#2F4CE3]/10">
        <Octagon />
      </div>
      <div className="absolute top-3/4 left-1/3 w-24 h-24 text-[#2F4CE3]/20">
        <Octagon />
      </div>
      <div className="absolute top-1/3 right-1/4 w-32 h-32 text-[#FF5D71]/20">
        <Octagon />
      </div>
      <div className="absolute bottom-1/4 right-1/3 w-20 h-20 text-[#FF5D71]/10">
        <Octagon />
      </div>
      <motion.div
        className="absolute inset-0"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <svg width="100%" height="100%">
          <defs>
            <pattern
              id="dots"
              x="0"
              y="0"
              width="40"
              height="40"
              patternUnits="userSpaceOnUse"
            >
              <circle cx="2" cy="2" r="1" fill="#2F4CE3" fillOpacity="0.1" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#dots)" />
        </svg>
      </motion.div>
    </div>
  )
}

