"use client"

import { motion } from "framer-motion"
import { FileUpload } from "@/components/file-upload"
import { Summarization } from "@/components/summarization"
import { SmartNotes } from "@/components/smart-notes"
import { ChatBot } from "@/components/chatbot"
import { QuizSection } from "@/components/quiz-section"
import { Navigation } from "@/components/navigation"

export default function FeaturePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-950 via-slate-900 to-slate-950">
      <Navigation />
      <main className="container mx-auto px-4 py-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Supercharge Your Learning</h1>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Transform the way you study with our AI-powered learning assistant
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="col-span-1"
          >
            <FileUpload />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="col-span-1 md:col-span-2"
          >
            <Summarization />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
            className="col-span-1"
          >
            <ChatBot />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5 }}
            className="col-span-1"
          >
            <SmartNotes />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="col-span-1"
          >
            <QuizSection />
          </motion.div>
        </div>
      </main>
    </div>
  )
}