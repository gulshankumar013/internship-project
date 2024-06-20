import React from 'react'
import '../css/customize1.css'
import { FaIndianRupeeSign } from 'react-icons/fa6'
import Footer from './Footer'
const Customize1 = () => {
  return (
    <>
      <div className='customize1'>
                        {/* card 1 */}

                <div className='customize1-child1'>
                        <div className='customize1a'>
                                <div className='customize1-child1-a'><h4>Budget</h4> <p > Gaming</p></div>
                                <div className='customize1-child1-b'><p>Enjoy your all favourit latest game without breaking your bank</p></div>
                                <div className='customize1-child1-c'><p>Starts From</p></div>
                                <div className='customize1-child1-d'>
                                    <div className='customize1-child1-d1'><FaIndianRupeeSign style={{color:'#0075FF'}} /></div>
                                    <div className='customize1-child1-d2'><p style={{fontFamily:'Rubik'}}>34,500</p></div>
                                </div>
                                <div className='customize1-child1-e'><button>View More</button></div>
                        </div>
                        <div className='customize1b'>
                            < div className='customize-img'></div>    
                        </div>
                </div>
          


              {/* card 2 */}
          <div className='customize1-child1'>
          <div className='customize1a'>
                                <div className='customize1-child1-a'><h4>Enthusiast</h4> <p> Gaming</p></div>
                                <div className='customize1-child1-b'><p>Series that smashes 1080p and can handle 1440p with a few tweaks.</p></div>
                                <div className='customize1-child1-c'><p>Starts From</p></div>
                                <div className='customize1-child1-d'>
                                    <div className='customize1-child1-d1'><FaIndianRupeeSign style={{color:'#0075FF'}} /></div>
                                    <div className='customize1-child1-d2'><p style={{fontFamily:'Rubik'}}>75,990</p></div>
                                </div>
                                <div className='customize1-child1-e'><button>View More</button></div>
                        </div>
                        <div className='customize1b'>
                            < div className='customize-img2' ></div>    
                        </div>
          </div>

            {/* card 3 */}
          <div className='customize1-child1'>
          <div className='customize1a'>
                                <div className='customize1-child1-a'><h4>Extreem</h4> <p> Gaming</p></div>
                                <div className='customize1-child1-b'><p>The latest generation enthusiast grade hardware that will exceed all the requirements of your games</p></div>
                                <div className='customize1-child1-c'><p>Starts From</p></div>
                                <div className='customize1-child1-d'>
                                    <div className='customize1-child1-d1'><FaIndianRupeeSign style={{color:'#0075FF'}} /></div>
                                    <div className='customize1-child1-d2'><p style={{fontFamily:'Rubik'}}>173,390</p></div>
                                </div>
                                <div className='customize1-child1-e'><button>View More</button></div>
                        </div>
                        <div className='customize1b'>
                            < div className='customize-img3'></div>    
                        </div>
          </div>
      </div>
      <Footer/>
    </>
  )
}

export default Customize1
