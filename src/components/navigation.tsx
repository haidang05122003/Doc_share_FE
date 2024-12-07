import Link from "next/link"
import { cn } from "@/lib/utils"

const navItems = [
  { label: "For You", href: "/" },
  { label: "Business", href: "/category/business" },
  { label: "Mobile", href: "/category/mobile" },
  { label: "Social Media", href: "/category/social-media" },
  { label: "Marketing", href: "/category/marketing" },
  { label: "Technology", href: "/category/technology" },
  { label: "Art & Photos", href: "/category/art-photos" },
  { label: "Career", href: "/category/career" },
  { label: "Design", href: "/category/design" },
  { label: "Education", href: "/category/education" },
  { label: "Presentations & Public Speaking", href: "/category/presentations-public-speaking" },
  { label: "Government & Nonprofit", href: "/category/government-nonprofit" },
]

export function Navigation({ currentCategory }: { currentCategory?: string }) {
  return (
    <nav className="bg-gray-100 border-b">
      <div className="container mx-auto overflow-x-auto">
        <div className="flex space-x-1 p-1">
          {navItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className={cn(
                "px-3 py-2 text-sm font-medium rounded-md whitespace-nowrap transition-colors",
                currentCategory === item.label.toLowerCase()
                  ? "bg-blue-600 text-white"
                  : "text-gray-700 hover:bg-gray-200"
              )}
            >
              {item.label}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  )
}

