import { Header } from "@/components/header"
import { Navigation } from "@/components/navigation"
import { SlideViewer } from "@/components/slide-viewer"

// Mock data - in a real app, this would come from an API
const mockSlideData = {
  slides: Array.from({ length: 10 }, (_, i) => ({
    id: i + 1,
    imageUrl: `/placeholder.svg?height=600&width=800&text=Slide ${i + 1}`
  })),
  title: "13 Tricks to Get the Most Out of the S Pen",
  author: "Samsung Mobile",
  date: "February 24, 2024",
  views: "267,288",
  likes: 1234
}

export default function SlideshowPage({ params }: { params: { id: string } }) {
  return (
    <div className="min-h-screen">
      <Header />
      <Navigation />
      <main>
        <SlideViewer {...mockSlideData} />
      </main>
    </div>
  )
}

