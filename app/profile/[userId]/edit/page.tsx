"use client"

import { useEffect, useState } from "react"
import { useParams, useRouter } from "next/navigation"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import { Header } from "@/components/header"
import { toast } from "@/components/ui/use-toast"

// Define types for our profile data
type Challenge = 
  | "sensory" 
  | "social" 
  | "anxiety" 
  | "executive" 
  | "communication" 
  | "routines" 
  | "stimming" 
  | "burnout"

interface ProfileData {
  id: string
  name: string
  age: number
  sex: string
  diagnosis: string
  seekingDiagnosis: string
  location: string
  challenges: Challenge[]
}

// Map challenges to readable names
const challengeMap = {
  sensory: "Sensory Issues",
  social: "Social Difficulties",
  anxiety: "Anxiety",
  executive: "Executive Dysfunction",
  communication: "Communication Challenges",
  routines: "Need for Routines",
  stimming: "Stimming",
  burnout: "Burnout",
}

export default function EditProfile() {
  const router = useRouter()
  const params = useParams()
  const userId = params?.userId as string

  const [formData, setFormData] = useState<Partial<ProfileData>>({
    name: "",
    age: 0,
    sex: "",
    diagnosis: "",
    seekingDiagnosis: "",
    location: "",
    challenges: [],
  })
  
  const [loading, setLoading] = useState(true)
  const [saving, setSaving] = useState(false)
  const [error, setError] = useState<string | null>(null)

  // Fetch the current profile data
  useEffect(() => {
    async function fetchProfile() {
      setLoading(true)
      setError(null)
      try {
        const res = await fetch(`/api/profile/${userId}`)
        if (!res.ok) throw new Error("Failed to fetch profile")
        const data = await res.json()
        setFormData(data)
      } catch (err: any) {
        setError(err.message || "Error loading profile")
      } finally {
        setLoading(false)
      }
    }
    
    if (userId) fetchProfile()
  }, [userId])

  // Handle form field changes
  const handleChange = (field: string, value: any) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  // Handle challenge toggle
  const handleChallengeToggle = (challenge: Challenge) => {
    setFormData((prev) => {
      const challenges = [...(prev.challenges || [])]
      const index = challenges.indexOf(challenge)
      
      if (index === -1) {
        challenges.push(challenge)
      } else {
        challenges.splice(index, 1)
      }
      
      return { ...prev, challenges }
    })
  }

  // Handle form submission
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setSaving(true)
    setError(null)
    
    try {
      const res = await fetch(`/api/profile/${userId}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      })
      
      if (!res.ok) {
        const errorData = await res.json()
        throw new Error(errorData.error || "Failed to update profile")
      }
      
      toast({
        title: "Profile updated",
        description: "Your profile has been updated successfully.",
      })
      
      // Redirect back to profile page
      router.push(`/profile/${userId}`)
    } catch (err: any) {
      setError(err.message || "Error updating profile")
    } finally {
      setSaving(false)
    }
  }

  if (loading) {
    return (
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1 container max-w-2xl mx-auto px-4 py-8 flex items-center justify-center">
          <p>Loading profile...</p>
        </main>
      </div>
    )
  }

  if (error && !formData.name) {
    return (
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1 container max-w-2xl mx-auto px-4 py-8 flex items-center justify-center">
          <p className="text-red-500">Error: {error || "Profile not found"}</p>
        </main>
      </div>
    )
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 container max-w-2xl mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-primary">Edit Profile</h1>
          <p className="text-muted-foreground">Update your profile information</p>
        </div>

        <form onSubmit={handleSubmit}>
          <Card className="card mb-6">
            <CardHeader className="bg-primary/10 rounded-t-[1rem]">
              <CardTitle>Personal Information</CardTitle>
              <CardDescription>Update your basic profile information</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4 pt-6">
              {error && (
                <div className="p-3 rounded-md bg-red-50 text-red-500 text-sm">
                  {error}
                </div>
              )}
              
              <div className="space-y-2">
                <Label htmlFor="name">Full Name</Label>
                <Input
                  id="name"
                  value={formData.name || ""}
                  onChange={(e) => handleChange("name", e.target.value)}
                  className="rounded-lg"
                  required
                />
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="age">Age</Label>
                  <Input
                    id="age"
                    type="number"
                    value={formData.age || ""}
                    onChange={(e) => handleChange("age", parseInt(e.target.value) || 0)}
                    className="rounded-lg"
                    required
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="sex">Sex</Label>
                  <Select
                    value={formData.sex || ""}
                    onValueChange={(value) => handleChange("sex", value)}
                  >
                    <SelectTrigger className="rounded-lg">
                      <SelectValue placeholder="Select" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="Male">Male</SelectItem>
                      <SelectItem value="Female">Female</SelectItem>
                      <SelectItem value="Non-binary">Non-binary</SelectItem>
                      <SelectItem value="Prefer not to say">Prefer not to say</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="diagnosis">Diagnosis</Label>
                  <Select
                    value={formData.diagnosis || ""}
                    onValueChange={(value) => handleChange("diagnosis", value)}
                  >
                    <SelectTrigger className="rounded-lg">
                      <SelectValue placeholder="Select" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="Autism">Autism</SelectItem>
                      <SelectItem value="ADHD">ADHD</SelectItem>
                      <SelectItem value="Autism and ADHD">Autism and ADHD</SelectItem>
                      <SelectItem value="Self-diagnosed">Self-diagnosed</SelectItem>
                      <SelectItem value="None">None</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="seekingDiagnosis">Seeking Diagnosis</Label>
                  <Select
                    value={formData.seekingDiagnosis || ""}
                    onValueChange={(value) => handleChange("seekingDiagnosis", value)}
                  >
                    <SelectTrigger className="rounded-lg">
                      <SelectValue placeholder="Select" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="Yes">Yes</SelectItem>
                      <SelectItem value="No">No</SelectItem>
                      <SelectItem value="Undecided">Undecided</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                
                <div className="space-y-2 md:col-span-2">
                  <Label htmlFor="location">Location</Label>
                  <Input
                    id="location"
                    value={formData.location || ""}
                    onChange={(e) => handleChange("location", e.target.value)}
                    className="rounded-lg"
                    placeholder="City, State/Province, Country"
                  />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="card mb-6">
            <CardHeader className="bg-primary/10 rounded-t-[1rem]">
              <CardTitle>Challenges</CardTitle>
              <CardDescription>Select the challenges you face</CardDescription>
            </CardHeader>
            <CardContent className="pt-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {(Object.entries(challengeMap) as [Challenge, string][]).map(([key, value]) => (
                  <div key={key} className="flex items-center space-x-2">
                    <Checkbox
                      id={`challenge-${key}`}
                      checked={(formData.challenges || []).includes(key as Challenge)}
                      onCheckedChange={() => handleChallengeToggle(key as Challenge)}
                    />
                    <Label htmlFor={`challenge-${key}`} className="cursor-pointer">
                      {value}
                    </Label>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <div className="flex justify-between mt-6">
            <Link href={`/profile/${userId}`}>
              <Button variant="outline" className="rounded-xl" type="button">
                Cancel
              </Button>
            </Link>
            <Button 
              className="btn-primary rounded-xl" 
              type="submit"
              disabled={saving}
            >
              {saving ? "Saving..." : "Save Changes"}
            </Button>
          </div>
        </form>
      </main>
    </div>
  )
}