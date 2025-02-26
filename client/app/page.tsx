"use client"

import { useState, useEffect } from "react"
import { motion, useAnimation } from "framer-motion"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
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
import { Book, BrainCircuit, FileText, GraduationCap, MessageSquare, Upload, Zap } from "lucide-react"
import { Navbar } from "@/components/navbar"
import { Navigation } from "@/components/navigation"

const FuturisticBackground = () => (
  <div className="absolute inset-0 overflow-hidden">
    <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(124,58,237,0.1),rgba(99,102,241,0.05))]" />
    <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48cGF0dGVybiBpZD0iZ3JpZCIgd2lkdGg9IjQwIiBoZWlnaHQ9IjQwIiBwYXR0ZXJuVW5pdHM9InVzZXJTcGFjZU9uVXNlIj48cGF0aCBkPSJNIDQwIDAgTCAwIDAgMCA0MCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSJyZ2JhKDEyNCw1OCwyMzcsMC4xKSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+')] opacity-20" />
    {[...Array(20)].map((_, i) => (
      <motion.div
        key={i}
        className="absolute w-1 h-1 bg-purple-500 rounded-full"
        initial={{ opacity: 0, scale: 0 }}
        animate={{
          opacity: [0, 1, 0],
          scale: [0, 1.5, 0],
          x: [Math.random() * window.innerWidth, Math.random() * window.innerWidth],
          y: [Math.random() * window.innerHeight, Math.random() * window.innerHeight],
        }}
        transition={{
          duration: Math.random() * 3 + 2,
          repeat: Number.POSITIVE_INFINITY,
          repeatType: "loop",
          ease: "easeInOut",
        }}
      />
    ))}
  </div>
)

const FloatingParticle = ({ delay = 0 }) => {
  const controls = useAnimation()

  useEffect(() => {
    controls.start({
      y: [0, -20, 0],
      transition: {
        duration: 3,
        repeat: Number.POSITIVE_INFINITY,
        repeatType: "reverse",
        ease: "easeInOut",
        delay,
      },
    })
  }, [controls, delay])

  return (
    <motion.div
      className="absolute w-2 h-2 bg-blue-500 rounded-full opacity-50"
      style={{
        left: `${Math.random() * 100}%`,
        top: `${Math.random() * 100}%`,
      }}
      animate={controls}
    />
  )
}

