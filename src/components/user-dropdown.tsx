'use client'

import { useState } from 'react'
import Link from "next/link"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Bookmark, Upload, BarChart2, Settings, HelpCircle, LogOut } from 'lucide-react'

export function UserDropdown({ username }: { username: string }) {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="flex items-center space-x-2 hover:opacity-80">
        <Avatar className="h-8 w-8">
          <AvatarImage src="/placeholder.svg" />
          <AvatarFallback>{username[0].toUpperCase()}</AvatarFallback>
        </Avatar>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-56">
        <div className="px-2 py-1.5 text-sm font-medium">{username}</div>
        <DropdownMenuSeparator />
        <DropdownMenuItem asChild>
          <Link href="/saved" className="flex items-center">
            <Bookmark className="mr-2 h-4 w-4" />
            Đã lưu
          </Link>
        </DropdownMenuItem>
        <DropdownMenuItem asChild>
          <Link href="/profile" className="flex items-center">
            <Upload className="mr-2 h-4 w-4" />
            Tài liệu của tôi
          </Link>
        </DropdownMenuItem>
        <DropdownMenuItem asChild>
          <Link href="/analytics" className="flex items-center">
            <BarChart2 className="mr-2 h-4 w-4" />
            Phân tích
          </Link>
        </DropdownMenuItem>
        <DropdownMenuItem asChild>
          <Link href="/settings" className="flex items-center">
            <Settings className="mr-2 h-4 w-4" />
            Cài đặt tài khoản
          </Link>
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem asChild>
          <Link href="/support" className="flex items-center">
            <HelpCircle className="mr-2 h-4 w-4" />
            Hỗ trợ
          </Link>
        </DropdownMenuItem>
        <DropdownMenuItem className="flex items-center text-red-600 focus:text-red-600">
          <LogOut className="mr-2 h-4 w-4" />
          Đăng xuất
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

