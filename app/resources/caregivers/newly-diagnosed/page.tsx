import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Header } from "@/components/header"

export default function NewlyDiagnosedResources() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 container max-w-4xl mx-auto px-4 py-8">
        <div className="space-y-8">
          <div>
            <h1 className="text-3xl font-bold text-primary">Newly Diagnosed Resources</h1>
            <p className="text-muted-foreground">
              Information and support for families with a recent autism diagnosis.
            </p>
          </div>

          <Card className="card">
            <CardHeader className="bg-primary/10 rounded-t-[1rem]">
              <CardTitle>Understanding the Diagnosis</CardTitle>
              <CardDescription>Making sense of what autism means for your child and family</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4 pt-6">
              <p>
                Receiving an autism diagnosis for your child can bring a mix of emotions - from relief at having an
                explanation, to concern about what it means for the future. Here's some information to help you
                understand the diagnosis:
              </p>
              <div className="space-y-4">
                <div className="border rounded-lg p-4">
                  <h3 className="font-medium">What Is Autism?</h3>
                  <p className="text-sm text-muted-foreground mt-2">
                    Autism (Autism Spectrum Disorder) is a neurodevelopmental condition characterized by differences in:
                  </p>
                  <ul className="list-disc pl-6 space-y-2 mt-2">
                    <li>Social communication and interaction</li>
                    <li>Restricted or repetitive behaviors, interests, or activities</li>
                    <li>Sensory processing</li>
                  </ul>
                  <p className="text-sm text-muted-foreground mt-2">
                    It's important to understand that autism is a spectrum - each autistic person has a unique profile
                    of strengths and challenges. The diagnosis provides information about how your child perceives and
                    interacts with the world.
                  </p>
                </div>

                <div className="border rounded-lg p-4">
                  <h3 className="font-medium">What Autism Is Not</h3>
                  <ul className="list-disc pl-6 space-y-2 mt-2">
                    <li>Autism is not a disease or illness</li>
                    <li>Autism is not caused by parenting style</li>
                    <li>Autism is not something that needs to be "cured"</li>
                    <li>Autism does not mean your child can't learn, develop, and thrive</li>
                    <li>Autism does not define your child's entire identity or future</li>
                  </ul>
                </div>

                <div className="border rounded-lg p-4">
                  <h3 className="font-medium">Processing Your Feelings</h3>
                  <p className="text-sm text-muted-foreground mt-2">
                    Many parents experience a range of emotions after diagnosis:
                  </p>
                  <ul className="list-disc pl-6 space-y-2 mt-2">
                    <li>Relief at having an explanation for observed differences</li>
                    <li>Worry about what the future holds</li>
                    <li>Grief for the expectations you may have had</li>
                    <li>Overwhelm at the information and decisions ahead</li>
                    <li>Hope as you learn about supports and strategies</li>
                  </ul>
                  <p className="text-sm text-muted-foreground mt-2">
                    All of these feelings are normal. Give yourself time to process the diagnosis and connect with other
                    parents who understand the journey.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="card">
            <CardHeader className="bg-primary/10 rounded-t-[1rem]">
              <CardTitle>Next Steps After Diagnosis</CardTitle>
              <CardDescription>Important actions to take in the first few months</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4 pt-6">
              <p>
                After receiving a diagnosis, many parents wonder "What now?" Here are some constructive steps to take:
              </p>

              <div className="space-y-4">
                <div className="border rounded-lg p-4">
                  <h3 className="font-medium">Immediate Actions</h3>
                  <ul className="list-disc pl-6 space-y-2 mt-2">
                    <li>
                      <strong>Gather information:</strong> Request a copy of the diagnostic report and any assessments
                    </li>
                    <li>
                      <strong>Learn about autism:</strong> Focus on reliable resources from reputable organizations
                    </li>
                    <li>
                      <strong>Identify immediate concerns:</strong> Note which challenges are most affecting daily life
                    </li>
                    <li>
                      <strong>Connect with support:</strong> Find other parents or support groups for guidance
                    </li>
                    <li>
                      <strong>Consider sharing the diagnosis:</strong> Decide who needs to know and how to explain it
                    </li>
                  </ul>
                </div>

                <div className="border rounded-lg p-4">
                  <h3 className="font-medium">Early Intervention</h3>
                  <p className="text-sm text-muted-foreground mt-2">
                    Research consistently shows that early intervention leads to better outcomes. Consider these
                    services:
                  </p>
                  <ul className="list-disc pl-6 space-y-2 mt-2">
                    <li>Speech and language therapy</li>
                    <li>Occupational therapy</li>
                    <li>Behavioral support</li>
                    <li>Developmental therapy</li>
                    <li>Play-based intervention</li>
                    <li>Parent training programs</li>
                  </ul>
                  <p className="text-sm text-muted-foreground mt-2">
                    The specific services needed will depend on your child's unique profile of strengths and challenges.
                  </p>
                </div>

                <div className="border rounded-lg p-4">
                  <h3 className="font-medium">Family Adjustments</h3>
                  <ul className="list-disc pl-6 space-y-2 mt-2">
                    <li>Learn about your child's sensory needs and preferences</li>
                    <li>Create visual supports and consistent routines at home</li>
                    <li>Develop strategies for challenging situations</li>
                    <li>Explain autism to siblings in age-appropriate ways</li>
                    <li>Consider family therapy to support adjustment</li>
                    <li>Remember to attend to the needs of all family members</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="card">
            <CardHeader className="bg-primary/10 rounded-t-[1rem]">
              <CardTitle>Navigating Services and Supports</CardTitle>
              <CardDescription>Understanding the system and advocating for your child</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4 pt-6">
              <div className="space-y-4">
                <div className="border rounded-lg p-4">
                  <h3 className="font-medium">Educational Supports</h3>
                  <ul className="list-disc pl-6 space-y-2 mt-2">
                    <li>Learn about educational rights in your region</li>
                    <li>Request school evaluation for services if applicable</li>
                    <li>Consider inclusive education options</li>
                    <li>Develop relationships with teachers and school staff</li>
                    <li>Learn about individualized education plans or accommodations</li>
                    <li>Consider how to support learning at home</li>
                  </ul>
                </div>

                <div className="border rounded-lg p-4">
                  <h3 className="font-medium">Medical and Therapeutic Services</h3>
                  <ul className="list-disc pl-6 space-y-2 mt-2">
                    <li>Find healthcare providers knowledgeable about autism</li>
                    <li>Address any co-occurring conditions</li>
                    <li>Evaluate therapy options and approaches</li>
                    <li>Create a system for coordinating between providers</li>
                    <li>Keep records of evaluations, recommendations, and progress</li>
                    <li>Investigate financial support and insurance coverage</li>
                  </ul>
                </div>

                <div className="border rounded-lg p-4">
                  <h3 className="font-medium">Community Resources</h3>
                  <ul className="list-disc pl-6 space-y-2 mt-2">
                    <li>Connect with local autism organizations</li>
                    <li>Explore autism-friendly activities and programs</li>
                    <li>Find parent support groups in your area</li>
                    <li>Investigate respite care options</li>
                    <li>Learn about community inclusion opportunities</li>
                    <li>Consider recreation and social programs</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="card">
            <CardHeader className="bg-primary/10 rounded-t-[1rem]">
              <CardTitle>Supporting Your Child</CardTitle>
              <CardDescription>Nurturing development while embracing neurodiversity</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4 pt-6">
              <div className="space-y-4">
                <div className="border rounded-lg p-4">
                  <h3 className="font-medium">Communication Support</h3>
                  <ul className="list-disc pl-6 space-y-2 mt-2">
                    <li>Learn about your child's communication style and needs</li>
                    <li>Implement visual supports if helpful</li>
                    <li>Consider alternative communication methods if needed</li>
                    <li>Follow your child's lead in interactions</li>
                    <li>Create opportunities for communication throughout the day</li>
                    <li>Be a responsive communication partner</li>
                  </ul>
                </div>

                <div className="border rounded-lg p-4">
                  <h3 className="font-medium">Sensory Considerations</h3>
                  <ul className="list-disc pl-6 space-y-2 mt-2">
                    <li>Observe and document sensory sensitivities and preferences</li>
                    <li>Create sensory-friendly spaces at home</li>
                    <li>Prepare for sensory challenges in different environments</li>
                    <li>Develop strategies for sensory regulation</li>
                    <li>Consider sensory tools that may help</li>
                    <li>Respect sensory needs rather than forcing tolerance</li>
                  </ul>
                </div>

                <div className="border rounded-lg p-4">
                  <h3 className="font-medium">Building on Strengths</h3>
                  <ul className="list-disc pl-6 space-y-2 mt-2">
                    <li>Identify and celebrate your child's strengths and interests</li>
                    <li>Use interests as motivation for learning</li>
                    <li>Create opportunities for success and mastery</li>
                    <li>Help your child develop a positive identity</li>
                    <li>Connect with others who share your child's interests</li>
                    <li>Balance accepting differences with teaching needed skills</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="card">
            <CardHeader className="bg-primary/10 rounded-t-[1rem]">
              <CardTitle>Resources for Newly Diagnosed Families</CardTitle>
              <CardDescription>Information, support, and community</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4 pt-6">
              <div className="space-y-4">
                <div className="border rounded-lg p-4">
                  <h3 className="font-medium">Books for Parents</h3>
                  <ul className="list-disc pl-6 space-y-2 mt-2">
                    <li>"Uniquely Human" by Barry Prizant</li>
                    <li>
                      "An Early Start for Your Child with Autism" by Sally Rogers, Geraldine Dawson, and Laurie Vismara
                    </li>
                    <li>
                      "Thinking Person's Guide to Autism" edited by Shannon Des Roches Rosa, Jennifer Byde Myers, Liz
                      Ditz, Emily Willingham, and Carol Greenburg
                    </li>
                    <li>"Ten Things Every Child with Autism Wishes You Knew" by Ellen Notbohm</li>
                  </ul>
                </div>

                <div className="border rounded-lg p-4">
                  <h3 className="font-medium">Online Resources</h3>
                  <ul className="list-disc pl-6 space-y-2 mt-2">
                    <li>
                      <Link
                        href="https://www.autismspeaks.org/tool-kit/100-day-kit-young-children"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-primary hover:underline"
                      >
                        Autism Speaks 100 Day Kit
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="https://autismnavigator.com/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-primary hover:underline"
                      >
                        Autism Navigator
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="https://autisticadvocacy.org/resources/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-primary hover:underline"
                      >
                        Autistic Self Advocacy Network
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="https://www.cdc.gov/ncbddd/autism/index.html"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-primary hover:underline"
                      >
                        CDC Autism Information Center
                      </Link>
                    </li>
                  </ul>
                </div>

                <div className="border rounded-lg p-4">
                  <h3 className="font-medium">Local Support</h3>
                  <ul className="list-disc pl-6 space-y-2 mt-2">
                    <li>Parent support groups</li>
                    <li>Family resource centers</li>
                    <li>Early intervention services</li>
                    <li>Autism organizations in your region</li>
                    <li>Parent-to-parent mentoring programs</li>
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
