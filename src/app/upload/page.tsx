'use client'

import { useState } from 'react'
import { useDropzone } from 'react-dropzone'
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { UploadForm } from "@/components/upload-form"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Upload, FileUp } from 'lucide-react'

export default function UploadPage() {
  const [file, setFile] = useState<File | null>(null)

  const onDrop = (acceptedFiles: File[]) => {
    if (acceptedFiles.length > 0) {
      setFile(acceptedFiles[0])
    }
  }

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: {
      'application/pdf': ['.pdf'],
      'application/vnd.ms-powerpoint': ['.ppt'],
      'application/vnd.openxmlformats-officedocument.presentationml.presentation': ['.pptx']
    },
    maxFiles: 1
  })

  const handleReset = () => {
    setFile(null)
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow bg-gray-50">
        <div className="container mx-auto px-4 py-8">
          {!file ? (
            <Card>
              <CardContent className="p-6">
                <div
                  {...getRootProps()}
                  className={`border-2 border-dashed rounded-lg p-12 text-center cursor-pointer transition-colors
                    ${isDragActive ? 'border-primary bg-primary/5' : 'border-gray-300 hover:border-primary'}`}
                >
                  <input {...getInputProps()} />
                  <Upload className="mx-auto h-12 w-12 text-gray-400" />
                  <p className="mt-2 text-sm text-muted-foreground">
                    Drag & drop your presentation here, or click to select
                  </p>
                  <p className="text-xs text-muted-foreground mt-1">
                    Supported formats: PDF, PPT, PPTX
                  </p>
                  <Button className="mt-4" variant="outline">
                    <FileUp className="mr-2 h-4 w-4" />
                    Select File
                  </Button>
                </div>
              </CardContent>
            </Card>
          ) : (
            <UploadForm file={file} onReset={handleReset} />
          )}
        </div>
      </main>
      <Footer />
    </div>
  )
}

