import React from 'react'
import Navbar from '../Component/Navbar'
import HomeBanner from '../Component/HomeBanner'
import About from '../Component/About'
import SectionThree from '../Component/SectionThree'
import Testimonials from '../Component/Testimonials'

function HomeScreen() {
  return (
    <div>
    <Navbar/>
    <HomeBanner/>
    <About/>
    <SectionThree/>
    <Testimonials/>
    </div>
  )
}

export default HomeScreen