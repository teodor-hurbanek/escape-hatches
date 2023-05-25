'use client'
import { experimental_useEffectEvent, useEffect, useState } from 'react'
import styles from './page.module.css'

export default function EffectEvents() {
  const [position, setPosition] = useState({ x: 0, y: 0 })
  const [canMove, setCanMove] = useState(true)

  const onMove = experimental_useEffectEvent((e: any) => {
    if (canMove) {
      setPosition({ x: e.clientX, y: e.clientY })
    }
  })

  useEffect(() => {
    window.addEventListener('pointermove', onMove)
    return () => window.removeEventListener('pointermove', onMove)
  }, [])

  return (
    <main className={styles.main}>
      <section className={styles.paragraphSection}>
        <h3>
          Event handlers only re-run when you perform the same interaction again. Unlike event handlers, Effects
          re-synchronize if some value they read, like a prop or a state variable, is different from what it was during
          the last render
        </h3>
        <p>
          Intuitively, you could say that event handlers are always triggered “manually”, for example by clicking a
          button. Effects, on the other hand, are “automatic”: they run and re-run as often as it’s needed to stay
          synchronized.
        </p>
      </section>

      <section className={styles.limitationsSection}>
        <h3>Limitations of Effect Events</h3>
        <ul>
          <li>Only call them from inside Effects.</li>
          <li>Never pass them to other components or Hooks.</li>
        </ul>

        <p></p>
        <p>
          You can think of Effect Events as being very similar to event handlers. The main difference is that event
          handlers run in response to a user interactions, whereas Effect Events are triggered by you from Effects.
          Effect Events let you “break the chain” between the reactivity of Effects and code that should not be
          reactive.
        </p>
      </section>

      <section className={styles.playgroundSection}>
        <label>
          <input type="checkbox" checked={canMove} onChange={e => setCanMove(e.target.checked)} />
          The dot is allowed to move
        </label>
        <hr />
        <div
          style={{
            position: 'absolute',
            backgroundColor: 'pink',
            borderRadius: '50%',
            opacity: 0.6,
            transform: `translate(${position.x}px, ${position.y}px)`,
            pointerEvents: 'none',
            left: -20,
            top: -20,
            width: 40,
            height: 40,
          }}
        />
      </section>
    </main>
  )
}
