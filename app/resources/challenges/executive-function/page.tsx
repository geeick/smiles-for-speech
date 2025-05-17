import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Header } from "@/components/header"
import Image from "next/image"

export default function ExecutiveFunctionResources() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 container max-w-4xl mx-auto px-4 py-8">
        <div className="space-y-8">
          <div>
            <h1 className="text-3xl font-bold text-primary">Executive Function Resources</h1>
            <p className="text-muted-foreground">
              Support for organization, planning, and task management for individuals with autism.
            </p>
          </div>

          <div className="flex justify-center mb-8">
            <Image
              src="/images/executive-function.jpg"
              alt="Person organizing and planning"
              width={400}
              height={300}
              className="rounded-xl shadow-lg"
            />
          </div>

          <Card className="card">
            <CardHeader className="bg-primary/10 rounded-t-[1rem]">
              <CardTitle>Understanding Executive Function</CardTitle>
              <CardDescription>What are executive function skills?</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4 pt-6">
              <p>
                Executive function refers to a set of cognitive processes that help us manage ourselves and our
                resources to achieve goals. Many individuals with autism experience challenges with executive function
                skills, which can impact various aspects of daily life.
              </p>
              <p>Executive function encompasses several key skills:</p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="border rounded-lg p-4">
                  <h3 className="font-medium">Planning and Organization</h3>
                  <ul className="list-disc pl-6 space-y-2 mt-2">
                    <li>Creating and following a plan</li>
                    <li>Breaking tasks into manageable steps</li>
                    <li>Organizing physical spaces and materials</li>
                    <li>Managing time effectively</li>
                    <li>Prioritizing tasks</li>
                  </ul>
                </div>

                <div className="border rounded-lg p-4">
                  <h3 className="font-medium">Working Memory</h3>
                  <ul className="list-disc pl-6 space-y-2 mt-2">
                    <li>Holding information in mind while using it</li>
                    <li>Following multi-step directions</li>
                    <li>Remembering tasks that need completion</li>
                    <li>Recalling relevant information for current tasks</li>
                  </ul>
                </div>

                <div className="border rounded-lg p-4">
                  <h3 className="font-medium">Cognitive Flexibility</h3>
                  <ul className="list-disc pl-6 space-y-2 mt-2">
                    <li>Switching between tasks or activities</li>
                    <li>Adjusting to changes in routines or plans</li>
                    <li>Considering alternative solutions</li>
                    <li>Accepting different perspectives</li>
                    <li>Handling transitions between activities</li>
                  </ul>
                </div>

                <div className="border rounded-lg p-4">
                  <h3 className="font-medium">Self-Regulation</h3>
                  <ul className="list-disc pl-6 space-y-2 mt-2">
                    <li>Managing emotions</li>
                    <li>Inhibiting inappropriate responses</li>
                    <li>Self-monitoring performance</li>
                    <li>Initiating actions and tasks</li>
                    <li>Sustaining attention and effort</li>
                  </ul>
                </div>
              </div>
              <p className="mt-4">
                Executive function challenges can be mistaken for laziness or lack of motivation, but they're actually
                neurological differences in how the brain processes and organizes information. With the right supports,
                individuals with executive function challenges can develop effective strategies to manage these
                difficulties.
              </p>
            </CardContent>
          </Card>

          <Card className="card">
            <CardHeader className="bg-primary/10 rounded-t-[1rem]">
              <CardTitle>Organization and Planning Strategies</CardTitle>
              <CardDescription>Tools for improving organization skills</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4 pt-6">
              <div className="space-y-4">
                <div className="border rounded-lg p-4">
                  <h3 className="font-medium">Visual Schedules and Calendars</h3>
                  <ul className="list-disc pl-6 space-y-2 mt-2">
                    <li>Create visual daily schedules with pictures or text</li>
                    <li>Use color-coding for different types of activities</li>
                    <li>Include start and end times for activities</li>
                    <li>Make schedules portable (phone app or small cards)</li>
                    <li>Build in visual reminders for transitions</li>
                    <li>Review the schedule at the beginning of each day</li>
                  </ul>
                </div>

                <div className="border rounded-lg p-4">
                  <h3 className="font-medium">Task Breakdown Systems</h3>
                  <ul className="list-disc pl-6 space-y-2 mt-2">
                    <li>Break large tasks into small, manageable steps</li>
                    <li>Create visual checklists for multi-step tasks</li>
                    <li>Use task analysis to identify all necessary steps</li>
                    <li>Include time estimates for each step</li>
                    <li>Build in rewards for completing steps</li>
                    <li>Create templates for recurring tasks</li>
                  </ul>
                </div>

                <div className="border rounded-lg p-4">
                  <h3 className="font-medium">Physical Organization</h3>
                  <ul className="list-disc pl-6 space-y-2 mt-2">
                    <li>Label storage containers, shelves, and drawers</li>
                    <li>Create designated places for frequently used items</li>
                    <li>Use visual boundaries to define spaces</li>
                    <li>Color-code materials for different activities or subjects</li>
                    <li>Create organized workstations for specific tasks</li>
                    <li>Minimize visual clutter in the environment</li>
                  </ul>
                </div>

                <div className="border rounded-lg p-4">
                  <h3 className="font-medium">Time Management Tools</h3>
                  <ul className="list-disc pl-6 space-y-2 mt-2">
                    <li>Use visual timers to show passage of time</li>
                    <li>Create time blocks for different activities</li>
                    <li>Set alarms for transitions between activities</li>
                    <li>Teach time estimation with practice activities</li>
                    <li>Use analog clocks to visualize time</li>
                    <li>Build buffer time between activities</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="card">
            <CardHeader className="bg-primary/10 rounded-t-[1rem]">
              <CardTitle>Working Memory Support</CardTitle>
              <CardDescription>Strategies for strengthening working memory</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4 pt-6">
              <div className="space-y-4">
                <div className="border rounded-lg p-4">
                  <h3 className="font-medium">Visual Supports</h3>
                  <ul className="list-disc pl-6 space-y-2 mt-2">
                    <li>Write down multi-step instructions</li>
                    <li>Use visual checklists for routines</li>
                    <li>Create reference cards for frequently needed information</li>
                    <li>Post reminder notes in relevant locations</li>
                    <li>Use picture sequences for tasks</li>
                    <li>Create visual mnemonic devices</li>
                  </ul>
                </div>

                <div className="border rounded-lg p-4">
                  <h3 className="font-medium">Memory Strategies</h3>
                  <ul className="list-disc pl-6 space-y-2 mt-2">
                    <li>Teach chunking (grouping information)</li>
                    <li>Create acronyms for lists</li>
                    <li>Use rhythm, music, or movement to aid memory</li>
                    <li>Practice visualization techniques</li>
                    <li>Make information meaningful and connect to interests</li>
                    <li>Repeat information in different ways</li>
                  </ul>
                </div>

                <div className="border rounded-lg p-4">
                  <h3 className="font-medium">Technology Supports</h3>
                  <ul className="list-disc pl-6 space-y-2 mt-2">
                    <li>Set reminders on phones or watches</li>
                    <li>Use apps designed for task management</li>
                    <li>Record voice memos for instructions</li>
                    <li>Take photos of important information</li>
                    <li>Use digital checklists and note-taking apps</li>
                  </ul>
                </div>

                <div className="border rounded-lg p-4">
                  <h3 className="font-medium">Environmental Supports</h3>
                  <ul className="list-disc pl-6 space-y-2 mt-2">
                    <li>Minimize distractions during learning</li>
                    <li>Create consistent routines to reduce memory load</li>
                    <li>Use environmental cues as reminders</li>
                    <li>Position visual supports where they're most needed</li>
                    <li>Incorporate sensory supports that aid focus</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="card">
            <CardHeader className="bg-primary/10 rounded-t-[1rem]">
              <CardTitle>Flexibility and Self-Regulation</CardTitle>
              <CardDescription>Developing cognitive flexibility and emotional regulation</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4 pt-6">
              <div className="space-y-4">
                <div className="border rounded-lg p-4">
                  <h3 className="font-medium">Supporting Flexibility</h3>
                  <ul className="list-disc pl-6 space-y-2 mt-2">
                    <li>Use visual schedules that incorporate planned changes</li>
                    <li>Provide advance notice of changes when possible</li>
                    <li>Use social stories to prepare for novel situations</li>
                    <li>Practice "change scenarios" in safe settings</li>
                    <li>Teach problem-solving frameworks for unexpected events</li>
                    <li>Build in rewards for demonstrating flexibility</li>
                  </ul>
                </div>

                <div className="border rounded-lg p-4">
                  <h3 className="font-medium">Emotional Regulation Tools</h3>
                  <ul className="list-disc pl-6 space-y-2 mt-2">
                    <li>Create personalized calming strategies</li>
                    <li>Develop emotional vocabulary</li>
                    <li>Use emotion thermometers or scales</li>
                    <li>Create visual cue cards for regulation strategies</li>
                    <li>Practice mindfulness techniques</li>
                    <li>Establish a quiet space for regulation</li>
                  </ul>
                </div>

                <div className="border rounded-lg p-4">
                  <h3 className="font-medium">Transitions Support</h3>
                  <ul className="list-disc pl-6 space-y-2 mt-2">
                    <li>Use timers to indicate approaching transitions</li>
                    <li>Create transition routines</li>
                    <li>Use transitional objects when changing environments</li>
                    <li>Provide visual countdowns for ending activities</li>
                    <li>Use transition songs or verbal cues</li>
                    <li>Allow extra time for difficult transitions</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="card">
            <CardHeader className="bg-primary/10 rounded-t-[1rem]">
              <CardTitle>Executive Function Resources</CardTitle>
              <CardDescription>Tools and programs to support executive function</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4 pt-6">
              <div className="space-y-4">
                <div className="border rounded-lg p-4">
                  <h3 className="font-medium">Books</h3>
                  <ul className="list-disc pl-6 space-y-2 mt-2">
                    <li>"Smart but Scattered" by Peg Dawson and Richard Guare</li>
                    <li>"Executive Function 'Dysfunction'" by Rebecca Moyes</li>
                    <li>"Organizing the Disorganized Child" by Martin Kutscher and Marcella Moran</li>
                    <li>"Executive Skills in Children and Adolescents" by Peg Dawson and Richard Guare</li>
                  </ul>
                </div>

                <div className="border rounded-lg p-4">
                  <h3 className="font-medium">Online Resources</h3>
                  <ul className="list-disc pl-6 space-y-2 mt-2">
                    <li>
                      <Link
                        href="https://www.understood.org/en/learning-thinking-differences/child-learning-disabilities/executive-functioning-issues"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-primary hover:underline"
                      >
                        Understood.org Executive Function Resources
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="https://chadd.org/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-primary hover:underline"
                      >
                        CHADD (Children and Adults with ADHD)
                      </Link>{" "}
                      - Many executive function resources
                    </li>
                    <li>
                      <Link
                        href="https://autismawarenesscentre.com/executive-function/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-primary hover:underline"
                      >
                        Autism Awareness Centre Executive Function Resources
                      </Link>
                    </li>
                  </ul>
                </div>

                <div className="border rounded-lg p-4">
                  <h3 className="font-medium">Apps and Technology</h3>
                  <ul className="list-disc pl-6 space-y-2 mt-2">
                    <li>Time Timer apps (visual timers)</li>
                    <li>Todoist or other task management apps</li>
                    <li>Google Calendar for scheduling</li>
                    <li>Trello for visual task organization</li>
                    <li>First-Then Visual Schedule apps</li>
                    <li>Voice assistants for reminders</li>
                  </ul>
                </div>

                <div className="border rounded-lg p-4">
                  <h3 className="font-medium">Professional Support</h3>
                  <ul className="list-disc pl-6 space-y-2 mt-2">
                    <li>Occupational therapy focused on executive function skills</li>
                    <li>Executive function coaching</li>
                    <li>Cognitive Behavioral Therapy (CBT) approaches</li>
                    <li>Academic support services and learning specialists</li>
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
