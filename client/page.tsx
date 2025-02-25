"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Book, BrainCircuit, FileText, GraduationCap, MessageSquare, Upload } from "lucide-react"

export default function HomePage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-violet-900">
      {/* Navbar */}
      <nav className="sticky top-0 z-50 backdrop-blur-lg border-b border-gray-800">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link
              href="/"
              className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-600 text-transparent bg-clip-text"
            >
              EduRAG
            </Link>
            <div className="hidden md:flex space-x-6">
              <Link href="#features" className="text-gray-300 hover:text-white transition-colors">
                Features
              </Link>
              <Link href="#team" className="text-gray-300 hover:text-white transition-colors">
                Team
              </Link>
              <Link href="#contact" className="text-gray-300 hover:text-white transition-colors">
                Contact
              </Link>
            </div>
            <div className="flex space-x-4">
              <Dialog>
                <DialogTrigger asChild>
                  <Button variant="outline" className="border-purple-500 hover:bg-purple-500/20">
                    Sign In
                  </Button>
                </DialogTrigger>
                <DialogContent className="sm:max-w-[425px] bg-gray-900/95 backdrop-blur-xl border-gray-800">
                  <DialogHeader>
                    <DialogTitle className="text-white">Sign In</DialogTitle>
                    <DialogDescription className="text-gray-400">
                      Enter your credentials to access your account
                    </DialogDescription>
                  </DialogHeader>
                  <div className="grid gap-4 py-4">
                    <div className="grid gap-2">
                      <Label htmlFor="email">Email</Label>
                      <Input id="email" type="email" className="bg-gray-800 border-gray-700" />
                    </div>
                    <div className="grid gap-2">
                      <Label htmlFor="password">Password</Label>
                      <Input id="password" type="password" className="bg-gray-800 border-gray-700" />
                    </div>
                  </div>
                  <Button className="w-full bg-purple-600 hover:bg-purple-700">Sign In</Button>
                </DialogContent>
              </Dialog>
              <Button className="bg-purple-600 hover:bg-purple-700">Get Started</Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-24 relative">
        <div className="absolute inset-0 bg-grid-white/5 [mask-image:radial-gradient(white,transparent_70%)]" />
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 text-center space-y-8"
        >
          <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-purple-400 via-pink-500 to-purple-600 text-transparent bg-clip-text">
            Your Smart Study Assistant
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Transform your learning experience with AI-powered summarization, quiz generation, and intelligent
            note-taking features.
          </p>
          <div className="flex justify-center gap-4">
            <Button className="bg-purple-600 hover:bg-purple-700 text-lg px-8">Start Learning</Button>
            <Button variant="outline" className="border-purple-500 hover:bg-purple-500/20 text-lg px-8">
              Watch Demo
            </Button>
          </div>
        </motion.div>
      </section>

      {/* Features Section */}
      <section id="features" className="container mx-auto px-4 py-24">
        <h2 className="text-3xl font-bold text-center mb-16 bg-gradient-to-r from-purple-400 to-pink-600 text-transparent bg-clip-text">
          Powerful Features
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="p-6 rounded-xl bg-gray-800/50 backdrop-blur-xl border border-gray-700 hover:border-purple-500 transition-colors"
          >
            <Upload className="w-12 h-12 text-purple-500 mb-4" />
            <h3 className="text-xl font-semibold mb-2">PDF Upload</h3>
            <p className="text-gray-400">Easily upload and process your study materials in PDF format</p>
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="p-6 rounded-xl bg-gray-800/50 backdrop-blur-xl border border-gray-700 hover:border-purple-500 transition-colors"
          >
            <BrainCircuit className="w-12 h-12 text-purple-500 mb-4" />
            <h3 className="text-xl font-semibold mb-2">AI Summarization</h3>
            <p className="text-gray-400">Get instant, intelligent summaries of your study materials</p>
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="p-6 rounded-xl bg-gray-800/50 backdrop-blur-xl border border-gray-700 hover:border-purple-500 transition-colors"
          >
            <GraduationCap className="w-12 h-12 text-purple-500 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Quiz Generation</h3>
            <p className="text-gray-400">Create custom quizzes to test your knowledge</p>
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="p-6 rounded-xl bg-gray-800/50 backdrop-blur-xl border border-gray-700 hover:border-purple-500 transition-colors"
          >
            <FileText className="w-12 h-12 text-purple-500 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Smart Note-Taking</h3>
            <p className="text-gray-400">Take and organize notes with AI-powered assistance</p>
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="p-6 rounded-xl bg-gray-800/50 backdrop-blur-xl border border-gray-700 hover:border-purple-500 transition-colors"
          >
            <MessageSquare className="w-12 h-12 text-purple-500 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Q&A Support</h3>
            <p className="text-gray-400">Get instant answers to your questions about the study material</p>
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="p-6 rounded-xl bg-gray-800/50 backdrop-blur-xl border border-gray-700 hover:border-purple-500 transition-colors"
          >
            <Book className="w-12 h-12 text-purple-500 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Study Tracking</h3>
            <p className="text-gray-400">Monitor your progress and learning achievements</p>
          </motion.div>
        </div>
      </section>

      {/* Team Section */}
      <section id="team" className="container mx-auto px-4 py-24">
        <h2 className="text-3xl font-bold text-center mb-16 bg-gradient-to-r from-purple-400 to-pink-600 text-transparent bg-clip-text">
          Our Team
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[1, 2, 3].map((member) => (
            <motion.div
              key={member}
              whileHover={{ scale: 1.05 }}
              className="p-6 rounded-xl bg-gray-800/50 backdrop-blur-xl border border-gray-700"
            >
              <div className="w-24 h-24 rounded-full bg-purple-500/20 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-center mb-2">Team Member {member}</h3>
              <p className="text-gray-400 text-center">Role Description</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="container mx-auto px-4 py-24">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-16 bg-gradient-to-r from-purple-400 to-pink-600 text-transparent bg-clip-text">
            Contact Us
          </h2>
          <form className="space-y-6">
            <div className="grid gap-2">
              <Label htmlFor="name">Name</Label>
              <Input id="name" className="bg-gray-800 border-gray-700" />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="contact-email">Email</Label>
              <Input id="contact-email" type="email" className="bg-gray-800 border-gray-700" />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="message">Message</Label>
              <textarea
                id="message"
                rows={4}
                className="rounded-md bg-gray-800 border border-gray-700 p-3 text-sm focus:border-purple-500 focus:ring-purple-500"
              />
            </div>
            <Button className="w-full bg-purple-600 hover:bg-purple-700">Send Message</Button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-800 mt-24">
        <div className="container mx-auto px-4 py-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-4">EduRAG</h3>
              <p className="text-gray-400">Your Smart Study Assistant</p>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li>
                  <Link href="#features" className="text-gray-400 hover:text-white">
                    Features
                  </Link>
                </li>
                <li>
                  <Link href="#team" className="text-gray-400 hover:text-white">
                    Team
                  </Link>
                </li>
                <li>
                  <Link href="#contact" className="text-gray-400 hover:text-white">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Legal</h4>
              <ul className="space-y-2">
                <li>
                  <Link href="/privacy" className="text-gray-400 hover:text-white">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link href="/terms" className="text-gray-400 hover:text-white">
                    Terms of Service
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Follow Us</h4>
              <div className="flex space-x-4">
                <Link href="#" className="text-gray-400 hover:text-white">
                  Twitter
                </Link>
                <Link href="#" className="text-gray-400 hover:text-white">
                  LinkedIn
                </Link>
                <Link href="#" className="text-gray-400 hover:text-white">
                  GitHub
                </Link>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; {new Date().getFullYear()} EduRAG. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