export default function HomePage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <div className="min-h-screen bg-black text-white relative overflow-hidden">
      <FuturisticBackground />

      {/* Navbar */}
      {/* <nav className="sticky top-0 z-50 backdrop-blur-xl border-b border-purple-500/10">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link
              href="/"
              className="text-2xl font-bold bg-gradient-to-r from-purple-400 via-pink-500 to-blue-500 text-transparent bg-clip-text"
            >
              EduRAG
            </Link>
            <div className="hidden md:flex space-x-6">
              {["Features", "Team", "Contact"].map((item) => (
                <Link
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  {item}
                </Link>
              ))}
            </div>
            <div className="flex space-x-4">
              <Dialog>
                <DialogTrigger asChild>
                  <Button
                    variant="outline"
                    className="border-purple-500/50 hover:border-purple-500 hover:bg-purple-500/10 hover:shadow-[0_0_30px_rgba(168,85,247,0.3)] transition-all duration-300"
                  >
                    Sign In
                  </Button>
                </DialogTrigger>
                <DialogContent className="sm:max-w-[425px] bg-gray-900/95 backdrop-blur-xl border-purple-500/20">
                  <DialogHeader>
                    <DialogTitle className="text-white">Sign In</DialogTitle>
                    <DialogDescription className="text-gray-400">
                      Enter your credentials to access your account
                    </DialogDescription>
                  </DialogHeader>
                  <div className="grid gap-4 py-4">
                    <div className="grid gap-2">
                      <Label htmlFor="email">Email</Label>
                      <Input id="email" type="email" className="bg-gray-800/50 border-purple-500/20" />
                    </div>
                    <div className="grid gap-2">
                      <Label htmlFor="password">Password</Label>
                      <Input id="password" type="password" className="bg-gray-800/50 border-purple-500/20" />
                    </div>
                  </div>
                  <Button className="w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700">
                    Sign In
                  </Button>
                </DialogContent>
              </Dialog>
              <Button className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 hover:shadow-[0_0_30px_rgba(168,85,247,0.3)] transition-all duration-300">
                Get Started
              </Button>
            </div>
          </div>
        </div>
      </nav> */}
      <Navigation />



      {/* Hero Section */}
      <section className="container mx-auto px-4 py-24 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 text-center space-y-8"
        >
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold bg-gradient-to-r from-purple-400 via-pink-500 to-blue-500 text-transparent bg-clip-text [text-shadow:0_0_30px_rgba(168,85,247,0.3)]">
            Your Smart Study Assistant
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Transform your learning experience with AI-powered summarization, quiz generation, and intelligent
            note-taking features.
          </p>
          <div className="flex justify-center gap-4">
            <Button className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-lg px-8 hover:shadow-[0_0_30px_rgba(168,85,247,0.3)] transition-all duration-300">
              Start Learning
            </Button>
            <Button
              variant="outline"
              className="text-black hover:text-white border-purple-500/50 hover:border-purple-500 hover:bg-purple-500/10 text-lg px-8 hover:shadow-[0_0_30px_rgba(168,85,247,0.3)] transition-all duration-300"
              >
              Watch Demo
            </Button>
          </div>
        </motion.div>
        {[...Array(5)].map((_, i) => (
          <FloatingParticle key={i} delay={i * 0.2} />
        ))}
      </section>

      {/* Features Section */}
      <section id="features" className="container mx-auto px-4 py-24 relative">
        <h2 className="text-3xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-purple-400 via-pink-500 to-blue-500 text-transparent bg-clip-text">
          Powerful Features
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              icon: Upload,
              title: "PDF Upload",
              description: "Easily upload and process your study materials in PDF format",
            },
            {
              icon: BrainCircuit,
              title: "AI Summarization",
              description: "Get instant, intelligent summaries of your study materials",
            },
            {
              icon: GraduationCap,
              title: "Quiz Generation",
              description: "Create custom quizzes to test your knowledge",
            },
            {
              icon: FileText,
              title: "Smart Note-Taking",
              description: "Take and organize notes with AI-powered assistance",
            },
            {
              icon: MessageSquare,
              title: "Q&A Support",
              description: "Get instant answers to your questions about the study material",
            },
            { icon: Book, title: "Study Tracking", description: "Monitor your progress and learning achievements" },
          ].map((feature, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05, y: -5 }}
              className="p-6 rounded-xl bg-gray-900/30 backdrop-blur-xl border border-purple-500/20 hover:border-purple-500/50 transition-all duration-300 hover:shadow-[0_0_30px_rgba(168,85,247,0.3)]"
            >
              <feature.icon className="w-12 h-12 text-purple-500 mb-4" />
              <h3 className="text-xl font-semibold mb-2 text-white">{feature.title}</h3>
              <p className="text-gray-400">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </section>


      {/* FAQ Section */}
      <section className="container mx-auto px-4 py-24 relative">
        <h2 className="text-3xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-purple-400 via-pink-500 to-blue-500 text-transparent bg-clip-text">
          Frequently Asked Questions
        </h2>
        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {[
              {
                q: "What is EduRAG?",
                a: "EduRAG is an AI-powered study assistant that helps you learn more effectively through smart summarization, quiz generation, and note-taking features.",
              },
              {
                q: "How does the AI summarization work?",
                a: "Our AI analyzes your study materials and creates concise, accurate summaries that highlight the most important concepts and key points.",
              },
              {
                q: "Is my data secure?",
                a: "Yes, we use enterprise-grade encryption and security measures to protect your data. Your privacy and security are our top priorities.",
              },
              {
                q: "Can I try it for free?",
                a: "Yes! We offer a free trial period so you can experience the full power of EduRAG before committing to a subscription.",
              },
            ].map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="border border-purple-500/20 rounded-lg bg-gray-900/30 px-4"
              >
                <AccordionTrigger className="text-white hover:text-purple-400 transition-colors">
                  {faq.q}
                </AccordionTrigger>
                <AccordionContent className="text-gray-400">{faq.a}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="container mx-auto px-4 py-24 relative">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-purple-400 via-pink-500 to-blue-500 text-transparent bg-clip-text">
            Stay Informed
          </h2>
          <p className="text-gray-400 mb-8">Subscribe to our newsletter for the latest updates and features</p>
          <div className="flex gap-4 max-w-md mx-auto">
            <Input
              placeholder="Enter your email"
              className="bg-gray-900/30 border-purple-500/20 focus:border-purple-500/50 focus:ring-purple-500/20"
            />
            <Button className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 hover:shadow-[0_0_30px_rgba(168,85,247,0.3)] transition-all duration-300">
              Subscribe
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-purple-500/10 mt-24 bg-black/20">
        <div className="container mx-auto px-4 py-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-4 bg-gradient-to-r from-purple-400 to-blue-500 text-transparent bg-clip-text">
                EduRAG
              </h3>
              <p className="text-gray-400">Your Smart Study Assistant</p>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4 text-white">Quick Links</h4>
              <ul className="space-y-2">
                {["Features", "Team", "Contact"].map((link) => (
                  <li key={link}>
                    <Link
                      href={`#${link.toLowerCase()}`}
                      className="text-gray-400 hover:text-purple-400 transition-colors"
                    >
                      {link}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4 text-white">Legal</h4>
              <ul className="space-y-2">
                {["Privacy Policy", "Terms of Service"].map((link) => (
                  <li key={link}>
                    <Link
                      href={`/${link.toLowerCase().replace(" ", "-")}`}
                      className="text-gray-400 hover:text-purple-400 transition-colors"
                    >
                      {link}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4 text-white">Follow Us</h4>
              <div className="flex space-x-4">
                {["Twitter", "LinkedIn", "GitHub"].map((social) => (
                  <Link key={social} href="#" className="text-gray-400 hover:text-purple-400 transition-colors">
                    {social}
                  </Link>
                ))}
              </div>
            </div>
          </div>
          <div className="border-t border-purple-500/10 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; {new Date().getFullYear()} EduRAG. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

