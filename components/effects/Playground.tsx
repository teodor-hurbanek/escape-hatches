import { useState, useEffect } from 'react'
import Input from '../UI/Input'

export default function Playground() {
  const [text, setText] = useState('a')

  useEffect(() => {
    function onTimeout() {
      console.log('⏰ ' + text)
    }

    console.log('🔵 Schedule "' + text + '" log')
    const timeoutId = setTimeout(onTimeout, 3000)

    return () => {
      console.log('🟡 Cancel "' + text + '" log')
      clearTimeout(timeoutId)
    }
  }, [text])

  return (
    <div>
      <label>
        What to log: <Input value={text} onChange={(e: any) => setText(e.target.value)} />
      </label>
      <h1>{text}</h1>
    </div>
  )
}
