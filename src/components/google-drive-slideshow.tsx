import { Share2, Download, ThumbsUp } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

interface GoogleDriveSlideshowProps {
  documentId: string
  title: string
  author: {
    name: string
    avatar: string
  }
  views: number
  likes: number
}

export function GoogleDriveSlideshow({ documentId, title, author, views, likes }: GoogleDriveSlideshowProps) {
  const iframeUrl = `https://drive.google.com/file/d/${documentId}/preview`

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="bg-white shadow-lg rounded-lg overflow-hidden">
        <div className="p-6">
          <h1 className="text-3xl font-bold mb-4">{title}</h1>
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center space-x-4">
              <Avatar>
                <AvatarImage src={author.avatar} alt={author.name} />
                <AvatarFallback>{author.name[0]}</AvatarFallback>
              </Avatar>
              <div>
                <p className="font-semibold">{author.name}</p>
                <p className="text-sm text-gray-500">{views} lượt xem • {likes} lượt thích</p>
              </div>
            </div>
            <div className="flex space-x-2">
              <Button variant="outline" size="sm">
                <Share2 className="w-4 h-4 mr-2" />
                Chia sẻ
              </Button>
              <Button variant="outline" size="sm">
                <Download className="w-4 h-4 mr-2" />
                Tải xuống
              </Button>
              <Button variant="outline" size="sm">
                <ThumbsUp className="w-4 h-4 mr-2" />
                Thích
              </Button>
            </div>
          </div>
        </div>
        <div className="aspect-w-16 aspect-h-9">
          <iframe
            src={iframeUrl}
            className="w-full h-full"
            allow="autoplay"
          ></iframe>
        </div>
      </div>
    </div>
  )
}

