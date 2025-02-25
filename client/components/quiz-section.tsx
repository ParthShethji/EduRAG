"use client"

import { motion } from "framer-motion"
import { BrainCircuit } from "lucide-react"
import { Card } from "@/components/ui/card"
import Link from "next/link"

export function QuizSection() {
  return (
    <Card className="backdrop-blur-lg bg-white/10 border-white/20">
      <motion.div className="p-6" whileHover={{ scale: 1.02 }}>
        <div className="flex items-center space-x-4 mb-4">
          <BrainCircuit className="h-8 w-8 text-purple-400" />
          <h3 className="text-xl font-semibold text-white">Quiz Generation</h3>
        </div>

        <div className="space-y-4">
          <p className="text-gray-300 text-sm">
            Generate smart quizzes from your study material to test your knowledge.
          </p>

          <Link
            href="/quiz"
            className="inline-flex items-center space-x-2 bg-purple-500/20 hover:bg-purple-500/30 text-purple-300 px-4 py-2 rounded-lg transition-colors"
          >
            <span>Start Quiz</span>
            <motion.span animate={{ x: [0, 4, 0] }} transition={{ repeat: Number.POSITIVE_INFINITY, duration: 1.5 }}>
              →
            </motion.span>
          </Link>
        </div>
      </motion.div>
    </Card>
  )
}

