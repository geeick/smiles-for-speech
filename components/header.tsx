import Link from "next/link"
import { Button } from "@/components/ui/button"

export function Header() {
  return (
    <header className="border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <Link href="/" className="flex items-center gap-2 font-semibold">
          <span className="text-primary text-xl">Smiles for Speech</span>
        </Link>
        <nav className="flex items-center gap-4">
          <Link href="/resources">
            <Button variant="ghost">Resources</Button>
          </Link>
          <Link href="/about">
            <Button variant="ghost">About Us</Button>
          </Link>
          <Link href="/profile/dashboard">
            <Button variant="ghost">Profile</Button>
          </Link>
          <Link href="/profile/login">
            <Button variant="outline">Login</Button>
          </Link>
        </nav>
      </div>
    </header>
  )
}
