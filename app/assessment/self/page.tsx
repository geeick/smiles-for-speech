"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Header } from "@/components/header"
import { Progress } from "@/components/ui/progress"
import { useToast } from "@/components/ui/use-toast"

export default function SelfAssessment() {
  const router = useRouter()
  const { toast } = useToast()
  const [currentSection, setCurrentSection] = useState(0)
  const [progress, setProgress] = useState(0)
  const [answers, setAnswers] = useState<Record<string, number>>({})
  const [isSubmitting, setIsSubmitting] = useState(false)

  // Define assessment sections based on DSM-5 domains
  const sections = [
    {
      title: "Social Communication",
      description: "These questions assess social interaction and communication skills.",
      questions: [
        {
          id: "social1",
          text: "I find it difficult to understand what other people are thinking or feeling.",
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
          text: "I find it hard to make new friends.",
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
          text: "I prefer to do things on my own rather than with others.",
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
          text: "I notice patterns in things all the time.",
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
          text: "I prefer to do things the same way over and over again.",
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
          text: "I find it very upsetting when my daily routine is disrupted.",
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
      description: "These questions assess your sensitivity to sensory input.",
      questions: [
        {
          id: "sensory1",
          text: "I am often overwhelmed by sensory input (lights, sounds, textures).",
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
          text: "Certain sounds, textures, or lights bother me more than they seem to bother others.",
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
          text: "I notice small sounds that others don't seem to notice.",
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
      title: "Executive Function",
      description: "These questions assess planning, organization, and task management.",
      questions: [
        {
          id: "executive1",
          text: "I find it difficult to switch from one task to another.",
          options: [
            { value: 0, label: "Strongly Disagree" },
            { value: 1, label: "Disagree" },
            { value: 2, label: "Neutral" },
            { value: 3, label: "Agree" },
            { value: 4, label: "Strongly Agree" },
          ],
        },
        {
          id: "executive2",
          text: "I struggle with organizing my time and meeting deadlines.",
          options: [
            { value: 0, label: "Strongly Disagree" },
            { value: 1, label: "Disagree" },
            { value: 2, label: "Neutral" },
            { value: 3, label: "Agree" },
            { value: 4, label: "Strongly Agree" },
          ],
        },
        {
          id: "executive3",
          text: "I find it hard to 'read between the lines' when someone is talking to me.",
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

  // Calculate category scores
  const calculateCategoryScores = () => {
    const categoryScores: Record<string, { score: number; maxScore: number }> = {}

    sections.forEach((section) => {
      const sectionId = section.title.toLowerCase().replace(/\s+/g, "_")
      let sectionScore = 0
      let sectionMaxScore = section.questions.length * 4 // Max score per question is 4

      section.questions.forEach((question) => {
        if (answers[question.id] !== undefined) {
          sectionScore += answers[question.id]
        }
      })

      categoryScores[sectionId] = {
        score: sectionScore,
        maxScore: sectionMaxScore
      }
    })

    return categoryScores
  }

  const saveAssessmentToDB = async (
    totalScore: number, 
    maxPossibleScore: number, 
    scorePercentage: number
  ) => {
    try {
      setIsSubmitting(true)
      
      const categoryScores = calculateCategoryScores()
      
      const response = await fetch('/api/assessment/save', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          answers,
          totalScore,
          maxPossibleScore,
          scorePercentage,
          categories: categoryScores,
          assessmentType: 'self'
        }),
      })

      if (!response.ok) {
        throw new Error('Failed to save assessment results')
      }

      const data = await response.json()
      return data
    } catch (error) {
      console.error('Error saving assessment:', error)
      toast({
        title: "Error",
        description: "Failed to save your assessment results. Your results will still be shown, but may not be saved to your profile.",
        variant: "destructive",
      })
      return null
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleNext = async () => {
    // Check if all questions in current section are answered
    const currentQuestions = sections[currentSection].questions
    const allAnswered = currentQuestions.every((q) => answers[q.id] !== undefined)

    if (!allAnswered) {
      toast({
        title: "Please complete all questions",
        description: "Please answer all questions before proceeding.",
        variant: "destructive",
      })
      return
    }

    if (currentSection < sections.length - 1) {
      setCurrentSection((prev) => prev + 1)
      setProgress(Math.round(((currentSection + 1) / sections.length) * 100))
    } else {
      // Calculate results
      const totalScore = Object.values(answers).reduce((sum, val) => sum + val, 0)
      const maxPossibleScore = sections.reduce((sum, section) => sum + section.questions.length * 4, 0)
      const scorePercentage = (totalScore / maxPossibleScore) * 100

      // Save to database
      const saveResult = await saveAssessmentToDB(totalScore, maxPossibleScore, scorePercentage)
      
      // Navigate to results page with score
      router.push(`/assessment/results?score=${scorePercentage.toFixed(0)}${saveResult?.assessmentId ? `&id=${saveResult.assessmentId}` : ''}`)
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
            <h1 className="text-3xl font-bold">Self-Assessment Questionnaire</h1>
            <p className="text-muted-foreground">
              Based on DSM-5 criteria for autism spectrum disorder. This is not a diagnostic tool.
            </p>
          </div>

          <div className="space-y-2">
            <div className="flex justify-between text-sm">
              <span>Progress</span>
              <span>{progress}%</span>
            </div>
            <Progress value={progress} className="h-2" />
          </div>

          <Card>
            <CardHeader>
              <CardTitle>{currentSectionData.title}</CardTitle>
              <CardDescription>{currentSectionData.description}</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
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
              <Button variant="outline" onClick={handlePrevious} disabled={currentSection === 0}>
                Previous
              </Button>
              <Button onClick={handleNext} disabled={isSubmitting}>
                {currentSection < sections.length - 1 ? "Next" : isSubmitting ? "Saving..." : "Complete Assessment"}
              </Button>
            </CardFooter>
          </Card>
        </div>
      </main>
    </div>
  )
}