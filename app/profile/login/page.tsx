"use client"

import type React from "react"
import { useState } from "react"
import { useRouter } from "next/navigation"
import Link from "next/link"
import { signIn } from "next-auth/react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Header } from "@/components/header"
import Image from "next/image"

export default function Login() {
  const router = useRouter()
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  })
  const [error, setError] = useState<string | null>(null)
  const [isLoading, setIsLoading] = useState(false)

  const handleChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    try {
      setIsLoading(true)
      setError(null)
      
      const res = await signIn("credentials", {
        redirect: false,
        email: formData.email,
        password: formData.password,
      })
      
      if (res?.error) {
        setError(res.error)
      } else {
        // Fetch user profile to get userId
        const profileRes = await fetch(`/api/profile/by-email?email=${encodeURIComponent(formData.email)}`)
        if (!profileRes.ok) {
          setError("Could not fetch user profile")
          setIsLoading(false)
          return
        }
        const profile = await profileRes.json()
        // Support both { userId } and { id }
        const userId = profile?.userId || profile?.id
        if (!userId) {
          setError("User profile not found")
          setIsLoading(false)
          return
        }
        router.push(`/profile/${userId}`)
        router.refresh()
      }
    } catch (error) {
      setError("An unexpected error occurred")
      console.error(error)
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 container max-w-md mx-auto px-4 py-12 flex items-center justify-center">
        <Card className="w-full card">
          <CardHeader className="text-center bg-primary/10 rounded-t-[1rem]">
            <CardTitle className="text-2xl">Welcome Back</CardTitle>
            <CardDescription>Sign in to your Smiles for Speech account</CardDescription>
          </CardHeader>
          <form onSubmit={handleSubmit}>
            <CardContent className="space-y-4 pt-6">
              {error && (
                <div className="p-3 rounded-md bg-red-50 text-red-500 text-sm">
                  {error}
                </div>
              )}
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="your.email@example.com"
                  required
                  value={formData.email}
                  onChange={(e) => handleChange("email", e.target.value)}
                  className="rounded-lg"
                />
              </div>
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <Label htmlFor="password">Password</Label>
                  <Link href="/forgot-password" className="text-sm text-primary hover:underline">
                    Forgot password?
                  </Link>
                </div>
                <Input
                  id="password"
                  type="password"
                  required
                  value={formData.password}
                  onChange={(e) => handleChange("password", e.target.value)}
                  className="rounded-lg"
                />
              </div>
            </CardContent>
            <CardFooter className="flex flex-col space-y-4">
              <Button 
                type="submit" 
                className="w-full btn-primary"
                disabled={isLoading}
              >
                {isLoading ? "Signing in..." : "Sign In"}
              </Button>
              <div className="text-center text-sm">
                Don't have an account?{" "}
                <Link href="/profile/create" className="text-primary hover:underline">
                  Create one
                </Link>
              </div>
            </CardFooter>
          </form>
        </Card>
      </main>
    </div>
  )
}