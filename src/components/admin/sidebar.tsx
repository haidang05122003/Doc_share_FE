'use client'

import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import { LayoutDashboard, FileText, Users, Settings, LogOut, BookOpen, Tag, FolderTree } from 'lucide-react'

const sidebarItems = [
  { icon: LayoutDashboard, label: "Tổng quan", href: "/admin" },
  { icon: FileText, label: "Quản lý bài viết", href: "/admin/posts" },
  { icon: Users, label: "Quản lý tài khoản", href: "/admin/accounts" },
  { icon: BookOpen, label: "Quản lý vai trò", href: "/admin/roles" },
  { icon: FolderTree, label: "Quản lý danh mục", href: "/admin/categories" },
  { icon: Tag, label: "Quản lý thẻ", href: "/admin/tags" },
  { icon: Settings, label: "Cài đặt", href: "/admin/settings" },
]

export function Sidebar() {
  const pathname = usePathname()

  return (
    <div className="flex h-full w-64 flex-col bg-gray-800 text-white">
      <div className="flex h-16 items-center justify-center border-b border-gray-700">
        <h1 className="text-2xl font-bold">Quản trị viên</h1>
      </div>
      <nav className="flex-1 space-y-2 p-4">
        {sidebarItems.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className={cn(
              "flex items-center space-x-3 rounded-lg px-3 py-2 transition-colors hover:bg-gray-700",
              pathname === item.href ? "bg-gray-700" : ""
            )}
          >
            <item.icon className="h-5 w-5" />
            <span>{item.label}</span>
          </Link>
        ))}
      </nav>
      <div className="border-t border-gray-700 p-4">
        <button className="flex w-full items-center space-x-3 rounded-lg px-3 py-2 transition-colors hover:bg-gray-700">
          <LogOut className="h-5 w-5" />
          <span>Đăng xuất</span>
        </button>
      </div>
    </div>
  )
}

