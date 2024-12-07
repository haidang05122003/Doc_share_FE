'use client'

import { useState } from 'react'
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { SearchIcon, Filter } from 'lucide-react'
import Link from 'next/link'

interface SearchResult {
  id: string
  title: string
  author: string
  thumbnail: string
  views: string
  date: string
}

const mockResults: SearchResult[] = [
  {
    id: '1',
    title: "Modern Web Development Practices 2024",
    author: "TechConf",
    thumbnail: "/placeholder.svg?height=200&width=300",
    views: "12K",
    date: "2 days ago"
  },
  {
    id: '2',
    title: "UI/UX Design Principles",
    author: "DesignHub",
    thumbnail: "/placeholder.svg?height=200&width=300",
    views: "8K",
    date: "1 week ago"
  },
  // Add more mock results as needed
]

export function Search() {
  const [query, setQuery] = useState('')
  const [results, setResults] = useState<SearchResult[]>(mockResults)

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    // In a real app, you would make an API call here
    console.log('Searching for:', query)
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <form onSubmit={handleSearch} className="flex gap-2">
          <div className="relative flex-1">
            <SearchIcon className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
            <Input
              type="search"
              placeholder="Search presentations..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              className="pl-9"
            />
          </div>
          <Button type="submit">Search</Button>
          <Button variant="outline">
            <Filter className="h-4 w-4 mr-2" />
            Filters
          </Button>
        </form>
      </div>

      <div className="grid gap-6">
        {results.map((result) => (
          <Card key={result.id}>
            <CardContent className="p-4">
              <Link href={`/slide/${result.id}`} className="flex gap-4">
                <img
                  src={result.thumbnail}
                  alt={result.title}
                  className="h-24 w-40 object-cover rounded"
                />
                <div>
                  <h3 className="font-semibold hover:text-blue-600">{result.title}</h3>
                  <p className="text-sm text-muted-foreground mt-1">By {result.author}</p>
                  <div className="flex items-center gap-4 mt-2 text-sm text-muted-foreground">
                    <span>{result.views} views</span>
                    <span>{result.date}</span>
                  </div>
                </div>
              </Link>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}

