import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Eye, ThumbsUp, Download, Share2 } from 'lucide-react'

interface SlideDetailProps {
  id: string
  title: string
  author: string
  organization: string
  slides: number
  views: string
  likes: number
  description: string
}

export function SlideDetail({ id, title, author, organization, slides, views, likes: initialLikes, description }: SlideDetailProps) {
  const [likes, setLikes] = useState(initialLikes)

  const handleLike = () => {
    setLikes(prevLikes => prevLikes + 1)
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <Card>
        <CardContent className="p-6">
          <div className="mb-6 flex justify-between">
            <div>
              <h1 className="text-2xl font-bold">{title}</h1>
              <p className="text-muted-foreground">By {author} from {organization}</p>
            </div>
            <div className="flex items-center space-x-4">
              <Button onClick={handleLike} variant="outline" className="flex items-center space-x-2">
                <ThumbsUp className="h-4 w-4" />
                <span>{likes}</span>
              </Button>
              <Button variant="outline" className="flex items-center space-x-2">
                <Download className="h-4 w-4" />
                <span>Download</span>
              </Button>
              <Button variant="outline">
                <Share2 className="h-4 w-4" />
              </Button>
            </div>
          </div>
          <div className="aspect-video w-full bg-gray-200">
            {/* Placeholder for slide viewer */}
            <div className="flex h-full items-center justify-center text-2xl font-bold text-gray-400">
              Slide Viewer
            </div>
          </div>
          <div className="mt-6 flex items-center justify-between">
            <div className="flex items-center space-x-4 text-sm text-muted-foreground">
              <span>{slides} slides</span>
              <span className="flex items-center space-x-1">
                <Eye className="h-4 w-4" />
                <span>{views} views</span>
              </span>
            </div>
          </div>
          <p className="mt-4 text-muted-foreground">{description}</p>
        </CardContent>
      </Card>
    </div>
  )
}

