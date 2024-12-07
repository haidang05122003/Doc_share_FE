'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { FaGoogle, FaFacebook, FaLinkedin } from 'react-icons/fa'

export function LoginForm() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const router = useRouter()

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Here you would typically handle the login logic
    console.log('Login attempted with:', email, password)
    // For now, let's just redirect to the home page
    router.push('/')
  }

  return (
    <Card className="w-full">
      <CardHeader className="space-y-1">
        <CardTitle className="text-2xl font-bold text-center">Login to SlideShare</CardTitle>
      </CardHeader>
      <CardContent className="grid gap-4">
        <div className="grid grid-cols-3 gap-4">
          <Button variant="outline" className="hover:bg-blue-100">
            <FaFacebook className="mr-2 h-4 w-4 text-blue-600" />
            Facebook
          </Button>
          <Button variant="outline" className="hover:bg-red-100">
            <FaGoogle className="mr-2 h-4 w-4 text-red-600" />
            Google
          </Button>
          <Button variant="outline" className="hover:bg-blue-100">
            <FaLinkedin className="mr-2 h-4 w-4 text-blue-600" />
            LinkedIn
          </Button>
        </div>
        <div className="relative">
          <div className="absolute inset-0 flex items-center">
            <span className="w-full border-t" />
          </div>
          <div className="relative flex justify-center text-xs uppercase">
            <span className="bg-white px-2 text-muted-foreground">Or continue with</span>
          </div>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="grid gap-2">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              type="email"
              placeholder="m@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="grid gap-2 mt-4">
            <Label htmlFor="password">Password</Label>
            <Input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <Button className="w-full mt-6" type="submit">Sign In</Button>
        </form>
      </CardContent>
      <CardFooter className="flex flex-col items-center">
        <Link href="/forgot-password" className="text-sm text-blue-600 hover:underline">
          Forgot your password?
        </Link>
        <p className="mt-2 text-sm text-muted-foreground">
          Don&apos;t have an account?{" "}
          <Link href="/signup" className="text-blue-600 hover:underline">
            Sign up
          </Link>
        </p>
      </CardFooter>
    </Card>
  )
}

