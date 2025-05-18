'use client'

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
// Remove these imports if you don't have SelfProfile and LovedOne types in @prisma/client
// import { SelfProfile, LovedOne } from "@prisma/client"
import { PieChart, Pie, BarChart, Bar, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer, Cell } from 'recharts'

interface StatisticsOverviewProps {
    selfProfiles: any[] // Use 'any' if you don't have the types
    lovedOnes: any[]
}

export default function StatisticsOverview({ selfProfiles, lovedOnes }: StatisticsOverviewProps) {
    // Combine data for overview statistics
    const allUsers = [...(selfProfiles || []), ...(lovedOnes || [])]
    
    // Age distribution
    const ageGroups = {
        'Under 18': 0,
        '18-30': 0,
        '31-45': 0,
        '46-60': 0,
        'Over 60': 0
    }
    
    if (allUsers && allUsers.length > 0) {
        allUsers.forEach(user => {
            const age = 'age' in user ? user.age : 0
            
            if (age < 18) ageGroups['Under 18']++
            else if (age >= 18 && age <= 30) ageGroups['18-30']++
            else if (age >= 31 && age <= 45) ageGroups['31-45']++
            else if (age >= 46 && age <= 60) ageGroups['46-60']++
            else ageGroups['Over 60']++
        })
    }
    
    const ageData = Object.entries(ageGroups).map(([name, value]) => ({ name, value }))
    
    // Gender distribution
    const genderCount = { Male: 0, Female: 0, Other: 0 }
    
    if (allUsers && allUsers.length > 0) {
        allUsers.forEach(user => {
            const sex = 'sex' in user ? user.sex : ''
            if (sex === 'Male') genderCount.Male++
            else if (sex === 'Female') genderCount.Female++
            else genderCount.Other++
        })
    }
    
    const genderData = Object.entries(genderCount).map(([name, value]) => ({ name, value }))
    
    // Location distribution (top 5)
    const locationCount: Record<string, number> = {}
    
    if (allUsers && allUsers.length > 0) {
        allUsers.forEach(user => {
            const location = 'location' in user ? user.location : null
            if (location) {
                locationCount[location] = (locationCount[location] || 0) + 1
            }
        })
    }
    
    const locationData = Object.entries(locationCount)
        .sort((a, b) => b[1] - a[1])
        .slice(0, 5)
        .map(([name, value]) => ({ name, value }))
    
    // Colors for charts
    const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#8884D8']
    
    return (
        <div className="grid gap-6">
            <Card>
                <CardHeader>
                    <CardTitle>Overview Statistics</CardTitle>
                    <CardDescription>
                        Combined statistics for all consenting users
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <Tabs defaultValue="age">
                        <TabsList className="grid w-full grid-cols-3">
                            <TabsTrigger value="age">Age Distribution</TabsTrigger>
                            <TabsTrigger value="gender">Gender Distribution</TabsTrigger>
                            <TabsTrigger value="location">Top Locations</TabsTrigger>
                        </TabsList>
                        
                        <TabsContent value="age" className="mt-4">
                            <div className="h-[400px] w-full">
                                <ResponsiveContainer width="100%" height="100%">
                                    <PieChart>
                                        <Pie
                                            data={ageData}
                                            cx="50%"
                                            cy="50%"
                                            labelLine={true}
                                            label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
                                            outerRadius={150}
                                            fill="#8884d8"
                                            dataKey="value"
                                        >
                                            {ageData.map((entry, index) => (
                                                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                                            ))}
                                        </Pie>
                                        <Tooltip formatter={(value) => [`${value} users`, 'Count']} />
                                        <Legend />
                                    </PieChart>
                                </ResponsiveContainer>
                            </div>
                        </TabsContent>
                        
                        <TabsContent value="gender" className="mt-4">
                            <div className="h-[400px] w-full">
                                <ResponsiveContainer width="100%" height="100%">
                                    <PieChart>
                                        <Pie
                                            data={genderData}
                                            cx="50%"
                                            cy="50%"
                                            labelLine={true}
                                            label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
                                            outerRadius={150}
                                            fill="#8884d8"
                                            dataKey="value"
                                        >
                                            {genderData.map((entry, index) => (
                                                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                                            ))}
                                        </Pie>
                                        <Tooltip formatter={(value) => [`${value} users`, 'Count']} />
                                        <Legend />
                                    </PieChart>
                                </ResponsiveContainer>
                            </div>
                        </TabsContent>
                        
                        <TabsContent value="location" className="mt-4">
                            <div className="h-[400px] w-full">
                                <ResponsiveContainer width="100%" height="100%">
                                    <BarChart
                                        data={locationData}
                                        layout="vertical"
                                        margin={{ top: 20, right: 30, left: 60, bottom: 5 }}
                                    >
                                        <XAxis type="number" />
                                        <YAxis dataKey="name" type="category" />
                                        <Tooltip formatter={(value) => [`${value} users`, 'Count']} />
                                        <Legend />
                                        <Bar dataKey="value" fill="#8884d8">
                                            {locationData.map((entry, index) => (
                                                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                                            ))}
                                        </Bar>
                                    </BarChart>
                                </ResponsiveContainer>
                            </div>
                        </TabsContent>
                    </Tabs>
                </CardContent>
            </Card>
        </div>
    )
}
