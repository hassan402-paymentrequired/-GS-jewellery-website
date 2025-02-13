import React from 'react'

const Button = ({title, classe}) => {
  return (
    <button className={classe}>{title}</button>
  )
}

export default Button