import React from 'react'

const Button = ({ name, className, onClick, title, value, type }) => {
  return (
    <>
        <button className={className} onClick={onClick} name={name} value={value} type={type} >{title}</button>
    </>
  )
}

export default Button