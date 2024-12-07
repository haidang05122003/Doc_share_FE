"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"

const mockCategories = [
  { id: 1, name: "Công nghệ", description: "Bài viết về công nghệ mới" },
  { id: 2, name: "Kinh doanh", description: "Tin tức và phân tích kinh doanh" },
  { id: 3, name: "Lifestyle", description: "Phong cách sống và giải trí" },
]

export default function CategoriesManagement() {
  const [categories, setCategories] = useState(mockCategories)
  const [isDialogOpen, setIsDialogOpen] = useState(false)
  const [selectedCategory, setSelectedCategory] = useState(null)

  return (
    <div className="space-y-4">
      <h1 className="text-2xl font-bold">Quản lý danh mục</h1>
      <div className="flex justify-between items-center">
        <Input placeholder="Tìm kiếm danh mục..." className="max-w-sm" />
        <Button>Thêm danh mục mới</Button>
      </div>
      <div className="border rounded-lg overflow-hidden">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>ID</TableHead>
              <TableHead>Tên danh mục</TableHead>
              <TableHead>Mô tả</TableHead>
              <TableHead>Hành động</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {categories.map((category) => (
              <TableRow key={category.id} className="hover:bg-gray-100 transition-colors">
                <TableCell>{category.id}</TableCell>
                <TableCell>{category.name}</TableCell>
                <TableCell>{category.description}</TableCell>
                <TableCell>
                  <div className="space-x-2">
                    <Button size="sm" variant="outline">Chỉnh sửa</Button>
                    <Button size="sm" variant="destructive">Xóa</Button>
                    <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
                      <DialogTrigger asChild>
                        <Button size="sm" variant="outline" onClick={() => setSelectedCategory(category)}>Chi tiết</Button>
                      </DialogTrigger>
                      <DialogContent>
                        <DialogHeader>
                          <DialogTitle>Chi tiết danh mục</DialogTitle>
                        </DialogHeader>
                        {selectedCategory && (
                          <div className="space-y-2">
                            <p><strong>ID:</strong> {selectedCategory.id}</p>
                            <p><strong>Tên danh mục:</strong> {selectedCategory.name}</p>
                            <p><strong>Mô tả:</strong> {selectedCategory.description}</p>
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

