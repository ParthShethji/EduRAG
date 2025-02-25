"use client"

import { motion } from "framer-motion"
import { MessageSquare } from "lucide-react"
import { Card } from "@/components/ui/card"

export function ChatBot() {
  return (
    <Card className="backdrop-blur-lg bg-white/10 border-white/20">
      <motion.div className="p-6" whileHover={{ scale: 1.02 }}>
        <div className="flex items-center space-x-4 mb-4">
          <MessageSquare className="h-8 w-8 text-purple-400" />
          <h3 className="text-xl font-semibold text-white">Q&A Chatbot</h3>
        </div>

        <div className="space-y-3">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="bg-purple-500/10 p-3 rounded-lg text-sm text-purple-200 max-w-[80%]"
          >
            How does photosynthesis work?
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
            className="bg-white/5 p-3 rounded-lg text-sm text-gray-300 max-w-[80%] ml-auto"
          >
            Let me explain that based on your document...
          </motion.div>
        </div>
      </motion.div>
    </Card>
  )
}

