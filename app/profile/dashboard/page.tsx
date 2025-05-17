"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Header } from "@/components/header"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function Dashboard() {
  // In a real app, this data would come from a database
  const profileData = {
    name: "User",
    age: 28,
    sex: "Female",
    diagnosis: "None",
    seekingDiagnosis: "Yes",
    challenges: ["sensory", "social", "anxiety"],
    location: "Accra, Ghana",
  }

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
      link: "/resources/challenges/routines",
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
                  <Button variant="outline" className="rounded-xl">
                    Edit Profile
                  </Button>
                </CardFooter>
              </Card>

              <Card className="card">
                <CardHeader className="bg-primary/10 rounded-t-[1rem]">
                  <CardTitle>Identified Challenges</CardTitle>
                  <CardDescription>Areas you've identified as challenging</CardDescription>
                </CardHeader>
                <CardContent className="pt-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {profileData.challenges.map((challenge) => (
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
                  {profileData.challenges.map((challenge) => (
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
      </main>
    </div>
  )
}
