import { Header } from "@/components/header"
import { Navigation } from "@/components/navigation"
import { CategoryHeader } from "@/components/category-header"
import { PresentationGrid } from "@/components/presentation-grid"
import { Footer } from "@/components/footer"

export default function BusinessCategoryPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <Navigation currentCategory="business" />
      <main className="flex-grow">
        <CategoryHeader />
        <PresentationGrid />
      </main>
      <Footer />
    </div>
  )
}

