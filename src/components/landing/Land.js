import React from 'react'

import shop from '../../images/shop.webp'
import Button from '../Button'

const Land = () => {
  return (
    <div className='land flex'>

      <div className='info'>
        <h1>منصة تجربة</h1>
        <p>تحول إلى التجارة الإلكترونية بسهولة و سرعة و أمتلك متجر إلكتروني خاص بك بجميع مزايا التجارة الإلكترونية مع توفير الخدمات المساندة له</p>
        <Button value='إبدأ الان' />
      </div>
      <div className='image'>
        <img src={shop} alt='shopImage' />
      </div>
    </div>
  )
}

export default Land
