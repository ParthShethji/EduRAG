"use client"

import { motion } from "framer-motion"
import { BookOpenCheck } from "lucide-react"
import { Card } from "@/components/ui/card"

export function Summarization() {
  return (
    <Card className="backdrop-blur-lg bg-white/10 border-white/20">
      <motion.div className="p-6" whileHover={{ scale: 1.02 }}>
        <div className="flex items-center space-x-4 mb-4">
          <BookOpenCheck className="h-8 w-8 text-purple-400" />
          <h3 className="text-xl font-semibold text-white">AI-Powered Summarization</h3>
        </div>

        <div className="space-y-4">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="bg-white/5 p-4 rounded-lg"
          >
            <p className="text-gray-300">
              <span className="bg-purple-500/20 px-1 rounded">Transform lengthy documents</span> into concise,
              easy-to-understand summaries using our advanced AI technology.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="flex space-x-2"
          >
            {["Instant", "Accurate", "Customizable"].map((feature, index) => (
              <span key={feature} className="bg-purple-500/10 text-purple-300 px-3 py-1 rounded-full text-sm">
                {feature}
              </span>
            ))}
          </motion.div>
        </div>
      </motion.div>
    </Card>
  )
}

