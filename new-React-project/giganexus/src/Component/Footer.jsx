import React from 'react'
import "../css/footer.css"
import { FaFacebook, FaTwitter } from 'react-icons/fa'
import { FiInstagram } from 'react-icons/fi'
import { AiFillLike } from 'react-icons/ai'
import { Link } from 'react-router-dom'


const Footer = () => {

    const backToTop = ()=> {
        window.scroll({top:0, left:0, behavior:'smooth'})
      }
  return (
    <>
       <section className='footer-section'>
            <div className='fotter-img'>
                <div className='fotter-carton'></div>
                <div className='footer-deatils-parent'>
                    <div className='footer-details'>
                        <div className='footer-about'>
                            <ul>
                                <li style={{fontWeight:"bold"}}>About</li><br />
                                <Link to={"/about"} onClick={backToTop}>About us</Link><br/>
                                <Link>Our Story</Link><br />
                                <Link to={"/customize"} onClick={backToTop}>Customize</Link><br />
                                <br />
                            </ul>
                        </div>
                        <div className='footer-about'>
                            <ul>
                                <li style={{fontWeight:"bold"}}>Help</li><br />
                                <Link to={'/profile'} onClick={backToTop}>My Account</Link><br />
                                <Link>FAQ</Link><br />
                                
                                <Link>Oder's</Link><br />
                            </ul>
                        </div>
                        <div className='footer-about'>
                            <ul>
                                <li style={{fontWeight:"bold"}}>News</li><br />
                                <Link to={'customize/hedder/customize3'} onClick={backToTop}>Upcoming</Link><br />
                                <Link to={'/'} onClick={backToTop}>Trending</Link><br />
                                <Link>Market Place</Link><br />
                            </ul>
                        </div>
                        <div className='footer-about'>
                            <ul>
                                <li style={{fontWeight:"bold"}}>Order</li><br />
                                <Link to={"/customize/hedder/customize1"} onClick={backToTop}>Gamming pc</Link><br />
                                <Link to={'/'} onClick={backToTop}>Our Products</Link><br />
                                <Link>Partners</Link><br />
                            </ul>
                        </div>
                        <div className='footer-about'>
                            <ul>
                                <li style={{fontWeight:"bold"}}>Support</li><br />
                                <Link to={"/contactus"} onClick={backToTop}>Contact us</Link><br />
                                <Link>Tech Guidence</Link><br />
                                
                                <Link>Term & Conditions</Link><br />
                            </ul>
                        </div>
                            <div className='footer-logodiv'>
                                        <div className='footer-logo'></div>
                                        <div>
                                            <h1 >GIGANEXUS</h1>
                                            <p>The Ultimate Paradise for Technovores</p>
                                        </div>
                            </div>
                            
                    </div>
                            <div className='footer-socical'>
                                <a className='footer-socical-logo' href=""><FaFacebook/></a>
                                <a className='footer-socical-logo' href=""><FiInstagram /></a>
                                <a className='footer-socical-logo' href=""><FaTwitter/></a>
                            </div>
                            <p>Please Show Your Appreciation by hitting the like button below </p>
                            <div style={{marginLeft:"44.5%",}}>
                           <a  href=""><AiFillLike/></a> 
                            </div>

                    </div>
                   
            </div>
            
        </section>
       
    </>
  )
}

export default Footer
