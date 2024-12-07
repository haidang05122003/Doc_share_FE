"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"

const mockTags = [
  { id: 1, name: "JavaScript", count: 150 },
  { id: 2, name: "React", count: 120 },
  { id: 3, name: "Node.js", count: 80 },
]

export default function TagsManagement() {
  const [tags, setTags] = useState(mockTags)
  const [isDialogOpen, setIsDialogOpen] = useState(false)
  const [selectedTag, setSelectedTag] = useState(null)

  return (
    <div className="space-y-4">
      <h1 className="text-2xl font-bold">Quản lý thẻ</h1>
      <div className="flex justify-between items-center">
        <Input placeholder="Tìm kiếm thẻ..." className="max-w-sm" />
        <Button>Thêm thẻ mới</Button>
      </div>
      <div className="border rounded-lg overflow-hidden">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>ID</TableHead>
              <TableHead>Tên thẻ</TableHead>
              <TableHead>Số lượng sử dụng</TableHead>
              <TableHead>Hành động</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {tags.map((tag) => (
              <TableRow key={tag.id} className="hover:bg-gray-100 transition-colors">
                <TableCell>{tag.id}</TableCell>
                <TableCell>{tag.name}</TableCell>
                <TableCell>{tag.count}</TableCell>
                <TableCell>
                  <div className="space-x-2">
                    <Button size="sm" variant="outline">Chỉnh sửa</Button>
                    <Button size="sm" variant="destructive">Xóa</Button>
                    <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
                      <DialogTrigger asChild>
                        <Button size="sm" variant="outline" onClick={() => setSelectedTag(tag)}>Chi tiết</Button>
                      </DialogTrigger>
                      <DialogContent>
                        <DialogHeader>
                          <DialogTitle>Chi tiết thẻ</DialogTitle>
                        </DialogHeader>
                        {selectedTag && (
                          <div className="space-y-2">
                            <p><strong>ID:</strong> {selectedTag.id}</p>
                            <p><strong>Tên thẻ:</strong> {selectedTag.name}</p>
                            <p><strong>Số lượng sử dụng:</strong> {selectedTag.count}</p>
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

