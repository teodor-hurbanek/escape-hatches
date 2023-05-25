import React from 'react'

type SelectProps = {
  data: any[]
  value: any
  onChange: (e: any) => void
}

export default function Select({ value, onChange, data }: SelectProps) {
  return (
    <select value={value} onChange={onChange}>
      {data.map((item, index) => (
        <option value={item} key={index}>
          {item}
        </option>
      ))}
    </select>
  )
}
