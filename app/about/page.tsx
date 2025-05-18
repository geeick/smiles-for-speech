import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Header } from "@/components/header"

export default function About() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 container max-w-4xl mx-auto px-4 py-8">
        <div className="space-y-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold">About Smiles for Speech</h1>
            <p className="text-xl text-muted-foreground mt-2">Empowering children with special needs since 2017</p>
          </div>

          <Card>
            <CardHeader>
              <CardTitle>Our Mission</CardTitle>
              <CardDescription>What drives our work</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <p>
               Since 2017, Smiles for Speech is a nonprofit organization dedicated to providing children with special needs in underserved 
               communities access to essential therapy services and educational resources. 
              </p>
              <p>
              Their mission is to empower these children by improving their communication skills and overall quality of life through speech therapy, occupational therapy, and other supportive services. 
              Their aim is to bridge the gap in access to these vital resources, ensuring that every child has the opportunity to reach their full potential.
              </p>
            </CardContent>
          </Card>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Problem statement: </CardTitle>
                <CardDescription>What led to the development of this app</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="list-disc pl-6 space-y-2">
                  <li>
                    <strong>Accessibility:</strong> Many areas in Ghana may have limited access to specialized healthcare professionals who can diagnose autism. An app can provide a more accessible tool for parents and caregivers to identify early signs.
                  </li>
                  <li>
                    <strong>Early Intervention:</strong> Early detection of autism is crucial for effective intervention. An app can help parents and caregivers recognize signs earlier, leading to earlier support and better outcomes for children.
                  </li>
                  <li>
                    <strong>Awareness and Education:</strong> An app can also serve as an educational resource, increasing awareness about autism and reducing stigma. It can provide valuable information on what autism is and how to support individuals with autism.
                  </li>
                  <li>
                    <strong>Data Collection:</strong> An app can help collect data on autism prevalence and characteristics in Ghana, contributing to better understanding and planning for resources and support services.
                  </li>
                </ul>
                <p>
                  Overall, an app screening tool can play a significant role in improving autism awareness, diagnosis, and support in Ghana.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Solution statement</CardTitle>
                <CardDescription>How we make a difference</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <p>
                  This innovative app is designed to empower parents by providing early identification and information regarding potential developmental concerns in their children, specifically focusing on early signs of Autism. By leveraging cutting-edge technology and evidence-based research, this tool will facilitate timely intervention and support, ultimately enhancing the developmental outcomes and quality of life for children and their families. This can include features like
                </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  <strong>User Profiles:</strong> Allow users to create profiles for different individuals, especially if the app is used by parents or caregivers for multiple children.
                </li>
                <li>
                  <strong>Results and Recommendations:</strong> Provide users with a summary of the results and suggest next steps, such as consulting a healthcare professional for a comprehensive evaluation.
                </li>
                <li>
                  <strong>Resources and Support:</strong> Include educational resources about Autism and links to support groups or further reading.
                </li>
                <li>
                  <strong>Privacy and Security:</strong> Implement robust data protection measures to ensure user privacy and comply with regulations like GDPR or HIPAA.
                </li>
              </ul>
              </CardContent>
            </Card>
          </div>

          <Card>

            <CardContent className="space-y-4">
              <div className="mt-6 text-center">
                <Link href="/profile/create">
                  <Button size="lg">Join Our Community</Button>
                </Link>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  )
}
