"use client"

import type React from "react"

import { motion, useAnimation } from "framer-motion"
import { Upload } from "lucide-react"
import { useState } from "react"
import { Card } from "@/components/ui/card"

export function FileUpload() {
  const [isDragging, setIsDragging] = useState(false)
  const [uploadProgress, setUploadProgress] = useState(0)
  const controls = useAnimation()

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault()
    setIsDragging(true)
  }

  const handleDragLeave = () => {
    setIsDragging(false)
  }

  const handleDrop = async (e: React.DragEvent) => {
    e.preventDefault()
    setIsDragging(false)

    // Simulate upload progress
    for (let i = 0; i <= 100; i += 10) {
      setUploadProgress(i)
      await new Promise((resolve) => setTimeout(resolve, 100))
    }

    // Success animation
    controls.start({
      scale: [1, 1.05, 1],
      transition: { duration: 0.3 },
    })

    setUploadProgress(0)
  }

  return (
    <motion.div animate={controls}>
      <Card className="relative overflow-hidden backdrop-blur-lg bg-white/10 border-white/20 group">
        <motion.div
          className={`p-6 flex flex-col items-center justify-center min-h-[300px] ${isDragging ? "bg-white/5" : ""}`}
          onDragOver={handleDragOver}
          onDragLeave={handleDragLeave}
          onDrop={handleDrop}
          whileHover={{ scale: 1.02 }}
        >
          <Upload className="h-12 w-12 text-purple-400 mb-4 group-hover:text-purple-300 transition-colors" />
          <h3 className="text-xl font-semibold text-white mb-2">Upload PDF</h3>
          <p className="text-gray-400 text-center text-sm">Drag and drop your PDF files here or click to browse</p>

          {uploadProgress > 0 && (
            <div className="w-full mt-4">
              <div className="h-2 bg-white/20 rounded-full overflow-hidden">
                <motion.div
                  className="h-full bg-purple-500"
                  initial={{ width: 0 }}
                  animate={{ width: `${uploadProgress}%` }}
                />
              </div>
            </div>
          )}

          <motion.div
            className="absolute inset-0 pointer-events-none"
            animate={{
              boxShadow: isDragging
                ? "inset 0 0 0 2px rgba(168, 85, 247, 0.5)"
                : "inset 0 0 0 2px rgba(168, 85, 247, 0)",
            }}
          />
        </motion.div>
      </Card>
    </motion.div>
  )
}

