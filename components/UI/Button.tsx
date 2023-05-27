import React from 'react'

type ButtonProps = {
  children: string | string[]
  style?: {}
  disabled?: boolean
  onClick: () => void
}

const Button = ({ children, style, disabled, onClick }: ButtonProps) => {
  return (
    <button onClick={onClick} style={style} disabled={disabled}>
      {children}
    </button>
  )
}

export default Button
