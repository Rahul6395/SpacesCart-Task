import React,{useState} from 'react';
import "../Style/HomeBanner.css"
import { MdOutlineArrowBackIos,MdOutlineArrowForwardIos } from "react-icons/md";

function About() {
 const [seeImgCon,setSeeImgCon] = useState('seeImgCon')   
 const [glassImgCon,setGlassImgCon] = useState("glassImgCon")
 const [glassImgs,setGlassImgs] = useState('glassImgs')
 const [glassImgSize,setGlassImgSize] = useState('glassImgSize')
 const [listColumns,setListColumns] = useState('')
 const [rocketImgCon,setRocketImgCon] = useState('rocketImgCon')
 const [rocketImgSize,setRocketImgSize] = useState('rocketImgSize')
 const [rocketImgs,setRocketImgs] = useState('rocketImgs')
 const [pghHiddenText,setPghHiddenText] = useState('pghHiddenText')
 const [shopBtn,setShopBtn] = useState("shopBtnCon")

 const seeImgHandler=()=>{
    setSeeImgCon('seeImgCon')
    setGlassImgCon("glassImgCon")
setGlassImgSize("glassImgSize")
setGlassImgs("glassImgs")
setListColumns('')
setRocketImgCon('rocketImgCon')
    setRocketImgSize('rocketImgSize')
    setRocketImgs('rocketImgs')
    setPghHiddenText('pghHiddenText')
    setShopBtn('shopBtnCon')
 }
 const glassImgHandler=()=>{
setGlassImgCon("glassImgConCh")
setGlassImgSize("glassImgSizeCh")
setGlassImgs("glassImgsCh")
setListColumns('listColumns')
setSeeImgCon('seeImgConCh')
setRocketImgCon('rocketImgCon')
    setRocketImgSize('rocketImgSize')
    setRocketImgs('rocketImgs')
    setPghHiddenText('pghHiddenText')
    setShopBtn('shopBtnConGlass')
 }
 const rocketImgHandler=()=>{
    setRocketImgCon('rocketImgConCh')
    setRocketImgSize('rocketImgSizeCh')
    setRocketImgs('rocketImgsCh')
    setPghHiddenText('pghHiddenTextCh')
    setSeeImgCon('seeImgConCh')
    setGlassImgCon("glassImgCon")
setGlassImgSize("glassImgSize")
setGlassImgs("glassImgs")
setListColumns('')
setShopBtn('shopBtnConRocket')
 }

    return (
        <div>
            <div className='container'>
                <div className='row mt-5'>
                    <div className='col-10 mx-auto '>
                        <h3 className='bannerTextColor text-center'>4 frames, 3 lenses, 7 days - direct to your home.
                        </h3>
                        <p className='text-center fs-16 pb-5 pt-3'>We get it - sometimes you need to hold the glasses in your hand (or take a selfie wearing them) to know if they’re made for you
                            or not. With our Free Home Trial, get 4 frames of your choice at your home, along with 3 cool lenses.</p>
                    </div>
                    <div className='mb-5 d-flex position-relative'>
                    <div className={`${shopBtn}`}>
                    <button className='shopBtn'>Shop Men</button>
                    <button className='shopBtn'>Shop Women</button>
                    </div>
                        <div className={`${seeImgCon}`} onClick={seeImgHandler} style={{ backgroundImage: "url(img/see.jpg)" }}>
                            <h5 className='text-white pt-5 px-5'>Anti Reflective Glasses</h5>
                        </div>

                        <div className={`${glassImgCon} glassImgTextCon position-relative`} onClick={glassImgHandler} style={{ backgroundImage: "linear-gradient(to right, rgb(74 43 92), rgb(75 36 96))" }}>                
                          <div className=''>
                        <div className='mt-5 px-2' style={{ backgroundImage: "linear-gradient(to right, #0cbeafda, rgb(75 36 96))", width: "240px " }}><h5 className='text-white py-2 mx-4 ' >Free Coatings</h5></div>
                            <div className='mx-4 px-2'>
                                <p className='pgh-text'>At Specscart - it’s Free and will
                                    always be.
                                </p>
                                <div className={`${listColumns}`}>
                                <div>
                                    <div className='aboutIconList'><img src="img/anti.png" alt="anti" className='smallIcon' /><span className='mx-3  fs-13'>Anti-UV</span></div>
                                    <div className='aboutIconList'><img src="img/glare.png" alt="glare" className='smallIcon' /><span className='mx-3  fs-13'>Anti-Glare</span></div></div>
                                    <div>
                                    <div className='aboutIconList'><img src="img/hamer.png" alt="hamer" className='smallIcon' /><span className='mx-3  fs-13'>impact Resistance</span></div>
                                    <div className='aboutIconList'><img src="img/scratch.png" alt="scratch" className='smallIcon' /><span className='mx-3  fs-13'>Anti-Scratch</span></div></div>
    
                                </div>
                            </div>
                            </div>
                            <div className={`${glassImgs}`}><img src="img/glass.png" alt="glass" className={`${glassImgSize}`}/></div> 
                            <span className='mb-2 d-block mx-4'>{glassImgs ==="glassImgsCh"?<MdOutlineArrowForwardIos color='rgb(213 214 215 / 47%)' size={14}/>:<MdOutlineArrowBackIos color='rgb(213 214 215 / 47%)' size={14}/>}</span>  
                        </div>

                        
                        <div className={`${rocketImgCon} position-relative`} onClick={rocketImgHandler}  style={{ backgroundImage: "linear-gradient(to right, rgb(94 47 120),rgb(155 104 185))" }}>
                        
                         <div className='mx-4 mt-5 px-2'>
                         <h5 className='text-white py-2'>24H Dispatch</h5>
                                <p className='pgh-text '>Free Shipping Across the Globe!</p>
                                <p className={`${pghHiddenText}`}>Specscart has mastered the supple chain for the same <br/>  day glasses dispatch.</p>
                                </div>
                                <div className={`${rocketImgs}`}><img src="img/rocket.png" alt="rocket" className={`${rocketImgSize}`}/></div> 
                            <span className='mb-2 d-block mx-4'>{rocketImgs ==="rocketImgsCh"?<MdOutlineArrowForwardIos color='rgb(213 214 215 / 47%)' size={14}/>:<MdOutlineArrowBackIos color='rgb(213 214 215 / 47%)' size={14}/>}</span>  
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default About