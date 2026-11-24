import { notFound } from 'next/navigation'
import { getPublicPlace } from '@/lib/publicData'
import PlaceDetailClient from './PlaceDetailClient'

export const dynamic = 'force-dynamic'

export default async function PlaceDetailPage({ params }) {
  const { placeId } = await params
  const place = await getPublicPlace(placeId)
  if (!place) notFound()
  return <PlaceDetailClient place={place} />
}
