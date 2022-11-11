import React from 'react'
import Plan from './Plan'

import './plans.css';


const Plans = () => {

  const plans = [
    {
      id: 1,
      title: 'البداية',
      price: 19,
      txt: 'هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة, لقد تم توليد هذا النص',
      features: ['نص يمكن أن يستبدل', 'نص يمكن أن يستبدل', 'نص يمكن أن يستبدل', 'نص يمكن أن يستبدل', 'نص يمكن أن يستبدل']
    },
    {
      id: 2,
      title: 'البداية',
      price: 19,
      txt: 'هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة, لقد تم توليد هذا النص',
      features: ['نص يمكن أن يستبدل', 'نص يمكن أن يستبدل', 'نص يمكن أن يستبدل', 'نص يمكن أن يستبدل', 'نص يمكن أن يستبدل']
    },
    {
      id: 3,
      title: 'البداية',
      price: 19,
      txt: 'هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة, لقد تم توليد هذا النص',
      features: ['نص يمكن أن يستبدل', 'نص يمكن أن يستبدل', 'نص يمكن أن يستبدل', 'نص يمكن أن يستبدل', 'نص يمكن أن يستبدل']
    },
  ]
  const result = plans.map((plan) => {
    return <Plan
      key={plan.id}
      title={plan.title}
      price={plan.price}
      txt={plan.txt}
      features={plan.features} />
  })
  return (
    <div className='plans-comp'>
      <h1 className='title-head'>باقات تجربة</h1>
      <div>
        <span className='yearly'>سنوي</span>
        <span className='monthly'>شهري</span>
      </div>
      <div className='flex plans'>
        {result}
      </div>
    </div>
  )
}

export default Plans
