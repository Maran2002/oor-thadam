import 'server-only'
import { ObjectId } from 'mongodb'
import { getDb } from '@/lib/mongodb'

export async function getPublicStats() {
  const db = await getDb()
  const [totalPlaces, totalUsers, totalReviews, monthlyPageViews] = await Promise.all([
    db.collection('places').countDocuments({ status: 'Approved' }),
    db.collection('users').countDocuments({ role: { $ne: 'admin' } }),
    db.collection('reviews').countDocuments({ visible: true }),
    db.collection('visitor_logs').countDocuments({
      timestamp: { $gte: new Date(Date.now() - 30 * 86400000) },
    }),
  ])
  return { totalPlaces, totalUsers, totalReviews, monthlyPageViews }
}

export async function getPublicPlaces({ featured = false, trending = false, page = 1, limit = 3 } = {}) {
  const db = await getDb()
  const query = { status: 'Approved' }
  if (featured) query.isFeatured = true
  if (trending) query.isTrending = true
  const offset = (page - 1) * limit
  const [items, total] = await Promise.all([
    db.collection('places').find(query, { projection: { images: { $slice: 1 } } })
      .sort({ createdAt: -1, _id: -1 }).skip(offset).limit(limit).toArray(),
    db.collection('places').countDocuments(query),
  ])
  return JSON.parse(JSON.stringify({ items, total, page, limit, pages: Math.ceil(total / limit) }))
}

export async function getPublicPlace(placeId) {
  if (!ObjectId.isValid(placeId)) return null
  const db = await getDb()
  const place = await db.collection('places').findOne({ _id: new ObjectId(placeId), status: 'Approved' })
  return place ? JSON.parse(JSON.stringify(place)) : null
}
