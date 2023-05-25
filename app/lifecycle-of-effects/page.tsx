'use client'
import { useEffect, useState } from 'react'
import ChatRoom from '@/components/lifecycle-of-effects/ChatRoom'
import Button from '@/components/UI/Button'
import Select from '@/components/UI/Select'
import styles from './page.module.css'

const chatData = ['general', 'travel', 'music']

export default function Effects() {
  const [roomId, setRoomId] = useState('general')
  const [showChat, setShowChat] = useState(false)

  return (
    <main className={styles.main}>
      <section className={styles.paragraphSection}>
        <p>
          Effects have a different lifecycle from components. Components may mount, update, or unmount. An Effect can
          only do two things: to start synchronizing something, and later to stop synchronizing it. This cycle can
          happen multiple times if your Effect depends on props and state that change over time.
        </p>
      </section>

      <section className={styles.componentListSection}>
        <h3>Every React component goes through the same lifecycle:</h3>
        <ul>
          <li>A component mounts when it’s added to the screen.</li>
          <li>A component updates when it receives new props or state, usually in response to an interaction.</li>
          <li>A component unmounts when it’s removed from the screen.</li>
        </ul>
      </section>

      <section className={styles.effectSection}>
        <h3>Always focus on a single start/stop cycle at a time.</h3>
        <p>
          It shouldn’t matter whether a component is mounting, updating, or unmounting. All you need to do is to
          describe how to start synchronization and how to stop it.
        </p>
      </section>

      <section className={styles.chatRoomSection}>
        <div>
          <label>Choose the chat room:</label>
          <Select data={chatData} value={roomId} onChange={e => setRoomId(e.target.value)} />
          <Button onClick={() => setShowChat(!showChat)}>{showChat ? 'Close chat' : 'Open chat'}</Button>
        </div>
        {showChat && <ChatRoom roomId={roomId} />}
      </section>

      <section className={styles.soloEffectSection}>
        <h3>Each Effect in your code should represent a separate and independent synchronization process.</h3>
        <code>{'function ChatRoom({ roomId }) {'}</code>
        <code style={{ paddingLeft: '1rem' }}>{'useEffect(() => {'}</code>
        <code style={{ paddingLeft: '2rem' }}>{'logVisit(roomId);'}</code>
        <code style={{ paddingLeft: '1rem' }}>{'}, [roomId]);'}</code>
        <p></p>
        <code style={{ paddingLeft: '1rem' }}>{'useEffect(() => {'}</code>
        <code style={{ paddingLeft: '2rem' }}>{'const connection = createConnection(serverUrl, roomId);'}</code>
        <code style={{ paddingLeft: '1rem' }}>{'}, [roomId]);'}</code>
        <code>{'}'}</code>
      </section>
    </main>
  )
}
