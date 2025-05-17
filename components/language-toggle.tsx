"use client"

import * as React from "react"
import { Globe } from "lucide-react"

import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"

export function LanguageToggle() {
  const [language, setLanguage] = React.useState("English")

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="sm" className="gap-2">
          <Globe className="h-4 w-4" />
          {language}
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem onClick={() => setLanguage("English")}>English</DropdownMenuItem>
        <DropdownMenuItem onClick={() => setLanguage("Twi")}>Twi</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
