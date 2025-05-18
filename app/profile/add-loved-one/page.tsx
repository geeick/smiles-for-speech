"use client"

import type React from "react"
import { useState } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Header } from "@/components/header"
import Image from "next/image"

export default function AddLovedOne() {
  const router = useRouter()
  const [formData, setFormData] = useState({
    name: "",
    age: "",
    sex: "",
    diagnosisStatus: "",
    concerns: "",
    seekingSupport: "",
  })

  const handleChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault()

  try {
    const res = await fetch("/api/loved-one", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    })

    if (!res.ok) throw new Error("Failed to add loved one")

    const data = await res.json()

    if (data?.userId) {
      router.push(`/profile/${data.userId}`)
    } else {
      throw new Error("Missing userId from server response")
    }
  } catch (err) {
    console.error("Error submitting loved one:", err)
    alert("Something went wrong while adding the loved one.")
  }
}


  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 container max-w-2xl mx-auto px-4 py-8">
        <Card className="card">
          <CardHeader className="bg-primary/10 rounded-t-[1rem]">
            <div className="flex justify-center mb-4">
              <Image
                src="/images/loved-one.jpg"
                alt="Add a loved one"
                width={150}
                height={150}
                className="rounded-full"
              />
            </div>
            <CardTitle>Add a Loved One</CardTitle>
            <CardDescription>
              Please fill out the following information about the person you're caring for. Fields marked with * are
              required.
            </CardDescription>
          </CardHeader>
          <form onSubmit={handleSubmit}>
            <CardContent className="space-y-6 pt-6">
              <div className="space-y-2">
                <Label htmlFor="name">Child's Name *</Label>
                <Input
                  id="name"
                  required
                  value={formData.name}
                  onChange={(e) => handleChange("name", e.target.value)}
                  className="rounded-lg"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="age">Child's Age *</Label>
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
                  <Label htmlFor="sex">Child's Sex *</Label>
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
                <Label htmlFor="diagnosisStatus">Diagnosis status (optional)</Label>
                <Select onValueChange={(value) => handleChange("diagnosisStatus", value)}>
                  <SelectTrigger className="rounded-lg">
                    <SelectValue placeholder="Select status" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="not-diagnosed">Not diagnosed</SelectItem>
                    <SelectItem value="in-assessment">In assessment</SelectItem>
                    <SelectItem value="diagnosed">Diagnosed</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="concerns">Current behavioral or developmental concerns</Label>
                <Textarea
                  id="concerns"
                  placeholder="Examples: Delayed speech, stimming, meltdowns, social withdrawal"
                  value={formData.concerns}
                  onChange={(e) => handleChange("concerns", e.target.value)}
                  className="rounded-lg"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="seekingSupport">Are you seeking support or resources for this child? *</Label>
                <RadioGroup
                  value={formData.seekingSupport}
                  onValueChange={(value) => handleChange("seekingSupport", value)}
                  required
                >
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="yes" id="support-yes" />
                    <Label htmlFor="support-yes">Yes</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="no" id="support-no" />
                    <Label htmlFor="support-no">No</Label>
                  </div>
                </RadioGroup>
              </div>
            </CardContent>
            <CardFooter>
              <Button type="submit" className="w-full btn-primary">
                Add Loved One
              </Button>
            </CardFooter>
          </form>
        </Card>
      </main>
    </div>
  )
}
