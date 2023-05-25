import React, { forwardRef } from 'react'

const Input = forwardRef<HTMLInputElement, any>((props, ref) => {
  return <input {...props} ref={ref} />
})

export default Input
