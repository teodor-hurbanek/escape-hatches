import { useOnlineStatus } from '@/hooks/useOnlineStatus'

const StatusBar = () => {
  const isOnline = useOnlineStatus()
  return <h3>{isOnline ? '✅ Online' : '❌ Disconnected'}</h3>
}

export default StatusBar
