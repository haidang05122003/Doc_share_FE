'use client'

import { useState, useEffect } from "react"
import { Header } from "@/components/header"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { Loading } from "@/components/ui/loading"

export default function SettingsPage() {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // Simulate data loading
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 1500)

    return () => clearTimeout(timer)
  }, [])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000))
    setIsLoading(false)
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Header isLoggedIn hideNavigation />
      <main className="container mx-auto px-4 py-8">
        <Card className="max-w-4xl mx-auto">
          <CardHeader>
            <CardTitle className="text-2xl">Cài đặt tài khoản</CardTitle>
          </CardHeader>
          <CardContent>
            {isLoading ? (
              <Loading className="h-64" />
            ) : (
              <Tabs defaultValue="personal" className="space-y-6">
                <TabsList className="bg-white">
                  <TabsTrigger value="personal">Thông tin cá nhân</TabsTrigger>
                  <TabsTrigger value="email">Email</TabsTrigger>
                  <TabsTrigger value="social">Mạng xã hội</TabsTrigger>
                  <TabsTrigger value="notifications">Thông báo</TabsTrigger>
                </TabsList>

                <TabsContent value="personal">
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="space-y-4">
                      <div className="grid gap-2">
                        <Label htmlFor="accountType">Loại tài khoản</Label>
                        <Select defaultValue="university">
                          <SelectTrigger>
                            <SelectValue placeholder="Chọn loại tài khoản" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="university">Trường học</SelectItem>
                            <SelectItem value="business">Doanh nghiệp</SelectItem>
                            <SelectItem value="personal">Cá nhân</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>

                      <div className="grid gap-2">
                        <Label htmlFor="firstName">Tên</Label>
                        <Input id="firstName" placeholder="Nhập tên của bạn" />
                      </div>

                      <div className="grid gap-2">
                        <Label htmlFor="lastName">Họ</Label>
                        <Input id="lastName" placeholder="Nhập họ của bạn" />
                      </div>

                      <div className="grid gap-2">
                        <Label htmlFor="occupation">Nghề nghiệp</Label>
                        <Input 
                          id="occupation" 
                          placeholder="VD: Lập trình viên, Tư vấn viên tự do" 
                          defaultValue="Lập trình viên"
                        />
                      </div>

                      <div className="grid gap-2">
                        <Label htmlFor="institution">Tổ chức</Label>
                        <Input 
                          id="institution" 
                          placeholder="VD: Google, ĐH Bách Khoa" 
                          defaultValue="Telecom / Mobile"
                        />
                      </div>

                      <div className="grid gap-2">
                        <Label htmlFor="about">Giới thiệu</Label>
                        <Textarea 
                          id="about" 
                          placeholder="Giới thiệu về bản thân"
                          defaultValue="Giới thiệu về tôi"
                        />
                      </div>
                    </div>

                    <div className="flex justify-end space-x-4">
                      <Button variant="outline">Hủy</Button>
                      <Button type="submit" disabled={isLoading}>
                        {isLoading ? "Đang lưu..." : "Lưu thay đổi"}
                      </Button>
                    </div>
                  </form>
                </TabsContent>

                <TabsContent value="email">
                  <div className="text-center text-muted-foreground">
                    Cài đặt email sẽ được hiển thị ở đây
                  </div>
                </TabsContent>

                <TabsContent value="social">
                  <div className="text-center text-muted-foreground">
                    Cài đặt mạng xã hội sẽ được hiển thị ở đây
                  </div>
                </TabsContent>

                <TabsContent value="notifications">
                  <div className="text-center text-muted-foreground">
                    Cài đặt thông báo sẽ được hiển thị ở đây
                  </div>
                </TabsContent>
              </Tabs>
            )}
          </CardContent>
        </Card>
      </main>
    </div>
  )
}

