"use client"

import type React from "react"
import { useState, Suspense } from "react"
import { useRouter, useSearchParams } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import { Header } from "@/components/header"
import { signIn } from "next-auth/react"
import { useEffect } from "react"

function SelfProfile() {
  const router = useRouter()
  const searchParams = useSearchParams()
  const consent = searchParams?.get("consent") === "yes"
  
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    name: "",
    age: "",
    sex: "",
    diagnosis: "",
    seekingDiagnosis: "",
    challenges: [] as string[],
    location: "",
  })

useEffect(() => {
  if (formData.location === "") {
    navigator.geolocation.getCurrentPosition(async (position) => {
      const { latitude, longitude } = position.coords
      try {
        const res = await fetch(
          `https://nominatim.openstreetmap.org/reverse?format=json&lat=${latitude}&lon=${longitude}`
        )
        const data = await res.json()
        const city = data.address.city || data.address.town || data.address.village || ""
        const country = data.address.country || ""
        const locationString = `${city}, ${country}`
        setFormData((prev) => ({ ...prev, location: locationString }))
      } catch (err) {
        console.error("Failed to reverse geocode:", err)
      }
    }, (error) => {
      console.warn("Geolocation denied or unavailable:", error)
    })
  }
}, [])


  const handleChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  const handleChallengeToggle = (value: string) => {
    setFormData((prev) => {
      const challenges = [...prev.challenges]
      if (challenges.includes(value)) {
        return { ...prev, challenges: challenges.filter((c) => c !== value) }
      } else {
        return { ...prev, challenges: [...challenges, value] }
      }
    })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    setError(null)

    try {
      // Create the user account + SelfProfile in one API call
      const res = await fetch("/api/auth/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          type: "self",
          consent,
          credentials: {
            email: formData.email,
            password: formData.password,
          },
          profile: {
            name: formData.name,
            age: parseInt(formData.age, 10),
            sex: formData.sex,
            diagnosis: formData.diagnosis || null,
            seekingDiagnosis: formData.seekingDiagnosis === "yes",
            challenges: formData.challenges,
            location: formData.location || null,
          },
        }),
      })

      const data = await res.json()

      if (res.ok) {
        // Sign in the user automatically
        const signInRes = await signIn("credentials", {
          redirect: false,
          email: formData.email,
          password: formData.password,
        })

        if (signInRes?.ok) {
          // Redirect to unique profile page if userId is returned
          if (data?.userId) {
            router.push(`/profile/${data.userId}`)
          } else {
            router.push("/profile/dashboard")
          }
          router.refresh()
        } else {
          setError("Sign-in failed. Please try logging in manually.")
          router.push("/login")
        }
      } else {
        if (data?.error && data.error.toLowerCase().includes("email") && data.error.toLowerCase().includes("already")) {
          setError("This email address is already in use. Please use a different email or log in.");
        } else {
          setError(data?.error || "Registration failed. Please try again.");
        }
      }
    } catch (err) {
      setError("An unexpected error occurred. Please try again.")
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 container max-w-2xl mx-auto px-4 py-8">
        <Card className="card">
          <CardHeader className="bg-primary/10 rounded-t-[1rem]">
            <CardTitle>Profile for Myself</CardTitle>
            <CardDescription>
              Please fill out the following information to create your profile. Fields marked with * are required.
            </CardDescription>
          </CardHeader>
          <form onSubmit={handleSubmit}>
            <CardContent className="space-y-6 pt-6">
              {error && (
                <div className="p-3 rounded-md bg-red-50 text-red-500 text-sm">
                  {error}
                </div>
              )}
              
              <div className="space-y-2">
                <Label htmlFor="email">Email Address *</Label>
                <Input
                  id="email"
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => handleChange("email", e.target.value)}
                  className="rounded-lg"
                  placeholder="your.email@example.com"
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="password">Password *</Label>
                <Input
                  id="password"
                  type="password"
                  required
                  value={formData.password}
                  onChange={(e) => handleChange("password", e.target.value)}
                  className="rounded-lg"
                  placeholder="Create a secure password"
                  minLength={8}
                />
                <p className="text-xs text-muted-foreground">Password must be at least 8 characters long</p>
              </div>

              <div className="space-y-2">
                <Label htmlFor="name">Your Name *</Label>
                <Input
                  id="name"
                  required
                  value={formData.name}
                  onChange={(e) => handleChange("name", e.target.value)}
                  className="rounded-lg"
                  placeholder="Enter your full name"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="age">Age *</Label>
                  <Input
                    id="age"
                    type="number"
                    required
                    value={formData.age}
                    onChange={(e) => handleChange("age", e.target.value)}
                    className="rounded-lg"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="sex">Sex *</Label>
                  <RadioGroup value={formData.sex} onValueChange={(value) => handleChange("sex", value)} required>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="male" id="male" />
                      <Label htmlFor="male">Male</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="female" id="female" />
                      <Label htmlFor="female">Female</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="other" id="other-sex" />
                      <Label htmlFor="other-sex">Other</Label>
                    </div>
                  </RadioGroup>
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="diagnosis">Diagnosis (if any)</Label>
                <Select onValueChange={(value) => handleChange("diagnosis", value)}>
                  <SelectTrigger className="rounded-lg">
                    <SelectValue placeholder="Select a diagnosis" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="none">None</SelectItem>
                    <SelectItem value="autism">Autism Spectrum Disorder</SelectItem>
                    <SelectItem value="adhd">ADHD</SelectItem>
                    <SelectItem value="anxiety">Anxiety Disorder</SelectItem>
                    <SelectItem value="depression">Depression</SelectItem>
                    <SelectItem value="other">Other</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="seekingDiagnosis">Are you seeking a diagnosis? *</Label>
                <RadioGroup
                  value={formData.seekingDiagnosis}
                  onValueChange={(value) => handleChange("seekingDiagnosis", value)}
                  required
                >
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="yes" id="seeking-yes" />
                    <Label htmlFor="seeking-yes">Yes</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="no" id="seeking-no" />
                    <Label htmlFor="seeking-no">No</Label>
                  </div>
                </RadioGroup>
              </div>

              <div className="space-y-2">
                <Label>Current challenges you face *</Label>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                  {[
                    { id: "sensory", label: "Sensory issues" },
                    { id: "executive", label: "Executive dysfunction" },
                    { id: "social", label: "Social difficulties" },
                    { id: "communication", label: "Communication challenges" },
                    { id: "anxiety", label: "Anxiety" },
                    { id: "routines", label: "Need for routines" },
                    { id: "stimming", label: "Stimming" },
                    { id: "burnout", label: "Burnout" },
                  ].map((challenge) => (
                    <div key={challenge.id} className="flex items-center space-x-2">
                      <Checkbox
                        id={challenge.id}
                        checked={formData.challenges.includes(challenge.id)}
                        onCheckedChange={() => handleChallengeToggle(challenge.id)}
                      />
                      <Label htmlFor={challenge.id}>{challenge.label}</Label>
                    </div>
                  ))}
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="location">Location (optional, for resource tailoring)</Label>
                <Input
                  id="location"
                  placeholder="City, Country"
                  value={formData.location}
                  onChange={(e) => handleChange("location", e.target.value)}
                  className="rounded-lg"
                />
                <div className="flex gap-2 pt-2">
                  <Button
                    type="button"
                    variant="outline"
                    onClick={async () => {
                      navigator.geolocation.getCurrentPosition(async (position) => {
                        const { latitude, longitude } = position.coords
                        const res = await fetch(
                          `https://nominatim.openstreetmap.org/reverse?format=json&lat=${latitude}&lon=${longitude}`
                        )
                        const data = await res.json()
                        const city = data.address.city || data.address.town || data.address.village || ""
                        const country = data.address.country || ""
                        const locationString = `${city}, ${country}`
                        setFormData((prev) => ({ ...prev, location: locationString }))
                      })
                    }}
                  >
                    Use My Location
                  </Button>
                  <Button
                    type="button"
                    variant="ghost"
                    onClick={() => handleChange("location", "")}
                  >
                    Remove Location
                  </Button>
                </div>
              </div>

            </CardContent>
            <CardFooter>
              <Button 
                type="submit" 
                className="w-full btn-primary"
                disabled={isLoading || formData.challenges.length === 0}
              >
                {isLoading ? "Creating Profile..." : "Create Profile"}
              </Button>
            </CardFooter>
          </form>
        </Card>
      </main>
    </div>
  )
}

export default function Page() {
  return (
    <Suspense>
      <SelfProfile />
    </Suspense>
  )
}