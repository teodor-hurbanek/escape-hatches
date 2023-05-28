'use client'
import { useEffect, useState } from 'react'
import styles from './page.module.css'
import Button from '@/components/UI/Button'
import SaveButton from '@/components/custom-hooks/SaveButton'
import StatusBar from '@/components/custom-hooks/StatusBar'
import Welcome from '@/components/custom-hooks/Welcome'

export default function CustomHooks() {
  const [online, setOnline] = useState(true)
  const [show, setShow] = useState(false)

  useEffect(() => {
    const handleOnline = () => {
      setOnline(true)
    }

    const handleOffline = () => {
      setOnline(false)
    }

    window.addEventListener('online', handleOnline)
    window.addEventListener('offline', handleOffline)

    return () => {
      window.removeEventListener('online', handleOnline)
      window.removeEventListener('offline', handleOffline)
    }
  }, [])

  return (
    <main className={styles.main}>
      <section className={styles.paragraphSection}>
        <p>
          React comes with several built-in Hooks like useState, useContext, and useEffect. Sometimes, you’ll wish that
          there was a Hook for some more specific purpose: for example, to fetch data, to keep track of whether the user
          is online, or to connect to a chat room. You might not find these Hooks in React, but you can create your own
          Hooks for your application’s needs.
        </p>
      </section>
      <section>
        <h3>{online ? '✅ Online' : '❌ Disconnected'}</h3>
      </section>
      <section className={styles.customSection}>
        <h3>
          Custom Hooks let you share stateful logic but not state itself. Each call to a Hook is completely independent
          from every other call to the same Hook.
        </h3>
        <p>
          In the example below, when you turn the network on and off, both components update together. However, it’s
          wrong to think that a single isOnline state variable is shared between them.
        </p>
        <p>When you need to share the state itself between multiple components, lift it up and pass it down instead.</p>
        <div>
          <StatusBar />
          <SaveButton />
        </div>
      </section>

      <section>
        <h3>Passing reactive values between Hooks</h3>
        <p>
          The code inside your custom Hooks will re-run during every re-render of your component. This is why, like
          components, custom Hooks need to be pure. Think of custom Hooks’ code as part of your component’s body!
          Because custom Hooks re-render together with your component, they always receive the latest props and state.
        </p>
      </section>

      <section className={styles.fadeInSection}>
        <Button onClick={() => setShow(!show)}>{show ? 'Remove' : 'Show'}</Button>
        {show && <Welcome className={styles.welcome} />}
      </section>
    </main>
  )
}
