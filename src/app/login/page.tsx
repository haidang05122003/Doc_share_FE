import { Header } from "@/components/header"
import { LoginForm } from "@/components/login-form"
import { Footer } from "@/components/footer"

export default function LoginPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow bg-gradient-to-br from-pink-100 to-yellow-100">
        <div className="container mx-auto px-4 py-16">
          <LoginForm />
        </div>
      </main>
      <Footer />
    </div>
  )
}

