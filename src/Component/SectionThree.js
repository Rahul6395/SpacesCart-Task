import React from 'react'
import "../Style/SectionThree.css"
import { MdArrowLeft ,MdArrowRight } from "react-icons/md";

function SectionThree() {
  return (
    <div className='mainCon'>
      <div className='container'>
       <div className='row'>
        <div className='col-10 mx-auto'>
            <div className='mt-2'> 
              <h3 className='bannerTextColor text-center'>Your eyes are splendid. Let people see them clearly.</h3>
                <p className='text-center fs-16 pb-5 pt-3'>We know how frustrating glasses glare can be. Anti-reflective or 
                 anti-glare coating prevents glare on your lenses - letting almost all light through. Not only do anti- 
                  reflective glasses help in computer use and driving at night, they also allow other people to see you clearly. 
                   You don’t need to tilt your head at awkward angles while getting photographed, either! Since more light 
                    reaches your eyes, you’ll also notice an improvement in your vision. And the best part? Anti-glare, anti- 
                     scratch, and anti-UV coatings are all free of cost at Specscart!</p>
            </div>
        </div>
        <div className='col-7 mx-auto carImgCon px-0 '  style={{backgroundImage:'url(img/sea.jpg)'}}>
  <div className='blurCon'></div>
       <div className='indicatorCon '>
         <span className='d-block'><MdArrowLeft color='white' size={30}/></span>
         <span className='d-block'><MdArrowRight color='white' size={30}/></span>
       </div>
        </div>
       </div>
      </div>
    </div>
  )
}

export default SectionThree