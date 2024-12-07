import { Header } from "@/components/header"
import { Navigation } from "@/components/navigation"
import { Profile } from "@/components/profile"

export default function ProfilePage({ params }: { params: { username: string } }) {
  // Trong thực tế, bạn sẽ lấy dữ liệu người dùng từ API dựa trên params.username
  const mockUserData = {
    username: params.username,
    name: "John Doe",
    bio: "Senior Developer & Tech Enthusiast. Sharing knowledge through presentations.",
    location: "San Francisco, CA",
    joinDate: "January 2020",
    followers: 1234,
    following: 567,
    presentations: [
      {
        id: "1",
        title: "Modern Web Development Practices 2024",
        views: "12K",
        thumbnail: "/placeholder.svg?height=200&width=300",
        date: "2 days ago"
      },
      {
        id: "2",
        title: "UI/UX Design Principles",
        views: "8K",
        thumbnail: "/placeholder.svg?height=200&width=300",
        date: "1 week ago"
      }
    ]
  }

  return (
    <div className="min-h-screen">
      <Header />
      <Navigation />
      <main>
        <Profile {...mockUserData} />
      </main>
    </div>
  )
}

