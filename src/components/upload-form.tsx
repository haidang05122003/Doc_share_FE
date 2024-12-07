'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { 
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import {
  Card,
  CardContent,
} from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { ChevronDown, ChevronUp, HelpCircle } from 'lucide-react'
/* import { useDropzone } from 'react-dropzone'*/

interface UploadFormProps {
  file?: File
  onReset?: () => void
}

export function UploadForm({ file, onReset }: UploadFormProps) {
  const [title, setTitle] = useState(file?.name || '')
  const [description, setDescription] = useState('')
  const [category, setCategory] = useState('')
  const [tags, setTags] = useState('')
  const [privacy, setPrivacy] = useState('public')
  const [showAdvanced, setShowAdvanced] = useState(false)
  const [isUploading, setIsUploading] = useState(false)
  const router = useRouter()

  const handlePublish = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsUploading(true)
    // Simulate upload delay
    await new Promise(resolve => setTimeout(resolve, 2000))
    router.push('/')
  }

  const getDiscoverabilityScore = () => {
    let score = 0
    if (title.length > 40) score += 33
    if (description.length > 100) score += 33
    if (tags.length > 0) score += 34
    return score
  }

  if (!file) return null

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-2xl font-bold text-center mb-2">Add more information to your upload</h1>
      <p className="text-center text-muted-foreground mb-8">Make it easier for others to discover your uploads</p>

      <Card>
        <CardContent className="p-6">
          <div className="grid grid-cols-[300px_1fr] gap-8">
            <div className="bg-blue-50 p-4 rounded-lg flex items-center justify-center">
              <div className="w-20 h-20 rounded-full border-4 border-blue-500 border-t-transparent animate-spin" />
            </div>

            <form onSubmit={handlePublish} className="space-y-6">
              <div className="space-y-4">
                <div>
                  <Label htmlFor="title">
                    Title<span className="text-red-500">*</span>
                  </Label>
                  <Input
                    id="title"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    required
                    maxLength={40}
                  />
                  <div className="text-xs text-right text-muted-foreground mt-1">
                    {title.length}/40
                  </div>
                </div>

                <div>
                  <Label htmlFor="category">
                    Category<span className="text-red-500">*</span>
                  </Label>
                  <Select value={category} onValueChange={setCategory}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select a category" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="business">Business</SelectItem>
                      <SelectItem value="technology">Technology</SelectItem>
                      <SelectItem value="education">Education</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <Label htmlFor="description">
                    Description<span className="text-red-500">*</span>
                  </Label>
                  <Textarea
                    id="description"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    required
                    className="min-h-[100px]"
                    maxLength={3000}
                  />
                  <div className="text-xs text-right text-muted-foreground mt-1">
                    {description.length}/3000
                  </div>
                </div>

                <div>
                  <Label htmlFor="tags">Tags</Label>
                  <Input
                    id="tags"
                    value={tags}
                    onChange={(e) => setTags(e.target.value)}
                    placeholder="Add up to 20 keywords to increase discoverability by 30%"
                  />
                </div>

                <div>
                  <Label>Privacy</Label>
                  <div className="flex gap-2 mt-2">
                    <Button
                      type="button"
                      variant={privacy === 'public' ? 'default' : 'outline'}
                      onClick={() => setPrivacy('public')}
                    >
                      Public
                    </Button>
                    <Button
                      type="button"
                      variant={privacy === 'limited' ? 'default' : 'outline'}
                      onClick={() => setPrivacy('limited')}
                    >
                      Limited
                    </Button>
                    <Button
                      type="button"
                      variant={privacy === 'private' ? 'default' : 'outline'}
                      onClick={() => setPrivacy('private')}
                    >
                      Private
                    </Button>
                    <Button variant="ghost" size="icon">
                      <HelpCircle className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </div>

              <Button
                type="button"
                variant="ghost"
                className="w-full flex items-center justify-between"
                onClick={() => setShowAdvanced(!showAdvanced)}
              >
                Show Advanced Settings
                {showAdvanced ? (
                  <ChevronUp className="h-4 w-4" />
                ) : (
                  <ChevronDown className="h-4 w-4" />
                )}
              </Button>

              {showAdvanced && (
                <div className="space-y-4 pt-4">
                  <div>
                    <Label>Discoverability Score</Label>
                    <Progress value={getDiscoverabilityScore()} className="mt-2" />
                    <p className="text-sm text-muted-foreground mt-2">
                      Your score increases as you pick a category, fill out a long description and add more tags.
                    </p>
                  </div>
                </div>
              )}

              <div className="flex justify-between pt-4">
                <Button type="button" variant="ghost" onClick={onReset}>
                  Delete
                </Button>
                <Button type="submit" disabled={isUploading}>
                  {isUploading ? 'Publishing...' : 'Publish'}
                </Button>
              </div>
            </form>
          </div>
        </CardContent>
      </Card>

      <div className="mt-8 bg-blue-50 rounded-lg p-8 text-center">
        <Button variant="default" className="mb-4">
          Upload another document
        </Button>
        <p className="text-sm text-muted-foreground mb-6">or drag & drop here</p>
        <div className="flex items-center justify-center gap-4">
          <p className="text-sm text-muted-foreground">or upload documents from the cloud:</p>
          <div className="flex gap-4">
            <img src="/dropbox.svg" alt="Dropbox" className="h-6 w-6" />
            <img src="/google-drive.svg" alt="Google Drive" className="h-6 w-6" />
            <img src="/box.svg" alt="Box" className="h-6 w-6" />
            <img src="/onedrive.svg" alt="OneDrive" className="h-6 w-6" />
          </div>
        </div>
      </div>
    </div>
  )
}

