import { getPublicStats } from '@/lib/publicData'
import LoginClient from './LoginClient'

export const dynamic = 'force-dynamic'

export default async function LoginPage() {
  const stats = await getPublicStats()
  return <LoginClient stats={stats} />
}
