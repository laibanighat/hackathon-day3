import React from 'react';
import Navbar from './Components/Navbar'
import Card from './Card/page'
import Checkout from './Checkout/page'
import Detail from './Detail/page'
import Help from './Help/page'
import JoinUs from './JoinUs/page'
import Login from './Login/page'
import Product from './Product/page'

const page = () => {
  return (
    <div>
      <Navbar/>
      <Card/>
      <Checkout/>
      <Detail/>
      <Help/>
      <JoinUs/>
      <Login/>
      <Product/>
    </div>
  )
}

export default page
