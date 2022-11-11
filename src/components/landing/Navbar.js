import React from 'react'

import Button from '../Button';

const Navbar = () => {
  return (
    <div className='navbar flex-between'>
      <div className='logo'>منصة تجربة</div>
      <ul className='flex'>
        <li><a href="#" > الرئيسية</a></li>
        <li><a href="#" > الأسعار</a></li>
        <li><a href="#" > المدونة</a></li>
        <li><a href="#" >تجربة المنصة</a></li>
      </ul>
      <div className='login flex'>
        <a href="#">تسجيل الدخول</a>
        <Button value='الاشتراك' />
      </div>
    </div>
  )
}

export default Navbar
