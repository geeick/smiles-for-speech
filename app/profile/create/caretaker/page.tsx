"use client"

import type React from "react"
import { useState } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Header } from "@/components/header"

export default function CaretakerProfile() {
  const router = useRouter()
  const [formData, setFormData] = useState({
    name: "",
    age: "",
    sex: "",
    lovedOnesCount: "1",
    diagnosisStatus: "",
    attendsSchool: "",
    receivesServices: "",
  })

  const handleChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault()

  const res = await fetch("/api/auth/register", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      type: "caretaker",
      consent,
      credentials: {
        email: formData.email,
        password: formData.password,
      },
      profile: {
        name: formData.name,
        age: parseInt(formData.age, 10),
        sex: formData.sex,
        lovedOnesCount: parseInt(formData.lovedOnesCount, 10),
        diagnosisStatus: formData.diagnosisStatus,
        attendsSchool: formData.attendsSchool === "yes",
        receivesServices: formData.receivesServices,
      },
    }),
  })

  if (res.ok) {
    router.push("/profile/dashboard")
  } else {
    const err = await res.json()
    alert("Failed: " + err.message)
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
                <Label htmlFor="diagnosisStatus">Diagnosis status of your loved ones *</Label>
                <RadioGroup
                  value={formData.diagnosisStatus}
                  onValueChange={(value) => handleChange("diagnosisStatus", value)}
                  required
                >
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="not-diagnosed" id="not-diagnosed" />
                    <Label htmlFor="not-diagnosed">Not diagnosed</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="in-assessment" id="in-assessment" />
                    <Label htmlFor="in-assessment">In assessment</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="diagnosed" id="diagnosed" />
                    <Label htmlFor="diagnosed">Diagnosed</Label>
                  </div>
                </RadioGroup>
              </div>

              <div className="space-y-2">
                <Label htmlFor="attendsSchool">Do your loved ones attend school/daycare? *</Label>
                <RadioGroup
                  value={formData.attendsSchool}
                  onValueChange={(value) => handleChange("attendsSchool", value)}
                  required
                >
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="yes" id="school-yes" />
                    <Label htmlFor="school-yes">Yes</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="no" id="school-no" />
                    <Label htmlFor="school-no">No</Label>
                  </div>
                </RadioGroup>
              </div>

              <div className="space-y-2">
                <Label htmlFor="receivesServices">Do they receive support services? *</Label>
                <Select
                  value={formData.receivesServices}
                  onValueChange={(value) => handleChange("receivesServices", value)}
                  required
                >
                  <SelectTrigger className="rounded-lg">
                    <SelectValue placeholder="Select services" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="none">None</SelectItem>
                    <SelectItem value="speech">Speech Therapy</SelectItem>
                    <SelectItem value="ot">Occupational Therapy</SelectItem>
                    <SelectItem value="iep">IEP/School Support</SelectItem>
                    <SelectItem value="multiple">Multiple Services</SelectItem>
                  </SelectContent>
                </Select>
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
