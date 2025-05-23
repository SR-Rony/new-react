import React from 'react'

const Button = ({className,text,click}) => {
  return (
    <button onClick={click} className={`rounded-full font-bold cursor-pointer ${className}`}>{text}</button>
  )
}

export default Button