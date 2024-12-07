"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"

const mockPosts = [
  { id: 1, title: "Bài viết 1", author: "Nguyễn Văn A", status: "Chờ duyệt" },
  { id: 2, title: "Bài viết 2", author: "Trần Thị B", status: "Đã duyệt" },
  { id: 3, title: "Bài viết 3", author: "Lê Văn C", status: "Từ chối" },
]

export default function PostsManagement() {
  const [posts, setPosts] = useState(mockPosts)
  const [isDialogOpen, setIsDialogOpen] = useState(false)
  const [selectedPost, setSelectedPost] = useState(null)

  const handleApprove = (id) => {
    setPosts(posts.map(post => post.id === id ? {...post, status: "Đã duyệt"} : post))
  }

  const handleReject = (id) => {
    setPosts(posts.map(post => post.id === id ? {...post, status: "Từ chối"} : post))
  }

  return (
    <div className="space-y-4">
      <h1 className="text-2xl font-bold">Quản lý bài viết</h1>
      <div className="flex justify-between items-center">
        <Input placeholder="Tìm kiếm bài viết..." className="max-w-sm" />
        <Button>Thêm bài viết mới</Button>
      </div>
      <div className="border rounded-lg overflow-hidden">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>ID</TableHead>
              <TableHead>Tiêu đề</TableHead>
              <TableHead>Tác giả</TableHead>
              <TableHead>Trạng thái</TableHead>
              <TableHead>Hành động</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {posts.map((post) => (
              <TableRow key={post.id} className="hover:bg-gray-100 transition-colors">
                <TableCell>{post.id}</TableCell>
                <TableCell>{post.title}</TableCell>
                <TableCell>{post.author}</TableCell>
                <TableCell>{post.status}</TableCell>
                <TableCell>
                  <div className="space-x-2">
                    <Button size="sm" onClick={() => handleApprove(post.id)}>Duyệt</Button>
                    <Button size="sm" variant="destructive" onClick={() => handleReject(post.id)}>Từ chối</Button>
                    <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
                      <DialogTrigger asChild>
                        <Button size="sm" variant="outline" onClick={() => setSelectedPost(post)}>Chi tiết</Button>
                      </DialogTrigger>
                      <DialogContent>
                        <DialogHeader>
                          <DialogTitle>Chi tiết bài viết</DialogTitle>
                        </DialogHeader>
                        {selectedPost && (
                          <div className="space-y-2">
                            <p><strong>ID:</strong> {selectedPost.id}</p>
                            <p><strong>Tiêu đề:</strong> {selectedPost.title}</p>
                            <p><strong>Tác giả:</strong> {selectedPost.author}</p>
                            <p><strong>Trạng thái:</strong> {selectedPost.status}</p>
                          </div>
                        )}
                      </DialogContent>
                    </Dialog>
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  )
}

