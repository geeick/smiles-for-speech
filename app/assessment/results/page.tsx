"use client"

import { useEffect, useState } from "react"
import { useSearchParams } from "next/navigation"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Header } from "@/components/header"
import { ArrowRight, Download, Share2 } from "lucide-react"
import { useToast } from "@/components/ui/use-toast"

interface AssessmentData {
  id: string
  totalScore: number
  maxPossibleScore: number
  scorePercentage: number
  categories: Record<string, { score: number; maxScore: number }>
  date: string
  assessmentType: string
}

export default function AssessmentResults() {
  const searchParams = useSearchParams()
  const { toast } = useToast()
  const score = Number.parseInt(searchParams.get("score") || "0")
  const assessmentId = searchParams.get("id") || ""
  const type = searchParams.get("type") || "self"
  const lovedOneId = searchParams.get("lovedOneId") || ""
  
  const [assessmentData, setAssessmentData] = useState<AssessmentData | null>(null)
  const [loading, setLoading] = useState(false)
  
  // Fetch assessment data if we have an ID
  useEffect(() => {
    const fetchAssessmentData = async () => {
      if (!assessmentId) return
      
      setLoading(true)
      try {
        const response = await fetch(`/api/assessment/${assessmentId}`)
        if (!response.ok) {
          throw new Error('Failed to fetch assessment data')
        }
        
        const data = await response.json()
        setAssessmentData(data)
      } catch (error) {
        console.error('Error fetching assessment:', error)
        toast({
          title: "Error",
          description: "Failed to load assessment details.",
          variant: "destructive",
        })
      } finally {
        setLoading(false)
      }
    }
    
    fetchAssessmentData()
  }, [assessmentId, toast])

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

  const dashboardLink = type === "loved-one" ? `/profile/loved-one/${lovedOneId}` : "/profile/dashboard"
  
  // Function to handle downloading results as PDF
  const handleDownload = async () => {
    try {
      toast({
        title: "Downloading",
        description: "Preparing your assessment results for download...",
      })
      
      const response = await fetch(`/api/assessment/download?id=${assessmentId}`)
      
      if (!response.ok) {
        throw new Error('Failed to generate PDF')
      }
      
      // Get the blob from the response
      const blob = await response.blob()
      
      // Create a URL for the blob
      const url = window.URL.createObjectURL(blob)
      
      // Create a link element
      const a = document.createElement('a')
      a.href = url
      a.download = `assessment-results-${new Date().toISOString().split('T')[0]}.pdf`
      
      // Append to the document, click it, and remove it
      document.body.appendChild(a)
      a.click()
      window.URL.revokeObjectURL(url)
      document.body.removeChild(a)
      
      toast({
        title: "Download Complete",
        description: "Your assessment results have been downloaded.",
      })
    } catch (error) {
      console.error('Error downloading results:', error)
      toast({
        title: "Error",
        description: "Failed to download your assessment results.",
        variant: "destructive",
      })
    }
  }
  
  // Function to handle sharing results
  const handleShare = async () => {
    try {
      if (!assessmentId) {
        toast({
          title: "Cannot Share",
          description: "This assessment hasn't been saved to your account.",
          variant: "destructive",
        })
        return
      }
      
      const shareResponse = await fetch('/api/assessment/share', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ assessmentId }),
      })
      
      if (!shareResponse.ok) {
        throw new Error('Failed to create shareable link')
      }
      
      const { shareableLink } = await shareResponse.json()
      
      // Copy link to clipboard
      await navigator.clipboard.writeText(shareableLink)
      
      toast({
        title: "Link Copied",
        description: "A shareable link to your results has been copied to your clipboard.",
      })
    } catch (error) {
      console.error('Error sharing results:', error)
      toast({
        title: "Error",
        description: "Failed to create a shareable link.",
        variant: "destructive",
      })
    }
  }

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
              {assessmentData?.date && (
                <p className="text-sm text-muted-foreground mt-1">
                  Assessment completed on {new Date(assessmentData.date).toLocaleDateString()}
                </p>
              )}
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

              {assessmentData?.categories && (
                <div className="border rounded-lg p-4">
                  <h3 className="font-medium mb-4">Category Breakdown</h3>
                  <div className="space-y-3">
                    {Object.entries(assessmentData.categories).map(([key, data]) => {
                      const categoryName = key.replace(/_/g, ' ')
                      const categoryScore = Math.round((data.score / data.maxScore) * 100)
                      let categoryColor = "bg-green-500"
                      
                      if (categoryScore > 30 && categoryScore <= 60) {
                        categoryColor = "bg-yellow-500"
                      } else if (categoryScore > 60) {
                        categoryColor = "bg-red-500"
                      }
                      
                      return (
                        <div key={key} className="space-y-1">
                          <div className="flex justify-between text-sm">
                            <span className="capitalize">{categoryName}</span>
                            <span>{categoryScore}%</span>
                          </div>
                          <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
                            <div 
                              className={`h-full ${categoryColor}`} 
                              style={{ width: `${categoryScore}%` }}
                            />
                          </div>
                        </div>
                      )
                    })}
                  </div>
                </div>
              )}

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
              <Button 
                variant="outline" 
                className="w-full sm:w-auto rounded-xl"
                onClick={handleDownload}
                disabled={!assessmentId || loading}
              >
                <Download className="mr-2 h-4 w-4" />
                Save Results
              </Button>
              <Button 
                variant="outline" 
                className="w-full sm:w-auto rounded-xl"
                onClick={handleShare}
                disabled={!assessmentId || loading}
              >
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