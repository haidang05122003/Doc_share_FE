import { useState, useEffect } from 'react'

export function useAuth() {
  const [user, setUser] = useState<null | { id: string; name: string }>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // Simulating an authentication check
    setTimeout(() => {
      setUser({ id: '1', name: 'John Doe' })
      setLoading(false)
    }, 1000)
  }, [])

  return { user, loading }
}

