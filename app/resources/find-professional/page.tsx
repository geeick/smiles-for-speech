import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Header } from "@/components/header"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import Image from "next/image"

export default function FindProfessional() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 container max-w-5xl mx-auto px-4 py-8">
        <div className="space-y-8">
          <div>
            <h1 className="text-3xl font-bold text-primary">Find a Professional</h1>
            <p className="text-muted-foreground">
              Search for qualified healthcare providers who specialize in autism spectrum disorders.
            </p>
          </div>

          <div className="flex justify-center mb-8">
            <Image
              src="/images/professionals.jpg"
              alt="Healthcare professionals"
              width={400}
              height={300}
              className="rounded-xl shadow-lg"
            />
          </div>

          <Card className="card">
            <CardHeader className="bg-primary/10 rounded-t-[1rem]">
              <CardTitle>Search for Specialists</CardTitle>
              <CardDescription>Find qualified professionals in your area</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6 pt-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="location">Your Location</Label>
                  <Input id="location" placeholder="City, Country" className="rounded-lg" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="specialization">Specialization</Label>
                  <Select>
                    <SelectTrigger className="rounded-lg">
                      <SelectValue placeholder="Select specialization" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="diagnostic">Diagnostic Assessment</SelectItem>
                      <SelectItem value="speech">Speech & Language Therapy</SelectItem>
                      <SelectItem value="occupational">Occupational Therapy</SelectItem>
                      <SelectItem value="behavioral">Behavioral Therapy</SelectItem>
                      <SelectItem value="developmental">Developmental Pediatrician</SelectItem>
                      <SelectItem value="psychologist">Child Psychologist</SelectItem>
                      <SelectItem value="psychiatrist">Child Psychiatrist</SelectItem>
                      <SelectItem value="neurologist">Pediatric Neurologist</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
              <Button className="w-full md:w-auto btn-primary">Search</Button>
            </CardContent>
          </Card>

          <Card className="card">
            <CardHeader className="bg-primary/10 rounded-t-[1rem]">
              <CardTitle>Types of Professionals</CardTitle>
              <CardDescription>Understanding the different specialists who work with autism</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4 pt-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="border rounded-lg p-4">
                  <h3 className="font-medium text-lg">Developmental Pediatricians</h3>
                  <p className="text-sm text-muted-foreground mt-2">
                    Medical doctors who specialize in child development and developmental disorders. They often diagnose
                    autism and coordinate care.
                  </p>
                </div>
                <div className="border rounded-lg p-4">
                  <h3 className="font-medium text-lg">Child Psychologists</h3>
                  <p className="text-sm text-muted-foreground mt-2">
                    Specialists who evaluate behavior, development, and mental health. They can diagnose autism and
                    provide therapy.
                  </p>
                </div>
                <div className="border rounded-lg p-4">
                  <h3 className="font-medium text-lg">Speech-Language Pathologists</h3>
                  <p className="text-sm text-muted-foreground mt-2">
                    Therapists who help with communication, language development, and social communication skills.
                  </p>
                </div>
                <div className="border rounded-lg p-4">
                  <h3 className="font-medium text-lg">Occupational Therapists</h3>
                  <p className="text-sm text-muted-foreground mt-2">
                    Professionals who help develop skills for daily living, sensory integration, and fine motor skills.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="card">
            <CardHeader className="bg-primary/10 rounded-t-[1rem]">
              <CardTitle>Finding the Right Specialist in Ghana</CardTitle>
              <CardDescription>Resources specific to Ghana</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4 pt-6">
              <p>
                Finding specialized autism care in Ghana may require some research. Here are some organizations that can
                help:
              </p>
              <div className="space-y-4">
                <div className="border rounded-lg p-4">
                  <h3 className="font-medium">Autism Awareness Care and Training Centre (AACT)</h3>
                  <p className="text-sm text-muted-foreground mt-2">
                    Provides educational and therapeutic services for children with autism. They can also refer you to
                    specialists.
                  </p>
                  <div className="mt-3">
                    <Link
                      href="https://aactgh.org"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary hover:underline"
                    >
                      Visit Website
                    </Link>
                  </div>
                </div>
                <div className="border rounded-lg p-4">
                  <h3 className="font-medium">AutismGhana</h3>
                  <p className="text-sm text-muted-foreground mt-2">
                    Connects families with autism specialists throughout Ghana and provides information on assessment
                    services.
                  </p>
                  <div className="mt-3">
                    <Link
                      href="https://www.autismghana.org"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary hover:underline"
                    >
                      Visit Website
                    </Link>
                  </div>
                </div>
                <div className="border rounded-lg p-4">
                  <h3 className="font-medium">Teaching Hospitals</h3>
                  <p className="text-sm text-muted-foreground mt-2">
                    Major teaching hospitals in Accra, Kumasi, and Tamale have child development specialists who can
                    assess and diagnose autism.
                  </p>
                  <ul className="list-disc list-inside text-sm text-muted-foreground mt-2">
                    <li>Korle Bu Teaching Hospital (Child Health Department)</li>
                    <li>Komfo Anokye Teaching Hospital</li>
                    <li>Tamale Teaching Hospital</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="card">
            <CardHeader className="bg-primary/10 rounded-t-[1rem]">
              <CardTitle>Preparing for Your Appointment</CardTitle>
              <CardDescription>How to make the most of your specialist visit</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4 pt-6">
              <p>Visiting a specialist for the first time can feel overwhelming. Here's how to prepare:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  <strong>Document behaviors and concerns:</strong> Keep a diary of specific behaviors, when they occur,
                  and what seems to trigger or alleviate them.
                </li>
                <li>
                  <strong>Gather developmental history:</strong> Note when your child reached developmental milestones
                  or when you first noticed concerning behaviors.
                </li>
                <li>
                  <strong>Bring previous reports:</strong> Bring any previous evaluations, school reports, or medical
                  records.
                </li>
                <li>
                  <strong>Prepare questions:</strong> Write down questions you have for the specialist.
                </li>
                <li>
                  <strong>Bring support:</strong> Consider bringing a support person who can help take notes or provide
                  additional observations.
                </li>
              </ul>
            </CardContent>
          </Card>

          <div className="flex justify-center">
            <Link href="/resources">
              <Button className="btn-primary">Back to Resources</Button>
            </Link>
          </div>
        </div>
      </main>
    </div>
  )
}
