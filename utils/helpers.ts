export const createConnection = (serverUrl: string, roomId: string) => {
  return {
    connect() {
      console.log(`✅ Connecting to ${roomId} room at ${serverUrl} ...`)
    },
    disconnect() {
      console.log(`❌ Disconnected from ${roomId} room at ${serverUrl}`)
    },
  }
}
