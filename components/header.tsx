"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { useSession } from "next-auth/react"

export function Header() {
  const { data: session, status } = useSession()

  return (
    <header className="border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 w-full">
      <div className="container mx-auto flex flex-wrap items-center justify-between px-4 py-3">
        {/* Logo / Title */}
        <Link href="/" className="flex-shrink-0 text-primary text-lg font-bold truncate max-w-[60%] sm:max-w-none">
          Early Smiles
        </Link>

        {/* Nav */}
        <nav className="flex flex-wrap items-center gap-2 sm:gap-4 mt-2 sm:mt-0">
          <Link href="/resources">
            <Button variant="ghost" className="text-sm sm:text-base px-3">Resources</Button>
          </Link>
          <Link href="/about">
            <Button variant="ghost" className="text-sm sm:text-base px-3">About Us</Button>
          </Link>
          {status !== "loading" && (
            session ? (
              <Link href={`/profile/${session.user?.id || "dashboard"}`}>
                <Button variant="ghost" className="text-sm sm:text-base px-3">Profile</Button>
              </Link>
            ) : (
              <Link href="profile/login">
                <Button variant="outline" className="text-sm sm:text-base px-3">Login</Button>
              </Link>
            )
          )}
        </nav>
      </div>
    </header>
  )
}
