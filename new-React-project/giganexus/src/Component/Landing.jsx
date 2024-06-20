import React, { useEffect, useRef, useState } from "react";
import "../css/landing.css";
import { Slide } from "react-slideshow-image";
import 'react-slideshow-image/dist/styles.css'
import { FaIndianRupeeSign } from "react-icons/fa6";
import { CiHeart } from "react-icons/ci";
import Footer from "./Footer";
import { Link } from "react-router-dom";



const divStyle = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  backgroundSize: 'cover',
  height: '25em'
}

const slideImages = [
  {
    url:"slideimage1.jpg"
  },
  {
    url: "slideimage2.png",
    
  },
  {
    url: "slideimage3.png",
    
  },
  {
    url: "slidimage4.png",
  },
];


const Landing = ({ product, trending, brand, addToCart, addToWishlist }) => {

 
  const [popupData, setPopupData] = useState(null);
  const magnifierRef = useRef(null);

  function toggle(productItem = null) {
    var blur = document.getElementById('blur');
    blur.classList.toggle('active');

    var popup = document.getElementById('popup');
    popup.classList.toggle('active');

    setPopupData(productItem);
  }

  function handleMouseMove(e) {
    const magnifier = magnifierRef.current;
    const { left, top, width, height } = e.target.getBoundingClientRect();
    const x = e.pageX - left - window.scrollX;
    const y = e.pageY - top - window.scrollY;

    if (magnifier) {
      const img = magnifier.querySelector('img');
      const imgWidth = img.offsetWidth;
      const imgHeight = img.offsetHeight;

      const magnifierSize = 100; // Adjust as needed

      const offsetX = Math.max(0, Math.min(x, width - magnifierSize));
      const offsetY = Math.max(0, Math.min(y, height - magnifierSize));

      magnifier.style.left = `${offsetX}px`;
      magnifier.style.top = `${offsetY}px`;
      img.style.left = `-${(imgWidth / width) * offsetX}px`;
      img.style.top = `-${(imgHeight / height) * offsetY}px`;

      magnifier.style.display = 'block';
    }
  }

  function handleMouseLeave() {
    if (magnifierRef.current) {
      magnifierRef.current.style.display = 'none';
    }
  }

  return (
    <>
      <div className="slide-container">
        <Slide>
          {slideImages.map((slideImage, index) => (
            <div key={index}>
              <div
                style={{
                  ...divStyle,
                  backgroundImage: `url(${slideImage.url})`,
                }}
              ></div>
            </div>
          ))}
        </Slide>
      </div>

      <div>
        <div id="popup" className="popup">
          <div className="popup-parent">
            {popupData && (
              <>
                <div className="popup-child">
                  <div className="popup-brand"><h2>Brand</h2></div>
                  <div className="popup-brand-name"><h1>{popupData.brand}</h1></div>
                  <div className="popup-img" onMouseMove={handleMouseMove} onMouseLeave={handleMouseLeave}>
                    <img src={popupData.url} alt={popupData.name} />
                    <div className="magnifier" ref={magnifierRef}>
                      <img src={popupData.url} alt={popupData.name} />
                    </div>
                  </div>
                  <div className="price-box">
                    <div className="popup-box2">
                      <div className="rs-symbole"><FaIndianRupeeSign style={{ color: '#0075FF' }} /></div>
                      <div className="popup-price">{popupData.price}</div>
                    </div>
                    <div className="popup-rating"></div>
                    <div className="popup-addtocart">
                      <button onClick={() => addToCart(popupData)}>Add to Cart</button>
                    </div>
                  </div>
                </div>
                <div className="popup-child2">
                  <h2>{popupData.name}</h2>
                  <div>
                    <p>{popupData.description}</p>
                    <br />
                  </div>
                  <div>
                    <h4>Description</h4>
                    <p>{popupData.about}</p>
                  </div>
                  <div>
                    <br />
                    <h5>Specifications</h5>
                    <p>{popupData.Specifications}</p>
                  </div>
                </div>
              </>
            )}
          </div>
          <button className="popup-button" onClick={() => toggle()}>Close</button>
        </div>
      </div>

      <div className="landing-page" id="blur">
        <div className="container1-title">
          <p>Best Selling</p>
        </div>
        <div className="parent1">
          {product.map((productItem, productIndex) => (
            <div onClick={() => toggle(productItem)} className="child1" key={productIndex}>
              <div className="card-box1"><img src={productItem.url} alt="" /></div>
              <div className="card-box2">{productItem.name}</div>
              <div className="card-box3">{productItem.description}</div>
              <div className="card-box4">
                <div className="child4-a"><FaIndianRupeeSign /></div>
                <div className="child4-b">{productItem.price}</div>
              </div>
              <div className="child4-c"><button onClick={(e) => { e.stopPropagation(); addToCart(productItem); }}>Add to Cart</button></div>
              <div className="card-box5"><Link style={{ color: '#0075FF' }} href=""><CiHeart style={{ fontSize: '30px' }} onClick={()=>{addToWishlist(productItem)}} /></Link></div>
            </div>
          ))}
        </div>

        <div className="container1-title">
          <p>Trending Products</p>
        </div>
        <div className="parent2">
          {trending.map((productItem, productIndex) => (
            <div onClick={() => toggle(productItem)} className="child1" key={productIndex}>
              <div className="card-box1"><img src={productItem.url} alt="" /></div>
              <div className="card-box2">{productItem.name}</div>
              <div className="card-box3">{productItem.description}</div>
              <div className="card-box4">
                <div className="child4-a"><FaIndianRupeeSign /></div>
                <div className="child4-b">{productItem.price}</div>
              </div>
              <div className="child4-c"><button onClick={(e) => { e.stopPropagation(); addToCart(productItem); }}>Add to Cart</button></div>
              <div className="card-box5"><a style={{ color: '#0075FF' }} href=""><CiHeart style={{ fontSize: '30px' }} /></a></div>
            </div>
          ))}
        </div>

        <div className="container1-title">
          <p>Offer's On Top Brand's</p>
        </div>
        <div className="parent3">
          {brand.map((productItem, productIndex) => (
            <div onClick={() => toggle(productItem)} className="child1" key={productIndex}>
              <div className="card-box1"><img src={productItem.url} alt="" /></div>
              <div className="card-box2">{productItem.name}</div>
              <div className="card-box3">{productItem.discount}</div>
              <div className="card-box4">
                <div className="child4-a"></div>
                <div className="child4-b">{productItem.price}</div>
              </div>
              <div className="child4-c"><button>View More</button></div>
              <div className="card-box5"><a style={{ color: '#0075FF' }} href=""><CiHeart style={{ fontSize: '30px' }} /></a></div>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Landing;