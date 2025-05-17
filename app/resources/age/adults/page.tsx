import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Header } from "@/components/header"

export default function AdultsResources() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 container max-w-4xl mx-auto px-4 py-8">
        <div className="space-y-8">
          <div>
            <h1 className="text-3xl font-bold text-primary">Adult Resources (18+ years)</h1>
            <p className="text-muted-foreground">Support and resources for adults on the autism spectrum.</p>
          </div>

          <Card className="card">
            <CardHeader className="bg-primary/10 rounded-t-[1rem]">
              <CardTitle>Adult Life with Autism</CardTitle>
              <CardDescription>Navigating life as an autistic adult</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4 pt-6">
              <p>
                Adulthood brings both opportunities and challenges for autistic individuals. While each person's
                experience is unique, many autistic adults navigate:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Higher education, vocational training, or employment</li>
                <li>Independent living or supported housing arrangements</li>
                <li>Managing personal finances and administrative tasks</li>
                <li>Developing and maintaining social and romantic relationships</li>
                <li>Accessing appropriate healthcare and mental health support</li>
                <li>Self-advocacy in various contexts</li>
                <li>Building a fulfilling life aligned with personal values and strengths</li>
              </ul>
              <p className="mt-4">
                Many autistic adults lead independent, successful lives, while others may need ongoing support in
                certain areas. The key is identifying personal strengths and challenges, and finding the right supports
                to enable the best quality of life possible.
              </p>
            </CardContent>
          </Card>

          <Card className="card">
            <CardHeader className="bg-primary/10 rounded-t-[1rem]">
              <CardTitle>Employment and Education</CardTitle>
              <CardDescription>Resources for work and continuing education</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4 pt-6">
              <div className="space-y-4">
                <div className="border rounded-lg p-4">
                  <h3 className="font-medium">Employment Strategies</h3>
                  <ul className="list-disc pl-6 space-y-2 mt-2">
                    <li>Identify careers that align with strengths and interests</li>
                    <li>Develop strategies for job interviews and workplace communication</li>
                    <li>Understand workplace accommodations and how to request them</li>
                    <li>Learn about disclosure options and considerations</li>
                    <li>Build executive function skills for workplace success</li>
                    <li>Consider job coaching or supported employment options if needed</li>
                  </ul>
                </div>

                <div className="border rounded-lg p-4">
                  <h3 className="font-medium">Higher Education</h3>
                  <ul className="list-disc pl-6 space-y-2 mt-2">
                    <li>Research disability support services at educational institutions</li>
                    <li>Understand academic accommodations and how to access them</li>
                    <li>Develop self-advocacy skills for the educational environment</li>
                    <li>Create effective study routines and organizational systems</li>
                    <li>Build social connections through interest-based groups</li>
                    <li>Prepare for transitions between different educational phases</li>
                  </ul>
                </div>

                <div className="border rounded-lg p-4">
                  <h3 className="font-medium">Career Development</h3>
                  <ul className="list-disc pl-6 space-y-2 mt-2">
                    <li>Create resume and cover letter templates</li>
                    <li>Practice job interview skills with autism-specific strategies</li>
                    <li>Learn about workplace disclosure and accommodation laws</li>
                    <li>Identify workplace environments that match sensory needs</li>
                    <li>Develop strategies for workplace social interactions</li>
                    <li>Consider entrepreneurship or self-employment options</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="card">
            <CardHeader className="bg-primary/10 rounded-t-[1rem]">
              <CardTitle>Independent Living</CardTitle>
              <CardDescription>Skills and supports for daily living</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4 pt-6">
              <div className="space-y-4">
                <div className="border rounded-lg p-4">
                  <h3 className="font-medium">Home Management</h3>
                  <ul className="list-disc pl-6 space-y-2 mt-2">
                    <li>Develop routines for household maintenance</li>
                    <li>Create systems for organization and cleaning</li>
                    <li>Learn meal planning, shopping, and cooking skills</li>
                    <li>Establish reliable bill payment and financial management</li>
                    <li>Implement strategies for executive function challenges</li>
                    <li>Arrange living spaces to accommodate sensory needs</li>
                  </ul>
                </div>

                <div className="border rounded-lg p-4">
                  <h3 className="font-medium">Transportation and Community Navigation</h3>
                  <ul className="list-disc pl-6 space-y-2 mt-2">
                    <li>Learn to use public transportation</li>
                    <li>Develop driving skills or find driving alternatives</li>
                    <li>Use technology tools for navigation</li>
                    <li>Practice community safety skills</li>
                    <li>Identify accessible community resources</li>
                    <li>Create plans for managing unexpected situations</li>
                  </ul>
                </div>

                <div className="border rounded-lg p-4">
                  <h3 className="font-medium">Support Services</h3>
                  <ul className="list-disc pl-6 space-y-2 mt-2">
                    <li>Research supportive living arrangements</li>
                    <li>Learn about home-based support services</li>
                    <li>Investigate financial support programs</li>
                    <li>Connect with independent living centers</li>
                    <li>Consider life skills coaching services</li>
                    <li>Develop a support network of trusted people</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="card">
            <CardHeader className="bg-primary/10 rounded-t-[1rem]">
              <CardTitle>Relationships and Social Life</CardTitle>
              <CardDescription>Building meaningful connections as an adult</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4 pt-6">
              <div className="space-y-4">
                <div className="border rounded-lg p-4">
                  <h3 className="font-medium">Friendships</h3>
                  <ul className="list-disc pl-6 space-y-2 mt-2">
                    <li>Find interest-based groups and activities</li>
                    <li>Develop scripts for common social interactions</li>
                    <li>Learn to maintain long-term friendships</li>
                    <li>Understand reciprocity in relationships</li>
                    <li>Create boundaries for healthy relationships</li>
                    <li>Build a social network that respects neurodiversity</li>
                  </ul>
                </div>

                <div className="border rounded-lg p-4">
                  <h3 className="font-medium">Dating and Romantic Relationships</h3>
                  <ul className="list-disc pl-6 space-y-2 mt-2">
                    <li>Learn about dating conventions and social cues</li>
                    <li>Understand consent and healthy relationship boundaries</li>
                    <li>Develop communication skills for intimate relationships</li>
                    <li>Navigate disclosure of autism in romantic contexts</li>
                    <li>Access resources on sexuality and relationships</li>
                    <li>Build skills for managing relationship challenges</li>
                  </ul>
                </div>

                <div className="border rounded-lg p-4">
                  <h3 className="font-medium">Family Relationships</h3>
                  <ul className="list-disc pl-6 space-y-2 mt-2">
                    <li>Develop effective communication with family members</li>
                    <li>Establish healthy boundaries with parents and siblings</li>
                    <li>Navigate family events and gatherings</li>
                    <li>Address parenting considerations if applicable</li>
                    <li>Access resources for autistic parents</li>
                    <li>Find support for family relationship challenges</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="card">
            <CardHeader className="bg-primary/10 rounded-t-[1rem]">
              <CardTitle>Health and Wellbeing</CardTitle>
              <CardDescription>Taking care of physical and mental health</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4 pt-6">
              <div className="space-y-4">
                <div className="border rounded-lg p-4">
                  <h3 className="font-medium">Mental Health</h3>
                  <ul className="list-disc pl-6 space-y-2 mt-2">
                    <li>Find autism-informed mental health providers</li>
                    <li>Learn strategies for managing anxiety and depression</li>
                    <li>Develop routines that support mental wellbeing</li>
                    <li>Create personalized self-care plans</li>
                    <li>Access resources for autism-specific mental health challenges</li>
                    <li>Consider support groups for emotional wellbeing</li>
                  </ul>
                </div>

                <div className="border rounded-lg p-4">
                  <h3 className="font-medium">Physical Health</h3>
                  <ul className="list-disc pl-6 space-y-2 mt-2">
                    <li>Find healthcare providers knowledgeable about autism</li>
                    <li>Create systems for managing medications and appointments</li>
                    <li>Develop strategies for explaining symptoms and concerns</li>
                    <li>Address common co-occurring physical conditions</li>
                    <li>Implement appropriate exercise and nutrition plans</li>
                    <li>Manage sensory considerations in healthcare settings</li>
                  </ul>
                </div>

                <div className="border rounded-lg p-4">
                  <h3 className="font-medium">Sensory Wellbeing</h3>
                  <ul className="list-disc pl-6 space-y-2 mt-2">
                    <li>Create environments that accommodate sensory needs</li>
                    <li>Develop a personalized sensory diet</li>
                    <li>Learn strategies for managing sensory overload</li>
                    <li>Adapt workspaces for sensory comfort</li>
                    <li>Use appropriate sensory tools and supports</li>
                    <li>Balance sensory needs with daily responsibilities</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="card">
            <CardHeader className="bg-primary/10 rounded-t-[1rem]">
              <CardTitle>Resources for Adults</CardTitle>
              <CardDescription>Support organizations and materials</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4 pt-6">
              <div className="space-y-4">
                <div className="border rounded-lg p-4">
                  <h3 className="font-medium">Books</h3>
                  <ul className="list-disc pl-6 space-y-2 mt-2">
                    <li>"Autism in Adulthood: Strategies and Insights for a Fulfilling Life" by Wenn Lawson</li>
                    <li>"Asperger's on the Job" by Rudy Simone</li>
                    <li>"Living Independently on the Autism Spectrum" by Lynne Soraya</li>
                    <li>"Thinking in Pictures" by Temple Grandin</li>
                    <li>"Spectrum Women: Walking to the Beat of Autism" by Barb Cook and Michelle Garnett</li>
                  </ul>
                </div>

                <div className="border rounded-lg p-4">
                  <h3 className="font-medium">Organizations and Online Resources</h3>
                  <ul className="list-disc pl-6 space-y-2 mt-2">
                    <li>
                      <Link
                        href="https://www.autisticadults.org/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-primary hover:underline"
                      >
                        Autistic Self Advocacy Network (ASAN)
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="https://aaspire.org/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-primary hover:underline"
                      >
                        Academic Autistic Spectrum Partnership in Research and Education (AASPIRE)
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
                      - Online community for adults
                    </li>
                    <li>
                      <Link
                        href="https://grasp.org/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-primary hover:underline"
                      >
                        GRASP (Global and Regional Asperger Syndrome Partnership)
                      </Link>
                    </li>
                  </ul>
                </div>

                <div className="border rounded-lg p-4">
                  <h3 className="font-medium">Employment Support</h3>
                  <ul className="list-disc pl-6 space-y-2 mt-2">
                    <li>Vocational rehabilitation services</li>
                    <li>Job coaches specializing in autism</li>
                    <li>Employment support organizations</li>
                    <li>Autism-friendly employers and initiatives</li>
                    <li>Online job platforms focused on neurodiversity</li>
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
