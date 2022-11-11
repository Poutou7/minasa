import React from 'react'

const Button = ({ value, onClick }) => {
  return (
    <button className='btn-shape' onClick={onClick}>{value}</button>
  )
}

export default Button
