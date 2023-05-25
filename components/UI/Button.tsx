import React from 'react'

type ButtonProps = {
  children: string | string[]
  style?: {}
  onClick: () => void
}

const Button = ({ children, style, onClick }: ButtonProps) => {
  return (
    <button onClick={onClick} style={style}>
      {children}
    </button>
  )
}

export default Button
