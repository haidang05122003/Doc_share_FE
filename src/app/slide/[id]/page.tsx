import { Header } from "@/components/header"
import { Navigation } from "@/components/navigation"
import { SlideDetail } from "@/components/slide-detail"
import { Footer } from "@/components/footer"

export default function SlidePage({ params }: { params: { id: string } }) {
  // Trong thực tế, bạn sẽ lấy dữ liệu slide từ API hoặc database dựa trên params.id
  const slideData = {
    id: params.id,
    title: "2024 Trend Updates: What Really Works In SEO & Content Marketing",
    author: "Search Engine Journal",
    organization: "SEJ",
    slides: 21,
    views: "359K",
    likes: 1500,
    description: "Discover the latest trends and effective strategies in SEO and Content Marketing for 2024. This presentation covers key insights and practical tips to boost your digital marketing efforts."
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <Navigation />
      <main className="flex-grow">
        <SlideDetail {...slideData} />
      </main>
      <Footer />
    </div>
  )
}

