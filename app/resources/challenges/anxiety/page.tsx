import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Header } from "@/components/header"
import Image from "next/image"

export default function AnxietyResources() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 container max-w-4xl mx-auto px-4 py-8">
        <div className="space-y-8">
          <div>
            <h1 className="text-3xl font-bold text-primary">Anxiety Resources</h1>
            <p className="text-muted-foreground">
              Tools and strategies to help individuals with autism manage anxiety and find calm.
            </p>
          </div>

          <div className="flex justify-center mb-8">
            <Image
              src="/anxiety.png"
              alt="Calm environment"
              width={400}
              height={300}
              className="rounded-xl shadow-lg"
            />
          </div>

          <Card className="card">
            <CardHeader className="bg-primary/10 rounded-t-[1rem]">
              <CardTitle>Understanding Anxiety in Autism</CardTitle>
              <CardDescription>Recognizing and supporting autistic anxiety</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4 pt-6">
              <p>
                Anxiety is common in autistic individuals and can be triggered by sensory overload, unpredictability, or social pressures. Key signs include:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Increased stimming or repetitive behaviors</li>
                <li>Withdrawal from social or daily activities</li>
                <li>Meltdowns or shutdowns in response to stress</li>
                <li>Physical symptoms like stomachaches or headaches</li>
                <li>Sleep difficulties and irritability</li>
              </ul>
              <p className="mt-4">
                Identifying anxiety triggers is essential for creating supportive environments and routines.
              </p>
            </CardContent>
          </Card>

          <Card className="card">
            <CardHeader className="bg-primary/10 rounded-t-[1rem]">
              <CardTitle>Strategies to Reduce Anxiety</CardTitle>
              <CardDescription>Practical tools and techniques</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4 pt-6">
              <div className="space-y-4">
                <div className="border rounded-lg p-4">
                  <h3 className="font-medium">Environmental Adjustments</h3>
                  <ul className="list-disc pl-6 space-y-2 mt-2">
                    <li>Create quiet, low-stimulation spaces</li>
                    <li>Use noise-cancelling headphones or weighted items</li>
                    <li>Reduce transitions and allow extra time</li>
                    <li>Use visual schedules to increase predictability</li>
                    <li>Limit exposure to overwhelming environments</li>
                  </ul>
                </div>

                <div className="border rounded-lg p-4">
                  <h3 className="font-medium">Coping Skills and Tools</h3>
                  <ul className="list-disc pl-6 space-y-2 mt-2">
                    <li>Practice deep breathing or guided imagery</li>
                    <li>Use calming apps or white noise</li>
                    <li>Encourage journaling or drawing feelings</li>
                    <li>Offer sensory toys or fidget tools</li>
                    <li>Teach grounding techniques (5-4-3-2-1)</li>
                  </ul>
                </div>

                <div className="border rounded-lg p-4">
                  <h3 className="font-medium">Supportive Communication</h3>
                  <ul className="list-disc pl-6 space-y-2 mt-2">
                    <li>Validate anxiety without judgment</li>
                    <li>Provide choices to increase control</li>
                    <li>Use simple, direct language in stressful moments</li>
                    <li>Check for unmet sensory or emotional needs</li>
                    <li>Use visual aids or scripts for anxious situations</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="card">
            <CardHeader className="bg-primary/10 rounded-t-[1rem]">
              <CardTitle>Professional and Family Support</CardTitle>
              <CardDescription>When and how to seek extra help</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4 pt-6">
              <p>
                Sometimes anxiety may require professional support from therapists, educators, or medical providers. Families can help by:
              </p>

              <div className="border rounded-lg p-4">
                <ul className="list-disc pl-6 space-y-2 mt-2">
                  <li>Keeping an anxiety log to identify patterns</li>
                  <li>Working with therapists trained in CBT or mindfulness for autism</li>
                  <li>Using school-based supports (IEPs, sensory breaks, safe spaces)</li>
                  <li>Educating family and friends about supportive responses</li>
                  <li>Offering consistent reassurance and routine</li>
                </ul>
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
