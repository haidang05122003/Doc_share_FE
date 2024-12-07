"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"

const mockRoles = [
  { id: 1, name: "Admin", description: "Quản trị viên hệ thống" },
  { id: 2, name: "Editor", description: "Biên tập viên" },
  { id: 3, name: "User", description: "Người dùng thông thường" },
]

export default function RolesManagement() {
  const [roles, setRoles] = useState(mockRoles)
  const [isDialogOpen, setIsDialogOpen] = useState(false)
  const [selectedRole, setSelectedRole] = useState(null)

  return (
    <div className="space-y-4">
      <h1 className="text-2xl font-bold">Quản lý vai trò</h1>
      <div className="flex justify-between items-center">
        <Input placeholder="Tìm kiếm vai trò..." className="max-w-sm" />
        <Button>Thêm vai trò mới</Button>
      </div>
      <div className="border rounded-lg overflow-hidden">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>ID</TableHead>
              <TableHead>Tên vai trò</TableHead>
              <TableHead>Mô tả</TableHead>
              <TableHead>Hành động</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {roles.map((role) => (
              <TableRow key={role.id} className="hover:bg-gray-100 transition-colors">
                <TableCell>{role.id}</TableCell>
                <TableCell>{role.name}</TableCell>
                <TableCell>{role.description}</TableCell>
                <TableCell>
                  <div className="space-x-2">
                    <Button size="sm" variant="outline">Chỉnh sửa</Button>
                    <Button size="sm" variant="destructive">Xóa</Button>
                    <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
                      <DialogTrigger asChild>
                        <Button size="sm" variant="outline" onClick={() => setSelectedRole(role)}>Chi tiết</Button>
                      </DialogTrigger>
                      <DialogContent>
                        <DialogHeader>
                          <DialogTitle>Chi tiết vai trò</DialogTitle>
                        </DialogHeader>
                        {selectedRole && (
                          <div className="space-y-2">
                            <p><strong>ID:</strong> {selectedRole.id}</p>
                            <p><strong>Tên vai trò:</strong> {selectedRole.name}</p>
                            <p><strong>Mô tả:</strong> {selectedRole.description}</p>
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

