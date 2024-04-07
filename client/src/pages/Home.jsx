import React from 'react'
import Banner from './extras/Banner'
import Category from './extras/Category'
import Popular from './extras/Popular'
import Testimonials from './extras/Testimonials'
import Offers from './extras/Offers'

const Home = () => {
  return (
    <div>
      {/* banner */}
      <Banner/>
      {/* category */}
      <Category/>
      {/* popular items */}
      <Popular/>
      {/* testimonials */}
      <Testimonials/>
      {/* special offers */}
      <Offers/>
    </div>
  )
}

export default Home