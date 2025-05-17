import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Header } from "@/components/header"

export default function About() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 container max-w-4xl mx-auto px-4 py-8">
        <div className="space-y-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold">About Smiles for Speech</h1>
            <p className="text-xl text-muted-foreground mt-2">Empowering children with special needs since 2017</p>
          </div>

          <Card>
            <CardHeader>
              <CardTitle>Our Mission</CardTitle>
              <CardDescription>What drives our work</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <p>
                Smiles for Speech is a nonprofit organization founded in 2017 with a mission to empower children with
                special needs in underserved communities, particularly in Ghana, through access to therapy services and
                educational resources.
              </p>
              <p>
                We focus on early autism identification, education, and support through user-friendly web-based tools
                that are accessible to families regardless of their location or resources.
              </p>
              <p>Our core goals include:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Raising awareness about autism spectrum disorder</li>
                <li>Enabling self and caregiver-based screenings</li>
                <li>Collecting data for public health insight</li>
                <li>Offering actionable resources personalized to user input</li>
              </ul>
            </CardContent>
          </Card>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Our Story</CardTitle>
                <CardDescription>How we began</CardDescription>
              </CardHeader>
              <CardContent>
                <p>
                  Smiles for Speech was founded by a group of speech therapists, educators, and parents who recognized
                  the significant gap in services for children with special needs in Ghana and other underserved
                  communities.
                </p>
                <p className="mt-4">
                  After witnessing firsthand the challenges faced by families seeking support for children with autism,
                  our founders committed to creating accessible resources that could reach even the most remote areas
                  through digital technology.
                </p>
                <p className="mt-4">
                  Since 2017, we have grown from a small local initiative to an organization with international reach,
                  while maintaining our focus on culturally appropriate and accessible support.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Our Approach</CardTitle>
                <CardDescription>How we make a difference</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <p>
                  We believe in a compassionate, evidence-based approach that respects neurodiversity while providing
                  practical support for challenges that affect quality of life.
                </p>
                <p>Our work is guided by these principles:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Accessibility: Making resources available regardless of location or economic status</li>
                  <li>Cultural sensitivity: Adapting resources to local contexts and languages</li>
                  <li>Family empowerment: Giving families tools to support their loved ones</li>
                  <li>Community building: Creating networks of support</li>
                  <li>Data-informed approaches: Using research to guide our work</li>
                </ul>
              </CardContent>
            </Card>
          </div>

          <Card>
            <CardHeader>
              <CardTitle>Our Impact</CardTitle>
              <CardDescription>The difference we're making</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <p>Since our founding, Smiles for Speech has:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Provided screening tools to over 5,000 families</li>
                <li>Connected more than 1,200 children with professional services</li>
                <li>Trained 300+ educators in autism-supportive teaching methods</li>
                <li>Established support groups in 15 communities across Ghana</li>
                <li>Developed resources in 4 languages to increase accessibility</li>
              </ul>
              <div className="mt-6 text-center">
                <Link href="/profile/create">
                  <Button size="lg">Join Our Community</Button>
                </Link>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  )
}
