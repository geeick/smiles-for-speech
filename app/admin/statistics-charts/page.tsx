'use client'

import { useState } from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { SelfProfile, LovedOne } from "@prisma/client"
import { 
    PieChart, Pie, BarChart, Bar, XAxis, YAxis, Tooltip, Legend, 
    ResponsiveContainer, Cell, ScatterChart, Scatter, ZAxis 
} from 'recharts'

interface StatisticsChartsProps {
    data: any[]
    title: string
    type: 'selfProfile' | 'lovedOne'
}

export default function StatisticsCharts({ data, title, type }: StatisticsChartsProps) {
    const [ageFilter, setAgeFilter] = useState<string>('all')
    
    // Filter data based on age if filter is applied
    const filteredData = ageFilter === 'all' 
        ? data 
        : data.filter(item => {
                if (ageFilter === 'under18') return item.age < 18
                if (ageFilter === '18-30') return item.age >= 18 && item.age <= 30
                if (ageFilter === '31-45') return item.age >= 31 && item.age <= 45
                if (ageFilter === '46-60') return item.age >= 46 && item.age <= 60
                if (ageFilter === 'over60') return item.age > 60
                return true
            })
    
    // Age distribution
    const ageGroups = {
        'Under 18': 0,
        '18-30': 0,
        '31-45': 0,
        '46-60': 0,
        'Over 60': 0
    }
    
    Array.isArray(filteredData) && filteredData.forEach((user: any) => {
        if (user.age < 18) ageGroups['Under 18']++
        else if (user.age >= 18 && user.age <= 30) ageGroups['18-30']++
        else if (user.age >= 31 && user.age <= 45) ageGroups['31-45']++
        else if (user.age >= 46 && user.age <= 60) ageGroups['46-60']++
        else ageGroups['Over 60']++
    })
    
    const ageData = Object.entries(ageGroups).map(([name, value]) => ({ name, value }))
    
    // Gender distribution
    const genderCount = { Male: 0, Female: 0, Other: 0 }
    
    Array.isArray(filteredData) && filteredData.forEach((user: any) => {
        if (user.sex === 'Male') genderCount.Male++
        else if (user.sex === 'Female') genderCount.Female++
        else genderCount.Other++
    })
    
    const genderData = Object.entries(genderCount)
        .filter(([_, value]) => value > 0)
        .map(([name, value]) => ({ name, value }))
    
    // Diagnosis data
    const diagnosisData: Record<string, number> = {}
    
    if (type === 'selfProfile') {
        Array.isArray(filteredData) && filteredData.forEach((profile: SelfProfile) => {
            if (profile.diagnosis) {
                diagnosisData[profile.diagnosis] = (diagnosisData[profile.diagnosis] || 0) + 1
            } else {
                diagnosisData['Unspecified'] = (diagnosisData['Unspecified'] || 0) + 1
            }
        })
    } else {
        Array.isArray(filteredData) && filteredData.forEach((lovedOne: LovedOne) => {
            diagnosisData[lovedOne.diagnosisStatus] = (diagnosisData[lovedOne.diagnosisStatus] || 0) + 1
        })
    }
    
    const diagnosisChartData = Object.entries(diagnosisData)
        .map(([name, value]) => ({ name, value }))
        .sort((a, b) => b.value - a.value)
    
    // Seeking diagnosis data
    const seekingDiagnosisCount = { Yes: 0, No: 0 }
    
    if (type === 'selfProfile') {
        Array.isArray(filteredData) && filteredData.forEach((profile: SelfProfile) => {
            if (profile.seekingDiagnosis) seekingDiagnosisCount.Yes++
            else seekingDiagnosisCount.No++
        })
    } else {
        Array.isArray(filteredData) && filteredData.forEach((lovedOne: LovedOne) => {
            if (lovedOne.seekingSupport) seekingDiagnosisCount.Yes++
            else seekingDiagnosisCount.No++
        })
    }
    
    const seekingDiagnosisData = Object.entries(seekingDiagnosisCount)
        .map(([name, value]) => ({ name, value }))
    
    // Challenges data (for SelfProfile only)
    const challengesData: Record<string, number> = {}
    
    if (type === 'selfProfile') {
        Array.isArray(filteredData) && filteredData.forEach((profile: SelfProfile) => {
            Array.isArray(profile.challenges) && profile.challenges.forEach(challenge => {
                challengesData[challenge] = (challengesData[challenge] || 0) + 1
            })
        })
    }
    
    const challengesChartData = Object.entries(challengesData)
        .map(([name, value]) => ({ name, value }))
        .sort((a, b) => b.value - a.value)
        .slice(0, 10) // Top 10 challenges
    
    // Location data
    const locationCount: Record<string, number> = {}
    
    Array.isArray(filteredData) && filteredData.forEach((user: any) => {
        if (user.location) {
            locationCount[user.location] = (locationCount[user.location] || 0) + 1
        } else {
            locationCount['Unspecified'] = (locationCount['Unspecified'] || 0) + 1
        }
    })
    
    const locationData = Object.entries(locationCount)
        .map(([name, value]) => ({ name, value }))
        .sort((a, b) => b.value - a.value)
        .slice(0, 10) // Top 10 locations
    
    // Age vs Diagnosis scatter plot data
    const scatterData: { age: number; diagnosis: string; count: number }[] = []
    
    if (type === 'selfProfile') {
        Array.isArray(filteredData) && filteredData.forEach((profile: SelfProfile) => {
            const diagnosis = profile.diagnosis || 'Unspecified'
            const existingPoint = scatterData.find(
                point => point.age === profile.age && point.diagnosis === diagnosis
            )
            
            if (existingPoint) {
                existingPoint.count++
            } else {
                scatterData.push({ age: profile.age, diagnosis, count: 1 })
            }
        })
    } else {
        Array.isArray(filteredData) && filteredData.forEach((lovedOne: LovedOne) => {
            const existingPoint = scatterData.find(
                point => point.age === lovedOne.age && point.diagnosis === lovedOne.diagnosisStatus
            )
            
            if (existingPoint) {
                existingPoint.count++
            } else {
                scatterData.push({ age: lovedOne.age, diagnosis: lovedOne.diagnosisStatus, count: 1 })
            }
        })
    }
    
    // Colors for charts
    const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#8884D8', '#82ca9d', '#ffc658', '#8dd1e1', '#a4de6c', '#d0ed57']
    
    return (
        <div className="space-y-6">
            <div className="flex justify-between items-center">
                <h2 className="text-2xl font-bold">{title}</h2>
                <Select value={ageFilter} onValueChange={setAgeFilter}>
                    <SelectTrigger className="w-[180px]">
                        <SelectValue placeholder="Filter by age" />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectItem value="all">All Ages</SelectItem>
                        <SelectItem value="under18">Under 18</SelectItem>
                        <SelectItem value="18-30">18-30</SelectItem>
                        <SelectItem value="31-45">31-45</SelectItem>
                        <SelectItem value="46-60">46-60</SelectItem>
                        <SelectItem value="over60">Over 60</SelectItem>
                    </SelectContent>
                </Select>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Age Distribution */}
                <Card>
                    <CardHeader>
                        <CardTitle>Age Distribution</CardTitle>
                        <CardDescription>
                            Age groups of {type === 'selfProfile' ? 'self profiles' : 'loved ones'}
                        </CardDescription>
                    </CardHeader>
                    <CardContent>
                        <div className="h-[300px]">
                            <ResponsiveContainer width="100%" height="100%">
                                <PieChart>
                                    <Pie
                                        data={ageData}
                                        cx="50%"
                                        cy="50%"
                                        labelLine={true}
                                        label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
                                        outerRadius={100}
                                        fill="#8884d8"
                                        dataKey="value"
                                    >
                                        {ageData.map((entry, index) => (
                                            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                                        ))}
                                    </Pie>
                                    <Tooltip formatter={(value) => [`${value} users`, 'Count']} />
                                </PieChart>
                            </ResponsiveContainer>
                        </div>
                    </CardContent>
                </Card>
                
                {/* Gender Distribution */}
                <Card>
                    <CardHeader>
                        <CardTitle>Gender Distribution</CardTitle>
                        <CardDescription>
                            Gender breakdown of {type === 'selfProfile' ? 'self profiles' : 'loved ones'}
                        </CardDescription>
                    </CardHeader>
                    <CardContent>
                        <div className="h-[300px]">
                            <ResponsiveContainer width="100%" height="100%">
                                <PieChart>
                                    <Pie
                                        data={genderData}
                                        cx="50%"
                                        cy="50%"
                                        labelLine={true}
                                        label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
                                        outerRadius={100}
                                        fill="#8884d8"
                                        dataKey="value"
                                    >
                                        {genderData.map((entry, index) => (
                                            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                                        ))}
                                    </Pie>
                                    <Tooltip formatter={(value) => [`${value} users`, 'Count']} />
                                </PieChart>
                            </ResponsiveContainer>
                        </div>
                    </CardContent>
                </Card>
                
                {/* Diagnosis Distribution */}
                <Card>
                    <CardHeader>
                        <CardTitle>Diagnosis Distribution</CardTitle>
                        <CardDescription>
                            {type === 'selfProfile' ? 'Diagnoses reported by users' : 'Diagnosis status of loved ones'}
                        </CardDescription>
                    </CardHeader>
                    <CardContent>
                        <div className="h-[300px]">
                            <ResponsiveContainer width="100%" height="100%">
                                <BarChart
                                    data={diagnosisChartData}
                                    layout="vertical"
                                    margin={{ top: 5, right: 30, left: 80, bottom: 5 }}
                                >
                                    <XAxis type="number" />
                                    <YAxis dataKey="name" type="category" width={80} />
                                    <Tooltip formatter={(value) => [`${value} users`, 'Count']} />
                                    <Bar dataKey="value" fill="#8884d8">
                                        {diagnosisChartData.map((entry, index) => (
                                            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                                        ))}
                                    </Bar>
                                </BarChart>
                            </ResponsiveContainer>
                        </div>
                    </CardContent>
                </Card>
                
                {/* Seeking Diagnosis/Support */}
                <Card>
                    <CardHeader>
                        <CardTitle>
                            {type === 'selfProfile' ? 'Seeking Diagnosis' : 'Seeking Support'}
                        </CardTitle>
                        <CardDescription>
                            {type === 'selfProfile' 
                                ? 'Users seeking diagnosis' 
                                : 'Loved ones seeking support'}
                        </CardDescription>
                    </CardHeader>
                    <CardContent>
                        <div className="h-[300px]">
                            <ResponsiveContainer width="100%" height="100%">
                                <PieChart>
                                    <Pie
                                        data={seekingDiagnosisData}
                                        cx="50%"
                                        cy="50%"
                                        labelLine={true}
                                        label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
                                        outerRadius={100}
                                        fill="#8884d8"
                                        dataKey="value"
                                    >
                                        {seekingDiagnosisData.map((entry, index) => (
                                            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                                        ))}
                                    </Pie>
                                    <Tooltip formatter={(value) => [`${value} users`, 'Count']} />
                                </PieChart>
                            </ResponsiveContainer>
                        </div>
                    </CardContent>
                </Card>
                
                {/* Challenges (SelfProfile only) */}
                {type === 'selfProfile' && (
                    <Card>
                        <CardHeader>
                            <CardTitle>Top Challenges</CardTitle>
                            <CardDescription>
                                Most common challenges reported by users
                            </CardDescription>
                        </CardHeader>
                        <CardContent>
                            <div className="h-[300px]">
                                <ResponsiveContainer width="100%" height="100%">
                                    <BarChart
                                        data={challengesChartData}
                                        layout="vertical"
                                        margin={{ top: 5, right: 30, left: 80, bottom: 5 }}
                                    >
                                        <XAxis type="number" />
                                        <YAxis dataKey="name" type="category" width={80} />
                                        <Tooltip formatter={(value) => [`${value} users`, 'Count']} />
                                        <Bar dataKey="value" fill="#8884d8">
                                            {challengesChartData.map((entry, index) => (
                                                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                                            ))}
                                        </Bar>
                                    </BarChart>
                                </ResponsiveContainer>
                            </div>
                        </CardContent>
                    </Card>
                )}
                
                {/* Location Distribution */}
                <Card>
                    <CardHeader>
                        <CardTitle>Location Distribution</CardTitle>
                        <CardDescription>
                            Geographic distribution of users
                        </CardDescription>
                    </CardHeader>
                    <CardContent>
                        <div className="h-[300px]">
                            <ResponsiveContainer width="100%" height="100%">
                                <BarChart
                                    data={locationData}
                                    layout="vertical"
                                    margin={{ top: 5, right: 30, left: 80, bottom: 5 }}
                                >
                                    <XAxis type="number" />
                                    <YAxis dataKey="name" type="category" width={80} />
                                    <Tooltip formatter={(value) => [`${value} users`, 'Count']} />
                                    <Bar dataKey="value" fill="#8884d8">
                                        {locationData.map((entry, index) => (
                                            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                                        ))}
                                    </Bar>
                                </BarChart>
                            </ResponsiveContainer>
                        </div>
                    </CardContent>
                </Card>
                
                {/* Age vs Diagnosis Scatter Plot */}
                <Card className="md:col-span-2">
                    <CardHeader>
                        <CardTitle>Age vs Diagnosis</CardTitle>
                        <CardDescription>
                            Relationship between age and diagnosis
                        </CardDescription>
                    </CardHeader>
                    <CardContent>
                        <div className="h-[400px]">
                            <ResponsiveContainer width="100%" height="100%">
                                <ScatterChart
                                    margin={{ top: 20, right: 20, bottom: 20, left: 20 }}
                                >
                                    <XAxis 
                                        type="number" 
                                        dataKey="age" 
                                        name="Age" 
                                        domain={[0, 100]}
                                        label={{ value: 'Age', position: 'bottom' }}
                                    />
                                    <YAxis 
                                        type="category" 
                                        dataKey="diagnosis" 
                                        name="Diagnosis"
                                        width={100}
                                    />
                                    <ZAxis 
                                        type="number" 
                                        dataKey="count" 
                                        range={[50, 500]} 
                                        name="Count" 
                                    />
                                    <Tooltip 
                                        cursor={{ strokeDasharray: '3 3' }}
                                        formatter={(value, name, props) => {
                                            if (name === 'Count') return [value, name]
                                            return [props.payload.diagnosis, 'Diagnosis']
                                        }}
                                    />
                                    <Legend />
                                    <Scatter 
                                        name="Users" 
                                        data={scatterData} 
                                        fill="#8884d8"
                                    />
                                </ScatterChart>
                            </ResponsiveContainer>
                        </div>
                    </CardContent>
                </Card>
            </div>
        </div>
    )
}
