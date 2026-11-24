import { getPublicPlaces, getPublicStats } from '@/lib/publicData'
import { HeroSection } from '@/components/hero/HeroSection'
import { FeaturedPlaces } from '@/components/sections/FeaturedPlaces'
import { CommunityStats } from '@/components/sections/CommunityStats'
import { TrendingLocations } from '@/components/sections/TrendingLocations'
import { CallToAction } from '@/components/sections/CallToAction'

export const dynamic = 'force-dynamic'

export default async function Home() {
  const [featured, trending, stats] = await Promise.all([
    getPublicPlaces({ featured: true }),
    getPublicPlaces({ trending: true }),
    getPublicStats(),
  ])
  return (
    <div>
      <HeroSection />
      <FeaturedPlaces places={featured.items} />
      <CommunityStats stats={stats} />
      <TrendingLocations places={trending.items} />
      <CallToAction />
    </div>
  )
}
