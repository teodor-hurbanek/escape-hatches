import { useFadeIn } from '@/hooks/useFadeIn'
import React, { useRef } from 'react'

const Welcome = () => {
  const welcomeRef = useRef(null)
  useFadeIn(welcomeRef, 1000)

  return (
    <h1 className="welcome" ref={welcomeRef}>
      Welcome
    </h1>
  )
}

export default Welcome
