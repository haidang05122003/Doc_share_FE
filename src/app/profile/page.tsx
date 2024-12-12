'use client'

import { useState, useEffect } from 'react'
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Header } from "@/components/header"
import { Building2, MapPin, Info, Eye, ThumbsUp, Calendar, Edit2 } from 'lucide-react'
import Link from "next/link"
import { Loading } from "@/components/ui/loading"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { motion } from "framer-motion"

export default function ProfilePage() {
  const [isLoading, setIsLoading] = useState(true)
  const [isEditing, setIsEditing] = useState(false)
  const [bio, setBio] = useState("Giới thiệu về tôi")

  useEffect(() => {
    // Simulate data loading
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 1500)

    return () => clearTimeout(timer)
  }, [])

  const handleEditBio = () => {
    setIsEditing(true)
  }

  const handleSaveBio = () => {
    setIsEditing(false)
    // Here you would typically save the bio to the backend
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Header isLoggedIn hideNavigation />
      <main className="container mx-auto px-4 py-8">
        {isLoading ? (
          <Loading className="h-64" />
        ) : (
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="grid gap-6 md:grid-cols-[300px_1fr]"
          >
            <div className="space-y-6">
              <Card>
                <CardContent className="p-6">
                  <div className="text-center">
                    <Avatar className="w-32 h-32 mx-auto mb-4">
                      <AvatarImage src="/placeholder.svg" alt="Profile" />
                      <AvatarFallback>DD</AvatarFallback>
                    </Avatar>
                    <h1 className="text-2xl font-bold">d0512203hhd</h1>
                    <Button asChild className="mt-4 w-full">
                      <Link href="/settings">Chỉnh sửa hồ sơ</Link>
                    </Button>
                  </div>

                  <div className="mt-6 space-y-4">
                    <div className="flex items-center gap-2 text-sm">
                      <Building2 className="h-4 w-4" />
                      <span>Lập trình viên</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <MapPin className="h-4 w-4" />
                      <span>Telecom / Mobile</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <Info className="h-4 w-4" />
                      {isEditing ? (
                        <div className="flex items-center gap-2">
                          <input
                            type="text"
                            value={bio}
                            onChange={(e) => setBio(e.target.value)}
                            className="border rounded px-2 py-1 text-sm"
                          />
                          <Button size="sm" onClick={handleSaveBio}>Save</Button>
                        </div>
                      ) : (
                        <>
                          <span>{bio}</span>
                          <Button size="sm" variant="ghost" onClick={handleEditBio}>
                            <Edit2 className="h-4 w-4" />
                          </Button>
                        </>
                      )}
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <Calendar className="h-4 w-4" />
                      <span>Tham gia từ Tháng 6, 2023</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Thống kê</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex justify-between">
                    <div className="text-center">
                      <p className="text-2xl font-bold">15</p>
                      <p className="text-sm text-muted-foreground">Bài đăng</p>
                    </div>
                    <div className="text-center">
                      <p className="text-2xl font-bold">1.2K</p>
                      <p className="text-sm text-muted-foreground">Lượt xem</p>
                    </div>
                    <div className="text-center">
                      <p className="text-2xl font-bold">230</p>
                      <p className="text-sm text-muted-foreground">Lượt thích</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div>
              <Tabs defaultValue="pending" className="space-y-6">
                <TabsList className="bg-white w-full justify-start">
                  <TabsTrigger value="pending">Chờ duyệt</TabsTrigger>
                  <TabsTrigger value="approved">Đã duyệt</TabsTrigger>
                  <TabsTrigger value="rejected">Đã từ chối</TabsTrigger>
                </TabsList>

                <TabsContent value="pending" className="space-y-4">
                  <Card>
                    <CardContent className="p-6 text-center text-muted-foreground">
                      Không có tài liệu nào đang chờ duyệt
                    </CardContent>
                  </Card>
                </TabsContent>

                <TabsContent value="approved" className="space-y-4">
                  {[1, 2, 3].map((item) => (
                    <motion.div
                      key={item}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: item * 0.1 }}
                    >
                      <Card>
                        <CardContent className="p-4 flex items-center space-x-4">
                          <img src="/placeholder.svg" alt="Thumbnail" className="w-24 h-16 object-cover rounded" />
                          <div className="flex-1">
                            <h3 className="font-semibold">Tài liệu đã duyệt {item}</h3>
                            <div className="flex items-center text-sm text-muted-foreground mt-1">
                              <Eye className="w-4 h-4 mr-1" />
                              <span className="mr-4">100 lượt xem</span>
                              <ThumbsUp className="w-4 h-4 mr-1" />
                              <span>20 lượt thích</span>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    </motion.div>
                  ))}
                </TabsContent>

                <TabsContent value="rejected" className="space-y-4">
                  <Card>
                    <CardContent className="p-6 text-center text-muted-foreground">
                      Không có tài liệu nào bị từ chối
                    </CardContent>
                  </Card>
                </TabsContent>
              </Tabs>
            </div>
          </motion.div>
        )}
      </main>
    </div>
  )
}

