"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Header } from "@/components/header"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { PlusCircle } from "lucide-react"

export default function CaretakerDashboard() {
  // In a real app, this data would come from a database
  const profileData = {
    name: "Caretaker",
    age: 35,
    sex: "Female",
    lovedOnes: [
      {
        id: "1",
        name: "Child 1",
        age: 6,
        sex: "Male",
        diagnosisStatus: "In assessment",
        challenges: ["communication", "sensory"],
      },
    ],
  }

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
              {profileData.lovedOnes.map((person) => (
                <div key={person.id} className="border rounded-lg p-4">
                  <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                    <div>
                      <h3 className="font-medium">{person.name}</h3>
                      <p className="text-sm text-muted-foreground">
                        {person.age} years old • {person.diagnosisStatus}
                      </p>
                    </div>
                    <div className="flex gap-2 w-full md:w-auto">
                      <Link href={`/assessment/loved-one/${person.id}`} className="w-full md:w-auto">
                        <Button variant="outline" className="w-full">
                          Start Assessment
                        </Button>
                      </Link>
                      <Link href={`/profile/loved-one/${person.id}`} className="w-full md:w-auto">
                        <Button variant="outline" className="w-full">
                          View Profile
                        </Button>
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>

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
                      <p>{profileData.lovedOnes.length}</p>
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
                    <p className="text-sm text-muted-foreground mb-3">
                      Connect with other caregivers of children with special needs
                    </p>
                    <Link href="/resources/caregiver-support">
                      <Button variant="outline" size="sm">
                        View Resources
                      </Button>
                    </Link>
                  </div>
                  <div className="border rounded-lg p-4">
                    <h3 className="font-medium mb-2">Self-Care for Caregivers</h3>
                    <p className="text-sm text-muted-foreground mb-3">
                      Resources to help you maintain your own wellbeing while caring for others
                    </p>
                    <Link href="/resources/caregiver-self-care">
                      <Button variant="outline" size="sm">
                        View Resources
                      </Button>
                    </Link>
                  </div>
                  <div className="border rounded-lg p-4">
                    <h3 className="font-medium mb-2">Educational Materials</h3>
                    <p className="text-sm text-muted-foreground mb-3">
                      Learn more about autism and how to support your loved ones
                    </p>
                    <Link href="/resources/education">
                      <Button variant="outline" size="sm">
                        View Resources
                      </Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </main>
    </div>
  )
}
