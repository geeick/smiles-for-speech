import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Header } from "@/components/header"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import Image from "next/image"

export default function Resources() {
  // Resource categories
  const categories = [
    {
      id: "age-based",
      title: "Age-Based Resources",
      description: "Resources organized by age group",
      items: [
        {
          title: "Early Childhood (0-5 years)",
          description: "Resources for identifying early signs and supporting young children",
          link: "/resources/age/early-childhood",
          image: "/placeholder.svg?height=80&width=80",
        },
        {
          title: "School Age (6-12 years)",
          description: "Support for school-aged children with autism",
          link: "/resources/age/school-age",
          image: "/placeholder.svg?height=80&width=80",
        },
        {
          title: "Adolescents (13-17 years)",
          description: "Resources for teenagers with autism",
          link: "/resources/age/adolescents",
          image: "/placeholder.svg?height=80&width=80",
        },
        {
          title: "Adults (18+ years)",
          description: "Support for adults on the autism spectrum",
          link: "/resources/age/adults",
          image: "/placeholder.svg?height=80&width=80",
        },
      ],
    },
    {
      id: "challenges",
      title: "Challenge-Specific Resources",
      description: "Resources organized by specific challenges",
      items: [
        {
          title: "Sensory Issues",
          description: "Understanding and managing sensory sensitivities",
          link: "/resources/challenges/sensory",
          image: "/placeholder.svg?height=80&width=80",
        },
        {
          title: "Communication",
          description: "Tools and strategies for improving communication",
          link: "/resources/challenges/communication",
          image: "/placeholder.svg?height=80&width=80",
        },
        {
          title: "Social Skills",
          description: "Resources for developing social understanding and skills",
          link: "/resources/challenges/social",
          image: "/placeholder.svg?height=80&width=80",
        },
        {
          title: "Executive Function",
          description: "Support for organization, planning, and task management",
          link: "/resources/challenges/executive-function",
          image: "/placeholder.svg?height=80&width=80",
        },
      ],
    },
    {
      id: "caregivers",
      title: "Caregiver Resources",
      description: "Resources for parents and caregivers",
      items: [
        {
          title: "Newly Diagnosed",
          description: "Information for families with a recent autism diagnosis",
          link: "/resources/caregivers/newly-diagnosed",
          image: "/placeholder.svg?height=80&width=80",
        },
        {
          title: "Educational Advocacy",
          description: "How to advocate for your child in educational settings",
          link: "/resources/caregivers/education",
          image: "/placeholder.svg?height=80&width=80",
        },
        {
          title: "Self-Care",
          description: "Resources for caregiver wellbeing",
          link: "/resources/caregivers/self-care",
          image: "/placeholder.svg?height=80&width=80",
        },
        {
          title: "Educational Materials",
          description: "Learn more about autism and how to support your loved ones",
          link: "/resources/caregivers/education-materials",
          image: "/placeholder.svg?height=80&width=80",
        },
      ],
    },
  ]

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 container max-w-6xl mx-auto px-4 py-8">
        <div className="space-y-8">
          <div>
            <h1 className="text-3xl font-bold text-primary">Resources & Techniques Library</h1>
            <p className="text-muted-foreground">
              Find resources, tools, and techniques to support individuals with autism and their caregivers.
            </p>
          </div>

          <Tabs defaultValue="age-based">
            <TabsList className="grid w-full grid-cols-3 rounded-xl bg-primary/10">
              <TabsTrigger value="age-based" className="rounded-xl">
                Age-Based
              </TabsTrigger>
              <TabsTrigger value="challenges" className="rounded-xl">
                Challenges
              </TabsTrigger>
              <TabsTrigger value="caregivers" className="rounded-xl">
                For Caregivers
              </TabsTrigger>
            </TabsList>

            {categories.map((category) => (
              <TabsContent key={category.id} value={category.id} className="space-y-4 pt-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {category.items.map((item, index) => (
                    <Card key={index} className="card hover:border-primary hover:shadow-md transition-all">
                      <CardHeader className="flex flex-row items-center gap-4 bg-primary/10 rounded-t-[1rem]">
                        <Image
                          src={item.image || "/placeholder.svg"}
                          alt={item.title}
                          width={80}
                          height={80}
                          className="rounded-full bg-white p-1"
                        />
                        <div>
                          <CardTitle>{item.title}</CardTitle>
                          <CardDescription>{item.description}</CardDescription>
                        </div>
                      </CardHeader>
                      <CardFooter className="pt-4">
                        <Link href={item.link} className="w-full">
                          <Button variant="outline" className="w-full rounded-xl">
                            View Resources
                          </Button>
                        </Link>
                      </CardFooter>
                    </Card>
                  ))}
                </div>
              </TabsContent>
            ))}
          </Tabs>

          <Card className="card">
            <CardHeader className="bg-primary/10 rounded-t-[1rem]">
              <CardTitle>Local Resources</CardTitle>
              <CardDescription>Support services and resources specific to Ghana</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4 pt-6">
              <div className="border rounded-lg p-4 hover:border-primary hover:bg-primary/5 transition-colors">
                <h3 className="font-medium">Autism Awareness Care and Training Centre (AACT)</h3>
                <p className="text-sm text-muted-foreground my-2">
                  A center in Accra providing educational and therapeutic services for children with autism.
                </p>
                <Link href="https://aactgh.org" target="_blank" rel="noopener noreferrer">
                  <Button variant="link" size="sm" className="p-0 text-primary">
                    Visit Website
                  </Button>
                </Link>
              </div>
              <div className="border rounded-lg p-4 hover:border-primary hover:bg-primary/5 transition-colors">
                <h3 className="font-medium">Autism Society of Ghana</h3>
                <p className="text-sm text-muted-foreground my-2">
                  An organization dedicated to improving the lives of individuals with autism in Ghana.
                </p>
                <Button variant="link" size="sm" className="p-0 text-primary">
                  Learn More
                </Button>
              </div>
              <div className="border rounded-lg p-4 hover:border-primary hover:bg-primary/5 transition-colors">
                <h3 className="font-medium">Special Attention Project (SAP)</h3>
                <p className="text-sm text-muted-foreground my-2">
                  An organization supporting children with learning difficulties in Ghana.
                </p>
                <Link href="https://specialattentionproject.org" target="_blank" rel="noopener noreferrer">
                  <Button variant="link" size="sm" className="p-0 text-primary">
                    Visit Website
                  </Button>
                </Link>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  )
}
