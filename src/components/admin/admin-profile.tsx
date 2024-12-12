"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { toast } from "@/hooks/use-toast"

export function AdminProfile() {
  const [name, setName] = useState("Admin User")
  const [email, setEmail] = useState("admin@example.com")
  const [bio, setBio] = useState("Quản trị viên hệ thống")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Xử lý cập nhật thông tin ở đây
    toast({
      title: "Thông tin đã được cập nhật",
      description: "Thông tin cá nhân của bạn đã được cập nhật thành công.",
    })
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Thông tin cá nhân</CardTitle>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="flex items-center space-x-4">
            <Avatar className="h-20 w-20">
              <AvatarImage src="/placeholder.svg" />
              <AvatarFallback>AD</AvatarFallback>
            </Avatar>
            <Button variant="outline">Thay đổi ảnh</Button>
          </div>
          <div className="grid gap-2">
            <Label htmlFor="name">Tên</Label>
            <Input
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="bio">Giới thiệu</Label>
            <Textarea
              id="bio"
              value={bio}
              onChange={(e) => setBio(e.target.value)}
            />
          </div>
          <Button type="submit">Cập nhật thông tin</Button>
        </form>
      </CardContent>
    </Card>
  )
}

