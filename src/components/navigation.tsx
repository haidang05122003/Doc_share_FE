"use client"

import { useState, useRef, useEffect } from 'react'
import Link from "next/link"
import { cn } from "@/lib/utils"
import { ChevronLeft, ChevronRight } from 'lucide-react'

const navItems = [
  { label: "Dành cho bạn", href: "/" },
  { label: "Kinh doanh", href: "/category/business" },
  { label: "Di động", href: "/category/mobile" },
  { label: "Mạng xã hội", href: "/category/social-media" },
  { label: "Marketing", href: "/category/marketing" },
  { label: "Công nghệ", href: "/category/technology" },
  { label: "Nghệ thuật & Hình ảnh", href: "/category/art-photos" },
  { label: "Nghề nghiệp", href: "/category/career" },
  { label: "Thiết kế", href: "/category/design" },
  { label: "Giáo dục", href: "/category/education" },
  { label: "Thuyết trình & Diễn thuyết", href: "/category/presentations-public-speaking" },
  { label: "Chính phủ & Phi lợi nhuận", href: "/category/government-nonprofit" },
]

export function Navigation({ currentCategory }: { currentCategory?: string }) {
  const [showLeftArrow, setShowLeftArrow] = useState(false)
  const [showRightArrow, setShowRightArrow] = useState(true)
  const scrollContainerRef = useRef<HTMLDivElement>(null)

  const handleScroll = () => {
    if (scrollContainerRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current
      setShowLeftArrow(scrollLeft > 0)
      setShowRightArrow(scrollLeft < scrollWidth - clientWidth - 1)
    }
  }

  useEffect(() => {
    const scrollContainer = scrollContainerRef.current
    if (scrollContainer) {
      scrollContainer.addEventListener('scroll', handleScroll)
      handleScroll() // Check initial state
      return () => scrollContainer.removeEventListener('scroll', handleScroll)
    }
  }, [])

  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const scrollAmount = scrollContainerRef.current.clientWidth / 2
      scrollContainerRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      })
    }
  }

  return (
    <nav className="bg-white border-b shadow-sm relative">
      <div className="container mx-auto relative">
        <div 
          ref={scrollContainerRef}
          className="flex overflow-x-auto scrollbar-hide py-3 px-4"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {navItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className={cn(
                "px-4 py-2 text-base font-medium rounded-md whitespace-nowrap transition-colors mx-1",
                currentCategory === item.label.toLowerCase()
                  ? "bg-blue-600 text-white"
                  : "text-gray-700 hover:bg-gray-100"
              )}
            >
              {item.label}
            </Link>
          ))}
        </div>
        {showLeftArrow && (
          <button 
            onClick={() => scroll('left')} 
            className="absolute left-0 top-1/2 -translate-y-1/2 bg-gradient-to-r from-white to-transparent p-2 z-10"
            aria-label="Scroll left"
          >
            <ChevronLeft className="h-6 w-6 text-gray-600" />
          </button>
        )}
        {showRightArrow && (
          <button 
            onClick={() => scroll('right')} 
            className="absolute right-0 top-1/2 -translate-y-1/2 bg-gradient-to-l from-white to-transparent p-2 z-10"
            aria-label="Scroll right"
          >
            <ChevronRight className="h-6 w-6 text-gray-600" />
          </button>
        )}
      </div>
    </nav>
  )
}

