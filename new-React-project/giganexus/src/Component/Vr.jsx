import React, { useState } from 'react'
import { FaIndianRupeeSign } from 'react-icons/fa6'
import Footer from './Footer'

const Vr = () => {
  const [gaming, setGaming] = useState([
    {
      url: '../public/vr1.png',
      name: 'JioDive VR Headset',
      brand:'JIO',
      description: 'JioDive VR Headset | Enjoy live cricket like T20 World Cup with JioDive |Get live TV in 360 with JioTV XR',
      about:"JioDive VR Headset | Enjoy live cricket like T20 World Cup with JioDive |Get live TV in 360 with JioTV XR |Experience YouTube 360 Videos |4.7-6.7 inch Screen Size | Android & iOS Phone Support – Black",
      price: 1399,
      Specifications:'Enjoy live cricket like T20 Cricket World Cup & All Team India matches all year long with JioDive.Access to the largest collection of 360° VR content & experiences. Watch 6,000+ movies, 1,000+ TV shows with JioCinema & 1,000+ Live TV channels with JioTV XR'
    },
    {
      url: '../public/vr2.png',
      name: 'Samsung Gear VR SM-R322NZWA',
      brand:'SAMSUNG',
      description: 'Samsung Gear VR SM-R322NZWA White For S7, S7 Edge, Note 5, S6, S6 Edge and S6 Edge+',
      about:"Lets watch your favorite movie and web series with samsung VR gear",
      price: 7735,
      Specifications:'Brand	Samsung Colour	White Field Of View	90 Degrees Item Weight	0.7 Pounds Platform	Windows XP Screen Size	6 Inches UPC	887276132716 761768032305 792137905586 Global Trade Identification Number	00887276132716Manufacturer	Samsung'
    },
    {
      url: '../public/vr3.png',
      name: 'Vision Pro',
      brand:'APPLE',
      description: ' Vision Pro Mixed Reality Advanced VR Headset - 256GB',
      about:"With Vision Pro, you have an infinite canvas that transforms how you use the apps you love. Arrange apps anywhere and scale them to the perfect size, making the workspace of your dreams a reality — all while staying present in the world around you. Browse the web in safari, create a to‑do list in Notes, chat in Messages, and seamlessly move between them with a glance. You can even bring your PC workflows into Vision Pro wirelessly with Virtual Display.",
      price: 295000,
      Specifications:'Stunning 12.9-inch Liquid Retina XDR display with ProMotion technology for smooth scrolling and incredible detail Powered by the M1 chip for blazing-fast performance and incredible energy efficiency Ultra-wide front camera with Center Stage for natural video calls True Depth camera system for authentication and immersive AR experiences All-day battery life, perfect for work, play, and everything in between USB 4 support for high-speed data transfer and connectivity to a wide range of peripherals'
    },
    {
      url: '../public/vr4.png',
      name: 'Oculus Quest 2',
      brand:'META QUEST',
      description: 'Oculus Quest 2 Advanced All-In-One Virtual Reality Headset',
      about:"Meta Quest is for ages 13+. Certain apps, games and experiences may be suitable for a more mature audience. Keep your experience smooth and seamless, even as high speed action unfolds around you with a super-fast processor and high-resolution display. (Packaging may vary) Meta Quest packaging will continue to carry the Oculus name and logo during the transition to our new branding.",
      price: 26199,
      Specifications:'Batteries  :  4 AA batteries required. (included) Rated :  Ages 12 and Over Language :  None Product Dimensions : 26 x 18.7 x 12.6 cm; 830.07 g Release date :  25 August 2021 ASIN  :  B099VMT8VZ Item model number  : 899-00182-02 Country of Origin :  USA Manufacturer  :  Meta Quest, META Packer :  Sunder Electronics, Lower Parel (East), Mumbai, Maharashtra 400011 Importer  :  Sunder Electronics, Lower Parel (East), Mumbai, Maharashtra 400011 Item Weight  :  830 g Item Dimensions LxWxH  :  26 x 18.7 x 12.6 Centimeters Net Quantity : 1 Count Included Components  :  Vr Headset, 2 Controller,Charger. Generic Name  :  Virtual Reality Headset'
    },
    {
      url: '../public/vr5.png',
      name: 'Meta Quest 3',
      brand:'META QUEST',
      description: 'Meta Quest 3 128GB Console Virtual Reality',
      about:"Dive into extraordinary experiences with a mixed reality headset that transforms your home into an exciting new playground, where virtual elements blend into your actual surroundings.",
      price: 47390,
      Specifications:'Batteries  :  4 AA batteries required. (included) Rated :  Ages 12 and Over Language :  None Product Dimensions : 26 x 18.7 x 12.6 cm; 830.07 g Release date :  25 August 2021 ASIN  :  B099VMT8VZ Item model number  : 899-00182-02 Country of Origin :  USA Manufacturer  :  Meta Quest, META Packer :  Sunder Electronics, Lower Parel (East), Mumbai, Maharashtra 400011 Importer  :  Sunder Electronics, Lower Parel (East), Mumbai, Maharashtra 400011 Item Weight  :  830 g Item Dimensions LxWxH  :  26 x 18.7 x 12.6 Centimeters Net Quantity : 1 Count Included Components  :  Vr Headset, 2 Controller,Charger. Generic Name  :  Virtual Reality Headset'
    },
    {
      url: '../public/vr6.png',
      name: 'Meta Quest Pro',
      brand:'META QUEST',
      description: 'Meta Quest Pro Console 256GB VR Headset',
      about:"Meta Quest Pro unlocks new perspectives in work, creativity, and collaboration. Multitask with ease with multiple resizable screens so you can organize tasks, work on new ideas or message with your friends",
      price: 79990,
      Specifications:'Batterie :2 Lithium Ion batteries required. (included) Language :  English Product Dimensions  :  40 x 24 x 20 cm; 861.83 g Release date  :  22 January 2023 SIN  :  B09Z7KGTVW Item model number : 899-00412-01 Country of Origin  :  USA Manufacturer  :  Meta Quest, Meta Quest Packer  :  META Importer  :  ANANDIT INFOTECH INDIA PVT LTD Item Weight  :  862 g Item Dimensions LxWxH : 40 x 24 x 20 Centimeters Net Quantity :  1 Set Included Components  :  Controller Generic Name  :  META QUEST'
    },
   
  ]
  )
    
  return (
    <>
      <div>
        {
          gaming.map((gamingItem,gamingIndex)=>(
            <div className='gaming-body' key={gamingIndex}>
                 <div className='gaming-child1'>
                        <div className='gaming1a'>
                                <div className='gaming1-child1-a'><h4>{gamingItem.name}</h4></div>
                                <div className='gaming1-child1-b'><p>{gamingItem.description}</p></div>
                               
                                <div className='gaming1-child1-d'>
                                    <div className='gaming1-child1-d1'><FaIndianRupeeSign style={{color:'#0075FF'}} /></div>
                                    <div className='gaming1-child1-d2'><p style={{fontFamily:'Rubik'}}>{gamingItem.price}</p></div>
                                </div>
                                <div className='gaming1-child1-e'><button>View More</button></div>
                        </div>
                        <div className='gaming1b'>
                            < div className='gaming-img'><img src={gamingItem.url} alt={gaming.name} /></div>    
                        </div>
                </div>
            </div>          

          ))
        }
      </div>
      <Footer/>
    </>
  )
}

export default Vr
