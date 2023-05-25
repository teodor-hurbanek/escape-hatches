'use client'
import { useRef, useState } from 'react'
import Input from '@/components/UI/Input'
import Button from '@/components/UI/Button'
import styles from './page.module.css'

export default function Ref() {
  const [startTime, setStartTime] = useState<number | null>(null)
  const [now, setNow] = useState<number | null>(null)
  const inputRef = useRef<HTMLInputElement>(null)
  const intervalRef = useRef<NodeJS.Timer | number | undefined>(undefined)

  const handleFocus = () => {
    inputRef?.current?.focus()
  }

  const handleStart = () => {
    // Start counting.
    setStartTime(Date.now())
    setNow(Date.now())

    clearInterval(intervalRef.current)
    intervalRef.current = setInterval(() => {
      // Update the current time every 10ms.
      setNow(Date.now())
    }, 10)
  }

  const handleStop = () => {
    clearInterval(intervalRef.current)
  }

  let secondsPassed = 0
  if (startTime != null && now != null) {
    secondsPassed = (now - startTime) / 1000
  }

  return (
    <main className={styles.main}>
      <section className={styles.focusSection}>
        <Input ref={inputRef} type={'text'} placeholder={'Write a thing...'} />
        <Button onClick={handleFocus}>Focus the input</Button>
      </section>

      <section className={styles.timeSection}>
        <h1 style={{ marginBottom: '.2rem' }}>Time passed: {secondsPassed.toFixed(3)}</h1>
        <Button onClick={handleStart} style={{ marginRight: '1rem' }}>
          Start the timer
        </Button>
        <Button onClick={handleStop}>Stop the timer</Button>
      </section>
    </main>
  )
}
