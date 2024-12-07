import Link from "next/link"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Search } from 'lucide-react'

export function Header() {
  return (
    <header className="border-b bg-white">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <Link href="/" className="flex items-center space-x-2">
          <img src="/slideshare-logo.svg" alt="SlideShare" className="h-8 w-auto" />
        </Link>
        
        <div className="flex-1 max-w-xl px-4">
          <div className="relative">
            <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input placeholder="Search" className="pl-8 pr-4 py-1 w-full" />
          </div>
        </div>

        <div className="flex items-center space-x-4">
          <Button variant="ghost" asChild>
            <Link href="/upload">Upload</Link>
          </Button>
          <Button variant="default">Download free for 30 days</Button>
          <Button variant="ghost" asChild>
            <Link href="/login">Login</Link>
          </Button>
        </div>
      </div>
    </header>
  )
}

