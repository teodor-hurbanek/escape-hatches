'use client'
import { useEffect, useRef, useState } from 'react'
import VideoPlayer from '@/components/effects/VideoPlayer'
import Playground from '@/components/effects/Playground'
import Button from '@/components/UI/Button'
import styles from './page.module.css'

export default function Effects() {
  const [isPlaying, setIsPlayng] = useState(false)
  const [show, setShow] = useState(false)
  const circleRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    const circle = circleRef.current
    if (!circle) return
    circle.style.opacity = '1'

    return () => {
      circle.style.opacity = '0'
    }
  }, [])

  return (
    <main className={styles.main}>
      <section className={styles.paragraphSection}>
        <p>
          Effects run at the end of a{' '}
          <a href="https://react.dev/learn/render-and-commit" target="_blank">
            commit
          </a>{' '}
          after the screen updates. This is a good time to synchronize the React components with some external system
          (like network or a third-party library).
        </p>
      </section>
      <section className={styles.videoSection}>
        <VideoPlayer
          isPlaying={isPlaying}
          src={'https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4'}
        />
        <Button onClick={() => setIsPlayng(!isPlaying)}>{isPlaying ? 'Pause' : 'Play'}</Button>
      </section>

      <section className={styles.animationSection}>
        <h3>
          The cleanup function should stop or undo whatever the Effect was doing. setup → cleanup → setup sequence
        </h3>
        <div
          ref={circleRef}
          style={{
            opacity: '0',
            height: '10rem',
            width: '10rem',
            background: 'gray',
            borderRadius: '50%',
            margin: '0 auto',
          }}
        ></div>
      </section>

      <section className={styles.playgroundSection}>
        <Button onClick={() => setShow(!show)} style={{ marginBottom: '.5rem' }}>
          {show ? 'Unmount' : 'Mount'} the component
        </Button>
        {show && <Playground />}
      </section>

      <section className={styles.playgroundSection}>
        <h3>Use Effects only for code that should run because the component was displayed to the user.</h3>
        <p>
          If this logic is caused by a particular interaction, keep it in the event handler. If it’s caused by the user
          seeing the component on the screen, keep it in the Effect.
        </p>
      </section>
    </main>
  )
}
