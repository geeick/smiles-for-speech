import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Header } from "@/components/header"

export default function Home() {
  return (
    <div className="relative h-screen overflow-hidden">
    <main className="min-h-screen flex flex-col">
      <Header />
            {/* Moving background video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover z-[-1] opacity-20">
        <source src="/YellowBackgroundbyYuliyaKrautsevic.mp4" type="video/mp4" />
      </video>
      <div className="flex-1 container max-w-6xl mx-auto px-4 py-12 md:py-24 flex flex-col items-center justify-center text-center">
        <div className="space-y-8 max-w-3xl">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-primary">Smiles for Speech</h1>
          <p className="text-xl md:text-2xl text-muted-foreground">
            Empowering children with special needs in underserved communities through access to therapy services and
            educational resources.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-6">
            <Link href="/profile/create">
              <Button size="lg" className="text-lg h-14 px-8 btn-primary">
                Start Your Profile
              </Button>
            </Link>
            <Link href="/about">
              <Button size="lg" variant="outline" className="text-lg h-14 px-8 rounded-xl">
                Learn More
              </Button>
            </Link>
          </div>
          <div className="pt-12">
            <p className="text-muted-foreground">
              Founded in 2017 to support early autism identification, education, and support in Ghana and beyond.
            </p>
          </div>
        </div>
      </div>
    </main>
  </div>

  )
}
