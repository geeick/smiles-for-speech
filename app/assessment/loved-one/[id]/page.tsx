"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Header } from "@/components/header"
import { Progress } from "@/components/ui/progress"
import Image from "next/image"
import { useEffect } from "react"

export default function LovedOneAssessment({ params }: { params: { id: string } }) {
  const router = useRouter()
  const [currentSection, setCurrentSection] = useState(0)
  const [progress, setProgress] = useState(0)
  const [answers, setAnswers] = useState<Record<string, number>>({})

  // Fetch loved one data from the database based on the ID
  // For demonstration, we'll use useEffect and fetch from an API route

  type LovedOne = {
    id: string
    name: string
    age: number
  }

  const [lovedOneData, setLovedOneData] = useState<LovedOne | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchLovedOne = async () => {
      setLoading(true)
      try {
        const res = await fetch(`/api/loved-ones/${params.id}`)
        if (!res.ok) throw new Error("Failed to fetch loved one data")
        const data = await res.json()
        setLovedOneData(data)
      } catch (error) {
        setLovedOneData({
          id: params.id,
          name: "Your loved one",
          age: 0,
        })
      } finally {
        setLoading(false)
      }
    }
    fetchLovedOne()
  }, [params.id])

  if (loading || !lovedOneData) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <span>Loading...</span>
      </div>
    )
  }

  // Define assessment sections based on DSM-5 domains for children
  const sections = [
    {
      title: "Social Communication",
      description: "These questions assess social interaction and communication skills.",
      questions: [
        {
          id: "social1",
          text: `${lovedOneData.name} has difficulty understanding what others are thinking or feeling.`,
          options: [
            { value: 0, label: "Strongly Disagree" },
            { value: 1, label: "Disagree" },
            { value: 2, label: "Neutral" },
            { value: 3, label: "Agree" },
            { value: 4, label: "Strongly Agree" },
          ],
        },
        {
          id: "social2",
          text: `${lovedOneData.name} has difficulty making friends.`,
          options: [
            { value: 0, label: "Strongly Disagree" },
            { value: 1, label: "Disagree" },
            { value: 2, label: "Neutral" },
            { value: 3, label: "Agree" },
            { value: 4, label: "Strongly Agree" },
          ],
        },
        {
          id: "social3",
          text: `${lovedOneData.name} prefers to play alone rather than with others.`,
          options: [
            { value: 0, label: "Strongly Disagree" },
            { value: 1, label: "Disagree" },
            { value: 2, label: "Neutral" },
            { value: 3, label: "Agree" },
            { value: 4, label: "Strongly Agree" },
          ],
        },
      ],
    },
    {
      title: "Repetitive Behaviors",
      description: "These questions assess patterns of behavior, interests, or activities.",
      questions: [
        {
          id: "repetitive1",
          text: `${lovedOneData.name} has strong attachments to specific objects or toys.`,
          options: [
            { value: 0, label: "Strongly Disagree" },
            { value: 1, label: "Disagree" },
            { value: 2, label: "Neutral" },
            { value: 3, label: "Agree" },
            { value: 4, label: "Strongly Agree" },
          ],
        },
        {
          id: "repetitive2",
          text: `${lovedOneData.name} becomes upset with changes in routine or transitions.`,
          options: [
            { value: 0, label: "Strongly Disagree" },
            { value: 1, label: "Disagree" },
            { value: 2, label: "Neutral" },
            { value: 3, label: "Agree" },
            { value: 4, label: "Strongly Agree" },
          ],
        },
        {
          id: "repetitive3",
          text: `${lovedOneData.name} engages in repetitive movements (e.g., hand flapping, rocking).`,
          options: [
            { value: 0, label: "Strongly Disagree" },
            { value: 1, label: "Disagree" },
            { value: 2, label: "Neutral" },
            { value: 3, label: "Agree" },
            { value: 4, label: "Strongly Agree" },
          ],
        },
      ],
    },
    {
      title: "Sensory Sensitivities",
      description: "These questions assess sensitivity to sensory input.",
      questions: [
        {
          id: "sensory1",
          text: `${lovedOneData.name} is bothered by certain sounds, textures, or lights.`,
          options: [
            { value: 0, label: "Strongly Disagree" },
            { value: 1, label: "Disagree" },
            { value: 2, label: "Neutral" },
            { value: 3, label: "Agree" },
            { value: 4, label: "Strongly Agree" },
          ],
        },
        {
          id: "sensory2",
          text: `${lovedOneData.name} has unusual reactions to sensory experiences (e.g., covers ears, avoids certain textures).`,
          options: [
            { value: 0, label: "Strongly Disagree" },
            { value: 1, label: "Disagree" },
            { value: 2, label: "Neutral" },
            { value: 3, label: "Agree" },
            { value: 4, label: "Strongly Agree" },
          ],
        },
        {
          id: "sensory3",
          text: `${lovedOneData.name} seeks out specific sensory experiences (e.g., spinning, deep pressure).`,
          options: [
            { value: 0, label: "Strongly Disagree" },
            { value: 1, label: "Disagree" },
            { value: 2, label: "Neutral" },
            { value: 3, label: "Agree" },
            { value: 4, label: "Strongly Agree" },
          ],
        },
      ],
    },
    {
      title: "Communication",
      description: "These questions assess verbal and non-verbal communication.",
      questions: [
        {
          id: "communication1",
          text: `${lovedOneData.name} has delayed speech or language development.`,
          options: [
            { value: 0, label: "Strongly Disagree" },
            { value: 1, label: "Disagree" },
            { value: 2, label: "Neutral" },
            { value: 3, label: "Agree" },
            { value: 4, label: "Strongly Agree" },
          ],
        },
        {
          id: "communication2",
          text: `${lovedOneData.name} has difficulty maintaining back-and-forth conversation.`,
          options: [
            { value: 0, label: "Strongly Disagree" },
            { value: 1, label: "Disagree" },
            { value: 2, label: "Neutral" },
            { value: 3, label: "Agree" },
            { value: 4, label: "Strongly Agree" },
          ],
        },
        {
          id: "communication3",
          text: `${lovedOneData.name} uses limited or no gestures to communicate (e.g., pointing, waving).`,
          options: [
            { value: 0, label: "Strongly Disagree" },
            { value: 1, label: "Disagree" },
            { value: 2, label: "Neutral" },
            { value: 3, label: "Agree" },
            { value: 4, label: "Strongly Agree" },
          ],
        },
      ],
    },
  ]

  const handleAnswer = (questionId: string, value: number) => {
    setAnswers((prev) => ({ ...prev, [questionId]: value }))
  }

  const handleNext = () => {
    // Check if all questions in current section are answered
    const currentQuestions = sections[currentSection].questions
    const allAnswered = currentQuestions.every((q) => answers[q.id] !== undefined)

    if (!allAnswered) {
      alert("Please answer all questions before proceeding.")
      return
    }

    if (currentSection < sections.length - 1) {
      setCurrentSection((prev) => prev + 1)
      setProgress(Math.round(((currentSection + 1) / sections.length) * 100))
    } else {
      // Calculate results and navigate to results page
      const totalScore = Object.values(answers).reduce((sum, val) => sum + val, 0)
      const maxPossibleScore = sections.reduce((sum, section) => sum + section.questions.length * 4, 0)
      const scorePercentage = (totalScore / maxPossibleScore) * 100

      // In a real app, you would save this data to a database
      console.log("Assessment completed with score:", totalScore, "out of", maxPossibleScore)

      // Navigate to results page with score
      router.push(`/assessment/results?score=${scorePercentage.toFixed(0)}&type=loved-one&id=${params.id}`)
    }
  }

  const handlePrevious = () => {
    if (currentSection > 0) {
      setCurrentSection((prev) => prev - 1)
      setProgress(Math.round(((currentSection - 1) / sections.length) * 100))
    }
  }

  const currentSectionData = sections[currentSection]

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 container max-w-3xl mx-auto px-4 py-8">
        <div className="space-y-8">
          <div>
            <h1 className="text-3xl font-bold text-primary">Assessment for {lovedOneData.name}</h1>
            <p className="text-muted-foreground">
              Based on DSM-5 criteria for autism spectrum disorder. This is not a diagnostic tool.
            </p>
          </div>

          <div className="space-y-2">
            <div className="flex justify-between text-sm">
              <span>Progress</span>
              <span>{progress}%</span>
            </div>
            <Progress value={progress} className="h-2 rounded-full bg-secondary" />
          </div>

          <Card className="card">
            <CardHeader className="bg-primary/10 rounded-t-[1rem]">
              <CardTitle>{currentSectionData.title}</CardTitle>
              <CardDescription>{currentSectionData.description}</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6 pt-6">
              {currentSectionData.questions.map((question, index) => (
                <div key={question.id} className="space-y-4">
                  <div className="space-y-2">
                    <Label>
                      {index + 1}. {question.text}
                    </Label>
                    <RadioGroup
                      value={answers[question.id]?.toString()}
                      onValueChange={(value) => handleAnswer(question.id, Number.parseInt(value))}
                      className="flex flex-col space-y-1 sm:flex-row sm:space-y-0 sm:space-x-4 pt-2"
                    >
                      {question.options.map((option) => (
                        <div key={option.value} className="flex items-center space-x-2">
                          <RadioGroupItem value={option.value.toString()} id={`${question.id}-${option.value}`} />
                          <Label htmlFor={`${question.id}-${option.value}`} className="text-sm">
                            {option.label}
                          </Label>
                        </div>
                      ))}
                    </RadioGroup>
                  </div>
                </div>
              ))}
            </CardContent>
            <CardFooter className="flex justify-between">
              <Button variant="outline" onClick={handlePrevious} disabled={currentSection === 0} className="rounded-xl">
                Previous
              </Button>
              <Button onClick={handleNext} className="btn-primary">
                {currentSection < sections.length - 1 ? "Next" : "Complete Assessment"}
              </Button>
            </CardFooter>
          </Card>
        </div>
      </main>
    </div>
  )
}
