import React from 'react'

const Plan = ({ title, price, txt, features }) => {

  const result = features.map((el, index) => {
    return <li key={index} >{el}</li>
  })

  return (
    <div className='plan rad-10 border-eee'>
      <h2>{title}</h2>
      <div className='price'>
        <span>{price}</span>
        <span>/شهر</span>
      </div>
      <p>{txt}</p>
      <ul>
        {result}
      </ul>
      <button>إختيار الخطة</button>
    </div>
  )
}

export default Plan
