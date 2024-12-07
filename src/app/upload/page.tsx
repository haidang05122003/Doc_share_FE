'use client'

import { useState } from 'react'
import { useDropzone } from 'react-dropzone'
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { UploadForm } from "@/components/upload-form"

export default function UploadPage() {
  const [selectedFile, setSelectedFile] = useState<File | undefined>()
  
  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    accept: {
      'application/pdf': ['.pdf'],
      'application/vnd.ms-powerpoint': ['.ppt'],
      'application/vnd.openxmlformats-officedocument.presentationml.presentation': ['.pptx']
    },
    maxFiles: 1,
    onDrop: (acceptedFiles) => {
      setSelectedFile(acceptedFiles[0])
    }
  })

  const handleReset = () => {
    setSelectedFile(undefined)
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        {!selectedFile ? (
          <div className="container mx-auto px-4 py-16">
            <div
              {...getRootProps()}
              className={`
                border-2 border-dashed rounded-lg p-16 text-center cursor-pointer transition-colors
                ${isDragActive ? 'border-primary bg-primary/5' : 'border-gray-200 hover:border-primary'}
              `}
            >
              <input {...getInputProps()} />
              <h1 className="text-2xl font-bold mb-4">Upload your document</h1>
              <p className="text-muted-foreground mb-8">or drag & drop here</p>
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
        ) : (
          <UploadForm file={selectedFile} onReset={handleReset} />
        )}
      </main>
      <Footer />
    </div>
  )
}

