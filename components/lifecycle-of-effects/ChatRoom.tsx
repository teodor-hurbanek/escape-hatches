import React, { useEffect } from 'react'
import { createConnection } from '@/utils/helpers'

type ChatRoomProps = {
  roomId: string
}

const serverUrl = 'https://localhost:1234'

export default function ChatRoom({ roomId }: ChatRoomProps) {
  useEffect(() => {
    const connection = createConnection(serverUrl, roomId)
    connection.connect()

    return () => {
      connection.disconnect()
    }
  }, [roomId])

  return <h1>Welcome to {roomId} room!</h1>
}
