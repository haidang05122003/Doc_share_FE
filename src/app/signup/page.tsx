import { Header } from "@/components/header"
import { SignUpForm } from "@/components/signup-form"
import { Footer } from "@/components/footer"

export default function SignUpPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow bg-gray-50">
        <div className="container mx-auto px-4 py-8">
          <div className="max-w-md mx-auto">
            <SignUpForm />
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}

