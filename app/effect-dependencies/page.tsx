'use client'
import { useEffect, useState, useCallback } from 'react'
import Button from '@/components/UI/Button'
import styles from './page.module.css'

export default function EffectEvents() {
  const [count, setCount] = useState(0)
  const [increment, setIncrement] = useState(0)

  const onTick = useCallback(() => {
    setCount(count + increment)
  }, [count, increment])

  useEffect(() => {
    const id = setInterval(onTick, 1000)
    return () => clearInterval(id)
  }, [onTick])

  return (
    <main className={styles.main}>
      <section className={styles.paragraphSection}>
        <p>
          When you write an Effect, you have to include every reactive value (props, state, variables and functions
          declared inside your component’s body) that the Effect reads in the list of your Effect’s dependencies
          (setState is not reactive value). This ensures that your Effect remains synchronized with the latest props and
          state of your component. Unnecessary dependencies may cause your Effect to run too often, or even create an
          infinite loop.
        </p>
      </section>

      <section className={styles.timerSection}>
        <div className={styles.counter}>
          <h3>Counter: {count}</h3>
          <Button onClick={() => setCount(0)}>Reset</Button>
        </div>
        <hr />
        <div className={styles.increment}>
          <p>Every second, increment by</p>
          <Button disabled={increment === 0} onClick={() => setIncrement(i => i - 1)}>
            -
          </Button>
          <p>{increment}</p>
          <Button onClick={() => setIncrement(i => i + 1)}>+</Button>
        </div>
      </section>

      <section className={styles.valuesSection}>
        <h3>Object and function dependencies can make your Effect re-synchronize more often than you need.</h3>
        <p>
          This is why, whenever possible, you should try to avoid objects and functions as your Effect’s dependencies.
          Instead, try moving them outside the component, inside the Effect, or extracting primitive values out of them.
        </p>
        <div>
          <code>{'function ChatRoom() {'}</code>
          <code style={{ paddingLeft: '1rem' }}>{'const [message, setMessage] = useState("")'}</code>
          <p></p>
          <code style={{ paddingLeft: '1rem' }}>{'useEffect(() => {'}</code>
          <code style={{ paddingLeft: '2rem' }}>{'const connection = createConnection(options);'}</code>
          <code style={{ paddingLeft: '2rem' }}>{'connection.connect();'}</code>
          <code style={{ paddingLeft: '2rem' }}>{'return () => connection.disconnect();;'}</code>
          <code style={{ paddingLeft: '1rem' }}>{'}, []);'}</code>
          <code>{'}'}</code>
        </div>
      </section>
    </main>
  )
}
