"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Header } from "@/components/header"

export default function CreateProfile() {
  const router = useRouter()
  const [step, setStep] = useState(1)
  const [consent, setConsent] = useState("")

  const handleNext = () => {
    if (step === 1) {
      if (!consent) {
        alert("Please select an option for data contribution consent.")
        return
      }
      setStep(2)
    }
  }

  const handleProfileType = (type: "self" | "caretaker") => {
    if (type === "self") {
      router.push("/profile/create/self")
    } else {
      router.push("/profile/create/caretaker")
    }
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 container max-w-md mx-auto px-4 py-12">
        {step === 1 ? (
          <Card className="card">
            <CardHeader className="bg-primary/10 rounded-t-[1rem]">
              <CardTitle>Consent for Data Contribution</CardTitle>
              <CardDescription>
                Your privacy is important to us. Please read and decide if you would like to contribute.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4 pt-6">
              <div className="space-y-2">
                <p>
                  Would you like to share your information anonymously to help improve autism support in your region?
                </p>
                <p className="text-sm text-muted-foreground">
                  Your data will be anonymized and used only for research purposes to better understand autism
                  prevalence and needs in your community.
                </p>
                <div className="pt-4">
                  <RadioGroup value={consent} onValueChange={setConsent}>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="yes" id="consent-yes" />
                      <Label htmlFor="consent-yes">Yes, I consent to anonymous data sharing</Label>
                    </div>
                    <div className="flex items-center space-x-2 mt-2">
                      <RadioGroupItem value="no" id="consent-no" />
                      <Label htmlFor="consent-no">No, I do not consent to data sharing</Label>
                    </div>
                  </RadioGroup>
                </div>
              </div>
            </CardContent>
            <CardFooter>
              <Button onClick={handleNext} className="w-full btn-primary">
                Continue
              </Button>
            </CardFooter>
          </Card>
        ) : (
          <Card className="card">
            <CardHeader className="bg-primary/10 rounded-t-[1rem]">
              <CardTitle>Who is this profile for?</CardTitle>
              <CardDescription>Please select who you are creating this profile for.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4 pt-6">
              <div className="grid grid-cols-1 gap-4">
                <Button
                  variant="outline"
                  className="h-24 flex flex-col items-center justify-center rounded-xl border-2 hover:border-primary hover:bg-primary/5"
                  onClick={() => handleProfileType("self")}
                >
                  <span className="text-lg font-medium">Myself</span>
                  <span className="text-sm text-muted-foreground">I want to create a profile for myself</span>
                </Button>
                <Button
                  variant="outline"
                  className="h-24 flex flex-col items-center justify-center rounded-xl border-2 hover:border-primary hover:bg-primary/5"
                  onClick={() => handleProfileType("caretaker")}
                >
                  <span className="text-lg font-medium">I'm a caregiver</span>
                  <span className="text-sm text-muted-foreground">I'm creating a profile for someone I care for</span>
                </Button>
              </div>
            </CardContent>
          </Card>
        )}
      </main>
    </div>
  )
}
