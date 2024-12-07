import { Header } from "@/components/header"
import { Navigation } from "@/components/navigation"
import { Search } from "@/components/search"

export default function SearchPage() {
  return (
    <div className="min-h-screen">
      <Header />
      <Navigation />
      <main>
        <Search />
      </main>
    </div>
  )
}

