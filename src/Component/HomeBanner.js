import React from 'react'
import "../Style/HomeBanner.css"
import { BsPlayCircleFill } from "react-icons/bs";
import { motion } from "framer-motion"

function HomeBanner() {
    return (
        <div>
            <div className='bannerCon' style={{ backgroundImage: " url(img/Banner.jpg)",overflow:"hidden" }}>
                <div className='container'>
                    <div class="row">
                        <div class="col-md-5 offset-md-1 px-0">
                            <div className='mt-22'>
                                <h5 className='text-color'>Home Trial Cart 2.0</h5>
                                <h3 className='pt-3 bannerTextColor'>It’s An Experience!</h3>
                                <div className='d-flex'>
                                    <motion.h3
                                    initial={{opacity:0}}
                                    animate={{opacity:1}}
                                    transition={{duration:1.5 ,delay:1}}
                                     className='bannerTextColor'>Four Frames.</motion.h3>
                                    <motion.h3
                                    initial={{opacity:0}}
                                    animate={{opacity:1}}
                                    transition={{duration:1.6 ,delay:2.5}}
                                     className='bannerTextColor px-1'> Three Lenses. </motion.h3>
                                    <motion.h3
                                    initial={{opacity:0}}
                                    animate={{opacity:1}}
                                    transition={{duration:1.6 ,delay:4}}
                                     className='bannerTextColor'>1Laser</motion.h3>
                                </div>
                                <div className='d-flex align-items-center pt-3'>
                                    <div >
                                        <button className='tryNowBtn'>Try Now</button></div>
                                    <span className='px-4'><BsPlayCircleFill color="#00b3a3" size={40} className="playBtn" /></span>
                                    <h5 className='mb-0 text-color'>Watch Whats New!</h5>

                                </div>
                            </div>
                        </div>

                        <div class="col-md-6 position-relative  px-0">
                            <div className='d-flex'>
                                <motion.div
                                     initial={{x:-1000 }}
                                    animate={{ x: 0,  }}
                                    transition={{ duration:2.5,delay:2.5 }}
                                ><img src="img/BannerPen.png" alt="BannerPen" className='BannerPen' /></motion.div>
                                <motion.div
                                    initial={{y:-500 }}
                                    animate={{ y: 0,  }}
                                    transition={{ duration:1.5 }}
                                ><img src="img/BannerFrame.png" alt="BannerFrame" className='BannerFrame' /></motion.div>
                            </div>
                            <motion.div 
                                     initial={{y:300 }}
                                    animate={{ y: 0,  }}
                                    transition={{ duration:1.6,delay:1.5 }}
                                   
                            className='bannerGlassCon'><img src="img/bannerGlass.png" alt="bannerGlass" className='bannerGlass' /></motion.div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HomeBanner