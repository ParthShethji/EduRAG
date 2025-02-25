"use client"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Link } from "lucide-react"
import { Button } from "./ui/button"
import { Input } from "./ui/input"
import { Label } from "./ui/label"
export function Navbar(){
    return(
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
              {/* <Button className="bg-purple-600 hover:bg-purple-700">Get Started</Button> */}
              <Link href="/feature">
            <Button className="bg-purple-600 hover:bg-purple-700">
                Get Started
            </Button>
        </Link>

            </div>
          </div>
        </div>
      </nav>
    )
}