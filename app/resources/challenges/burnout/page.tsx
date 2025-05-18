import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Header } from "@/components/header"
import Image from "next/image"

export default function BurnoutResources() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 container max-w-4xl mx-auto px-4 py-8">
        <div className="space-y-8">
          <div>
            <h1 className="text-3xl font-bold text-primary">Burnout Resources</h1>
            <p className="text-muted-foreground">
              Learn about autistic burnout—what causes it, how to recover, and how to prevent it in the future.
            </p>
          </div>

          <div className="flex justify-center mb-8">
            <Image
              src="/burnout.png"
              alt="Rest and recovery"
              width={400}
              height={300}
              className="rounded-xl shadow-lg"
            />
          </div>

          <Card className="card">
            <CardHeader className="bg-primary/10 rounded-t-[1rem]">
              <CardTitle>What Is Autistic Burnout?</CardTitle>
              <CardDescription>Understanding the signs and causes</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4 pt-6">
              <p>
                Autistic burnout is a state of physical, emotional, and mental exhaustion caused by prolonged stress and the effort of masking or adapting to non-autistic environments. It is not the same as general burnout.
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Increased sensory sensitivity and overwhelm</li>
                <li>Loss of previously developed skills</li>
                <li>Exhaustion and difficulty functioning</li>
                <li>Withdrawal from social life or daily tasks</li>
                <li>Depression or anxiety symptoms</li>
              </ul>
              <p className="mt-4">
                Burnout can affect both children and adults. Recognition is key to recovery and prevention.
              </p>
            </CardContent>
          </Card>

          <Card className="card">
            <CardHeader className="bg-primary/10 rounded-t-[1rem]">
              <CardTitle>Recovery Strategies</CardTitle>
              <CardDescription>Steps to restore balance and wellbeing</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4 pt-6">
              <div className="space-y-4">
                <div className="border rounded-lg p-4">
                  <h3 className="font-medium">Rest and Restoration</h3>
                  <ul className="list-disc pl-6 space-y-2 mt-2">
                    <li>Allow complete rest—avoid obligations when possible</li>
                    <li>Use sensory tools that soothe and regulate</li>
                    <li>Reduce or eliminate masking behaviors</li>
                    <li>Limit screen time and information overload</li>
                    <li>Practice self-compassion and validate your experience</li>
                  </ul>
                </div>

                <div className="border rounded-lg p-4">
                  <h3 className="font-medium">Support Systems</h3>
                  <ul className="list-disc pl-6 space-y-2 mt-2">
                    <li>Connect with other autistic individuals who understand</li>
                    <li>Seek therapy from professionals who respect neurodiversity</li>
                    <li>Explain your burnout to trusted family or friends</li>
                    <li>Ask for accommodations at school or work</li>
                    <li>Reduce demands and commitments temporarily</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="card">
            <CardHeader className="bg-primary/10 rounded-t-[1rem]">
              <CardTitle>Preventing Burnout</CardTitle>
              <CardDescription>Building sustainable routines and boundaries</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4 pt-6">
              <ul className="list-disc pl-6 space-y-2">
                <li>Set clear boundaries with time, energy, and social demands</li>
                <li>Incorporate downtime and solo activities into every day</li>
                <li>Use planners or visual schedules to reduce cognitive load</li>
                <li>Avoid masking when it’s not necessary for safety</li>
                <li>Regularly check in with yourself and adjust your environment</li>
              </ul>
              <p className="mt-4">
                Long-term health depends on self-awareness, routine breaks, and environments that support your neurotype.
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
