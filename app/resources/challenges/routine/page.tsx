import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Header } from "@/components/header"
import Image from "next/image"

export default function RoutineResources() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 container max-w-4xl mx-auto px-4 py-8">
        <div className="space-y-8">
          <div>
            <h1 className="text-3xl font-bold text-primary">Routine & Structure Resources</h1>
            <p className="text-muted-foreground">
              Tools and strategies to create predictable, calming routines that support autistic individuals.
            </p>
          </div>

          <div className="flex justify-center mb-8">
            <Image
              src="/visual-schedule-board.png"
              alt="Visual schedule board"
              width={400}
              height={300}
              className="rounded-xl shadow-lg"
            />
          </div>

          <Card className="card">
            <CardHeader className="bg-primary/10 rounded-t-[1rem]">
              <CardTitle>Why Routines Matter</CardTitle>
              <CardDescription>Understanding the need for structure in autism</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4 pt-6">
              <p>
                Many autistic individuals thrive on routines because they create a sense of control, safety, and predictability.
                Disruptions to routine can lead to anxiety, stress, and meltdowns.
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Reduces cognitive load and decision fatigue</li>
                <li>Minimizes surprises and transitions</li>
                <li>Supports independence and confidence</li>
                <li>Provides a reliable framework for daily life</li>
              </ul>
              <p className="mt-4">
                Establishing routines that are visual, consistent, and flexible can greatly improve quality of life.
              </p>
            </CardContent>
          </Card>

          <Card className="card">
            <CardHeader className="bg-primary/10 rounded-t-[1rem]">
              <CardTitle>Creating Effective Routines</CardTitle>
              <CardDescription>Practical guidance and examples</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4 pt-6">
              <div className="space-y-4">
                <div className="border rounded-lg p-4">
                  <h3 className="font-medium">Daily Routine Tips</h3>
                  <ul className="list-disc pl-6 space-y-2 mt-2">
                    <li>Use visual schedules with icons or photos</li>
                    <li>Keep the routine consistent but allow for small changes</li>
                    <li>Build in transition warnings (timers, "5 more minutes")</li>
                    <li>Include self-care, meals, rest, and special interests</li>
                    <li>Reinforce the routine with positive feedback</li>
                  </ul>
                </div>

                <div className="border rounded-lg p-4">
                  <h3 className="font-medium">Handling Changes in Routine</h3>
                  <ul className="list-disc pl-6 space-y-2 mt-2">
                    <li>Give advance notice of upcoming changes</li>
                    <li>Use visual “change” icons on schedules</li>
                    <li>Practice flexibility with small changes regularly</li>
                    <li>Offer coping strategies for unexpected events</li>
                    <li>Validate emotional reactions to change</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="card">
            <CardHeader className="bg-primary/10 rounded-t-[1rem]">
              <CardTitle>Tools & Visual Supports</CardTitle>
              <CardDescription>Helpful aids for building routines</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4 pt-6">
              <ul className="list-disc pl-6 space-y-2">
                <li>Picture-based visual schedules (laminated or digital)</li>
                <li>First/Then boards for simple sequencing</li>
                <li>Routine charts with checkboxes or Velcro pieces</li>
                <li>Color-coded daily planners for older individuals</li>
                <li>Timers and alarms to support transitions</li>
              </ul>
              <p className="mt-4">
                Use tools that match the individual’s developmental level and communication preferences.
              </p>
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
