import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Header } from "@/components/header"
import Image from "next/image"

export default function EarlyChildhoodResources() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 container max-w-4xl mx-auto px-4 py-8">
        <div className="space-y-8">
          <div>
            <h1 className="text-3xl font-bold text-primary">Early Childhood Resources (0-5 years)</h1>
            <p className="text-muted-foreground">
              Resources for identifying early signs and supporting young children with autism.
            </p>
          </div>

          <div className="flex justify-center mb-8">
            <Image
              src="/images/early-childhood.jpg"
              alt="Young children playing"
              width={400}
              height={300}
              className="rounded-xl shadow-lg"
            />
          </div>

          <Card className="card">
            <CardHeader className="bg-primary/10 rounded-t-[1rem]">
              <CardTitle>Early Signs of Autism</CardTitle>
              <CardDescription>What to look for in young children</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4 pt-6">
              <p>
                Autism signs can appear as early as 12-18 months, though some children may not show clear signs until
                later. Early indicators may include:
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="border rounded-lg p-4">
                  <h3 className="font-medium">Social Communication</h3>
                  <ul className="list-disc pl-6 space-y-2 mt-2">
                    <li>Limited or no eye contact</li>
                    <li>Not responding to their name by 12 months</li>
                    <li>Limited or no pointing or gesturing</li>
                    <li>Not showing interest in sharing experiences</li>
                    <li>Limited or delayed babbling or speech</li>
                    <li>Loss of previously acquired speech</li>
                  </ul>
                </div>
                <div className="border rounded-lg p-4">
                  <h3 className="font-medium">Repetitive Behaviors & Interests</h3>
                  <ul className="list-disc pl-6 space-y-2 mt-2">
                    <li>Repetitive movements like hand flapping or spinning</li>
                    <li>Unusual body postures or movements</li>
                    <li>Strong attachment to unusual objects</li>
                    <li>Lining up toys or objects</li>
                    <li>Specific, intense interests</li>
                    <li>Difficulty with changes in routine</li>
                  </ul>
                </div>
              </div>
              <p className="mt-4">
                Many children will display some of these behaviors without having autism. If you notice several of these
                signs persisting over time, consider consulting with a healthcare provider.
              </p>
            </CardContent>
          </Card>

          <Card className="card">
            <CardHeader className="bg-primary/10 rounded-t-[1rem]">
              <CardTitle>Early Intervention Strategies</CardTitle>
              <CardDescription>Supporting your child's development</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4 pt-6">
              <p>
                Research consistently shows that early intervention leads to better outcomes. Here are strategies you
                can implement at home:
              </p>
              <div className="space-y-4">
                <div className="border rounded-lg p-4">
                  <h3 className="font-medium">Communication Development</h3>
                  <ul className="list-disc pl-6 space-y-2 mt-2">
                    <li>Use clear, simple language</li>
                    <li>Narrate daily activities</li>
                    <li>Follow your child's lead and interests</li>
                    <li>Use visual supports (pictures, objects)</li>
                    <li>Model gestures and encourage imitation</li>
                    <li>Create opportunities for communication</li>
                  </ul>
                </div>
                <div className="border rounded-lg p-4">
                  <h3 className="font-medium">Social Interaction</h3>
                  <ul className="list-disc pl-6 space-y-2 mt-2">
                    <li>Position yourself at your child's eye level</li>
                    <li>Join your child in their play</li>
                    <li>Create predictable social games and routines</li>
                    <li>Exaggerate facial expressions and emotions</li>
                    <li>Use social stories to explain situations</li>
                    <li>Arrange playdates with understanding peers</li>
                  </ul>
                </div>
                <div className="border rounded-lg p-4">
                  <h3 className="font-medium">Sensory Support</h3>
                  <ul className="list-disc pl-6 space-y-2 mt-2">
                    <li>Identify sensory sensitivities and preferences</li>
                    <li>Create a sensory-friendly environment</li>
                    <li>Introduce new sensory experiences gradually</li>
                    <li>Provide sensory breaks throughout the day</li>
                    <li>Use deep pressure (squeezes, weighted blankets) if calming</li>
                    <li>Consider noise-canceling headphones for sensitive environments</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="card">
            <CardHeader className="bg-primary/10 rounded-t-[1rem]">
              <CardTitle>Early Intervention Programs</CardTitle>
              <CardDescription>Structured support options</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4 pt-6">
              <p>Several evidence-based intervention approaches can benefit young children with autism:</p>
              <div className="space-y-4">
                <div className="border rounded-lg p-4">
                  <h3 className="font-medium">ABA (Applied Behavior Analysis)</h3>
                  <p className="text-sm text-muted-foreground mt-2">
                    Uses reinforcement strategies to teach skills and reduce challenging behaviors. Modern approaches
                    focus on natural environments and child-led interactions.
                  </p>
                </div>
                <div className="border rounded-lg p-4">
                  <h3 className="font-medium">ESDM (Early Start Denver Model)</h3>
                  <p className="text-sm text-muted-foreground mt-2">
                    A play-based intervention that combines developmental and behavioral approaches for very young
                    children (12-48 months).
                  </p>
                </div>
                <div className="border rounded-lg p-4">
                  <h3 className="font-medium">PECS (Picture Exchange Communication System)</h3>
                  <p className="text-sm text-muted-foreground mt-2">
                    Teaches communication using pictures, particularly helpful for non-verbal children.
                  </p>
                </div>
                <div className="border rounded-lg p-4">
                  <h3 className="font-medium">TEACCH</h3>
                  <p className="text-sm text-muted-foreground mt-2">
                    Structured teaching that uses visual supports and organizes the environment to support learning and
                    independence.
                  </p>
                </div>
                <div className="border rounded-lg p-4">
                  <h3 className="font-medium">Speech and Occupational Therapy</h3>
                  <p className="text-sm text-muted-foreground mt-2">
                    Specialized therapy targeting communication skills, sensory integration, and daily living skills.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="card">
            <CardHeader className="bg-primary/10 rounded-t-[1rem]">
              <CardTitle>Resources for Parents</CardTitle>
              <CardDescription>Support for the whole family</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4 pt-6">
              <div className="space-y-4">
                <div className="border rounded-lg p-4">
                  <h3 className="font-medium">Books</h3>
                  <ul className="list-disc pl-6 space-y-2 mt-2">
                    <li>
                      "An Early Start for Your Child with Autism" by Sally Rogers, Geraldine Dawson, and Laurie Vismara
                    </li>
                    <li>"More Than Words" by Fern Sussman</li>
                    <li>"The Out-of-Sync Child" by Carol Kranowitz</li>
                    <li>"Engaging Autism" by Stanley Greenspan and Serena Wieder</li>
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
                        href="https://www.cdc.gov/ncbddd/actearly/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-primary hover:underline"
                      >
                        CDC's "Learn the Signs. Act Early" Program
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
                        href="https://www.zerotothree.org/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-primary hover:underline"
                      >
                        Zero to Three
                      </Link>
                    </li>
                  </ul>
                </div>
                <div className="border rounded-lg p-4">
                  <h3 className="font-medium">Local Support in Ghana</h3>
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
                      - Provides services for children with autism in Accra
                    </li>
                    <li>
                      <Link
                        href="https://hopechildrenscentre.com/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-primary hover:underline"
                      >
                        Hope Children's Centre
                      </Link>{" "}
                      - Early intervention services in Accra
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
                      - Supports children with learning difficulties
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
