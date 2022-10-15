import React from 'react'

const Input = ({id, name, type, className, style, placeholder, onChange, value}) => {
  return (
    <input
    id={id}
    name={name}
    type={type}
    className={className}
    style={style}
    placeholder={placeholder}
    onChange={onChange}
    value={value}
    />
  )
}

export default Input