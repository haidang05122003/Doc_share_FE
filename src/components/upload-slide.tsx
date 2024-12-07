'use client'

import { useState, useCallback } from 'react'
import { useDropzone } from 'react-dropzone'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Upload, File, X } from 'lucide-react'

export function UploadSlide() {
  const [files, setFiles] = useState<File[]>([])
  
  const onDrop = useCallback((acceptedFiles: File[]) => {
    setFiles(acceptedFiles)
  }, [])

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: {
      'application/pdf': ['.pdf'],
      'application/vnd.ms-powerpoint': ['.ppt'],
      'application/vnd.openxmlformats-officedocument.presentationml.presentation': ['.pptx']
    },
    maxFiles: 1
  })

  const removeFile = () => {
    setFiles([])
  }

  return (
    <div className="container mx-auto max-w-3xl px-4 py-8">
      <Card>
        <CardHeader>
          <CardTitle>Upload Presentation</CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div>
            <Label htmlFor="title">Title</Label>
            <Input id="title" placeholder="Enter presentation title" className="mt-1.5" />
          </div>
          
          <div>
            <Label htmlFor="description">Description</Label>
            <Textarea 
              id="description" 
              placeholder="Enter presentation description"
              className="mt-1.5"
            />
          </div>

          <div
            {...getRootProps()}
            className={`border-2 border-dashed rounded-lg p-8 text-center cursor-pointer transition-colors
              ${isDragActive ? 'border-primary bg-primary/5' : 'border-gray-200 hover:border-primary'}`}
          >
            <input {...getInputProps()} />
            <Upload className="mx-auto h-12 w-12 text-gray-400" />
            <p className="mt-2 text-sm text-muted-foreground">
              Drag & drop your presentation here, or click to select
            </p>
            <p className="text-xs text-muted-foreground mt-1">
              Supported formats: PDF, PPT, PPTX
            </p>
          </div>

          {files.length > 0 && (
            <div className="flex items-center justify-between rounded-lg border p-4">
              <div className="flex items-center space-x-3">
                <File className="h-8 w-8 text-blue-500" />
                <div>
                  <p className="text-sm font-medium">{files[0].name}</p>
                  <p className="text-xs text-muted-foreground">
                    {(files[0].size / 1024 / 1024).toFixed(2)} MB
                  </p>
                </div>
              </div>
              <Button
                variant="ghost"
                size="icon"
                onClick={removeFile}
                className="text-red-500 hover:text-red-600"
              >
                <X className="h-4 w-4" />
              </Button>
            </div>
          )}

          <Button className="w-full" size="lg" disabled={files.length === 0}>
            Upload Presentation
          </Button>
        </CardContent>
      </Card>
    </div>
  )
}

