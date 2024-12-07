'use client'

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { ChevronLeft, ChevronRight, Download, Heart, Share2, MessageSquare, Bookmark, MoreHorizontal } from 'lucide-react'

interface SlideViewerProps {
  slides: Array<{
    id: number
    imageUrl: string
  }>
  title: string
  author: string
  date: string
  views: string
  likes: number
}

export function SlideViewer({ slides, title, author, date, views, likes: initialLikes }: SlideViewerProps) {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [likes, setLikes] = useState(initialLikes)

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length)
  }

  const previousSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)
  }

  const handleLike = () => {
    setLikes((prev) => prev + 1)
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid gap-8 lg:grid-cols-[1fr_300px]">
        <div className="space-y-6">
          <Card className="overflow-hidden">
            <div className="relative aspect-[4/3] bg-gray-900">
              <img
                src={slides[currentSlide].imageUrl}
                alt={`Slide ${currentSlide + 1}`}
                className="h-full w-full object-contain"
              />
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 rounded-full bg-black/50 px-4 py-2 text-white">
                {currentSlide + 1} / {slides.length}
              </div>
              <Button
                variant="ghost"
                size="icon"
                className="absolute left-4 top-1/2 -translate-y-1/2 text-white hover:bg-black/50"
                onClick={previousSlide}
              >
                <ChevronLeft className="h-8 w-8" />
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className="absolute right-4 top-1/2 -translate-y-1/2 text-white hover:bg-black/50"
                onClick={nextSlide}
              >
                <ChevronRight className="h-8 w-8" />
              </Button>
            </div>
          </Card>

          <div className="flex items-center justify-between bg-white p-4 shadow rounded-lg">
            <div className="flex items-center gap-4">
              <Button variant="outline" onClick={handleLike}>
                <Heart className="mr-2 h-4 w-4" />
                {likes}
              </Button>
              <Button variant="outline">
                <MessageSquare className="mr-2 h-4 w-4" />
                Comment
              </Button>
              <Button variant="outline">
                <Share2 className="mr-2 h-4 w-4" />
                Share
              </Button>
            </div>
            <div className="flex items-center gap-4">
              <Button variant="outline">
                <Bookmark className="mr-2 h-4 w-4" />
                Save
              </Button>
              <Button variant="outline">
                <Download className="mr-2 h-4 w-4" />
                Download
              </Button>
              <Button variant="ghost" size="icon">
                <MoreHorizontal className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>

        <div className="space-y-6">
          <Card className="p-4">
            <h1 className="text-2xl font-bold">{title}</h1>
            <div className="mt-2 text-sm text-muted-foreground">
              <p>By {author}</p>
              <p>{date}</p>
              <p>{views} views</p>
            </div>
          </Card>

          <Card className="p-4">
            <h2 className="font-semibold mb-4">More from {author}</h2>
            {/* Add more presentations from the same author */}
          </Card>

          <Card className="p-4">
            <h2 className="font-semibold mb-4">Related presentations</h2>
            {/* Add related presentations */}
          </Card>
        </div>
      </div>
    </div>
  )
}

