'use client'

import { useState } from 'react'
import { Card, CardContent } from "@/components/ui/card"
import { Eye, Bookmark, ChevronLeft, ChevronRight } from 'lucide-react'
import Link from 'next/link'
import { motion } from "framer-motion"

interface Slide {
  id: string
  title: string
  author: string
  organization: string
  slides: number
  views: string
  thumbnail: string
}

interface CategorySection {
  title: string
  category: string
  slides: Slide[]
}

const featuredSections: CategorySection[] = [
  {
    title: "Phổ biến trong Giáo dục",
    category: "education",
    slides: [
      {
        id: "1",
        title: "Phương pháp giảng dạy hiện đại trong giáo dục 2024",
        author: "TS. Nguyễn Văn A",
        organization: "Đại học Sư phạm",
        slides: 45,
        views: "125K",
        thumbnail: "/placeholder.svg?height=200&width=300"
      },
      {
        id: "2",
        title: "Ứng dụng công nghệ trong giảng dạy trực tuyến",
        author: "ThS. Trần Thị B",
        organization: "Edutech",
        slides: 32,
        views: "98.5K",
        thumbnail: "/placeholder.svg?height=200&width=300"
      },
      {
        id: "3",
        title: "Kỹ năng mềm cho giáo viên thế kỷ 21",
        author: "PGS.TS Lê Văn C",
        organization: "Viện Nghiên cứu Giáo dục",
        slides: 28,
        views: "76.2K",
        thumbnail: "/placeholder.svg?height=200&width=300"
      },
      {
        id: "4",
        title: "Đổi mới phương pháp đánh giá học sinh",
        author: "TS. Phạm Thị D",
        organization: "Bộ Giáo dục",
        slides: 35,
        views: "89.3K",
        thumbnail: "/placeholder.svg?height=200&width=300"
      },
    ]
  },
  {
    title: "Phổ biến trong Giải trí & Hài hước",
    category: "entertainment",
    slides: [
      {
        id: "5",
        title: "Top 10 xu hướng giải trí 2024",
        author: "Hoàng Nam",
        organization: "Entertainment Weekly",
        slides: 25,
        views: "234K",
        thumbnail: "/placeholder.svg?height=200&width=300"
      },
      {
        id: "6",
        title: "Tổng hợp meme hài hước nhất năm",
        author: "Minh Anh",
        organization: "Meme Review",
        slides: 50,
        views: "445K",
        thumbnail: "/placeholder.svg?height=200&width=300"
      },
      {
        id: "7",
        title: "Những khoảnh khắc hài hước trong phim Việt",
        author: "Thu Trang",
        organization: "Film Review",
        slides: 30,
        views: "167K",
        thumbnail: "/placeholder.svg?height=200&width=300"
      },
      {
        id: "8",
        title: "Tổng hợp video viral năm 2024",
        author: "Đức Phúc",
        organization: "Viral Media",
        slides: 40,
        views: "322K",
        thumbnail: "/placeholder.svg?height=200&width=300"
      },
    ]
  }
]

export function FeaturedSlides() {
  const [activeIndex, setActiveIndex] = useState(0)

  const nextSlide = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % featuredSections[0].slides.length)
  }

  const prevSlide = () => {
    setActiveIndex((prevIndex) => (prevIndex - 1 + featuredSections[0].slides.length) % featuredSections[0].slides.length)
  }

  return (
    <div className="space-y-12 py-12 bg-gray-50">
      {featuredSections.map((section) => (
        <section key={section.category} className="container mx-auto px-4">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-3xl font-bold text-gray-900">{section.title}</h2>
            <Link 
              href={`/category/${section.category}`} 
              className="text-blue-600 hover:text-blue-700 font-medium text-lg"
            >
              Xem tất cả
            </Link>
          </div>
          <div className="relative">
            <button onClick={prevSlide} className="absolute left-0 top-1/2 transform -translate-y-1/2 z-10 bg-white rounded-full p-2 shadow-md">
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button onClick={nextSlide} className="absolute right-0 top-1/2 transform -translate-y-1/2 z-10 bg-white rounded-full p-2 shadow-md">
              <ChevronRight className="w-6 h-6" />
            </button>
            <div className="overflow-hidden">
              <motion.div 
                className="flex"
                animate={{ x: `-${activeIndex * 100}%` }}
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
              >
                {section.slides.map((slide) => (
                  <Card key={slide.id} className="flex-shrink-0 w-full md:w-1/2 lg:w-1/4 p-2">
                    <Link href={`/slideshow/${slide.id}`}>
                      <img src={slide.thumbnail} alt={slide.title} className="aspect-video w-full object-cover rounded-t-lg" />
                      <CardContent className="p-4">
                        <h3 className="font-semibold text-lg text-gray-900 hover:text-blue-600 transition-colors line-clamp-2">
                          {slide.title}
                        </h3>
                        <p className="mt-2 text-sm text-gray-600">{slide.author}</p>
                        <div className="mt-4 flex items-center justify-between text-sm text-gray-500">
                          <div className="flex items-center space-x-4">
                            <span>{slide.slides} slides</span>
                            <span className="flex items-center space-x-1">
                              <Eye className="h-4 w-4" />
                              <span>{slide.views} lượt xem</span>
                            </span>
                          </div>
                          <button className="text-blue-600 hover:text-blue-700 transition-colors">
                            <Bookmark className="h-4 w-4" />
                          </button>
                        </div>
                      </CardContent>
                    </Link>
                  </Card>
                ))}
              </motion.div>
            </div>
          </div>
        </section>
      ))}
    </div>
  )
}

