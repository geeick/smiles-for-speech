"use client"

import { useEffect, useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { UsersIcon, UserIcon, ShieldIcon } from 'lucide-react'

interface DashboardHeaderProps {
  selfProfileCount: number
  lovedOnesCount: number
}

function DashboardHeader({ selfProfileCount, lovedOnesCount }: DashboardHeaderProps) {
  const totalUsers = selfProfileCount + lovedOnesCount
  
  return (
    <div>
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Admin Dashboard</h1>
          <p className="text-muted-foreground mt-1">
            View statistics for consenting users and their loved ones
          </p>
        </div>
        <div className="mt-4 md:mt-0">
          <div className="inline-flex items-center rounded-lg bg-muted px-3 py-1 text-sm font-medium">
            <ShieldIcon className="mr-1 h-4 w-4" />
            Admin Access
          </div>
        </div>
      </div>
      
      <div className="grid gap-4 md:grid-cols-3">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Consenting Users</CardTitle>
            <UsersIcon className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{totalUsers}</div>
            <p className="text-xs text-muted-foreground">
              Users who have provided consent for data analysis
            </p>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Self Profiles</CardTitle>
            <UserIcon className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{selfProfileCount}</div>
            <p className="text-xs text-muted-foreground">
              Individual users with consent
            </p>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Loved Ones</CardTitle>
            <UsersIcon className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{lovedOnesCount}</div>
            <p className="text-xs text-muted-foreground">
              Loved ones with caretaker consent
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

export default function AdminDashboardPage() {
  const [counts, setCounts] = useState({ selfProfileCount: 0, lovedOnesCount: 0 })

  useEffect(() => {
    async function fetchCounts() {
      const res = await fetch("/api/admin/consented-counts")
      const data = await res.json()
      setCounts(data)
    }

    fetchCounts()
  }, [])

  return (
    <main className="p-6">
      <DashboardHeader
        selfProfileCount={counts.selfProfileCount}
        lovedOnesCount={counts.lovedOnesCount}
      />
    </main>
  )
}
