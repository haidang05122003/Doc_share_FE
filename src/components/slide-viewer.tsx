'use client'

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { ChevronLeft, ChevronRight, Download, Heart, Share2, MessageSquare, Bookmark, MoreHorizontal } from 'lucide-react'
import Link from 'next/link'

interface SlideViewerProps {
  googleDriveId: string;
  title: string;
  author: {
    name: string;
    username: string;
    avatar: string;
  };
  date: string;
  views: string;
  likes: number;
  category: string;
  relatedPresentations: Array<{
    id: string;
    title: string;
    author: string;
    views: string;
    thumbnail: string;
  }>;
}

export function SlideViewer({ 
  googleDriveId, 
  title, 
  author, 
  date, 
  views, 
  likes: initialLikes, 
  category,
  relatedPresentations 
}: SlideViewerProps) {
  const [likes, setLikes] = useState(initialLikes)

  const handleLike = () => {
    setLikes((prev) => prev + 1)
  }

  const handleZoom = (e: React.WheelEvent) => {
    e.preventDefault();
    // Implement zoom logic here
    console.log('Zoom', e.deltaY < 0 ? 'in' : 'out');
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid gap-8 lg:grid-cols-[1fr_300px]">
        <div className="space-y-6">
          <Card className="overflow-hidden">
            <div className="relative aspect-[4/3] bg-gray-900">
              <div className="absolute inset-0 overflow-hidden">
                <iframe
                  src={`https://drive.google.com/file/d/${googleDriveId}/preview`}
                  className="absolute inset-0 w-full h-full pointer-events-none"
                  sandbox="allow-scripts allow-same-origin"
                  allow="autoplay"
                  scrolling="no"
                  frameBorder="0"
                ></iframe>
              </div>
              <div className="absolute inset-0 z-10" onWheel={handleZoom}></div>
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
              <Button variant="outline">
                <Bookmark className="mr-2 h-4 w-4" />
                Save
              </Button>
            </div>
            <Button variant="ghost" size="icon">
              <MoreHorizontal className="h-4 w-4" />
            </Button>
          </div>
          <p className="text-sm text-center mt-2 text-gray-500">
            Chỉ có thể xem và phóng to/nhỏ tài liệu. Không thể tải xuống hoặc mở liên kết.
          </p>
        </div>

        <div className="space-y-6">
          <Card className="p-4">
            <h1 className="text-2xl font-bold">{title}</h1>
            <div className="mt-4 flex items-center space-x-4">
              <Avatar>
                <AvatarImage src={author.avatar} alt={author.name} />
                <AvatarFallback>{author.name[0]}</AvatarFallback>
              </Avatar>
              <div>
                <Link href={`/profile/${author.username}`} className="font-semibold hover:underline">
                  {author.name}
                </Link>
                <p className="text-sm text-gray-500">{date}</p>
              </div>
            </div>
            <div className="mt-4 text-sm text-gray-600">
              <p>{views} views</p>
              <p>Category: <Link href={`/category/${category.toLowerCase()}`} className="text-blue-600 hover:underline">{category}</Link></p>
            </div>
          </Card>

          <Card className="p-4">
            <h2 className="font-semibold mb-4">Related presentations</h2>
            <div className="space-y-4">
              {relatedPresentations.map((presentation) => (
                <Link key={presentation.id} href={`/slideshow/${presentation.id}`} className="flex items-start space-x-4 group">
                  <img src={presentation.thumbnail} alt={presentation.title} className="w-20 h-14 object-cover rounded" />
                  <div>
                    <h3 className="font-medium group-hover:text-blue-600 transition-colors">{presentation.title}</h3>
                    <p className="text-sm text-gray-500">{presentation.author}</p>
                    <p className="text-sm text-gray-500">{presentation.views} views</p>
                  </div>
                </Link>
              ))}
            </div>
          </Card>
        </div>
      </div>
    </div>
  )
}

