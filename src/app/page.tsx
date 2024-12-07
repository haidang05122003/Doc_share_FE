import { Header } from "@/components/header"
import { Navigation } from "@/components/navigation"
import { Hero } from "@/components/hero"
import { FeaturedSlides } from "@/components/featured-slides"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <Navigation />
      <main className="flex-grow">
        <Hero />
        <FeaturedSlides />
      </main>
      <Footer />
    </div>
  )
}
