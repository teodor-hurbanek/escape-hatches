import React, { useEffect, useRef } from 'react'

type VideoPlayerProps = {
  src: string
  isPlaying: boolean
}

export default function VideoPlayer({ src, isPlaying }: VideoPlayerProps) {
  const videoRef = useRef<HTMLVideoElement | null>(null)

  useEffect(() => {
    if (isPlaying) {
      videoRef?.current?.play()
    } else {
      videoRef?.current?.pause()
    }
  })

  return (
    <div>
      <video ref={videoRef} src={src} style={{ width: '100%', height: '100%' }} loop playsInline />
    </div>
  )
}
