'use client'

import { useState, useEffect } from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { SelfProfile, LovedOne } from "@prisma/client"
import {
  PieChart, Pie, BarChart, Bar, XAxis, YAxis, Tooltip, Legend,
  ResponsiveContainer, Cell, ScatterChart, Scatter, ZAxis
} from 'recharts'

type GroupType = 'both' | 'selfProfile' | 'lovedOne'

export default function StatisticsCharts() {
  const [selfProfiles, setSelfProfiles] = useState<SelfProfile[]>([])
  const [lovedOnes, setLovedOnes] = useState<LovedOne[]>([])
  const [group, setGroup] = useState<GroupType>('both')
  const [ageFilter, setAgeFilter] = useState<string>('all')
  const [locationFilter, setLocationFilter] = useState<string>('all')

  useEffect(() => {
    async function fetchData() {
      try {
        const res = await fetch('/api/admin/statistics')
        const json = await res.json()
        setSelfProfiles(json.selfProfiles || [])
        setLovedOnes(json.lovedOnes || [])
      } catch (err) {
        console.error('Failed to fetch data:', err)
      }
    }
    fetchData()
  }, [])

  // Combine data based on group selection
  let rawData: Array<SelfProfile | LovedOne> = []
  if (group === 'selfProfile') rawData = selfProfiles
  else if (group === 'lovedOne') rawData = lovedOnes
  else rawData = [...selfProfiles, ...lovedOnes]

  // Get all unique locations for the filter dropdown
  const allLocations = Array.from(
    new Set(
      rawData
        .map((item: any) => item.location || 'Unspecified')
        .filter(Boolean)
    )
  )

  // Filter by age and location
  const filteredData = rawData.filter((item: any) => {
    let ageMatch = true
    let locationMatch = true
    if (ageFilter !== 'all') {
      if (ageFilter === 'under18') ageMatch = item.age < 18
      else if (ageFilter === '18-30') ageMatch = item.age >= 18 && item.age <= 30
      else if (ageFilter === '31-45') ageMatch = item.age >= 31 && item.age <= 45
      else if (ageFilter === '46-60') ageMatch = item.age >= 46 && item.age <= 60
      else if (ageFilter === 'over60') ageMatch = item.age > 60
    }
    if (locationFilter !== 'all') {
      locationMatch = (item.location || 'Unspecified') === locationFilter
    }
    return ageMatch && locationMatch
  })

  // Age distribution
  const ageGroups = {
    'Under 18': 0,
    '18-30': 0,
    '31-45': 0,
    '46-60': 0,
    'Over 60': 0
  }
  filteredData.forEach((user: any) => {
    if (user.age < 18) ageGroups['Under 18']++
    else if (user.age >= 18 && user.age <= 30) ageGroups['18-30']++
    else if (user.age >= 31 && user.age <= 45) ageGroups['31-45']++
    else if (user.age >= 46 && user.age <= 60) ageGroups['46-60']++
    else ageGroups['Over 60']++
  })
  const ageData = Object.entries(ageGroups).map(([name, value]) => ({ name, value }))

  // Gender distribution
  const genderCount = { Male: 0, Female: 0, Other: 0 }
  filteredData.forEach((user: any) => {
    const sex = (user.sex || '').toLowerCase()
    if (sex === 'male') genderCount.Male++
    else if (sex === 'female') genderCount.Female++
    else genderCount.Other++
  })
  const genderData = Object.entries(genderCount)
    .filter(([_, value]) => value > 0)
    .map(([name, value]) => ({ name, value }))

  // Diagnosis data
  const diagnosisData: Record<string, number> = {}
  filteredData.forEach((user: any) => {
    const diagnosis = user.diagnosis ?? user.diagnosisStatus ?? 'Unspecified'
    if (diagnosis && diagnosis.trim() !== '') {
      diagnosisData[diagnosis] = (diagnosisData[diagnosis] || 0) + 1
    } else {
      diagnosisData['Unspecified'] = (diagnosisData['Unspecified'] || 0) + 1
    }
  })
  const diagnosisChartData = Object.entries(diagnosisData)
    .map(([name, value]) => ({ name, value }))
    .sort((a, b) => b.value - a.value)

  // Seeking diagnosis/support data
  const seekingDiagnosisCount = { Yes: 0, No: 0 }
  filteredData.forEach((user: any) => {
    if (user.seekingDiagnosis === true || user.seekingSupport === true) seekingDiagnosisCount.Yes++
    else seekingDiagnosisCount.No++
  })
  const seekingDiagnosisData = Object.entries(seekingDiagnosisCount)
    .map(([name, value]) => ({ name, value }))

  // Challenges data (only for selfProfiles or both)
  const challengesData: Record<string, number> = {}
  if (group !== 'lovedOne') {
    filteredData.forEach((user: any) => {
      if (user.challenges && Array.isArray(user.challenges)) {
        user.challenges.forEach((challenge: string) => {
          challengesData[challenge] = (challengesData[challenge] || 0) + 1
        })
      }
    })
  }
  const challengesChartData = Object.entries(challengesData)
    .map(([name, value]) => ({ name, value }))
    .sort((a, b) => b.value - a.value)
    .slice(0, 10)

  // Location data
  const locationCount: Record<string, number> = {}
  filteredData.forEach((user: any) => {
    if (user.location) {
      locationCount[user.location] = (locationCount[user.location] || 0) + 1
    } else {
      locationCount['Unspecified'] = (locationCount['Unspecified'] || 0) + 1
    }
  })
  const locationData = Object.entries(locationCount)
    .map(([name, value]) => ({ name, value }))
    .sort((a, b) => b.value - a.value)
    .slice(0, 10)

  // Age vs Diagnosis scatter plot data
  const scatterData: { age: number; diagnosis: string; count: number }[] = []
  filteredData.forEach((user: any) => {
    const diagnosis = user.diagnosis ?? user.diagnosisStatus ?? 'Unspecified'
    const existingPoint = scatterData.find(
      point => point.age === user.age && point.diagnosis === diagnosis
    )
    if (existingPoint) {
      existingPoint.count++
    } else {
      scatterData.push({ age: user.age, diagnosis, count: 1 })
    }
  })

  // Location seeking diagnosis/support data
  const seekingByLocation: Record<string, number> = {}
  rawData.forEach((user: any) => {
    const location = user.location || 'Unspecified'
    if (user.seekingDiagnosis === true || user.seekingSupport === true) {
      seekingByLocation[location] = (seekingByLocation[location] || 0) + 1
    }
  })
  const seekingByLocationData = Object.entries(seekingByLocation)
    .map(([name, value]) => ({ name, value }))
    .sort((a, b) => b.value - a.value)

  // Find location with the greatest amount of people seeking diagnosis/support
  const topSeekingLocation = seekingByLocationData.length > 0 ? seekingByLocationData[0] : null

  // Colors for charts
  const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#8884D8', '#82ca9d', '#ffc658', '#8dd1e1', '#a4de6c', '#d0ed57']

  return (
    <div className="space-y-6 px-4 md:px-8 lg:px-16 py-6">
      <div className="space-y-6">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div>
            <h2 className="text-2xl font-bold">Statistics</h2>
            {topSeekingLocation && (
              <div className="mt-2 text-sm text-muted-foreground">
                <span className="font-semibold">Most people seeking diagnosis/support:</span>{' '}
                {topSeekingLocation.name} ({topSeekingLocation.value})
              </div>
            )}
          </div>
          <div className="flex gap-4">
            <Select value={group} onValueChange={setGroup}>
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Show group" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="both">Both</SelectItem>
                <SelectItem value="selfProfile">Self Profiles</SelectItem>
                <SelectItem value="lovedOne">Loved Ones</SelectItem>
              </SelectContent>
            </Select>
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
            <Select value={locationFilter} onValueChange={setLocationFilter}>
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Filter by location" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Locations</SelectItem>
                {allLocations.map((loc) => (
                  <SelectItem key={loc} value={loc}>{loc}</SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Seeking Diagnosis/Support by Location */}
          <Card>
            <CardHeader>
              <CardTitle>Seeking Diagnosis/Support by Location</CardTitle>
              <CardDescription>
                Number of people seeking diagnosis/support in each location
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="h-[300px]">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart
                    data={seekingByLocationData}
                    layout="vertical"
                    margin={{ top: 5, right: 30, left: 80, bottom: 5 }}
                  >
                    <XAxis type="number" />
                    <YAxis dataKey="name" type="category" width={80} />
                    <Tooltip formatter={(value) => [`${value} users`, 'Count']} />
                    <Bar dataKey="value" fill="#8884d8">
                      {seekingByLocationData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                      ))}
                    </Bar>
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </CardContent>
          </Card>
          
          {/* Age Distribution */}
          <Card>
            <CardHeader>
              <CardTitle>Age Distribution</CardTitle>
              <CardDescription>
                Age groups of selected group
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
                Gender breakdown of selected group
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
                Diagnosis status of selected group
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
                Seeking Diagnosis/Support
              </CardTitle>
              <CardDescription>
                Users or loved ones seeking diagnosis/support
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
          {/* Challenges (SelfProfile or Both) */}
          {(group !== 'lovedOne') && (
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
    </div>
  )
}
