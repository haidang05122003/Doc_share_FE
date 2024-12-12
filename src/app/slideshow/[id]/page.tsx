import { Header } from "@/components/header"
import { SlideViewer } from "@/components/slide-viewer"
import { Footer } from "@/components/footer"

// Mock data - in a real app, this would come from an API
const mockSlideData = {
  googleDriveId: "1BxiMVs0XRA5nFMdKvBdBZjgmUUqptlbs74OgvE2upms", // Sample Google Slides ID
  title: "13 Tricks to Get the Most Out of the S Pen",
  author: {
    name: "Samsung Mobile",
    username: "samsung-mobile",
    avatar: "/placeholder.svg?height=50&width=50"
  },
  date: "February 24, 2024",
  views: "267,288",
  likes: 1234,
  category: "Technology",
  relatedPresentations: [
    {
      id: "1",
      title: "The Future of Mobile Technology",
      author: "Tech Insider",
      views: "156K",
      thumbnail: "/placeholder.svg?height=80&width=120"
    },
    {
      id: "2",
      title: "Mastering Your Smartphone",
      author: "Gadget Guru",
      views: "98K",
      thumbnail: "/placeholder.svg?height=80&width=120"
    },
    {
      id: "3",
      title: "Top 10 Phone Accessories",
      author: "Mobile Enthusiast",
      views: "75K",
      thumbnail: "/placeholder.svg?height=80&width=120"
    }
  ]
}

export default function SlideshowPage({ params }: { params: { id: string } }) {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <SlideViewer {...mockSlideData} />
      </main>
      <Footer />
    </div>
  )
}

