"use client"

import Link from "next/link"
import { useEffect, useState } from "react"
import { useParams } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Header } from "@/components/header"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { signOut } from "next-auth/react"
import { PlusCircle } from "lucide-react"

export default function Dashboard() {
  const params = useParams()
  const userId = params?.userId as string

  const [profileData, setProfileData] = useState<any>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  // Map challenges to readable names and resource links
  const challengeMap = {
    sensory: {
      name: "Sensory Issues",
      link: "/resources/challenges/sensory",
    },
    social: {
      name: "Social Difficulties",
      link: "/resources/challenges/social",
    },
    anxiety: {
      name: "Anxiety",
      link: "/resources/challenges/anxiety",
    },
    executive: {
      name: "Executive Dysfunction",
      link: "/resources/challenges/executive-function",
    },
    communication: {
      name: "Communication Challenges",
      link: "/resources/challenges/communication",
    },
    routines: {
      name: "Need for Routines",
      link: "/resources/challenges/routine",
    },
    stimming: {
      name: "Stimming",
      link: "/resources/challenges/stimming",
    },
    burnout: {
      name: "Burnout",
      link: "/resources/challenges/burnout",
    },
  }

  useEffect(() => {
    async function fetchProfile() {
      setLoading(true)
      setError(null)
      try {
        // Use the actual API endpoint for fetching user profile
        const res = await fetch(`/api/profile/${userId}`)
        if (!res.ok) throw new Error("Failed to fetch profile")
        const data = await res.json()
        setProfileData(data)
      } catch (err: any) {
        setError(err.message || "Error loading profile")
      } finally {
        setLoading(false)
      }
    }
    if (userId) fetchProfile()
  }, [userId])

  if (loading) {
    return (
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1 container max-w-4xl mx-auto px-4 py-8 flex items-center justify-center">
          <p>Loading profile...</p>
        </main>
      </div>
    )
  }

  if (error || !profileData) {
    return (
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1 container max-w-4xl mx-auto px-4 py-8 flex items-center justify-center">
          <p className="text-red-500">Error: {error || "Profile not found"}</p>
        </main>
      </div>
    )
  }

  if (profileData.type === "caretaker") {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 container max-w-4xl mx-auto px-4 py-8">
        <div className="space-y-8">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
            <div>
              <h1 className="text-3xl font-bold">Caretaker Dashboard</h1>
              <p className="text-muted-foreground">Manage profiles for your loved ones</p>
            </div>
            <Link href="/profile/add-loved-one">
              <Button size="lg" className="w-full md:w-auto">
                <PlusCircle className="mr-2 h-4 w-4" />
                Add a Loved One
              </Button>
            </Link>
          </div>

          <Card>
            <CardHeader>
              <CardTitle>Your Loved Ones</CardTitle>
              <CardDescription>People you're caring for</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              {(profileData.lovedOnes || []).map((person: any) => (
                <div key={person.id} className="border rounded-lg p-4">
                  <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                    <div>
                      <h3 className="font-medium">{person.name}</h3>
                      <p className="text-sm text-muted-foreground">
                        {person.age} years old • {person.diagnosisStatus}
                      </p>
                    </div>
                    <div className="flex gap-2 w-full md:w-auto">
                      <Link href={`/assessment/loved-one/${person.id}`}>
                        <Button variant="outline" className="w-full">Start Assessment</Button>
                      </Link>
                      <Link href={`/profile/loved-one/${person.id}`}>
                        <Button variant="outline" className="w-full">View Profile</Button>
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>

          {/* Tabs */}
          <Tabs defaultValue="profile">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="profile">Your Profile</TabsTrigger>
              <TabsTrigger value="assessments">Assessments</TabsTrigger>
              <TabsTrigger value="resources">Resources</TabsTrigger>
            </TabsList>

            <TabsContent value="profile" className="space-y-4 pt-4">
              <Card>
                <CardHeader>
                  <CardTitle>Caretaker Information</CardTitle>
                  <CardDescription>Your basic profile information</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <p className="text-sm font-medium text-muted-foreground">Age</p>
                      <p>{profileData.age}</p>
                    </div>
                    <div>
                      <p className="text-sm font-medium text-muted-foreground">Sex</p>
                      <p>{profileData.sex}</p>
                    </div>
                    <div>
                      <p className="text-sm font-medium text-muted-foreground">Number of Loved Ones</p>
                      <p>{(profileData.lovedOnes || []).length}</p>
                    </div>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button variant="outline">Edit Profile</Button>
                </CardFooter>
              </Card>
            </TabsContent>

            <TabsContent value="assessments" className="space-y-4 pt-4">
              <Card>
                <CardHeader>
                  <CardTitle>Completed Assessments</CardTitle>
                  <CardDescription>No assessments have been completed yet</CardDescription>
                </CardHeader>
                <CardContent className="flex flex-col items-center justify-center py-8">
                  <p className="text-muted-foreground text-center mb-4">
                    Complete an assessment for your loved one to get personalized resources and support
                  </p>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="resources" className="space-y-4 pt-4">
              <Card>
                <CardHeader>
                  <CardTitle>Caregiver Resources</CardTitle>
                  <CardDescription>Support and resources for caregivers</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="border rounded-lg p-4">
                    <h3 className="font-medium mb-2">Caregiver Support Groups</h3>
                    <p className="text-sm text-muted-foreground mb-3">Connect with other caregivers of children with special needs</p>
                    <Link href="/resources/caregiver-support">
                      <Button variant="outline" size="sm">View Resources</Button>
                    </Link>
                  </div>
                  <div className="border rounded-lg p-4">
                    <h3 className="font-medium mb-2">Self-Care for Caregivers</h3>
                    <p className="text-sm text-muted-foreground mb-3">Maintain your wellbeing while caring for others</p>
                    <Link href="/resources/caregiver-self-care">
                      <Button variant="outline" size="sm">View Resources</Button>
                    </Link>
                  </div>
                  <div className="border rounded-lg p-4">
                    <h3 className="font-medium mb-2">Educational Materials</h3>
                    <p className="text-sm text-muted-foreground mb-3">Learn about autism and how to support your loved ones</p>
                    <Link href="/resources/education">
                      <Button variant="outline" size="sm">View Resources</Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
                <div className="pt-8 text-center">
          <Button
            variant="outline"
            onClick={() => signOut({ callbackUrl: "/" })}
            className="rounded-xl">
            Logout
          </Button>
        </div>
      </main>
    </div>
  )
}
  
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 container max-w-4xl mx-auto px-4 py-8">
        <div className="space-y-8">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
            <div>
              <h1 className="text-3xl font-bold text-primary">{profileData.name}'s Profile</h1>
              <p className="text-muted-foreground">Welcome back! Here's your profile information.</p>
            </div>
            <Link href="/assessment/self">
              <Button size="lg" className="w-full md:w-auto btn-primary">
                Start Self Assessment
              </Button>
            </Link>
          </div>

          <Tabs defaultValue="profile">
            <TabsList className="grid w-full grid-cols-3 rounded-xl bg-primary/10">
              <TabsTrigger value="profile" className="rounded-xl">
                Profile
              </TabsTrigger>
              <TabsTrigger value="assessments" className="rounded-xl">
                Assessments
              </TabsTrigger>
              <TabsTrigger value="resources" className="rounded-xl">
                Resources
              </TabsTrigger>
            </TabsList>
            <TabsContent value="profile" className="space-y-4 pt-4">
              <Card className="card">
                <CardHeader className="bg-primary/10 rounded-t-[1rem]">
                  <CardTitle>Personal Information</CardTitle>
                  <CardDescription>Your basic profile information</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4 pt-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <p className="text-sm font-medium text-muted-foreground">Age</p>
                      <p>{profileData.age}</p>
                    </div>
                    <div>
                      <p className="text-sm font-medium text-muted-foreground">Sex</p>
                      <p>{profileData.sex}</p>
                    </div>
                    <div>
                      <p className="text-sm font-medium text-muted-foreground">Diagnosis</p>
                      <p>{profileData.diagnosis}</p>
                    </div>
                    <div>
                      <p className="text-sm font-medium text-muted-foreground">Seeking Diagnosis</p>
                      <p>{profileData.seekingDiagnosis}</p>
                    </div>
                    <div>
                      <p className="text-sm font-medium text-muted-foreground">Location</p>
                      <p>{profileData.location}</p>
                    </div>
                  </div>
                </CardContent>
                <CardFooter>
                  <Link href={`/profile/${userId}/edit`}>
                    <Button variant="outline" className="rounded-xl">
                      Edit Profile
                    </Button>
                  </Link>
                </CardFooter>
              </Card>

              <Card className="card">
                <CardHeader className="bg-primary/10 rounded-t-[1rem]">
                  <CardTitle>Identified Challenges</CardTitle>
                  <CardDescription>Areas you've identified as challenging</CardDescription>
                </CardHeader>
                <CardContent className="pt-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {(profileData.challenges || []).map((challenge: string) => (
                      <Link
                        key={challenge}
                        href={challengeMap[challenge as keyof typeof challengeMap]?.link || "/resources"}
                        className="flex items-center gap-2 p-3 rounded-lg hover:bg-primary/5 transition-colors"
                      >
                        <div className="h-3 w-3 rounded-full bg-primary"></div>
                        <span className="font-medium">
                          {challengeMap[challenge as keyof typeof challengeMap]?.name || challenge}
                        </span>
                      </Link>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="assessments" className="space-y-4 pt-4">
              <Card className="card">
                <CardHeader className="bg-primary/10 rounded-t-[1rem]">
                  <CardTitle>Your Assessments</CardTitle>
                  <CardDescription>You haven't completed any assessments yet</CardDescription>
                </CardHeader>
                <CardContent className="flex flex-col items-center justify-center py-8">
                  <p className="text-muted-foreground text-center mb-4">
                    Complete an assessment to get personalized resources and support
                  </p>
                  <Link href="/assessment/self">
                    <Button className="btn-primary">Start Self Assessment</Button>
                  </Link>
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="resources" className="space-y-4 pt-4">
              <Card className="card">
                <CardHeader className="bg-primary/10 rounded-t-[1rem]">
                  <CardTitle>Personalized Resources</CardTitle>
                  <CardDescription>Resources based on your profile and challenges</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4 pt-6">
                  {(profileData.challenges || []).map((challenge: string) => (
                    <div
                      key={challenge}
                      className="border rounded-lg p-4 hover:border-primary hover:bg-primary/5 transition-colors"
                    >
                      <h3 className="font-medium mb-2">
                        {challengeMap[challenge as keyof typeof challengeMap]?.name || challenge}
                      </h3>
                      <p className="text-sm text-muted-foreground mb-3">
                        Resources and techniques to help with{" "}
                        {challengeMap[challenge as keyof typeof challengeMap]?.name.toLowerCase() || challenge}
                      </p>
                      <Link href={challengeMap[challenge as keyof typeof challengeMap]?.link || "/resources"}>
                        <Button variant="outline" size="sm" className="rounded-xl">
                          View Resources
                        </Button>
                      </Link>
                    </div>
                  ))}
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
        <div className="pt-8 text-center">
          <Button
            variant="outline"
            onClick={() => signOut({ callbackUrl: "/" })}
            className="rounded-xl">
            Logout
          </Button>
        </div>
      </main>
    </div>
  )
}
