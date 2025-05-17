import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Header } from "@/components/header"

export default function AdolescentsResources() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 container max-w-4xl mx-auto px-4 py-8">
        <div className="space-y-8">
          <div>
            <h1 className="text-3xl font-bold text-primary">Adolescent Resources (13-17 years)</h1>
            <p className="text-muted-foreground">Resources and support for teenagers with autism.</p>
          </div>

          <Card className="card">
            <CardHeader className="bg-primary/10 rounded-t-[1rem]">
              <CardTitle>Navigating Adolescence with Autism</CardTitle>
              <CardDescription>Understanding the unique challenges of the teenage years</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4 pt-6">
              <p>Adolescence can be a particularly challenging time for individuals with autism due to:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Increased social demands and complex peer relationships</li>
                <li>Heightened expectations for independence and self-management</li>
                <li>Physical and hormonal changes of puberty</li>
                <li>Growing self-awareness and potential concerns about differences</li>
                <li>Academic challenges as schoolwork becomes more abstract and complex</li>
                <li>Planning for the future and transition to adulthood</li>
              </ul>
              <p className="mt-4">
                However, adolescence is also a time of growing strengths, developing identities, and discovering
                passions. With appropriate support, autistic teens can navigate these years successfully and build
                foundations for a fulfilling adult life.
              </p>
            </CardContent>
          </Card>

          <Card className="card">
            <CardHeader className="bg-primary/10 rounded-t-[1rem]">
              <CardTitle>Self-Advocacy and Identity</CardTitle>
              <CardDescription>Empowering teens to understand and advocate for themselves</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4 pt-6">
              <div className="space-y-4">
                <div className="border rounded-lg p-4">
                  <h3 className="font-medium">Understanding Autism</h3>
                  <ul className="list-disc pl-6 space-y-2 mt-2">
                    <li>Provide age-appropriate information about autism</li>
                    <li>Discuss autism as a different, not lesser, way of experiencing the world</li>
                    <li>Connect teens with autistic role models and mentors</li>
                    <li>Explore neurodiversity perspectives and autism advocacy</li>
                    <li>Address questions about diagnosis honestly and positively</li>
                  </ul>
                </div>

                <div className="border rounded-lg p-4">
                  <h3 className="font-medium">Self-Advocacy Skills</h3>
                  <ul className="list-disc pl-6 space-y-2 mt-2">
                    <li>Help teens identify their strengths, challenges, and needs</li>
                    <li>Practice communication scripts for requesting accommodations</li>
                    <li>Teach teens to recognize when they need help or support</li>
                    <li>Support participation in IEP or educational planning meetings</li>
                    <li>Develop problem-solving strategies for common challenges</li>
                  </ul>
                </div>

                <div className="border rounded-lg p-4">
                  <h3 className="font-medium">Building a Positive Identity</h3>
                  <ul className="list-disc pl-6 space-y-2 mt-2">
                    <li>Focus on strengths and special interests</li>
                    <li>Provide opportunities for success and mastery</li>
                    <li>Connect with peers who share interests</li>
                    <li>Explore autistic community and culture</li>
                    <li>Balance accepting autism with developing skills for success</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="card">
            <CardHeader className="bg-primary/10 rounded-t-[1rem]">
              <CardTitle>Social Navigation for Teens</CardTitle>
              <CardDescription>Strategies for managing complex social environments</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4 pt-6">
              <div className="space-y-4">
                <div className="border rounded-lg p-4">
                  <h3 className="font-medium">Peer Relationships</h3>
                  <ul className="list-disc pl-6 space-y-2 mt-2">
                    <li>Identify and connect with compatible peers who share interests</li>
                    <li>Discuss friendship qualities and healthy relationship boundaries</li>
                    <li>Practice strategies for managing peer pressure</li>
                    <li>Role-play handling disagreements and conflicts</li>
                    <li>Explore structured social activities based on interests</li>
                  </ul>
                </div>

                <div className="border rounded-lg p-4">
                  <h3 className="font-medium">Handling Social Complexities</h3>
                  <ul className="list-disc pl-6 space-y-2 mt-2">
                    <li>Teach about hidden social rules for teen environments</li>
                    <li>Discuss humor, sarcasm, and figurative language</li>
                    <li>Practice conversation skills for different social contexts</li>
                    <li>Address online social interaction and safety</li>
                    <li>Develop strategies for managing sensory aspects of social events</li>
                  </ul>
                </div>

                <div className="border rounded-lg p-4">
                  <h3 className="font-medium">Bullying and Social Challenges</h3>
                  <ul className="list-disc pl-6 space-y-2 mt-2">
                    <li>Discuss how to recognize different types of bullying</li>
                    <li>Develop concrete plans for responding to bullying</li>
                    <li>Identify trusted adults who can help in different settings</li>
                    <li>Practice assertive communication techniques</li>
                    <li>Build a supportive network of peers and adults</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="card">
            <CardHeader className="bg-primary/10 rounded-t-[1rem]">
              <CardTitle>Academic and Life Skills</CardTitle>
              <CardDescription>Preparing for increasing independence</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4 pt-6">
              <div className="space-y-4">
                <div className="border rounded-lg p-4">
                  <h3 className="font-medium">Academic Support</h3>
                  <ul className="list-disc pl-6 space-y-2 mt-2">
                    <li>Develop organizational systems for managing increased workload</li>
                    <li>Create study routines that leverage strengths</li>
                    <li>Teach explicit strategies for abstract thinking and inferential tasks</li>
                    <li>Use technology tools to support learning and organization</li>
                    <li>Advocate for appropriate accommodations and supports at school</li>
                  </ul>
                </div>

                <div className="border rounded-lg p-4">
                  <h3 className="font-medium">Life Skills Development</h3>
                  <ul className="list-disc pl-6 space-y-2 mt-2">
                    <li>Teach personal hygiene and self-care for changing bodies</li>
                    <li>Develop money management and budgeting skills</li>
                    <li>Practice transportation skills appropriate to your environment</li>
                    <li>Build cooking and meal preparation abilities</li>
                    <li>Support household responsibilities and chores</li>
                  </ul>
                </div>

                <div className="border rounded-lg p-4">
                  <h3 className="font-medium">Future Planning</h3>
                  <ul className="list-disc pl-6 space-y-2 mt-2">
                    <li>Explore strengths, interests, and possible career paths</li>
                    <li>Investigate educational options after high school</li>
                    <li>Learn about adult support services and how to access them</li>
                    <li>Begin transition planning for post-secondary life</li>
                    <li>Consider opportunities for work experience or volunteering</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="card">
            <CardHeader className="bg-primary/10 rounded-t-[1rem]">
              <CardTitle>Emotional Wellbeing</CardTitle>
              <CardDescription>Supporting mental health during adolescence</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4 pt-6">
              <p>
                Autistic teens are at higher risk for anxiety, depression, and other mental health challenges. Proactive
                support for emotional wellbeing is essential:
              </p>

              <div className="space-y-4">
                <div className="border rounded-lg p-4">
                  <h3 className="font-medium">Emotional Awareness</h3>
                  <ul className="list-disc pl-6 space-y-2 mt-2">
                    <li>Develop vocabulary for different emotional states</li>
                    <li>Create personalized scales to identify emotion intensity</li>
                    <li>Practice recognizing physical signs of different emotions</li>
                    <li>Use visual supports to track and communicate feelings</li>
                    <li>Validate emotions while teaching appropriate expression</li>
                  </ul>
                </div>

                <div className="border rounded-lg p-4">
                  <h3 className="font-medium">Coping Strategies</h3>
                  <ul className="list-disc pl-6 space-y-2 mt-2">
                    <li>Develop a personalized "toolbox" of calming techniques</li>
                    <li>Practice mindfulness and relaxation strategies</li>
                    <li>Create safe spaces and sensory breaks at home and school</li>
                    <li>Establish healthy routines for sleep, nutrition, and exercise</li>
                    <li>Identify warning signs that indicate need for additional support</li>
                  </ul>
                </div>

                <div className="border rounded-lg p-4">
                  <h3 className="font-medium">Professional Support</h3>
                  <ul className="list-disc pl-6 space-y-2 mt-2">
                    <li>Consider therapy with professionals experienced in autism</li>
                    <li>Learn about cognitive-behavioral approaches adapted for autism</li>
                    <li>Discuss medication options when appropriate</li>
                    <li>Connect with support groups for autistic teens</li>
                    <li>Address co-occurring conditions like anxiety or ADHD</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="card">
            <CardHeader className="bg-primary/10 rounded-t-[1rem]">
              <CardTitle>Resources for Adolescents</CardTitle>
              <CardDescription>Materials, programs, and supports</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4 pt-6">
              <div className="space-y-4">
                <div className="border rounded-lg p-4">
                  <h3 className="font-medium">Books for Teens</h3>
                  <ul className="list-disc pl-6 space-y-2 mt-2">
                    <li>"The Autism Spectrum Guide to Sexuality and Relationships" by Emma Goodall</li>
                    <li>"The Asperkid's (Secret) Book of Social Rules" by Jennifer Cook O'Toole</li>
                    <li>"Growing Up on the Spectrum" by Claire LaZebnik and Lynn Kern Koegel</li>
                    <li>"The Teen Guide to Sensory Issues" by Rachel Schneider</li>
                    <li>"What Does Consent Really Mean?" by Pete Wallis and Joseph Wilkins</li>
                  </ul>
                </div>

                <div className="border rounded-lg p-4">
                  <h3 className="font-medium">Online Resources</h3>
                  <ul className="list-disc pl-6 space-y-2 mt-2">
                    <li>
                      <Link
                        href="https://www.autisticteensexistence.com/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-primary hover:underline"
                      >
                        Autistic Teen Existence
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="https://www.aane.org/resources/adolescents/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-primary hover:underline"
                      >
                        AANE Teen Resources
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="https://wrongplanet.net/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-primary hover:underline"
                      >
                        Wrong Planet
                      </Link>{" "}
                      - Online community with teen forums
                    </li>
                  </ul>
                </div>

                <div className="border rounded-lg p-4">
                  <h3 className="font-medium">Programs and Curriculum</h3>
                  <ul className="list-disc pl-6 space-y-2 mt-2">
                    <li>PEERS® for Adolescents - Evidence-based social skills intervention</li>
                    <li>Unstuck and On Target - Executive function curriculum</li>
                    <li>Healthy Relationships Curriculum - Sexuality and relationship education</li>
                    <li>Self-Advocacy and Transition Curriculum</li>
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
