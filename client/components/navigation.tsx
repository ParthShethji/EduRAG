"use client"

import type React from "react"

import { motion } from "framer-motion"
import { BookOpen, Brain, Home, Settings } from "lucide-react"
import Link from "next/link"

export function Navigation() {
  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="sticky top-0 z-50 backdrop-blur-md bg-black/20 border-b border-white/10"
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center space-x-2 text-white">
            <BookOpen className="h-6 w-6" />
            <span className="font-bold text-lg">EduRAG</span>
          </Link>

          <div className="flex items-center space-x-4">
            <NavLink href="/" icon={<Home className="h-4 w-4" />} text="Home" />
            <NavLink href="/features" icon={<Brain className="h-4 w-4" />} text="Features" />
            <NavLink href="/settings" icon={<Settings className="h-4 w-4" />} text="Settings" />
          </div>
        </div>
      </div>
    </motion.nav>
  )
}

function NavLink({ href, icon, text }: { href: string; icon: React.ReactNode; text: string }) {
  return (
    <Link
      href={href}
      className="flex items-center space-x-1 text-sm text-gray-300 hover:text-white transition-colors px-3 py-2 rounded-md hover:bg-white/10"
    >
      {icon}
      <span>{text}</span>
    </Link>
  )
}

