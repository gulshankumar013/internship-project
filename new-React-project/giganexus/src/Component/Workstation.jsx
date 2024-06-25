import React, { useState } from 'react'
import { FaIndianRupeeSign } from 'react-icons/fa6'
import Footer from './Footer'

const Workstation = () => {
  
    const [gaming, setGaming] = useState([
      {
        url: '../public/work1.png',
        name: 'HP Spectre',
        brand:'HP',
        description: 'HP Spectre 16 x360 12th Gen Intel Evo Core i7 16 inch(40.6 cm) UHD+OLED Multitouch 400 nits Gorilla Glass',
        about:"HP Spectre 16 x360 12th Gen Intel Evo Core i7 16 inch(40.6 cm) UHD+OLED Multitouch 400 nits Gorilla Glass 2-in-1 Laptop (16GB RAM/1TB SSD/A370M Graphics 4GB/Win 11/FPR/B&O/Pen/2.01 Kg),f1009TX Blue",
        price: 176490,
        Specifications:'Beautiful 8” LCD Screen - Take in every exquisite detail of your favorite games as they come alive on a brightly lit and gorgeous full HD screen.60fps Capable at 1080p Resolution - PlayStation Portal Remote Player can deliver silky smooth gameplay at up to 60fps with high image clarity on its 1080p resolution screen.PlayStation Portal Remote  Player can stream compatible games.'
      },
      {
        url: '../public/work2.png',
        name: 'ASUS ZenBook Duo UX481 ',
        brand:'ASUS',
        description: 'ASUS ZenBook Duo UX481 14? FHD NanoEdge Bezel Touch Display, Intel Core i7-10510U CPU, 8GB RAM, 512GB PCIe SSD, UX481FA-DB71',
        about:"ASUS ZenBook Duo UX481 14? FHD NanoEdge Bezel Touch Display, Intel Core i7-10510U CPU, 8GB RAM, 512GB PCIe SSD, UX481FA-DB71",
        price: 258029,
        Specifications:'Beautiful 8” LCD Screen - Take in every exquisite detail of your favorite games as they come alive on a brightly lit and gorgeous full HD screen.60fps Capable at 1080p Resolution - PlayStation Portal Remote Player can deliver silky smooth gameplay at up to 60fps with high image clarity on its 1080p resolution screen.PlayStation Portal Remote  Player can stream compatible games.'
      },
      {
        url: '../public/work3.png',
        name: 'HP Z4 G5 Workstation PC',
        brand:'HP',
        description: ' Need to expand your workflow capabilities? Evolve your PC with plenty of space for high-end GPUs, loads of memory and storage—including front accessible NVMe bays—and even PCIe slots[3].',
        about:"This high-performance desktop workstation does it all. Tackle advanced workflows—from rendering and simulation to advanced video editing and massive dataset preparation. The Z4 G5 accelerates workflows across a wide range of professional apps and provides plenty of room to expand as work evolves.",
        price: 366672,
        Specifications:'Windows 11 ProIntel Xeon W5-2445 (up to 4.4 GHz with Intel Turbo Boost Technology, 26.25 MB L3 cache, 10 cores, 20 threads) 16 GB memory; 512 GB SSD storage NVIDIA RTX A2000 (6 GB GDDR6 dedicated)'
      },
      {
        url: '../public/work4.png',
        name: 'HP Z8 G5 Workstation',
        brand:'HP',
        description: 'Windows 11 Pro for Workstations - HP recommends Windows 11 Pro for business Intel® Xeon® Silver 4410Y Processor 16 GB memory;',
        about:"Processor-intensive workflows have met their match. The Z8 G5 offers more CPU performance than ever before, in a classic dual socket design, to accelerate rendering with real-time ray tracing, data visualization, and model training while also providing plenty of room to expand as demands change",
        price: 466672,
        Specifications:'Windows 11 Pro for Workstations - HP recommends Windows 11 Pro for business Intel Xeon Silver 4410Y Processor 16 GB memory 512 GB M.2 storage NVIDIA T400 Graphics (4 GB GDDR6)'
      },
      {
        url: '../public/work5.png',
        name: 'ASUS TUF Gaming F15 ',
        brand:'ASUS',
        description: 'AI Powered Gaming Intel Core i5 11th Gen 11260H - (8 GB/512 GB SSD/Windows 11 Home',
        about:"Step into the gaming universe with a laptop designed not just to meet but to outshine the competition. The TUF Gaming F15 is not just another gaming laptop; it’s a symbol of victory, forged with real-world resilience, and is armed with Windows 11, ensuring you’re always battle-ready.",
        price: 53000,
        Specifications:'15.6 Inch Full HD, IPS, 16:9 Aspect Ratio, 144Hz Refresh Rate, Viewing Angle: 85/85/85/85, Contrast: 1000:1, Brightness: 250nits, NTSC%: 45%, SRGB%: 62.5%, Adobe%: 47.34%, Anti-glare Display, Adaptive SyncLight Laptop without Optical Disk Drive'
      },
      {
        url: '../public/work6.jpg',
        name: 'Precision 5820 Tower Workstation ',
        brand:'Dell',
        description: 'Dell Workstaion',
        about:" Expand your ideas with the Precision 5820 Tower. Featuring high performance in a new innovative, versatile compact design",
        price: 390993,
        Specifications:' processor-Intel® Xeon® Processor W Family CPUs (Skylake-W) with up to 10 cores per processor and Intel® Advanced Vector Extensions, Intel® Trusted Execution Technology, Intel® AES New instructions, Optimized Intel® Turbo Boost and optional Intel® vPro™ technology'
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
        <Footer/>
      </>
  )
}

export default Workstation
