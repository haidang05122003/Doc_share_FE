import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Bookmark } from 'lucide-react'
import Link from 'next/link'

interface Presentation {
  id: string
  type: 'Document' | 'Presentation'
  title: string
  author: string
  organization: string
  stats: {
    pages?: number
    slides?: number
    views: string
  }
  thumbnail: string
}

const presentations: Presentation[] = [
  {
    id: "1",
    type: "Document",
    title: "Future of Trade 2024 - Decoupled and Reconfigured - Snapshot Report",
    author: "Dubai Multi Commodity Centre",
    organization: "DMCC",
    stats: {
      pages: 20,
      views: "631.8K"
    },
    thumbnail: "/placeholder.svg?height=200&width=300"
  },
  {
    id: "2",
    type: "Document",
    title: "List of States and Organizations - 2024 Directory",
    author: "Rbc Rbcua",
    organization: "RBC",
    stats: {
      pages: 4,
      views: "41.3K"
    },
    thumbnail: "/placeholder.svg?height=200&width=300"
  },
  {
    id: "3",
    type: "Presentation",
    title: "How to Prepare For a Successful Job Search for 2024",
    author: "Albert Qian",
    organization: "Career Coach",
    stats: {
      slides: 37,
      views: "36K"
    },
    thumbnail: "/placeholder.svg?height=200&width=300"
  },
  {
    id: "4",
    type: "Document",
    title: "Trending Flavors and Ingredients in Salty Snacks - US 2024",
    author: "Mintel Group",
    organization: "Mintel",
    stats: {
      pages: 50,
      views: "37.8K"
    },
    thumbnail: "/placeholder.svg?height=200&width=300"
  },
  {
    id: "5",
    type: "Presentation",
    title: "SYY CAGNY 2024 PRESENTATION (February 20, 2024)",
    author: "SYYIR",
    organization: "Sysco",
    stats: {
      slides: 43,
      views: "28.7K"
    },
    thumbnail: "/placeholder.svg?height=200&width=300"
  },
  // Add more presentations as needed
]

export function PresentationGrid() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="mb-6 text-xl font-semibold">Most popular in Business</h2>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
        {presentations.map((presentation) => (
          <Card key={presentation.id} className="overflow-hidden">
            <Link href={`/slideshow/${presentation.id}`}>
              <img
                src={presentation.thumbnail}
                alt={presentation.title}
                className="aspect-video w-full object-cover"
              />
            </Link>
            <CardContent className="p-4">
              <div className="mb-2 flex items-center justify-between">
                <Badge variant="secondary">{presentation.type}</Badge>
                <Button variant="ghost" size="icon" className="h-8 w-8">
                  <Bookmark className="h-4 w-4" />
                </Button>
              </div>
              <Link href={`/slideshow/${presentation.id}`}>
                <h3 className="line-clamp-2 font-semibold hover:text-blue-600">
                  {presentation.title}
                </h3>
              </Link>
              <Link href={`/profile/${presentation.author}`} className="mt-2 block text-sm text-muted-foreground hover:text-blue-600">
                {presentation.author}
              </Link>
              <div className="mt-2 text-sm text-muted-foreground">
                {presentation.stats.pages && `${presentation.stats.pages} pages`}
                {presentation.stats.slides && `${presentation.stats.slides} slides`}
                <span className="mx-2">•</span>
                {presentation.stats.views} views
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}

