import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Header } from "@/components/header"
import Image from "next/image"

export default function SchoolAgeResources() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 container max-w-4xl mx-auto px-4 py-8">
        <div className="space-y-8">
          <div>
            <h1 className="text-3xl font-bold text-primary">School Age Resources (6-12 years)</h1>
            <p className="text-muted-foreground">Support and strategies for school-aged children with autism.</p>
          </div>

          <div className="flex justify-center mb-8">
            <Image
              src="/images/school-age.jpg"
              alt="School-aged children learning"
              width={400}
              height={300}
              className="rounded-xl shadow-lg"
            />
          </div>

          <Card className="card">
            <CardHeader className="bg-primary/10 rounded-t-[1rem]">
              <CardTitle>Educational Support</CardTitle>
              <CardDescription>Helping your child succeed in school</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6 pt-6">
              <p>
                School-aged children with autism often need additional support to thrive in educational settings.
                Consider these strategies:
              </p>
              <div className="space-y-4">
                <div className="border rounded-lg p-4">
                  <h3 className="font-medium">Communication with School</h3>
                  <ul className="list-disc pl-6 space-y-2 mt-2">
                    <li>Meet with teachers at the start of each school year</li>
                    <li>Share effective strategies that work at home</li>
                    <li>Request regular updates on progress and challenges</li>
                    <li>Advocate for accommodations that support your child's needs</li>
                    <li>Establish a communication system between home and school</li>
                  </ul>
                </div>

                <div className="border rounded-lg p-4">
                  <h3 className="font-medium">Classroom Accommodations</h3>
                  <ul className="list-disc pl-6 space-y-2 mt-2">
                    <li>Preferential seating to minimize distractions</li>
                    <li>Visual schedules and supports</li>
                    <li>Advance notice of transitions or changes</li>
                    <li>Sensory breaks throughout the day</li>
                    <li>Written or visual instructions alongside verbal ones</li>
                    <li>Modified assignments when appropriate</li>
                    <li>Quiet space for test-taking or sensory breaks</li>
                  </ul>
                </div>

                <div className="border rounded-lg p-4">
                  <h3 className="font-medium">Social Support at School</h3>
                  <ul className="list-disc pl-6 space-y-2 mt-2">
                    <li>Peer buddy systems</li>
                    <li>Social skills groups</li>
                    <li>Structured activities during recess</li>
                    <li>Teacher-facilitated social interactions</li>
                    <li>Practice with social scenarios before they occur</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="card">
            <CardHeader className="bg-primary/10 rounded-t-[1rem]">
              <CardTitle>Building Independence</CardTitle>
              <CardDescription>Helping your child develop life skills</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4 pt-6">
              <p>
                The school-age years are an important time to develop independence skills that will serve your child
                throughout life:
              </p>

              <div className="space-y-4">
                <div className="border rounded-lg p-4">
                  <h3 className="font-medium">Self-Care Skills</h3>
                  <ul className="list-disc pl-6 space-y-2 mt-2">
                    <li>Personal hygiene routines</li>
                    <li>Dressing independently</li>
                    <li>Basic food preparation</li>
                    <li>Organization of personal belongings</li>
                    <li>Time management with visual supports</li>
                  </ul>
                </div>

                <div className="border rounded-lg p-4">
                  <h3 className="font-medium">Household Responsibilities</h3>
                  <ul className="list-disc pl-6 space-y-2 mt-2">
                    <li>Age-appropriate chores with visual checklists</li>
                    <li>Following multi-step directions</li>
                    <li>Helping with meal preparation</li>
                    <li>Caring for pets or plants</li>
                    <li>Cleaning up personal spaces</li>
                  </ul>
                </div>

                <div className="border rounded-lg p-4">
                  <h3 className="font-medium">Community Skills</h3>
                  <ul className="list-disc pl-6 space-y-2 mt-2">
                    <li>Understanding safety rules</li>
                    <li>Practicing appropriate greetings and conversations</li>
                    <li>Navigating familiar environments</li>
                    <li>Making simple purchases</li>
                    <li>Using public facilities appropriately</li>
                  </ul>
                </div>
              </div>

              <p className="mt-4">
                Remember to break down skills into small, manageable steps and provide plenty of practice opportunities.
                Visual supports, social stories, and consistent routines can all help your child develop greater
                independence.
              </p>
            </CardContent>
          </Card>

          <Card className="card">
            <CardHeader className="bg-primary/10 rounded-t-[1rem]">
              <CardTitle>Social Development</CardTitle>
              <CardDescription>Supporting friendships and social understanding</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4 pt-6">
              <p>
                Social challenges often become more apparent during the school years as social dynamics become more
                complex:
              </p>

              <div className="space-y-4">
                <div className="border rounded-lg p-4">
                  <h3 className="font-medium">Structured Social Activities</h3>
                  <ul className="list-disc pl-6 space-y-2 mt-2">
                    <li>Choose activities based on your child's interests</li>
                    <li>Start with small groups or one-on-one interactions</li>
                    <li>Consider structured clubs with clear rules (robotics, chess, art)</li>
                    <li>Look for autism-friendly or inclusive programs</li>
                    <li>Prepare your child with what to expect</li>
                  </ul>
                </div>

                <div className="border rounded-lg p-4">
                  <h3 className="font-medium">Teaching Social Skills</h3>
                  <ul className="list-disc pl-6 space-y-2 mt-2">
                    <li>Use social stories to explain social situations</li>
                    <li>Practice conversational skills through role-play</li>
                    <li>Teach perspective-taking with visual supports</li>
                    <li>Explain unwritten social rules explicitly</li>
                    <li>Use video modeling to demonstrate social skills</li>
                    <li>Provide specific feedback on social interactions</li>
                  </ul>
                </div>

                <div className="border rounded-lg p-4">
                  <h3 className="font-medium">Managing Social Challenges</h3>
                  <ul className="list-disc pl-6 space-y-2 mt-2">
                    <li>Help identify signs of social overload</li>
                    <li>Create a plan for managing difficult situations</li>
                    <li>Teach strategies for handling teasing or bullying</li>
                    <li>Ensure access to quiet breaks when needed</li>
                    <li>Balance social activities with alone time</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="card">
            <CardHeader className="bg-primary/10 rounded-t-[1rem]">
              <CardTitle>Resources for School-Age Children</CardTitle>
              <CardDescription>Tools and support for this age group</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4 pt-6">
              <div className="space-y-4">
                <div className="border rounded-lg p-4">
                  <h3 className="font-medium">Books</h3>
                  <ul className="list-disc pl-6 space-y-2 mt-2">
                    <li>"The Survival Guide for Kids with ASD" by Elizabeth Verdick and Elizabeth Reeve</li>
                    <li>"What to Do When You Worry Too Much" by Dawn Huebner (for anxiety)</li>
                    <li>"Social Stories for Kids in Conflict" by John Ling</li>
                    <li>"The Social Skills Picture Book" by Jed Baker</li>
                  </ul>
                </div>

                <div className="border rounded-lg p-4">
                  <h3 className="font-medium">Online Resources</h3>
                  <ul className="list-disc pl-6 space-y-2 mt-2">
                    <li>
                      <Link
                        href="https://autismsociety.org/resources-by-age/school-aged/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-primary hover:underline"
                      >
                        Autism Society School-Age Resources
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="https://childmind.org/topics/disorders/autism/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-primary hover:underline"
                      >
                        Child Mind Institute
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="https://www.understood.org"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-primary hover:underline"
                      >
                        Understood.org
                      </Link>
                    </li>
                  </ul>
                </div>

                <div className="border rounded-lg p-4">
                  <h3 className="font-medium">Support in Ghana</h3>
                  <ul className="list-disc pl-6 space-y-2 mt-2">
                    <li>
                      <Link
                        href="https://aactgh.org"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-primary hover:underline"
                      >
                        Autism Awareness Care and Training Centre (AACT)
                      </Link>{" "}
                      - Educational programs for school-age children
                    </li>
                    <li>
                      <Link
                        href="https://specialattentionproject.org"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-primary hover:underline"
                      >
                        Special Attention Project (SAP)
                      </Link>{" "}
                      - Educational support for children with learning difficulties
                    </li>
                    <li>
                      <Link
                        href="https://autismghana.org"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-primary hover:underline"
                      >
                        Autism Society of Ghana
                      </Link>{" "}
                      - Support and advocacy for families
                    </li>
                  </ul>
                </div>
              </div>
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
