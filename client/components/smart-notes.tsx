"use client"

import { motion } from "framer-motion"
import { PenTool } from "lucide-react"
import { Card } from "@/components/ui/card"

export function SmartNotes() {
  return (
    <Card className="backdrop-blur-lg bg-white/10 border-white/20">
      <motion.div className="p-6" whileHover={{ scale: 1.02 }}>
        <div className="flex items-center space-x-4 mb-4">
          <PenTool className="h-8 w-8 text-purple-400" />
          <h3 className="text-xl font-semibold text-white">Smart Note-Taking</h3>
        </div>

        <div className="space-y-4">
          <div className="bg-white/5 p-4 rounded-lg min-h-[150px] border border-white/10">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="text-gray-400 text-sm"
            >
              <span className="bg-yellow-500/20 text-yellow-200 px-1 rounded">Important concept:</span>
              <br />
              AI assists in highlighting key points and suggesting related content as you take notes.
            </motion.div>
          </div>
        </div>
      </motion.div>
    </Card>
  )
}

