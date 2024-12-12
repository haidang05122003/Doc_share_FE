'use client'

import { useState, useEffect } from 'react'
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"

const heroTexts = [
  "Khám phá kiến thức mới",
  "Chia sẻ ý tưởng của bạn",
  "Kết nối với chuyên gia",
  "Nâng cao kỹ năng của bạn"
]

export function Hero() {
  const [textIndex, setTextIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setTextIndex((prevIndex) => (prevIndex + 1) % heroTexts.length)
    }, 3000)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="relative bg-gradient-to-br from-blue-600 via-purple-600 to-pink-600 overflow-hidden">
      <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10"></div>
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="container mx-auto px-4 py-24 relative z-10"
      >
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl font-bold mb-6 md:text-5xl lg:text-6xl text-white drop-shadow-md">
            SlideShare: Nơi Chia Sẻ Tri Thức
          </h1>
          <motion.p 
            key={textIndex}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className="text-xl mb-8 text-white/90 drop-shadow"
          >
            {heroTexts[textIndex]}
          </motion.p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button 
              size="lg" 
              className="bg-white text-blue-600 hover:bg-blue-50 transition-colors font-semibold px-8 h-12 min-w-[200px]"
            >
              Bắt đầu ngay
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="bg-transparent text-white border-white hover:bg-white hover:text-blue-600 transition-colors font-semibold px-8 h-12 min-w-[200px]"
            >
              Tìm hiểu thêm
            </Button>
          </div>
        </div>
      </motion.div>
    </div>
  )
}

