import React, { useState } from 'react'
import { FaIndianRupeeSign } from 'react-icons/fa6'

const Workstation = () => {
  
    const [gaming, setGaming] = useState([
      {
        url: '../public/cardimage5.svg',
        name: 'PSP Remote play',
        brand:'SONY',
        description: 'Sony PSP Husky White',
        about:"NPlaystation 5 Not Included Put Your PS5 in the Palm of Your Hand - PlayStation Portal Remote Player gives you access to the games on your PS5 over your home Wi-Fi letting you jump right into gaming without needing to play on a TV Play Your Game Collection - PlayStation Portal Remote Player can play compatible games you have installed on your PS5 console, including your favorite games for PS5 and PS4.Experience Breathtaking Immersion with DualSense Wireless Controller Features - Feel the incredible immersion of haptic feedback and adaptive triggers in supported games",
        price: 28777,
        Specifications:'Beautiful 8” LCD Screen - Take in every exquisite detail of your favorite games as they come alive on a brightly lit and gorgeous full HD screen.60fps Capable at 1080p Resolution - PlayStation Portal Remote Player can deliver silky smooth gameplay at up to 60fps with high image clarity on its 1080p resolution screen.PlayStation Portal Remote  Player can stream compatible games.'
      },
      {
        url: '../public/game2.jpg',
        name: 'PSS Wireless Gaming Controller',
        brand:'PSS',
        description: 'Wide Compatibility - The wireless controller perfectly compatible with PS4, PS4 Slim, PS4 Pro',
        about:"NPlaystation 5 Not Included Put Your PS5 in the Palm of Your Hand - PlayStation Portal Remote Player gives you access to the games on your PS5 over your home Wi-Fi letting you jump right into gaming without needing to play on a TV Play Your Game Collection - PlayStation Portal Remote Player can play compatible games you have installed on your PS5 console, including your favorite games for PS5 and PS4.Experience Breathtaking Immersion with DualSense Wireless Controller Features - Feel the incredible immersion of haptic feedback and adaptive triggers in supported games",
        price: 1899,
        Specifications:'Beautiful 8” LCD Screen - Take in every exquisite detail of your favorite games as they come alive on a brightly lit and gorgeous full HD screen.60fps Capable at 1080p Resolution - PlayStation Portal Remote Player can deliver silky smooth gameplay at up to 60fps with high image clarity on its 1080p resolution screen.PlayStation Portal Remote  Player can stream compatible games.'
      },
      {
        url: '../public/game3.jpg',
        name: 'PSP controller play',
        brand:'SONY',
        description: ' White psp remote controller',
        about:"NPlaystation 5 Not Included Put Your PS5 in the Palm of Your Hand - PlayStation Portal Remote Player gives you access to the games on your PS5 over your home Wi-Fi letting you jump right into gaming without needing to play on a TV Play Your Game Collection - PlayStation Portal Remote Player can play compatible games you have installed on your PS5 console, including your favorite games for PS5 and PS4.Experience Breathtaking Immersion with DualSense Wireless Controller Features - Feel the incredible immersion of haptic feedback and adaptive triggers in supported games",
        price: 28777,
        Specifications:'Beautiful 8” LCD Screen - Take in every exquisite detail of your favorite games as they come alive on a brightly lit and gorgeous full HD screen.60fps Capable at 1080p Resolution - PlayStation Portal Remote Player can deliver silky smooth gameplay at up to 60fps with high image clarity on its 1080p resolution screen.PlayStation Portal Remote  Player can stream compatible games.'
      },
      {
        url: '../public/game4.png',
        name: 'PSP Remote play',
        brand:'SONY',
        description: 'Sony PSP Husky White',
        about:"NPlaystation 5 Not Included Put Your PS5 in the Palm of Your Hand - PlayStation Portal Remote Player gives you access to the games on your PS5 over your home Wi-Fi letting you jump right into gaming without needing to play on a TV Play Your Game Collection - PlayStation Portal Remote Player can play compatible games you have installed on your PS5 console, including your favorite games for PS5 and PS4.Experience Breathtaking Immersion with DualSense Wireless Controller Features - Feel the incredible immersion of haptic feedback and adaptive triggers in supported games",
        price: 28777,
        Specifications:'Beautiful 8” LCD Screen - Take in every exquisite detail of your favorite games as they come alive on a brightly lit and gorgeous full HD screen.60fps Capable at 1080p Resolution - PlayStation Portal Remote Player can deliver silky smooth gameplay at up to 60fps with high image clarity on its 1080p resolution screen.PlayStation Portal Remote  Player can stream compatible games.'
      },
      {
        url: '../public/game5.png',
        name: 'ALPIAZ Wired Gaming Controller',
        brand:'SONY',
        description: 'Joystick Gamepad with Dual Vibration',
        about:"NPlaystation 5 Not Included Put Your PS5 in the Palm of Your Hand - PlayStation Portal Remote Player gives you access to the games on your PS5 over your home Wi-Fi letting you jump right into gaming without needing to play on a TV Play Your Game Collection - PlayStation Portal Remote Player can play compatible games you have installed on your PS5 console, including your favorite games for PS5 and PS4.Experience Breathtaking Immersion with DualSense Wireless Controller Features - Feel the incredible immersion of haptic feedback and adaptive triggers in supported games",
        price: 28777,
        Specifications:'Beautiful 8” LCD Screen - Take in every exquisite detail of your favorite games as they come alive on a brightly lit and gorgeous full HD screen.60fps Capable at 1080p Resolution - PlayStation Portal Remote Player can deliver silky smooth gameplay at up to 60fps with high image clarity on its 1080p resolution screen.PlayStation Portal Remote  Player can stream compatible games.'
      },
      {
        url: '../public/game6.png',
        name: 'Razer Wolverine V2 pro ',
        brand:'SONY',
        description: 'Sony PSP Husky White',
        about:"NPlaystation 5 Not Included Put Your PS5 in the Palm of Your Hand - PlayStation Portal Remote Player gives you access to the games on your PS5 over your home Wi-Fi letting you jump right into gaming without needing to play on a TV Play Your Game Collection - PlayStation Portal Remote Player can play compatible games you have installed on your PS5 console, including your favorite games for PS5 and PS4.Experience Breathtaking Immersion with DualSense Wireless Controller Features - Feel the incredible immersion of haptic feedback and adaptive triggers in supported games",
        price: 28777,
        Specifications:'Beautiful 8” LCD Screen - Take in every exquisite detail of your favorite games as they come alive on a brightly lit and gorgeous full HD screen.60fps Capable at 1080p Resolution - PlayStation Portal Remote Player can deliver silky smooth gameplay at up to 60fps with high image clarity on its 1080p resolution screen.PlayStation Portal Remote  Player can stream compatible games.'
      }
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
      </>
  )
}

export default Workstation
