import Link from "next/link"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Search } from 'lucide-react'
import { UserDropdown } from "@/components/user-dropdown"

interface HeaderProps {
  isLoggedIn?: boolean
  username?: string
  hideNavigation?: boolean
}

export function Header({ isLoggedIn = false, username = "d0512203hhd", hideNavigation = false }: HeaderProps) {
  return (
    <header className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 shadow-lg">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <Link href="/" className="flex items-center">
          <span className="text-2xl font-bold text-white">SlideShare</span>
        </Link>
        
        <div className="flex-1 max-w-xl px-4">
          <div className="relative">
            <Search className="absolute left-2 top-2.5 h-4 w-4 text-white/70" />
            <Input 
              placeholder="Tìm kiếm bài thuyết trình" 
              className="pl-8 pr-4 py-2 w-full bg-white/10 text-white placeholder:text-white/70 border-white/20 focus:border-white/40 transition-all text-sm"
            />
          </div>
        </div>

        <div className="flex items-center gap-4">
          <Button variant="ghost" asChild className="text-white hover:bg-white/20 transition-colors min-w-[80px] text-sm">
            <Link href="/upload">Tải lên</Link>
          </Button>
          {isLoggedIn ? (
            <UserDropdown username={username} />
          ) : (
            <Button variant="secondary" asChild className="bg-white text-blue-600 hover:bg-white/90 transition-colors min-w-[100px] text-sm">
              <Link href="/login">Đăng nhập</Link>
            </Button>
          )}
        </div>
      </div>
    </header>
  )
}

