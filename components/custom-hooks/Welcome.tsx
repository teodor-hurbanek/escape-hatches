import { useFadeIn } from '@/hooks/useFadeIn'
import React, { useRef } from 'react'

type WelcomeProps = {
  className: string
}

const Welcome = ({ className }: WelcomeProps) => {
  const welcomeRef = useRef(null)
  useFadeIn(welcomeRef, 1000)

  return (
    <h1 className={className} ref={welcomeRef}>
      Welcome
    </h1>
  )
}

export default Welcome
