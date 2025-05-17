import type React from "react"
import type { Metadata } from "next"
import { Raleway } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"

const raleway = Raleway({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-raleway",
})

export const metadata: Metadata = {
  title: "Smiles for Speech - Empowering Children with Special Needs",
  description:
    "A nonprofit organization founded in 2017 to empower children with special needs in underserved communities through access to therapy services and educational resources.",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${raleway.variable} font-sans`}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
