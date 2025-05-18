"use client"

import type React from "react"
import { useState } from "react"
import { useRouter, useSearchParams } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Header } from "@/components/header"
import { signIn } from "next-auth/react"

export default function CaretakerProfile() {
  const router = useRouter()

const [formData, setFormData] = useState({
  email: "",
  password: "",
  name: "",
  age: "",
  sex: "",
  lovedOnesCount: "1",
  location: "",
})


  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  // Auto-location logic
const [locating, setLocating] = useState(false)

const getLocation = async () => {
  if (!navigator.geolocation) {
    alert("Geolocation is not supported by your browser.")
    return
  }

  setLocating(true)
  navigator.geolocation.getCurrentPosition(async (position) => {
    const { latitude, longitude } = position.coords
    try {
      const res = await fetch(`https://nominatim.openstreetmap.org/reverse?format=jsonv2&lat=${latitude}&lon=${longitude}`)
      const data = await res.json()
      const location = data?.address?.city
        ? `${data.address.city}, ${data.address.country}`
        : data.display_name || "Location not found"
      setFormData((prev) => ({ ...prev, location }))
    } catch (err) {
      alert("Failed to fetch location name.")
    } finally {
      setLocating(false)
    }
  }, () => {
    alert("Unable to retrieve your location.")
    setLocating(false)
  })
}

const clearLocation = () => {
  setFormData((prev) => ({ ...prev, location: "" }))
}


  const handleChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault()
  setIsLoading(true)
  setError(null)

  // Get consent from localStorage
  let consentValue = "no"
  if (typeof window !== "undefined") {
    const storedConsent = localStorage.getItem("profile_consent")
    consentValue = storedConsent === "yes" ? "yes" : "no"
  }

  // Simple base64 "encryption" as a placeholder
  const encrypt = (str: string) => {
    if (typeof window !== "undefined") {
      return window.btoa(unescape(encodeURIComponent(str)))
    }
    return str
  }

  // Prepare profile data, encrypt if no consent
  const profileData = consentValue === "yes"
    ? {
        name: formData.name,
        age: parseInt(formData.age, 10),
        sex: formData.sex,
        lovedOnesCount: parseInt(formData.lovedOnesCount, 10),
        diagnosisStatus: formData.diagnosisStatus,
        attendsSchool: formData.attendsSchool === "yes",
        receivesServices: formData.receivesServices,
      }
    : {
        name: encrypt(formData.name),
        age: encrypt(formData.age),
        sex: encrypt(formData.sex),
        lovedOnesCount: encrypt(formData.lovedOnesCount),
        diagnosisStatus: encrypt(formData.diagnosisStatus),
        attendsSchool: encrypt(formData.attendsSchool),
        receivesServices: encrypt(formData.receivesServices),
      }

  try {
    const res = await fetch("/api/auth/register", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        type: "caretaker",
        consent: consentValue === "yes",
        credentials: {
          email: consentValue === "yes" ? formData.email : encrypt(formData.email),
          password: consentValue === "yes" ? formData.password : encrypt(formData.password),
        },
        profile: profileData,
      }),
    })

    const data = await res.json()

    if (res.ok) {
      const signInRes = await signIn("credentials", {
        redirect: false,
        email: formData.email,
        password: formData.password,
      })

      if (signInRes?.ok && data?.userId) {
        router.push(`/profile/${data.userId}`)
        router.refresh()
      } else {
        setError("Sign-in failed. Please try logging in manually.")
        router.push("/login")
      }
    } else {
      if (data?.error?.toLowerCase().includes("email")) {
        setError("This email address is already in use. Please use a different email or log in.")
      } else {
        setError(data?.error || "Registration failed. Please try again.")
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
            <CardTitle>Caretaker Profile</CardTitle>
            <CardDescription>
              Please fill out the following information to create your caretaker profile. Fields marked with * are
              required.
            </CardDescription>
          </CardHeader>
          <form onSubmit={handleSubmit}>
            <CardContent className="space-y-6 pt-6">
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

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="age">Your Age *</Label>
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
                  <Label htmlFor="sex">Your Sex *</Label>
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
                <Label htmlFor="lovedOnesCount">How many loved ones do you want to add? *</Label>
                <Select
                  value={formData.lovedOnesCount}
                  onValueChange={(value) => handleChange("lovedOnesCount", value)}
                  required
                >
                  <SelectTrigger className="rounded-lg">
                    <SelectValue placeholder="Select number" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="1">1</SelectItem>
                    <SelectItem value="2">2</SelectItem>
                    <SelectItem value="3">3</SelectItem>
                    <SelectItem value="4">4</SelectItem>
                    <SelectItem value="5">5+</SelectItem>
                  </SelectContent>
                </Select>
              </div>

            <div className="space-y-2">
              <Label htmlFor="location">Location (optional)</Label>
              <Input
                id="location"
                value={formData.location}
                onChange={(e) => handleChange("location", e.target.value)}
                placeholder="City, Country"
                className="rounded-lg"
              />
              <div className="flex gap-2 pt-2">
                <Button type="button" onClick={getLocation} disabled={locating}>
                  {locating ? "Locating..." : "Use My Location"}
                </Button>
                <Button type="button" onClick={clearLocation} variant="outline">
                  Remove Location
                </Button>
              </div>
            </div>

            </CardContent>
            <CardFooter>
              <Button type="submit" className="w-full btn-primary">
                Create Profile
              </Button>
            </CardFooter>
          </form>
        </Card>
      </main>
    </div>
  )
}
