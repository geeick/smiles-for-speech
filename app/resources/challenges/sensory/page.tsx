import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Header } from "@/components/header"
import Image from "next/image"

export default function SensoryResources() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 container max-w-4xl mx-auto px-4 py-8">
        <div className="space-y-8">
          <div>
            <h1 className="text-3xl font-bold text-primary">Sensory Issues Resources</h1>
            <p className="text-muted-foreground">
              Tools and strategies for understanding and managing sensory sensitivities.
            </p>
          </div>

          <div className="flex justify-center mb-8">
            <Image
              src="/placeholder.svg?height=200&width=200"
              alt="Sensory issues illustration"
              width={200}
              height={200}
              className="rounded-full bg-primary/10"
            />
          </div>

          <Card className="card">
            <CardHeader className="bg-primary/10 rounded-t-[1rem]">
              <CardTitle>Understanding Sensory Issues</CardTitle>
              <CardDescription>What are sensory processing differences?</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4 pt-6">
              <p>
                Many people with autism experience differences in how they process sensory information. This can include
                being over-sensitive (hypersensitive) or under-sensitive (hyposensitive) to sensory input like:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Sounds (auditory)</li>
                <li>Touch and textures (tactile)</li>
                <li>Lights and visual stimuli (visual)</li>
                <li>Smells (olfactory)</li>
                <li>Tastes (gustatory)</li>
                <li>Movement and balance (vestibular)</li>
                <li>Body position and muscle feedback (proprioceptive)</li>
              </ul>
              <p className="mt-4">
                These sensory differences can significantly impact daily life, causing discomfort, anxiety, or even pain
                in certain environments. Understanding your specific sensory profile can help you develop strategies to
                manage challenging sensory experiences.
              </p>
            </CardContent>
          </Card>

          <Card className="card">
            <CardHeader className="bg-primary/10 rounded-t-[1rem]">
              <CardTitle>Sensory Management Strategies</CardTitle>
              <CardDescription>Practical approaches for managing sensory sensitivities</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6 pt-6">
              <div>
                <h3 className="font-medium text-lg">For Hypersensitivity (Over-sensitivity)</h3>
                <ul className="list-disc pl-6 space-y-2 mt-2">
                  <li>
                    Create a sensory-friendly space at home with dimmed lights, reduced noise, and comfortable textures
                  </li>
                  <li>Use noise-canceling headphones in loud environments</li>
                  <li>Wear sunglasses to reduce visual stimulation</li>
                  <li>Use weighted blankets or compression clothing for calming pressure</li>
                  <li>Practice gradual exposure to challenging sensory experiences</li>
                  <li>Develop a "sensory diet" with an occupational therapist</li>
                </ul>
              </div>

              <div>
                <h3 className="font-medium text-lg">For Hyposensitivity (Under-sensitivity)</h3>
                <ul className="list-disc pl-6 space-y-2 mt-2">
                  <li>Incorporate movement breaks throughout the day</li>
                  <li>Use fidget toys or textured objects for tactile input</li>
                  <li>Try vibrating toys or cushions</li>
                  <li>Engage in "heavy work" activities like pushing, pulling, or carrying heavy items</li>
                  <li>Use bright colors and high-contrast visuals</li>
                  <li>Incorporate strong flavors or crunchy foods in meals</li>
                </ul>
              </div>

              <div>
                <h3 className="font-medium text-lg">General Strategies</h3>
                <ul className="list-disc pl-6 space-y-2 mt-2">
                  <li>Create a sensory profile to identify specific triggers and preferences</li>
                  <li>Plan ahead for challenging environments</li>
                  <li>Take breaks when needed</li>
                  <li>Communicate your needs to others</li>
                  <li>Practice self-regulation techniques like deep breathing</li>
                </ul>
              </div>
            </CardContent>
          </Card>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Card className="card">
              <CardHeader className="bg-primary/10 rounded-t-[1rem]">
                <CardTitle>Noise Management</CardTitle>
                <CardDescription>Tools for managing auditory sensitivities</CardDescription>
              </CardHeader>
              <CardContent className="space-y-2 pt-6">
                <ul className="list-disc pl-6 space-y-2">
                  <li>Noise-canceling headphones</li>
                  <li>Earplugs or ear defenders</li>
                  <li>White noise machines</li>
                  <li>Sound-absorbing materials for home</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="card">
              <CardHeader className="bg-primary/10 rounded-t-[1rem]">
                <CardTitle>Visual Comfort</CardTitle>
                <CardDescription>Tools for managing visual sensitivities</CardDescription>
              </CardHeader>
              <CardContent className="space-y-2 pt-6">
                <ul className="list-disc pl-6 space-y-2">
                  <li>Sunglasses or tinted glasses</li>
                  <li>Light dimmer switches</li>
                  <li>Window coverings</li>
                  <li>Visual schedules and organizers</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="card">
              <CardHeader className="bg-primary/10 rounded-t-[1rem]">
                <CardTitle>Tactile Support</CardTitle>
                <CardDescription>Tools for managing touch sensitivities</CardDescription>
              </CardHeader>
              <CardContent className="space-y-2 pt-6">
                <ul className="list-disc pl-6 space-y-2">
                  <li>Weighted blankets or vests</li>
                  <li>Compression clothing</li>
                  <li>Fidget toys and sensory tools</li>
                  <li>Tag-less clothing and seamless socks</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="card">
              <CardHeader className="bg-primary/10 rounded-t-[1rem]">
                <CardTitle>Movement and Proprioception</CardTitle>
                <CardDescription>Tools for vestibular and proprioceptive input</CardDescription>
              </CardHeader>
              <CardContent className="space-y-2 pt-6">
                <ul className="list-disc pl-6 space-y-2">
                  <li>Therapy balls and cushions</li>
                  <li>Swings and rocking chairs</li>
                  <li>Weighted items (backpacks, lap pads)</li>
                  <li>Resistance bands</li>
                </ul>
              </CardContent>
            </Card>
          </div>

          <Card className="card">
            <CardHeader className="bg-primary/10 rounded-t-[1rem]">
              <CardTitle>Further Resources</CardTitle>
              <CardDescription>Books, websites, and professional support</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6 pt-6">
              <div>
                <h3 className="font-medium text-lg">Books</h3>
                <ul className="list-disc pl-6 space-y-2 mt-2">
                  <li>"The Out-of-Sync Child" by Carol Stock Kranowitz</li>
                  <li>"Too Loud, Too Bright, Too Fast, Too Tight" by Sharon Heller</li>
                  <li>"Sensory Processing 101" by Dayna Abraham, Claire Heffron, et al.</li>
                  <li>"Understanding Your Child's Sensory Signals" by Angie Voss</li>
                </ul>
              </div>

              <div>
                <h3 className="font-medium text-lg">Websites</h3>
                <ul className="list-disc pl-6 space-y-2 mt-2">
                  <li>STAR Institute for Sensory Processing Disorder</li>
                  <li>Sensory Processing Disorder Foundation</li>
                  <li>Autism Speaks - Sensory Issues</li>
                  <li>The Sensory Spectrum</li>
                </ul>
              </div>

              <div>
                <h3 className="font-medium text-lg">Professional Support</h3>
                <ul className="list-disc pl-6 space-y-2 mt-2">
                  <li>Occupational Therapists specializing in sensory integration</li>
                  <li>Sensory Integration Certified Therapists</li>
                  <li>Autism specialists with sensory expertise</li>
                </ul>
              </div>
            </CardContent>
            <CardFooter>
              <Link href="/resources/find-professional">
                <Button variant="outline" className="rounded-xl">
                  Find a Professional
                </Button>
              </Link>
            </CardFooter>
          </Card>
        </div>
      </main>
    </div>
  )
}
