"use client"

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

const recentUploads = [
  {
    name: "Marketing Strategy 2024",
    email: "m@example.com",
    avatar: "/avatars/01.png",
  },
  {
    name: "Q4 Financial Report",
    email: "f@example.com",
    avatar: "/avatars/02.png",
  },
  {
    name: "Product Roadmap",
    email: "p@example.com",
    avatar: "/avatars/03.png",
  },
  {
    name: "Team Building Activities",
    email: "h@example.com",
    avatar: "/avatars/04.png",
  },
  {
    name: "Customer Feedback Analysis",
    email: "s@example.com",
    avatar: "/avatars/05.png",
  },
]

export function RecentUploads() {
  return (
    <div className="space-y-8">
      {recentUploads.map((upload) => (
        <div key={upload.email} className="flex items-center">
          <Avatar className="h-9 w-9">
            <AvatarImage src={upload.avatar} alt="Avatar" />
            <AvatarFallback>{upload.name[0]}</AvatarFallback>
          </Avatar>
          <div className="ml-4 space-y-1">
            <p className="text-sm font-medium leading-none">{upload.name}</p>
            <p className="text-sm text-muted-foreground">{upload.email}</p>
          </div>
          <div className="ml-auto font-medium">+$1,999.00</div>
        </div>
      ))}
    </div>
  )
}

