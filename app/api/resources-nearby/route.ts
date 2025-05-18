// app/api/resources-nearby/route.ts
import { NextRequest, NextResponse } from "next/server"

function haversineDistance(lat1: number, lon1: number, lat2: number, lon2: number): number {
  const toRad = (deg: number) => deg * (Math.PI / 180)
  const R = 6371 // Earth radius in km
  const dLat = toRad(lat2 - lat1)
  const dLon = toRad(lon2 - lon1)
  const a =
    Math.sin(dLat / 2) ** 2 +
    Math.cos(toRad(lat1)) * Math.cos(toRad(lat2)) * Math.sin(dLon / 2) ** 2
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a))
  return R * c
}

const resources = [
  { city: "Tokyo", lat: 35.6895, lon: 139.6917, name: "Tokyo Mental Health", description: "Offers assessments and psychological therapies for individuals with ASD.", website: "https://www.tokyomentalhealth.com/autism-spectrum-disorders/" },
  { city: "Tokyo", lat: 35.6895, lon: 139.6917, name: "Children Center", description: "Provides ABA therapy for children with autism and developmental disabilities.", website: "https://www.children-center.jp/english/" },
  { city: "Tokyo", lat: 35.6895, lon: 139.6917, name: "Tokyo ABA Development Support Association", description: "Rehabilitation activities based on ABA for children with developmental disabilities.", website: "https://www.autismconnect.com/directory/tokyo-aba-development-support-association-general-shinagawa-rehabilitation-center-in-japan-47968-directory" },
  { city: "Delhi", lat: 28.6139, lon: 77.209, name: "Action for Autism", description: "National org providing support and advocacy for autism.", website: "http://www.autism-india.org/" },
  { city: "Delhi", lat: 28.6139, lon: 77.209, name: "IIAHP Therapy Center", description: "Autism diagnosis and therapy for children aged 2–17.", website: "https://www.iiahp.com/autism-treatment-in-delhi" },
  { city: "Delhi", lat: 28.6139, lon: 77.209, name: "Spectra Plus", description: "Speech therapy for children with communication challenges.", website: "https://www.spectraplusindia.com/best-autism-treatment-delhi" },
  { city: "Los Angeles", lat: 34.0522, lon: -118.2437, name: "Autism Society of Los Angeles", description: "Advocacy, education, and community support for autism.", website: "https://www.autismla.org/" },
  { city: "Los Angeles", lat: 34.0522, lon: -118.2437, name: "UCLA Tarjan Center", description: "UCEDD focused on research, training, and autism support.", website: "https://www.dds.ca.gov/initiatives/autism/" },
  { city: "Los Angeles", lat: 34.0522, lon: -118.2437, name: "USC Autism and Family Support Lab", description: "Community engagement and research-based support for autism.", website: "https://dornsife.usc.edu/autismfs-lab/resources/" },
  { city: "Accra", lat: 5.6037, lon: -187, name: "HopeSetters Autism Center", description: "Provides therapy and special education for children with autism in Ghana.", website: "https://hopesettersautismcenter.org/" },
  { city: "Accra", lat: 5.6037, lon: -187, name: "Awaawaa2", description: "Early intervention and speech therapy services for children with communication disorders.", website: "https://www.awaawaa2.org/" },
  { city: "Accra", lat: 5.6037, lon: -187, name: "Autism Awareness Care and Training (AACT)", description: "Supports individuals with autism through awareness and training.", website: "https://autismghana.org/" }
]

export async function POST(req: NextRequest) {
  const { latitude, longitude } = await req.json()

  if (latitude === undefined || longitude === undefined) {
    return NextResponse.json({ error: "Missing latitude or longitude" }, { status: 400 })
  }

  const sorted = resources
    .map(resource => ({
      ...resource,
      distance: haversineDistance(latitude, longitude, resource.lat, resource.lon)
    }))
    .sort((a, b) => a.distance - b.distance)
    .slice(0, 10)

  return NextResponse.json({ resources: sorted })
}
