import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Header } from "@/components/header"
import Image from "next/image"

export default function EducationalMaterials() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 container max-w-4xl mx-auto px-4 py-8">
        <div className="space-y-8">
          <div>
            <h1 className="text-3xl font-bold text-primary">Educational Materials</h1>
            <p className="text-muted-foreground">Learn more about autism and how to support your loved ones.</p>
          </div>

          <div className="flex justify-center mb-8">
            <Image
              src="/educational-material.png?height=200&width=200"
              alt="Educational materials illustration"
              width={200}
              height={200}
              className="rounded-full bg-primary/10"
            />
          </div>

          <Card className="card">
            <CardHeader className="bg-primary/10 rounded-t-[1rem]">
              <CardTitle>Understanding Autism Spectrum Disorder</CardTitle>
              <CardDescription>Core concepts and current understanding</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4 pt-6">
              <p>
                Autism Spectrum Disorder (ASD) is a neurodevelopmental condition that affects how people perceive the
                world, process information, and interact with others. The term "spectrum" reflects the wide variation in
                challenges, strengths, and support needs among people with autism.
              </p>
              <p>Key characteristics of autism include:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  <strong>Social communication differences:</strong> This may include challenges with back-and-forth
                  conversation, understanding non-verbal cues, developing and maintaining relationships, and sharing
                  interests or emotions.
                </li>
                <li>
                  <strong>Restricted or repetitive behaviors and interests:</strong> This may include repetitive
                  movements or speech, insistence on sameness, highly focused interests, and unusual sensory responses.
                </li>
              </ul>
              <p className="mt-4">Current understanding of autism emphasizes that:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Autism is not caused by parenting or social factors</li>
                <li>It has a strong genetic component</li>
                <li>Early intervention can significantly improve outcomes</li>
                <li>Autism is a lifelong condition, but support needs may change over time</li>
                <li>Many autistic individuals lead fulfilling, independent lives with the right supports</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="card">
            <CardHeader className="bg-primary/10 rounded-t-[1rem]">
              <CardTitle>Recommended Books</CardTitle>
              <CardDescription>Essential reading for caregivers</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4 pt-6">
              <p>These books provide valuable insights, practical strategies, and personal perspectives on autism:</p>
              <div className="space-y-4">
                <div className="border rounded-lg p-4">
                  <h3 className="font-medium">For Understanding Autism</h3>
                  <ul className="list-disc pl-6 space-y-2 mt-2">
                    <li>"Uniquely Human" by Barry Prizant</li>
                    <li>"NeuroTribes" by Steve Silberman</li>
                    <li>"Thinking in Pictures" by Temple Grandin</li>
                    <li>"The Reason I Jump" by Naoki Higashida</li>
                  </ul>
                </div>
                <div className="border rounded-lg p-4">
                  <h3 className="font-medium">For Practical Strategies</h3>
                  <ul className="list-disc pl-6 space-y-2 mt-2">
                    <li>
                      "An Early Start for Your Child with Autism" by Sally Rogers, Geraldine Dawson, and Laurie Vismara
                    </li>
                    <li>"The Autism Discussion Page" by Bill Nason</li>
                    <li>"More Than Words" by Fern Sussman (for communication)</li>
                    <li>"Solving Sleep Problems in Children with Autism" by Terry Katz and Beth Ann Malow</li>
                  </ul>
                </div>
                <div className="border rounded-lg p-4">
                  <h3 className="font-medium">For Parents of Newly Diagnosed Children</h3>
                  <ul className="list-disc pl-6 space-y-2 mt-2">
                    <li>"Ten Things Every Child with Autism Wishes You Knew" by Ellen Notbohm</li>
                    <li>"The Loving Push" by Temple Grandin and Debra Moore</li>
                    <li>"Autism: A New Understanding" by Wenn Lawson</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="card">
            <CardHeader className="bg-primary/10 rounded-t-[1rem]">
              <CardTitle>Online Learning Resources</CardTitle>
              <CardDescription>Websites, courses, and videos</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4 pt-6">
              <div className="space-y-4">
                <div className="border rounded-lg p-4">
                  <h3 className="font-medium">Free Online Courses</h3>
                  <ul className="list-disc pl-6 space-y-2 mt-2">
                    <li>Autism Speaks 100 Day Kit</li>
                    <li>CDC's "Learn the Signs. Act Early." Program</li>
                    <li>AFIRM Modules (Autism Focused Intervention Resources & Modules)</li>
                    <li>Autism Navigator</li>
                  </ul>
                </div>
                <div className="border rounded-lg p-4">
                  <h3 className="font-medium">Reliable Websites</h3>
                  <ul className="list-disc pl-6 space-y-2 mt-2">
                    <li>Autism Science Foundation</li>
                    <li>Autism Research Institute</li>
                    <li>Autism Society</li>
                    <li>AASPIRE (Academic Autistic Spectrum Partnership in Research and Education)</li>
                  </ul>
                </div>
                <div className="border rounded-lg p-4">
                  <h3 className="font-medium">Video Resources</h3>
                  <ul className="list-disc pl-6 space-y-2 mt-2">
                    <li>Autism from the Inside (YouTube channel)</li>
                    <li>TED Talks by autistic speakers (Temple Grandin, Rosie King, etc.)</li>
                    <li>Amazing Things Happen (short animated video for children)</li>
                    <li>Ask an Autistic (YouTube series)</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="card">
            <CardHeader className="bg-primary/10 rounded-t-[1rem]">
              <CardTitle>Educational Tools for Children</CardTitle>
              <CardDescription>Resources to help children understand autism</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4 pt-6">
              <p>These resources can help siblings, classmates, and autistic children themselves understand autism:</p>
              <div className="space-y-4">
                <div className="border rounded-lg p-4">
                  <h3 className="font-medium">Children's Books</h3>
                  <ul className="list-disc pl-6 space-y-2 mt-2">
                    <li>"My Brother Charlie" by Holly Robinson Peete and Ryan Elizabeth Peete</li>
                    <li>"Since We're Friends" by Celeste Shally</li>
                    <li>"All My Stripes" by Shaina Rudolph and Danielle Royer</li>
                    <li>"The Girl Who Thought in Pictures: The Story of Dr. Temple Grandin" by Julia Finley Mosca</li>
                  </ul>
                </div>
                <div className="border rounded-lg p-4">
                  <h3 className="font-medium">Visual Supports</h3>
                  <ul className="list-disc pl-6 space-y-2 mt-2">
                    <li>Social stories about autism</li>
                    <li>Visual schedules and timers</li>
                    <li>Emotion cards and charts</li>
                    <li>Comic strip conversations</li>
                  </ul>
                </div>
                <div className="border rounded-lg p-4">
                  <h3 className="font-medium">Interactive Resources</h3>
                  <ul className="list-disc pl-6 space-y-2 mt-2">
                    <li>Sensory simulation activities</li>
                    <li>Autism acceptance classroom activities</li>
                    <li>Peer buddy programs</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="card">
            <CardHeader className="bg-primary/10 rounded-t-[1rem]">
              <CardTitle>Continuing Education</CardTitle>
              <CardDescription>Workshops, conferences, and training opportunities</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4 pt-6">
              <p>Ongoing learning can help you stay current with best practices and research:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  <strong>Parent training programs:</strong> Many regions offer specific training programs for parents
                  of autistic children, such as the Early Bird program or PEERS.
                </li>
                <li>
                  <strong>Conferences:</strong> Consider attending autism conferences, which often have tracks
                  specifically for family members.
                </li>
                <li>
                  <strong>Webinars:</strong> Many organizations offer free or low-cost webinars on specific topics
                  related to autism.
                </li>
                <li>
                  <strong>Local workshops:</strong> Check with local autism organizations, schools, and therapy centers
                  for parent education opportunities.
                </li>
              </ul>
              <p className="mt-4">
                Remember that learning about autism is an ongoing journey. As your loved one grows and develops, their
                needs will change, and new research and approaches will emerge. Stay curious and connected to continue
                building your knowledge and skills.
              </p>
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
