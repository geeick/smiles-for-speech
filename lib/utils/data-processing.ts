import type { SelfProfile, LovedOne } from "@prisma/client"

// Helper function to calculate age distribution
export function calculateAgeDistribution(data: (SelfProfile | LovedOne)[]) {
  const ageGroups = {
    "Under 18": 0,
    "18-30": 0,
    "31-45": 0,
    "46-60": 0,
    "Over 60": 0,
  }

  data.forEach((user) => {
    const age = "age" in user ? user.age : 0

    if (age < 18) ageGroups["Under 18"]++
    else if (age >= 18 && age <= 30) ageGroups["18-30"]++
    else if (age >= 31 && age <= 45) ageGroups["31-45"]++
    else if (age >= 46 && age <= 60) ageGroups["46-60"]++
    else ageGroups["Over 60"]++
  })

  return Object.entries(ageGroups).map(([name, value]) => ({ name, value }))
}

// Helper function to calculate gender distribution
export function calculateGenderDistribution(data: (SelfProfile | LovedOne)[]) {
  const genderCount = { Male: 0, Female: 0, Other: 0 }

  data.forEach((user) => {
    const sex = "sex" in user ? user.sex : ""
    if (sex === "Male") genderCount.Male++
    else if (sex === "Female") genderCount.Female++
    else genderCount.Other++
  })

  return Object.entries(genderCount)
    .filter(([_, value]) => value > 0)
    .map(([name, value]) => ({ name, value }))
}

// Helper function to calculate location distribution
export function calculateLocationDistribution(data: (SelfProfile | LovedOne)[]) {
  const locationCount: Record<string, number> = {}

  data.forEach((user) => {
    const location = "location" in user ? user.location : null
    if (location) {
      locationCount[location] = (locationCount[location] || 0) + 1
    } else {
      locationCount["Unspecified"] = (locationCount["Unspecified"] || 0) + 1
    }
  })

  return Object.entries(locationCount)
    .map(([name, value]) => ({ name, value }))
    .sort((a, b) => b.value - a.value)
}

// Helper function to calculate diagnosis distribution for SelfProfiles
export function calculateSelfProfileDiagnosisDistribution(data: SelfProfile[]) {
  const diagnosisData: Record<string, number> = {}

  data.forEach((profile) => {
    if (profile.diagnosis) {
      diagnosisData[profile.diagnosis] = (diagnosisData[profile.diagnosis] || 0) + 1
    } else {
      diagnosisData["Unspecified"] = (diagnosisData["Unspecified"] || 0) + 1
    }
  })

  return Object.entries(diagnosisData)
    .map(([name, value]) => ({ name, value }))
    .sort((a, b) => b.value - a.value)
}

// Helper function to calculate diagnosis distribution for LovedOnes
export function calculateLovedOneDiagnosisDistribution(data: LovedOne[]) {
  const diagnosisData: Record<string, number> = {}

  data.forEach((lovedOne) => {
    diagnosisData[lovedOne.diagnosisStatus] = (diagnosisData[lovedOne.diagnosisStatus] || 0) + 1
  })

  return Object.entries(diagnosisData)
    .map(([name, value]) => ({ name, value }))
    .sort((a, b) => b.value - a.value)
}

// Helper function to calculate challenges distribution
export function calculateChallengesDistribution(data: SelfProfile[]) {
  const challengesData: Record<string, number> = {}

  data.forEach((profile) => {
    profile.challenges.forEach((challenge) => {
      challengesData[challenge] = (challengesData[challenge] || 0) + 1
    })
  })

  return Object.entries(challengesData)
    .map(([name, value]) => ({ name, value }))
    .sort((a, b) => b.value - a.value)
}

