import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Header } from "@/components/header"
import Image from "next/image"

export default function StimmingResources() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 container max-w-4xl mx-auto px-4 py-8">
        <div className="space-y-8">
          <div>
            <h1 className="text-3xl font-bold text-primary">Stimming Resources</h1>
            <p className="text-muted-foreground">
              Learn about self-stimulatory behavior, why it matters, and how to support it safely and positively.
            </p>
          </div>

          <div className="flex justify-center mb-8">
            <Image
              src="/stimming.png"
              alt="Child using fidget toy"
              width={400}
              height={300}
              className="rounded-xl shadow-lg"
            />
          </div>

          <Card className="card">
            <CardHeader className="bg-primary/10 rounded-t-[1rem]">
              <CardTitle>What is Stimming?</CardTitle>
              <CardDescription>Understanding repetitive behaviors in autism</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4 pt-6">
              <p>
                Stimming, or self-stimulatory behavior, refers to repetitive movements or sounds that help regulate sensory input or express emotions. It is a normal and often helpful part of the autistic experience.
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Hand-flapping, rocking, spinning, or pacing</li>
                <li>Repeating words, sounds, or phrases (verbal stimming)</li>
                <li>Touching or tapping objects repetitively</li>
                <li>Using fidget tools or engaging in rhythmic motions</li>
                <li>Visual stimming (e.g., watching spinning objects or lights)</li>
              </ul>
              <p className="mt-4">
                Stimming helps with self-regulation, emotion expression, and focus. It should not be discouraged unless it’s harmful.
              </p>
            </CardContent>
          </Card>

          <Card className="card">
            <CardHeader className="bg-primary/10 rounded-t-[1rem]">
              <CardTitle>When to Support or Redirect Stimming</CardTitle>
              <CardDescription>Balancing safety and self-expression</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4 pt-6">
              <div className="space-y-4">
                <div className="border rounded-lg p-4">
                  <h3 className="font-medium">Support Stimming When:</h3>
                  <ul className="list-disc pl-6 space-y-2 mt-2">
                    <li>It helps with self-soothing or emotional regulation</li>
                    <li>It improves concentration and focus</li>
                    <li>It brings joy or comfort</li>
                    <li>It is not disruptive to others’ safety or learning</li>
                  </ul>
                </div>

                <div className="border rounded-lg p-4">
                  <h3 className="font-medium">Redirect Gently When:</h3>
                  <ul className="list-disc pl-6 space-y-2 mt-2">
                    <li>The behavior causes physical harm (e.g., head banging)</li>
                    <li>It leads to injury or distress</li>
                    <li>It significantly interferes with necessary activities</li>
                    <li>It violates boundaries in public or social settings</li>
                  </ul>
                  <p className="text-sm text-muted-foreground mt-2">
                    Always replace harmful stims with safer alternatives, not with demands to “stop.”
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="card">
            <CardHeader className="bg-primary/10 rounded-t-[1rem]">
              <CardTitle>Tools and Alternatives</CardTitle>
              <CardDescription>Safe and affirming support options</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4 pt-6">
              <ul className="list-disc pl-6 space-y-2">
                <li>Fidget toys, chewable jewelry, and textured fabrics</li>
                <li>Weighted blankets or lap pads for grounding</li>
                <li>Noise-canceling headphones or music for auditory stimming</li>
                <li>Visual supports like glitter jars or light toys</li>
                <li>Movement breaks to allow jumping, spinning, or rocking</li>
              </ul>
              <p className="mt-4">
                Encourage self-awareness: allow the person to choose tools that meet their needs without shame or pressure.
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
