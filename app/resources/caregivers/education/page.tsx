import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Header } from "@/components/header"

export default function EducationalAdvocacy() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 container max-w-4xl mx-auto px-4 py-8">
        <div className="space-y-8">
          <div>
            <h1 className="text-3xl font-bold text-primary">Educational Advocacy</h1>
            <p className="text-muted-foreground">How to advocate for your child with autism in educational settings.</p>
          </div>

          <Card className="card">
            <CardHeader className="bg-primary/10 rounded-t-[1rem]">
              <CardTitle>Understanding Educational Rights</CardTitle>
              <CardDescription>Know your child's rights to appropriate education</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4 pt-6">
              <p>
                Children with autism have the right to receive an appropriate education that meets their unique needs.
                While specific laws vary by country, most nations have some form of educational protections for children
                with disabilities.
              </p>

              <div className="space-y-4">
                <div className="border rounded-lg p-4">
                  <h3 className="font-medium">Key Educational Rights</h3>
                  <p className="text-sm text-muted-foreground mt-2">
                    Common educational rights for children with disabilities often include:
                  </p>
                  <ul className="list-disc pl-6 space-y-2 mt-2">
                    <li>The right to free and appropriate public education</li>
                    <li>Education in the least restrictive environment</li>
                    <li>Individualized education planning</li>
                    <li>Appropriate accommodations and modifications</li>
                    <li>Protection from discrimination</li>
                    <li>Parental participation in educational decisions</li>
                  </ul>
                </div>

                <div className="border rounded-lg p-4">
                  <h3 className="font-medium">Educational Rights in Ghana</h3>
                  <p className="text-sm text-muted-foreground mt-2">
                    In Ghana, relevant policies and frameworks include:
                  </p>
                  <ul className="list-disc pl-6 space-y-2 mt-2">
                    <li>Persons with Disability Act (Act 715, 2006)</li>
                    <li>Inclusive Education Policy (2015)</li>
                    <li>Children's Act (Act 560, 1998)</li>
                    <li>Education Act (Act 778, 2008)</li>
                  </ul>
                  <p className="text-sm text-muted-foreground mt-2">
                    These laws mandate educational inclusion and non-discrimination, though implementation varies across
                    regions and schools.
                  </p>
                </div>

                <div className="border rounded-lg p-4">
                  <h3 className="font-medium">Documentation to Maintain</h3>
                  <ul className="list-disc pl-6 space-y-2 mt-2">
                    <li>Diagnostic reports and evaluations</li>
                    <li>Educational assessments</li>
                    <li>Medical records related to educational needs</li>
                    <li>Previous educational plans or accommodations</li>
                    <li>Communication with school staff</li>
                    <li>Examples of your child's work</li>
                    <li>Records of meetings and decisions</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="card">
            <CardHeader className="bg-primary/10 rounded-t-[1rem]">
              <CardTitle>Educational Options and Settings</CardTitle>
              <CardDescription>Understanding different educational approaches</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4 pt-6">
              <p>
                Children with autism may learn in various educational settings, depending on their needs and available
                options. Understanding the possibilities helps you advocate for the most appropriate placement.
              </p>

              <div className="space-y-4">
                <div className="border rounded-lg p-4">
                  <h3 className="font-medium">Mainstream/Inclusive Education</h3>
                  <ul className="list-disc pl-6 space-y-2 mt-2">
                    <li>Regular classroom with typically developing peers</li>
                    <li>May include in-class support from aides or specialists</li>
                    <li>Accommodations and modifications to curriculum</li>
                    <li>Benefits include peer modeling and integration</li>
                    <li>Challenges may include sensory overload or pace of instruction</li>
                  </ul>
                </div>

                <div className="border rounded-lg p-4">
                  <h3 className="font-medium">Resource Rooms/Pull-Out Services</h3>
                  <ul className="list-disc pl-6 space-y-2 mt-2">
                    <li>Primarily in regular classroom with specialized instruction for certain subjects</li>
                    <li>Targeted support in specific areas of challenge</li>
                    <li>Balance of mainstream experience with individualized support</li>
                    <li>Can help develop skills needed for full inclusion</li>
                  </ul>
                </div>

                <div className="border rounded-lg p-4">
                  <h3 className="font-medium">Special Education Classes</h3>
                  <ul className="list-disc pl-6 space-y-2 mt-2">
                    <li>Smaller class sizes with specially trained teachers</li>
                    <li>Curriculum adapted for students with special needs</li>
                    <li>Structured environment with consistent routines</li>
                    <li>May include integration with mainstream for certain activities</li>
                    <li>Can provide more intensive support for significant needs</li>
                  </ul>
                </div>

                <div className="border rounded-lg p-4">
                  <h3 className="font-medium">Specialized Schools</h3>
                  <ul className="list-disc pl-6 space-y-2 mt-2">
                    <li>Schools specifically designed for children with autism or disabilities</li>
                    <li>Highly specialized teaching approaches</li>
                    <li>Staff with extensive experience in autism</li>
                    <li>Often include integrated therapeutic services</li>
                    <li>Limited opportunities for interaction with typically developing peers</li>
                  </ul>
                </div>

                <div className="border rounded-lg p-4">
                  <h3 className="font-medium">Home-Based or Alternative Education</h3>
                  <ul className="list-disc pl-6 space-y-2 mt-2">
                    <li>Homeschooling with customized curriculum</li>
                    <li>Online learning options</li>
                    <li>Tutoring and supplemental services</li>
                    <li>May be combined with part-time school attendance</li>
                    <li>Offers maximum flexibility and individualization</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="card">
            <CardHeader className="bg-primary/10 rounded-t-[1rem]">
              <CardTitle>Effective Advocacy Strategies</CardTitle>
              <CardDescription>How to be an effective advocate for your child</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4 pt-6">
              <div className="space-y-4">
                <div className="border rounded-lg p-4">
                  <h3 className="font-medium">Building Collaborative Relationships</h3>
                  <ul className="list-disc pl-6 space-y-2 mt-2">
                    <li>Approach teachers and staff as partners in your child's education</li>
                    <li>Recognize and acknowledge their efforts and expertise</li>
                    <li>Communicate regularly, not just when problems arise</li>
                    <li>Share information about what works at home</li>
                    <li>Ask for their insights and observations</li>
                    <li>Find common ground and shared goals</li>
                  </ul>
                </div>

                <div className="border rounded-lg p-4">
                  <h3 className="font-medium">Effective Communication</h3>
                  <ul className="list-disc pl-6 space-y-2 mt-2">
                    <li>Be clear, specific, and solution-focused</li>
                    <li>Use factual, objective language rather than emotional appeals</li>
                    <li>Document conversations and agreements in writing</li>
                    <li>Ask clarifying questions to ensure understanding</li>
                    <li>Listen actively to understand others' perspectives</li>
                    <li>Follow appropriate communication channels and escalation paths</li>
                  </ul>
                </div>

                <div className="border rounded-lg p-4">
                  <h3 className="font-medium">Educational Planning Meetings</h3>
                  <ul className="list-disc pl-6 space-y-2 mt-2">
                    <li>Prepare thoroughly with documentation and specific concerns</li>
                    <li>Bring or request relevant assessments and evaluations</li>
                    <li>Consider bringing a support person or advocate</li>
                    <li>Focus on your child's needs, not specific methods or services</li>
                    <li>Ask for clarification on anything you don't understand</li>
                    <li>Request specific, measurable goals and objectives</li>
                    <li>Follow up with a written summary of decisions made</li>
                  </ul>
                </div>

                <div className="border rounded-lg p-4">
                  <h3 className="font-medium">When Challenges Arise</h3>
                  <ul className="list-disc pl-6 space-y-2 mt-2">
                    <li>Address issues promptly at the lowest appropriate level</li>
                    <li>Focus on solutions rather than blame</li>
                    <li>Provide specific examples of concerns</li>
                    <li>Suggest possible alternatives or accommodations</li>
                    <li>Know the formal complaint or dispute resolution processes</li>
                    <li>Consider mediation before more adversarial approaches</li>
                    <li>Seek support from advocacy organizations when needed</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="card">
            <CardHeader className="bg-primary/10 rounded-t-[1rem]">
              <CardTitle>Supporting Learning at Home</CardTitle>
              <CardDescription>Extending educational support beyond the classroom</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4 pt-6">
              <div className="space-y-4">
                <div className="border rounded-lg p-4">
                  <h3 className="font-medium">Creating a Learning Environment</h3>
                  <ul className="list-disc pl-6 space-y-2 mt-2">
                    <li>Establish a designated, organized study space</li>
                    <li>Minimize distractions and sensory challenges</li>
                    <li>Use visual schedules and supports</li>
                    <li>Provide necessary sensory tools or fidgets</li>
                    <li>Create clear routines for homework and study</li>
                    <li>Include breaks and movement opportunities</li>
                  </ul>
                </div>

                <div className="border rounded-lg p-4">
                  <h3 className="font-medium">Homework Strategies</h3>
                  <ul className="list-disc pl-6 space-y-2 mt-2">
                    <li>Break assignments into manageable chunks</li>
                    <li>Use visual timers to support time management</li>
                    <li>Provide clear, step-by-step instructions</li>
                    <li>Incorporate special interests when possible</li>
                    <li>Use preferred learning modalities</li>
                    <li>Communicate with teachers about appropriate homework load</li>
                  </ul>
                </div>

                <div className="border rounded-lg p-4">
                  <h3 className="font-medium">Reinforcing School Learning</h3>
                  <ul className="list-disc pl-6 space-y-2 mt-2">
                    <li>Stay informed about curriculum topics</li>
                    <li>Connect concepts to real-world examples</li>
                    <li>Use hands-on activities to support understanding</li>
                    <li>Provide additional practice for challenging concepts</li>
                    <li>Focus on building strengths while supporting challenges</li>
                    <li>Celebrate progress and effort, not just results</li>
                  </ul>
                </div>

                <div className="border rounded-lg p-4">
                  <h3 className="font-medium">Home-School Communication</h3>
                  <ul className="list-disc pl-6 space-y-2 mt-2">
                    <li>Establish regular communication channels with teachers</li>
                    <li>Use communication notebooks or digital platforms</li>
                    <li>Share strategies that work at home</li>
                    <li>Ask about how to reinforce current classroom topics</li>
                    <li>Provide updates about significant changes at home</li>
                    <li>Request advance notice of major changes or events at school</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="card">
            <CardHeader className="bg-primary/10 rounded-t-[1rem]">
              <CardTitle>Resources for Educational Advocacy</CardTitle>
              <CardDescription>Tools and support for advocating in educational settings</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4 pt-6">
              <div className="space-y-4">
                <div className="border rounded-lg p-4">
                  <h3 className="font-medium">Books and Guides</h3>
                  <ul className="list-disc pl-6 space-y-2 mt-2">
                    <li>"Wrightslaw: From Emotions to Advocacy" by Pam and Pete Wright</li>
                    <li>"How to Advocate Successfully for Your Child" by Deborah Swain</li>
                    <li>"The Everyday Advocate" by Areva Martin</li>
                    <li>"Autism and the IEP" by Susan Louise Peterson</li>
                  </ul>
                </div>

                <div className="border rounded-lg p-4">
                  <h3 className="font-medium">Online Resources</h3>
                  <ul className="list-disc pl-6 space-y-2 mt-2">
                    <li>
                      <Link
                        href="https://www.understood.org/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-primary hover:underline"
                      >
                        Understood.org
                      </Link>{" "}
                      - Educational advocacy resources
                    </li>
                    <li>
                      <Link
                        href="https://www.wrightslaw.com/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-primary hover:underline"
                      >
                        Wrightslaw
                      </Link>{" "}
                      - Special education law and advocacy
                    </li>
                    <li>
                      <Link
                        href="https://www.autismspeaks.org/tool-kit/individualized-education-program-iep-guide-and-other-resources"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-primary hover:underline"
                      >
                        Autism Speaks IEP Guide
                      </Link>
                    </li>
                  </ul>
                </div>

                <div className="border rounded-lg p-4">
                  <h3 className="font-medium">Local Support and Advocacy</h3>
                  <ul className="list-disc pl-6 space-y-2 mt-2">
                    <li>Parent-to-parent support networks</li>
                    <li>Educational advocacy organizations</li>
                    <li>Parent training on educational rights</li>
                    <li>Legal aid services</li>
                    <li>Disability rights organizations</li>
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
