import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Header } from "@/components/header"
import Image from "next/image"

export default function CommunicationResources() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 container max-w-4xl mx-auto px-4 py-8">
        <div className="space-y-8">
          <div>
            <h1 className="text-3xl font-bold text-primary">Communication Resources</h1>
            <p className="text-muted-foreground">
              Tools and strategies for improving communication skills for individuals with autism.
            </p>
          </div>

          <div className="flex justify-center mb-8">
            <Image
              src="/images/communication.jpg"
              alt="People communicating"
              width={400}
              height={300}
              className="rounded-xl shadow-lg"
            />
          </div>

          <Card className="card">
            <CardHeader className="bg-primary/10 rounded-t-[1rem]">
              <CardTitle>Understanding Communication Challenges</CardTitle>
              <CardDescription>How autism can affect communication</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4 pt-6">
              <p>
                Communication challenges are a core feature of autism and can vary widely between individuals. These
                challenges may include:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  <strong>Delayed language development</strong> - Some individuals may have delayed speech or remain
                  nonverbal
                </li>
                <li>
                  <strong>Literal language understanding</strong> - Difficulty understanding sarcasm, jokes, or
                  figurative language
                </li>
                <li>
                  <strong>Pragmatic language challenges</strong> - Difficulties with conversational turn-taking, topic
                  maintenance, and social cues
                </li>
                <li>
                  <strong>Echolalia</strong> - Repeating words or phrases heard previously, either immediately or
                  delayed
                </li>
                <li>
                  <strong>Prosody differences</strong> - Unusual rhythm, stress, or intonation in speech
                </li>
                <li>
                  <strong>Pronoun reversal</strong> - Mixing up pronouns like "I" and "you"
                </li>
                <li>
                  <strong>Limited gestures</strong> - Reduced use of pointing, nodding, or other nonverbal communication
                </li>
              </ul>
              <p className="mt-4">
                Communication is more than words—it includes body language, facial expressions, tone of voice, and
                social understanding. Support should address all these aspects.
              </p>
            </CardContent>
          </Card>

          <Card className="card">
            <CardHeader className="bg-primary/10 rounded-t-[1rem]">
              <CardTitle>Communication Strategies for Verbal Individuals</CardTitle>
              <CardDescription>Supporting spoken language development and use</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4 pt-6">
              <div className="space-y-4">
                <div className="border rounded-lg p-4">
                  <h3 className="font-medium">Building Vocabulary</h3>
                  <ul className="list-disc pl-6 space-y-2 mt-2">
                    <li>Use concrete, specific language</li>
                    <li>Pair words with visuals whenever possible</li>
                    <li>Teach words in meaningful contexts</li>
                    <li>Focus on functional vocabulary first</li>
                    <li>Use special interests to motivate language learning</li>
                  </ul>
                </div>

                <div className="border rounded-lg p-4">
                  <h3 className="font-medium">Conversation Skills</h3>
                  <ul className="list-disc pl-6 space-y-2 mt-2">
                    <li>Practice turn-taking with visual supports</li>
                    <li>Teach topic maintenance explicitly</li>
                    <li>Role-play different conversational scenarios</li>
                    <li>Use video modeling to demonstrate skills</li>
                    <li>Provide clear feedback on conversation skills</li>
                    <li>Create structured opportunities for practice</li>
                  </ul>
                </div>

                <div className="border rounded-lg p-4">
                  <h3 className="font-medium">Social Communication</h3>
                  <ul className="list-disc pl-6 space-y-2 mt-2">
                    <li>Explicitly teach nonverbal cues</li>
                    <li>Practice reading and expressing emotions</li>
                    <li>Teach perspective-taking with concrete examples</li>
                    <li>Use social stories to explain communication expectations</li>
                    <li>Practice appropriate ways to enter conversations</li>
                    <li>Teach flexible thinking for communication breakdowns</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="card">
            <CardHeader className="bg-primary/10 rounded-t-[1rem]">
              <CardTitle>Alternative and Augmentative Communication (AAC)</CardTitle>
              <CardDescription>Supporting communication for minimally verbal individuals</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4 pt-6">
              <p>
                AAC includes methods and tools that supplement or replace speech. These supports can benefit individuals
                at all language levels:
              </p>

              <div className="space-y-4">
                <div className="border rounded-lg p-4">
                  <h3 className="font-medium">Types of AAC</h3>
                  <ul className="list-disc pl-6 space-y-2 mt-2">
                    <li>
                      <strong>No-tech AAC</strong>: Gestures, sign language, facial expressions
                    </li>
                    <li>
                      <strong>Low-tech AAC</strong>: Picture boards, communication books, PECS (Picture Exchange
                      Communication System)
                    </li>
                    <li>
                      <strong>High-tech AAC</strong>: Speech-generating devices, tablet apps, dedicated communication
                      devices
                    </li>
                  </ul>
                </div>

                <div className="border rounded-lg p-4">
                  <h3 className="font-medium">Popular AAC Systems</h3>
                  <ul className="list-disc pl-6 space-y-2 mt-2">
                    <li>
                      <strong>PECS</strong>: A systematic approach where individuals exchange picture cards for desired
                      items
                    </li>
                    <li>
                      <strong>Proloquo2Go</strong>: A comprehensive AAC app for iPad/iPhone
                    </li>
                    <li>
                      <strong>LAMP (Language Acquisition through Motor Planning)</strong>: Focuses on consistent motor
                      patterns for communication
                    </li>
                    <li>
                      <strong>Communication boards</strong>: Simple grids of pictures representing common words and
                      phrases
                    </li>
                  </ul>
                </div>

                <div className="border rounded-lg p-4">
                  <h3 className="font-medium">Implementing AAC</h3>
                  <ul className="list-disc pl-6 space-y-2 mt-2">
                    <li>Consult with a speech-language pathologist for assessment</li>
                    <li>Start with highly motivating vocabulary (favorite foods, activities)</li>
                    <li>Model AAC use consistently throughout the day</li>
                    <li>Involve all communication partners in training</li>
                    <li>Presume competence and provide rich language input</li>
                    <li>Remember that AAC supports, not replaces, speech development</li>
                  </ul>
                </div>
              </div>

              <p className="mt-4">
                Important: Using AAC does <strong>not</strong> prevent speech development. Research shows that AAC often
                supports the development of verbal speech.
              </p>
            </CardContent>
          </Card>

          <Card className="card">
            <CardHeader className="bg-primary/10 rounded-t-[1rem]">
              <CardTitle>Visual Supports for Communication</CardTitle>
              <CardDescription>Using visuals to enhance understanding</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4 pt-6">
              <p>Visual supports can help individuals with autism process and remember information more effectively:</p>

              <div className="space-y-4">
                <div className="border rounded-lg p-4">
                  <h3 className="font-medium">Types of Visual Supports</h3>
                  <ul className="list-disc pl-6 space-y-2 mt-2">
                    <li>
                      <strong>Visual schedules</strong>: Show sequence of activities or steps in a task
                    </li>
                    <li>
                      <strong>First/Then boards</strong>: Show current and next activity
                    </li>
                    <li>
                      <strong>Choice boards</strong>: Display available options
                    </li>
                    <li>
                      <strong>Visual timers</strong>: Show passage of time
                    </li>
                    <li>
                      <strong>Social stories</strong>: Explain social situations with text and images
                    </li>
                    <li>
                      <strong>Video modeling</strong>: Show skills through video demonstrations
                    </li>
                  </ul>
                </div>

                <div className="border rounded-lg p-4">
                  <h3 className="font-medium">Creating Visual Supports</h3>
                  <ul className="list-disc pl-6 space-y-2 mt-2">
                    <li>Use clear, concrete images</li>
                    <li>Consider developmental level when selecting visuals</li>
                    <li>Start with photographs for concrete thinkers</li>
                    <li>Move to line drawings or symbols as understanding develops</li>
                    <li>Add text labels when appropriate</li>
                    <li>Laminate materials for durability</li>
                  </ul>
                </div>

                <div className="border rounded-lg p-4">
                  <h3 className="font-medium">Resources for Visual Supports</h3>
                  <ul className="list-disc pl-6 space-y-2 mt-2">
                    <li>
                      <Link
                        href="https://do2learn.com/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-primary hover:underline"
                      >
                        Do2Learn
                      </Link>{" "}
                      - Free printable picture cards and educational resources
                    </li>
                    <li>
                      <Link
                        href="https://connectability.ca/visuals-engine/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-primary hover:underline"
                      >
                        ConnectAbility Visual Engine
                      </Link>{" "}
                      - Create custom visual supports
                    </li>
                    <li>
                      <Link
                        href="https://www.boardmakeronline.com/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-primary hover:underline"
                      >
                        Boardmaker
                      </Link>{" "}
                      - Professional tool for creating visual supports
                    </li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="card">
            <CardHeader className="bg-primary/10 rounded-t-[1rem]">
              <CardTitle>Professional Support</CardTitle>
              <CardDescription>Speech and language therapy for autism</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4 pt-6">
              <p>
                Speech-Language Pathologists (SLPs) who specialize in autism can provide valuable assessment and
                intervention:
              </p>

              <div className="space-y-4">
                <div className="border rounded-lg p-4">
                  <h3 className="font-medium">What SLPs Can Provide</h3>
                  <ul className="list-disc pl-6 space-y-2 mt-2">
                    <li>Comprehensive communication assessment</li>
                    <li>Individualized therapy plans</li>
                    <li>AAC evaluation and training</li>
                    <li>Social communication intervention</li>
                    <li>Parent/caregiver training</li>
                    <li>Collaboration with teachers and other professionals</li>
                  </ul>
                </div>

                <div className="border rounded-lg p-4">
                  <h3 className="font-medium">Finding an SLP in Ghana</h3>
                  <p className="text-sm text-muted-foreground mt-2">
                    Speech-language therapy services are limited in Ghana, but some options include:
                  </p>
                  <ul className="list-disc pl-6 space-y-2 mt-2">
                    <li>Teaching hospitals (speech therapy departments)</li>
                    <li>Private therapy centers in major cities</li>
                    <li>International organizations offering outreach services</li>
                    <li>Telehealth options connecting to international providers</li>
                  </ul>
                  <p className="text-sm text-muted-foreground mt-2">
                    Visit our{" "}
                    <Link href="/resources/find-professional" className="text-primary hover:underline">
                      Find a Professional
                    </Link>{" "}
                    page for specific recommendations.
                  </p>
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
