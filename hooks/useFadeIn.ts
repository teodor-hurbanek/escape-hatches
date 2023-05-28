import { useEffect } from 'react'

export function useFadeIn(ref: any, duration: number) {
  useEffect(() => {
    const node = ref.current

    let startTime: number | null = performance.now()
    let frameId: number | null = null

    function onFrame(now: number) {
      if (startTime) {
        const timePassed = now - startTime
        const progress = Math.min(timePassed / duration, 1)
        onProgress(progress)
        if (progress < 1) {
          // We still have more frames to paint
          frameId = requestAnimationFrame(onFrame)
        }
      }
    }

    function onProgress(progress: number) {
      node.style.opacity = progress
    }

    function start() {
      onProgress(0)
      startTime = performance.now()
      frameId = requestAnimationFrame(onFrame)
    }

    function stop() {
      cancelAnimationFrame(frameId as number)
      startTime = null
      frameId = null
    }

    start()
    return () => stop()
  }, [ref, duration])
}
