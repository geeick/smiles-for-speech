import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Header } from "@/components/header"
import Image from "next/image"

export default function CaregiverSelfCare() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 container max-w-4xl mx-auto px-4 py-8">
        <div className="space-y-8">
          <div>
            <h1 className="text-3xl font-bold text-primary">Self-Care for Caregivers</h1>
            <p className="text-muted-foreground">
              Resources and strategies to help you maintain your own wellbeing while caring for others.
            </p>
          </div>

          <div className="flex justify-center mb-8">
            <Image
              src="/self-care.png?height=200&width=200"
              alt="Self-care illustration"
              width={200}
              height={200}
              className="rounded-full bg-primary/10"
            />
          </div>

          <Card className="card">
            <CardHeader className="bg-primary/10 rounded-t-[1rem]">
              <CardTitle>Why Caregiver Self-Care Matters</CardTitle>
              <CardDescription>Understanding the importance of caring for yourself</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4 pt-6">
              <p>
                Caring for a child with special needs can be rewarding, but it can also be physically and emotionally
                demanding. As a caregiver, you may be so focused on your loved one's needs that you neglect your own
                wellbeing.
              </p>
              <p>
                Self-care isn't selfish—it's essential. When you take care of your own physical, emotional, and mental
                health, you're better able to provide quality care for your loved one. Think of it like the airplane
                oxygen mask instructions: you need to secure your own mask before helping others.
              </p>
              <p>Research shows that caregivers who practice regular self-care experience:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Reduced stress and anxiety</li>
                <li>Better physical health</li>
                <li>Improved mood and emotional resilience</li>
                <li>Enhanced ability to cope with challenges</li>
                <li>Greater patience and presence with their loved ones</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="card">
            <CardHeader className="bg-primary/10 rounded-t-[1rem]">
              <CardTitle>Physical Self-Care Strategies</CardTitle>
              <CardDescription>Taking care of your body</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4 pt-6">
              <p>
                Physical self-care forms the foundation of your overall wellbeing. Even small changes can make a big
                difference.
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  <strong>Sleep:</strong> Prioritize sleep whenever possible. If your child's sleep patterns are
                  irregular, try to nap when they do or ask a partner, family member, or friend to take a shift.
                </li>
                <li>
                  <strong>Nutrition:</strong> Keep healthy, easy-to-grab snacks on hand. Prepare simple meals in advance
                  when you have time. Stay hydrated throughout the day.
                </li>
                <li>
                  <strong>Movement:</strong> Find ways to incorporate movement into your day, even if it's just a
                  10-minute walk or stretching while watching TV. Consider activities you can do with your child.
                </li>
                <li>
                  <strong>Medical care:</strong> Keep up with your own medical appointments and preventive care. Your
                  health matters too.
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card className="card">
            <CardHeader className="bg-primary/10 rounded-t-[1rem]">
              <CardTitle>Emotional Self-Care Strategies</CardTitle>
              <CardDescription>Nurturing your emotional wellbeing</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4 pt-6">
              <p>
                Caring for a child with special needs can bring up a range of emotions, from joy and love to
                frustration, grief, and guilt. Acknowledging and addressing these feelings is important.
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  <strong>Journaling:</strong> Set aside a few minutes each day to write down your thoughts and
                  feelings. This can help process emotions and identify patterns.
                </li>
                <li>
                  <strong>Mindfulness:</strong> Practice being present in the moment through meditation, deep breathing,
                  or simply focusing on your senses during everyday activities.
                </li>
                <li>
                  <strong>Creative expression:</strong> Find outlets for emotional expression through art, music,
                  writing, or other creative activities.
                </li>
                <li>
                  <strong>Professional support:</strong> Consider working with a therapist or counselor who understands
                  the unique challenges of caregiving.
                </li>
                <li>
                  <strong>Boundaries:</strong> Learn to set healthy boundaries with others and with yourself. It's okay
                  to say no.
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card className="card">
            <CardHeader className="bg-primary/10 rounded-t-[1rem]">
              <CardTitle>Social Self-Care Strategies</CardTitle>
              <CardDescription>Maintaining connections and support</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4 pt-6">
              <p>
                Social isolation is common among caregivers, but maintaining connections is vital for your wellbeing.
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  <strong>Support groups:</strong> Connect with other parents and caregivers who understand your
                  experiences, either in person or online.
                </li>
                <li>
                  <strong>Maintain friendships:</strong> Make time for relationships, even if it's just a quick phone
                  call or text message. Be honest with friends about what you need.
                </li>
                <li>
                  <strong>Ask for help:</strong> Create a list of specific ways others can help, so when someone offers,
                  you have concrete suggestions.
                </li>
                <li>
                  <strong>Respite care:</strong> Arrange for trusted caregivers to provide breaks so you can recharge.
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card className="card">
            <CardHeader className="bg-primary/10 rounded-t-[1rem]">
              <CardTitle>Creating a Sustainable Self-Care Plan</CardTitle>
              <CardDescription>Making self-care a regular part of your life</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4 pt-6">
              <p>
                The most effective self-care is consistent and realistic for your life. Start small and build gradually.
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  <strong>Identify your needs:</strong> What areas of self-care are most lacking in your life right now?
                  What would make the biggest difference?
                </li>
                <li>
                  <strong>Start small:</strong> Begin with just 5-10 minutes of self-care daily. Small, consistent
                  actions are more sustainable than occasional big efforts.
                </li>
                <li>
                  <strong>Schedule it:</strong> Put self-care activities on your calendar and treat them as important
                  appointments.
                </li>
                <li>
                  <strong>Involve your family:</strong> Talk to your partner, other children, or extended family about
                  why self-care matters and how they can support you.
                </li>
                <li>
                  <strong>Adjust as needed:</strong> Be flexible and willing to adapt your self-care plan as
                  circumstances change.
                </li>
              </ul>
              <p className="mt-4">
                Remember that self-care looks different for everyone. What matters is finding what works for you and
                making it a priority in your life.
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
