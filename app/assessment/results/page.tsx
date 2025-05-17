"use client"

import { useSearchParams } from "next/navigation"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Header } from "@/components/header"
import { ArrowRight, Download, Share2 } from "lucide-react"

export default function AssessmentResults() {
  const searchParams = useSearchParams()
  const score = Number.parseInt(searchParams.get("score") || "0")
  const type = searchParams.get("type") || "self"
  const id = searchParams.get("id") || ""

  // Determine result category based on score
  let resultCategory = "few"
  let resultColor = "text-green-500"

  if (score > 30 && score <= 60) {
    resultCategory = "several"
    resultColor = "text-yellow-500"
  } else if (score > 60) {
    resultCategory = "many"
    resultColor = "text-red-500"
  }

  // Generate recommendations based on score
  const recommendations = [
    {
      title: "Consider Professional Evaluation",
      description:
        "Based on your results, you may want to consider seeking a professional evaluation from a healthcare provider who specializes in autism spectrum disorders.",
      link: "/resources/find-professional",
    },
    {
      title: "Explore Support Resources",
      description:
        "We have resources tailored to your specific challenges that can help you better understand and navigate your experiences.",
      link: "/resources",
    },
    {
      title: "Connect with Community",
      description: "Many people find it helpful to connect with others who share similar experiences.",
      link: "/resources/community",
    },
  ]

  const dashboardLink = type === "loved-one" ? `/profile/loved-one/${id}` : "/profile/dashboard"

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 container max-w-4xl mx-auto px-4 py-8">
        <div className="space-y-8">
          <div>
            <h1 className="text-3xl font-bold text-primary">Assessment Results</h1>
            <p className="text-muted-foreground">Thank you for completing the assessment. Here are your results.</p>
          </div>

          <Card className="card">
            <CardHeader className="text-center bg-primary/10 rounded-t-[1rem]">
              <CardTitle className="text-2xl">Your Assessment Results</CardTitle>
              <CardDescription>Based on the DSM-5 criteria for autism spectrum disorder</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6 pt-6">
              <div className="text-center py-6">
                <p className="text-lg">
                  Based on your responses, {type === "loved-one" ? "your loved one fulfills" : "you fulfill"}{" "}
                  <span className={`font-bold ${resultColor}`}>{resultCategory}</span> indicators for Autism Spectrum
                  Disorder.
                </p>
                <p className="text-sm text-muted-foreground mt-2">
                  This is not a diagnosis. Only a qualified healthcare professional can provide a diagnosis.
                </p>
              </div>

              <div className="border-t pt-6">
                <h3 className="font-medium text-lg mb-4">Recommended Next Steps</h3>
                <div className="space-y-4">
                  {recommendations.map((rec, index) => (
                    <div
                      key={index}
                      className="border rounded-lg p-4 hover:border-primary hover:bg-primary/5 transition-colors"
                    >
                      <h4 className="font-medium">{rec.title}</h4>
                      <p className="text-sm text-muted-foreground my-2">{rec.description}</p>
                      <Link href={rec.link}>
                        <Button variant="link" size="sm" className="p-0 text-primary">
                          Learn more <ArrowRight className="ml-1 h-3 w-3" />
                        </Button>
                      </Link>
                    </div>
                  ))}
                </div>
              </div>
            </CardContent>
            <CardFooter className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="outline" className="w-full sm:w-auto rounded-xl">
                <Download className="mr-2 h-4 w-4" />
                Save Results
              </Button>
              <Button variant="outline" className="w-full sm:w-auto rounded-xl">
                <Share2 className="mr-2 h-4 w-4" />
                Share Results
              </Button>
              <Link href={dashboardLink} className="w-full sm:w-auto">
                <Button className="w-full btn-primary">Return to Dashboard</Button>
              </Link>
            </CardFooter>
          </Card>

          <Card className="card">
            <CardHeader className="bg-primary/10 rounded-t-[1rem]">
              <CardTitle>What These Results Mean</CardTitle>
              <CardDescription>Understanding your assessment results</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4 pt-6">
              <p>This screening tool is based on the DSM-5 criteria for autism spectrum disorder, which includes:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Persistent difficulties in social communication and interaction</li>
                <li>Restricted, repetitive patterns of behavior, interests, or activities</li>
                <li>
                  Symptoms present from early childhood (though they may not become fully apparent until social demands
                  exceed capacities)
                </li>
                <li>Symptoms cause significant impairment in functioning</li>
              </ul>
              <p className="mt-4">
                Your results indicate that {type === "loved-one" ? "your loved one experiences" : "you experience"}{" "}
                {resultCategory === "few" ? "a few" : resultCategory} of these characteristics. Remember that autism
                exists on a spectrum, and many people share some of these traits without having autism.
              </p>
              <p>
                Only a qualified healthcare professional can provide a diagnosis after a comprehensive evaluation. This
                assessment is meant to be a starting point for understanding{" "}
                {type === "loved-one" ? "your loved one" : "yourself"} better and determining if further evaluation
                might be helpful.
              </p>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  )
}
