import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Header } from "@/components/header"
import Image from "next/image"

export default function SocialSkillsResources() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 container max-w-4xl mx-auto px-4 py-8">
        <div className="space-y-8">
          <div>
            <h1 className="text-3xl font-bold text-primary">Social Skills Resources</h1>
            <p className="text-muted-foreground">
              Strategies and tools for developing social understanding and skills.
            </p>
          </div>

          <div className="flex justify-center mb-8">
            <Image
              src="/social-skills.png"
              alt="Children interacting socially"
              width={400}
              height={300}
              className="rounded-xl shadow-lg"
            />
          </div>

          <Card className="card">
            <CardHeader className="bg-primary/10 rounded-t-[1rem]">
              <CardTitle>Understanding Social Challenges in Autism</CardTitle>
              <CardDescription>The nature of social differences</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4 pt-6">
              <p>Social challenges are a core feature of autism and can manifest in various ways:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  <strong>Social-emotional reciprocity</strong> - Difficulties with back-and-forth conversation, sharing
                  interests, and understanding others' emotions
                </li>
                <li>
                  <strong>Nonverbal communication</strong> - Challenges with eye contact, body language, facial
                  expressions, and gestures
                </li>
                <li>
                  <strong>Developing and maintaining relationships</strong> - Difficulties adjusting behavior to
                  different social contexts and making friends
                </li>
                <li>
                  <strong>Perspective-taking</strong> - Challenges understanding others' thoughts, feelings, and
                  viewpoints
                </li>
                <li>
                  <strong>Unwritten social rules</strong> - Difficulty understanding implicit social expectations and
                  norms
                </li>
              </ul>
              <p className="mt-4">
                It's important to recognize that many autistic individuals deeply desire social connection but may need
                explicit instruction and support to navigate social situations successfully. Social challenges reflect
                differences in how autistic individuals process social information, not a lack of interest in others.
              </p>
            </CardContent>
          </Card>

          <Card className="card">
            <CardHeader className="bg-primary/10 rounded-t-[1rem]">
              <CardTitle>Structured Social Skills Teaching</CardTitle>
              <CardDescription>Approaches for direct instruction</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4 pt-6">
              <p>Social skills can be explicitly taught using various structured approaches:</p>

              <div className="space-y-4">
                <div className="border rounded-lg p-4">
                  <h3 className="font-medium">Social Narratives</h3>
                  <p className="text-sm text-muted-foreground mt-2">
                    Social stories and comic strip conversations help explain social situations, expectations, and
                    appropriate responses.
                  </p>
                  <ul className="list-disc pl-6 space-y-2 mt-2">
                    <li>Use clear, concrete language</li>
                    <li>Include visual supports when possible</li>
                    <li>Address specific social situations and challenges</li>
                    <li>Balance descriptive, perspective, and directive sentences</li>
                    <li>Review narratives before encountering situations</li>
                  </ul>
                </div>

                <div className="border rounded-lg p-4">
                  <h3 className="font-medium">Video Modeling</h3>
                  <p className="text-sm text-muted-foreground mt-2">
                    Using videos to demonstrate appropriate social behaviors and interactions.
                  </p>
                  <ul className="list-disc pl-6 space-y-2 mt-2">
                    <li>Show positive examples of targeted skills</li>
                    <li>Use peers, adults, or self as models</li>
                    <li>Break complex social skills into smaller steps</li>
                    <li>Watch repeatedly to reinforce learning</li>
                    <li>Follow viewing with guided practice</li>
                  </ul>
                </div>

                <div className="border rounded-lg p-4">
                  <h3 className="font-medium">Role Play and Practice</h3>
                  <p className="text-sm text-muted-foreground mt-2">
                    Creating opportunities to practice social skills in a safe, structured environment.
                  </p>
                  <ul className="list-disc pl-6 space-y-2 mt-2">
                    <li>Start with highly structured scenarios</li>
                    <li>Use visual cues and scripts initially</li>
                    <li>Provide specific, positive feedback</li>
                    <li>Gradually introduce variations and flexibility</li>
                    <li>Practice in different settings with different people</li>
                  </ul>
                </div>

                <div className="border rounded-lg p-4">
                  <h3 className="font-medium">Social Skills Groups</h3>
                  <p className="text-sm text-muted-foreground mt-2">
                    Structured groups that teach and practice social skills with peers.
                  </p>
                  <ul className="list-disc pl-6 space-y-2 mt-2">
                    <li>Look for groups led by trained professionals</li>
                    <li>Consider groups with neurotypical peer models</li>
                    <li>Focus on age-appropriate and functional skills</li>
                    <li>Ensure generalization to natural settings</li>
                    <li>Reinforce skills between sessions</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="card">
            <CardHeader className="bg-primary/10 rounded-t-[1rem]">
              <CardTitle>Building Specific Social Skills</CardTitle>
              <CardDescription>Strategies for key social competencies</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4 pt-6">
              <div className="space-y-4">
                <div className="border rounded-lg p-4">
                  <h3 className="font-medium">Conversation Skills</h3>
                  <ul className="list-disc pl-6 space-y-2 mt-2">
                    <li>Teach conversation starters and greetings explicitly</li>
                    <li>Practice turn-taking with visual supports</li>
                    <li>Develop a list of appropriate topics for different situations</li>
                    <li>Teach how to recognize when someone is losing interest</li>
                    <li>Create scripts for difficult conversational situations</li>
                    <li>Practice asking questions and making comments about others</li>
                  </ul>
                </div>

                <div className="border rounded-lg p-4">
                  <h3 className="font-medium">Friendship Skills</h3>
                  <ul className="list-disc pl-6 space-y-2 mt-2">
                    <li>Teach how to identify common interests</li>
                    <li>Practice joining ongoing activities appropriately</li>
                    <li>Discuss qualities of a good friend</li>
                    <li>Role-play resolution for common social conflicts</li>
                    <li>Create structured activities with peers who share interests</li>
                    <li>Teach concepts of cooperation and compromise</li>
                  </ul>
                </div>

                <div className="border rounded-lg p-4">
                  <h3 className="font-medium">Understanding Emotions</h3>
                  <ul className="list-disc pl-6 space-y-2 mt-2">
                    <li>Use emotion cards with clear examples</li>
                    <li>Practice identifying emotions in faces, voices, and body language</li>
                    <li>Create personal emotion scales to identify intensity</li>
                    <li>Connect physical sensations to emotional states</li>
                    <li>Use video clips to identify emotions in natural contexts</li>
                    <li>Practice appropriate emotional responses to different situations</li>
                  </ul>
                </div>

                <div className="border rounded-lg p-4">
                  <h3 className="font-medium">Perspective Taking</h3>
                  <ul className="list-disc pl-6 space-y-2 mt-2">
                    <li>Use thought bubbles in cartoons to show hidden thoughts</li>
                    <li>Discuss different viewpoints during stories and movies</li>
                    <li>Play games that require understanding others' knowledge</li>
                    <li>Practice "reading the room" in different social settings</li>
                    <li>Use "social detective" activities to notice social clues</li>
                    <li>Discuss how actions affect others' feelings</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="card">
            <CardHeader className="bg-primary/10 rounded-t-[1rem]">
              <CardTitle>Creating Social Opportunities</CardTitle>
              <CardDescription>Environments for successful social interaction</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4 pt-6">
              <p>
                In addition to teaching specific skills, it's important to create opportunities for positive social
                interaction:
              </p>

              <div className="space-y-4">
                <div className="border rounded-lg p-4">
                  <h3 className="font-medium">Interest-Based Activities</h3>
                  <ul className="list-disc pl-6 space-y-2 mt-2">
                    <li>Join clubs or groups based on special interests</li>
                    <li>Structured activities with clear rules (chess club, coding class)</li>
                    <li>Volunteer opportunities related to interests</li>
                    <li>Online communities with moderation and safety features</li>
                    <li>Interest-based camps or workshops</li>
                  </ul>
                </div>

                <div className="border rounded-lg p-4">
                  <h3 className="font-medium">Supportive Social Environments</h3>
                  <ul className="list-disc pl-6 space-y-2 mt-2">
                    <li>Small group settings with low sensory stimulation</li>
                    <li>Cooperative rather than competitive activities</li>
                    <li>Environments with clear expectations and structure</li>
                    <li>Activities with built-in conversation topics</li>
                    <li>Groups with trained facilitators</li>
                    <li>Access to breaks when needed</li>
                  </ul>
                </div>

                <div className="border rounded-lg p-4">
                  <h3 className="font-medium">Peer Support Strategies</h3>
                  <ul className="list-disc pl-6 space-y-2 mt-2">
                    <li>Peer buddy systems at school</li>
                    <li>Circle of friends approaches</li>
                    <li>Educating peers about neurodiversity</li>
                    <li>Structured lunch groups or recess activities</li>
                    <li>Peer-mediated interventions with trained neurotypical peers</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="card">
            <CardHeader className="bg-primary/10 rounded-t-[1rem]">
              <CardTitle>Resources and Programs</CardTitle>
              <CardDescription>Tools for developing social skills</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4 pt-6">
              <div className="space-y-4">
                <div className="border rounded-lg p-4">
                  <h3 className="font-medium">Books and Curricula</h3>
                  <ul className="list-disc pl-6 space-y-2 mt-2">
                    <li>
                      "Social Skills Training for Children with Asperger Syndrome and High-Functioning Autism" by Susan
                      Williams White
                    </li>
                    <li>"The Social Skills Picture Book" by Jed Baker</li>
                    <li>"Socially Curious and Curiously Social" by Michelle Garcia Winner</li>
                    <li>"PEERS® Treatment Manual" for adolescents and young adults</li>
                  </ul>
                </div>

                <div className="border rounded-lg p-4">
                  <h3 className="font-medium">Online Resources</h3>
                  <ul className="list-disc pl-6 space-y-2 mt-2">
                    <li>
                      <Link
                        href="https://www.socialthinking.com/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-primary hover:underline"
                      >
                        Social Thinking
                      </Link>{" "}
                      - Resources for teaching social concepts
                    </li>
                    <li>
                      <Link
                        href="https://www.autismspeaks.org/social-skills-and-autism"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-primary hover:underline"
                      >
                        Autism Speaks Social Skills Resources
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="https://autismnetwork.org/social-skills/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-primary hover:underline"
                      >
                        Autism Research Network
                      </Link>{" "}
                      - Social skills information and strategies
                    </li>
                  </ul>
                </div>

                <div className="border rounded-lg p-4">
                  <h3 className="font-medium">Apps and Technology</h3>
                  <ul className="list-disc pl-6 space-y-2 mt-2">
                    <li>Social Skills Builder apps</li>
                    <li>Model Me Kids videos</li>
                    <li>Social Express interactive program</li>
                    <li>FriendMaker app for teens and adults</li>
                  </ul>
                </div>

                <div className="border rounded-lg p-4">
                  <h3 className="font-medium">Support in Ghana</h3>
                  <p className="text-sm text-muted-foreground mt-2">
                    While specific social skills programs may be limited in Ghana, these organizations may offer social
                    support:
                  </p>
                  <ul className="list-disc pl-6 space-y-2 mt-2">
                    <li>
                      <Link
                        href="https://aactgh.org"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-primary hover:underline"
                      >
                        Autism Awareness Care and Training Centre (AACT)
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="https://autismghana.org"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-primary hover:underline"
                      >
                        Autism Society of Ghana
                      </Link>
                    </li>
                    <li>International schools with inclusive programs</li>
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
