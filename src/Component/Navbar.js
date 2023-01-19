import React,{useEffect,useState} from 'react';
import StickyHeader from './StickyHeader';
import "../Style/StickyHeader.css"


function Navbar() {
    const [stickyClass, setStickyClass] = useState('relative');

    useEffect(() => {
        window.addEventListener('scroll', stickNavbar);
    
        return () => {
          window.removeEventListener('scroll', stickNavbar);
        };
      }, []);
      const stickNavbar = () => {
        if (window !== undefined) {
          let windowHeight = window.scrollY;
          windowHeight > 84 ? setStickyClass('fixedNavbar') : setStickyClass('relative');
        }
      };
  return (
    <div className={`container-fluid px-0 ${stickyClass}`}>
    <div className='position-relative bg-white box-shadow'>
    <StickyHeader/>
    <div className='container pt-3'>
                <div class="row">
                    <div class="col-md-4 px-0 ">
                        <div className='d-flex align-items-end'>
                            <a className='mb-0 fs-14  pl-3 fs-17'>Glasses</a>
                            <a className='mb-0 fs-14  pl-3 fs-17'>Sunglasses</a>
                            <a className='mb-0 fs-14  pl-3 fs-17'>Eye-Test</a>
                            <a className='mb-0 fs-14  pl-3 fs-17'>Blogs</a>
                        </div>
                    </div>
                   
                    <div class="col-md-4 offset-md-4 px-0">
                    <div className='col-6 offset-6'>
                        <div className='d-flex justify-content-between align-items-end mt-1'>
                            <img src="img/search.png" alt="search" className='iconWidth'/>
                            <img src="img/profile.png" alt="profile" className='iconWidth'/>
                            <img src="img/heart.png" alt="heart" className='iconWidth'/>
                            <img src="img/home.png" alt="home" className='iconWidth'/>
                            <img src="img/Cart.png" alt="cart" className='iconWidth'/>
                        </div>
                        </div>
                    </div>
                </div>
                <div class="logoCon">
                        <div className='d-flex justify-content-center'>
                            <img src="img/logo.png" alt="logo" className='logo'/>
                        </div>
                    </div>
            </div>
    </div>
    </div>
  )
}

export default Navbar