import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Eye, Users, MapPin, Calendar } from 'lucide-react'

interface ProfileProps {
  username: string
  name: string
  bio: string
  location: string
  joinDate: string
  followers: number
  following: number
  presentations: Array<{
    id: string
    title: string
    views: string
    thumbnail: string
    date: string
  }>
}

export function Profile({
  username,
  name,
  bio,
  location,
  joinDate,
  followers,
  following,
  presentations
}: ProfileProps) {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid gap-6 md:grid-cols-[300px_1fr]">
        <div className="space-y-6">
          <Card>
            <CardContent className="p-6">
              <div className="text-center">
                <div className="mb-4">
                  <img
                    src="/placeholder.svg?height=150&width=150"
                    alt={name}
                    className="mx-auto h-32 w-32 rounded-full"
                  />
                </div>
                <h1 className="text-2xl font-bold">{name}</h1>
                <p className="text-muted-foreground">@{username}</p>
                <Button className="mt-4 w-full">Follow</Button>
              </div>
              
              <div className="mt-6 space-y-4">
                <div className="flex items-center gap-2 text-sm">
                  <MapPin className="h-4 w-4" />
                  {location}
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <Calendar className="h-4 w-4" />
                  Joined {joinDate}
                </div>
                <div className="flex items-center gap-4 text-sm">
                  <div className="flex items-center gap-1">
                    <Users className="h-4 w-4" />
                    <span>{followers} followers</span>
                  </div>
                  <span>{following} following</span>
                </div>
              </div>
              
              {bio && (
                <div className="mt-6 border-t pt-6">
                  <p className="text-sm">{bio}</p>
                </div>
              )}
            </CardContent>
          </Card>
        </div>

        <div>
          <Tabs defaultValue="presentations">
            <TabsList>
              <TabsTrigger value="presentations">Presentations</TabsTrigger>
              <TabsTrigger value="liked">Liked</TabsTrigger>
              <TabsTrigger value="following">Following</TabsTrigger>
            </TabsList>
            <TabsContent value="presentations" className="mt-6">
              <div className="grid gap-6">
                {presentations.map((presentation) => (
                  <Card key={presentation.id}>
                    <CardContent className="p-4">
                      <div className="flex gap-4">
                        <img
                          src={presentation.thumbnail}
                          alt={presentation.title}
                          className="h-24 w-40 rounded object-cover"
                        />
                        <div>
                          <h3 className="font-semibold hover:text-blue-600">
                            {presentation.title}
                          </h3>
                          <div className="mt-2 flex items-center gap-4 text-sm text-muted-foreground">
                            <span className="flex items-center gap-1">
                              <Eye className="h-4 w-4" />
                              {presentation.views} views
                            </span>
                            <span>{presentation.date}</span>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
            <TabsContent value="liked">
              {/* Similar structure for liked presentations */}
            </TabsContent>
            <TabsContent value="following">
              {/* Similar structure for following users */}
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  )
}

