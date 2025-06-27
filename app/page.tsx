// app/page.tsx (Server Component)
import { getSiteSettings } from "@/lib/getSiteSettings"
import HomeContent from "@/components/HomeContent"

export default async function HomePage() {
  const settings = await getSiteSettings()
  return <HomeContent settings={settings} />
}
