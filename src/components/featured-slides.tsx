import { Card, CardContent } from "@/components/ui/card"
import { Eye, Bookmark } from 'lucide-react'
import Link from 'next/link'

interface Slide {
  id: string
  title: string
  author: string
  organization: string
  slides: number
  views: string
  thumbnail: string
}

const featuredSlides: Slide[] = [
  {
    id: "1",
    title: "2024 Trend Updates: What Really Works In SEO & Content Marketing",
    author: "Search Engine Journal",
    organization: "SEJ",
    slides: 21,
    views: "359K",
    thumbnail: "/placeholder.svg?height=200&width=300"
  },
  {
    id: "2",
    title: "Storytelling For The Web: Integrate Storytelling in your Design Process",
    author: "Chiara Aliotta",
    organization: "Design",
    slides: 39,
    views: "286.9K",
    thumbnail: "/placeholder.svg?height=200&width=300"
  },
  {
    id: "3",
    title: "Artificial Intelligence, Data and Competition",
    author: "OECD Directorate for Financial and Enterprise Affairs",
    organization: "OECD",
    slides: 21,
    views: "202.7K",
    thumbnail: "/placeholder.svg?height=200&width=300"
  },
  {
    id: "4",
    title: "How to Leverage AI to Boost Employee Wellness",
    author: "SocialHRCamp",
    organization: "HR",
    slides: 28,
    views: "87.8K",
    thumbnail: "/placeholder.svg?height=200&width=300"
  },
]

export function FeaturedSlides() {
  return (
    <section className="py-12">
      <div className="container mx-auto px-4">
        <h2 className="mb-8 text-2xl font-bold">Featured</h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {featuredSlides.map((slide) => (
            <Card key={slide.id} className="overflow-hidden">
              <Link href={`/slide/${slide.id}`}>
                <img src={slide.thumbnail} alt={slide.title} className="aspect-video w-full object-cover" />
                <CardContent className="p-4">
                  <h3 className="font-semibold hover:text-blue-600">{slide.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{slide.author}</p>
                  <div className="mt-4 flex items-center justify-between text-sm text-muted-foreground">
                    <div className="flex items-center space-x-4">
                      <span>{slide.slides} slides</span>
                      <span className="flex items-center space-x-1">
                        <Eye className="h-4 w-4" />
                        <span>{slide.views} views</span>
                      </span>
                    </div>
                    <button>
                      <Bookmark className="h-4 w-4" />
                    </button>
                  </div>
                </CardContent>
              </Link>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

