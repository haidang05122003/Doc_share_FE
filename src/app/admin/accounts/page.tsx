"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"

const mockAccounts = [
  { id: 1, username: "user1", email: "user1@example.com", role: "User" },
  { id: 2, username: "admin1", email: "admin1@example.com", role: "Admin" },
  { id: 3, username: "user2", email: "user2@example.com", role: "User" },
]

export default function AccountsManagement() {
  const [accounts, setAccounts] = useState(mockAccounts)
  const [isDialogOpen, setIsDialogOpen] = useState(false)
  const [selectedAccount, setSelectedAccount] = useState(null)

  return (
    <div className="space-y-4">
      <h1 className="text-2xl font-bold">Quản lý tài khoản</h1>
      <div className="flex justify-between items-center">
        <Input placeholder="Tìm kiếm tài khoản..." className="max-w-sm" />
        <Button>Thêm tài khoản mới</Button>
      </div>
      <div className="border rounded-lg overflow-hidden">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>ID</TableHead>
              <TableHead>Tên người dùng</TableHead>
              <TableHead>Email</TableHead>
              <TableHead>Vai trò</TableHead>
              <TableHead>Hành động</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {accounts.map((account) => (
              <TableRow key={account.id} className="hover:bg-gray-100 transition-colors">
                <TableCell>{account.id}</TableCell>
                <TableCell>{account.username}</TableCell>
                <TableCell>{account.email}</TableCell>
                <TableCell>{account.role}</TableCell>
                <TableCell>
                  <div className="space-x-2">
                    <Button size="sm" variant="outline">Chỉnh sửa</Button>
                    <Button size="sm" variant="destructive">Xóa</Button>
                    <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
                      <DialogTrigger asChild>
                        <Button size="sm" variant="outline" onClick={() => setSelectedAccount(account)}>Chi tiết</Button>
                      </DialogTrigger>
                      <DialogContent>
                        <DialogHeader>
                          <DialogTitle>Chi tiết tài khoản</DialogTitle>
                        </DialogHeader>
                        {selectedAccount && (
                          <div className="space-y-2">
                            <p><strong>ID:</strong> {selectedAccount.id}</p>
                            <p><strong>Tên người dùng:</strong> {selectedAccount.username}</p>
                            <p><strong>Email:</strong> {selectedAccount.email}</p>
                            <p><strong>Vai trò:</strong> {selectedAccount.role}</p>
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

