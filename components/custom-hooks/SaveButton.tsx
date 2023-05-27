import { useOnlineStatus } from '@/hooks/useOnlineStatus'
import Button from '../UI/Button'

const SaveButton = () => {
  const isOnline = useOnlineStatus()

  const handleProgressClick = () => {
    console.log('✅ Progress saved')
  }

  return (
    <Button disabled={!isOnline} onClick={handleProgressClick}>
      {isOnline ? 'Save progress' : 'Reconecting...'}
    </Button>
  )
}

export default SaveButton
