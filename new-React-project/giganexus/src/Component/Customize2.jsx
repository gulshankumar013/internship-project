import React from 'react'
import '../css/customize2.css'
import { GiProcessor } from "react-icons/gi";
import { GoPlus } from "react-icons/go";
import { BsMotherboard } from "react-icons/bs";
import { RiRam2Line } from "react-icons/ri";
import { MdOutlineSdStorage } from "react-icons/md";
import { PiGraphicsCardBold } from "react-icons/pi";
import { FaFan } from "react-icons/fa";
import { HiOutlineInbox } from "react-icons/hi";
import { PiComputerTower } from "react-icons/pi";
import { MdOutlineMouse } from "react-icons/md";
import { LiaKeyboard } from "react-icons/lia";
import { LuMonitor } from "react-icons/lu";
import { LuHardDrive } from "react-icons/lu";
import { MdOutlineSurroundSound } from "react-icons/md";
import Footer from './Footer';


const Customize2 = () => {
  return (
    <>
    <div className='customize2'>
       {/* card 1 */}
        <div className='customize2-parent'>
              <div className='customize2-parent-child1'><h4 style={{color:'#0075FF'}}>Select</h4><p style={{marginLeft:'3%'}}>Processor</p></div>
              <div className='customize2-parent-child2'>
                  <div className='customize2-parent-child2-a'><GiProcessor  className='processor'/></div>
                  <div className='customize2-parent-child2-b'><button><GoPlus/></button></div>
              </div>
        </div>


        <div className='customize2-parent'>
              <div className='customize2-parent-child1'><h4 style={{color:'#0075FF'}}>Select</h4><p style={{marginLeft:'3%'}}>MotherBoard</p></div>
              <div className='customize2-parent-child2'>
                  <div className='customize2-parent-child2-a'><BsMotherboard  className='processor'/></div>
                  <div className='customize2-parent-child2-b'><button><GoPlus/></button></div>
              </div>
        </div>

        <div className='customize2-parent'>
              <div className='customize2-parent-child1'><h4 style={{color:'#0075FF'}}>Select</h4><p style={{marginLeft:'3%'}}>Ram</p></div>
              <div className='customize2-parent-child2'>
                  <div className='customize2-parent-child2-a'><RiRam2Line  className='processor'/></div>
                  <div className='customize2-parent-child2-b'><button><GoPlus/></button></div>
              </div>
        </div>

        <div className='customize2-parent'>
              <div className='customize2-parent-child1'><h4 style={{color:'#0075FF'}}>Select</h4><p style={{marginLeft:'3%'}}>Storage</p></div>
              <div className='customize2-parent-child2'>
                  <div className='customize2-parent-child2-a'><MdOutlineSdStorage  className='processor'/></div>
                  <div className='customize2-parent-child2-b'><button><GoPlus/></button></div>
              </div>
        </div>

        <div className='customize2-parent'>
              <div className='customize2-parent-child1'><h4 style={{color:'#0075FF'}}>Select</h4><p style={{marginLeft:'3%'}}>cabinate</p></div>
              <div className='customize2-parent-child2'>
                  <div className='customize2-parent-child2-a'><PiComputerTower  className='processor'/></div>
                  <div className='customize2-parent-child2-b'><button><GoPlus/></button></div>
              </div>
        </div>

        <div className='customize2-parent'>
              <div className='customize2-parent-child1'><h4 style={{color:'#0075FF'}}>Select</h4><p style={{marginLeft:'3%'}}>Garaphic Card</p></div>
              <div className='customize2-parent-child2'>
                  <div className='customize2-parent-child2-a'><PiGraphicsCardBold   className='processor'/></div>
                  <div className='customize2-parent-child2-b'><button><GoPlus/></button></div>
              </div>
        </div>

        <div className='customize2-parent'>
              <div className='customize2-parent-child1'><h4 style={{color:'#0075FF'}}>Select</h4><p style={{marginLeft:'3%'}}>Cabinate Fan</p></div>
              <div className='customize2-parent-child2'>
                  <div className='customize2-parent-child2-a'><FaFan className='processor'/></div>
                  <div className='customize2-parent-child2-b'><button><GoPlus/></button></div>
              </div>
        </div>

        <div className='customize2-parent'>
              <div className='customize2-parent-child1'><h4 style={{color:'#0075FF'}}>Select</h4><p style={{marginLeft:'3%'}}>Mouse</p></div>
              <div className='customize2-parent-child2'>
                  <div className='customize2-parent-child2-a'><MdOutlineMouse  className='processor'/></div>
                  <div className='customize2-parent-child2-b'><button><GoPlus/></button></div>
              </div>
        </div>


        <div className='customize2-parent'>
              <div className='customize2-parent-child1'><h4 style={{color:'#0075FF'}}>Select</h4><p style={{marginLeft:'3%'}}>Keyboard</p></div>
              <div className='customize2-parent-child2'>
                  <div className='customize2-parent-child2-a'><LiaKeyboard  className='processor'/></div>
                  <div className='customize2-parent-child2-b'><button><GoPlus/></button></div>
              </div>
        </div>


        <div className='customize2-parent'>
              <div className='customize2-parent-child1'><h4 style={{color:'#0075FF'}}>Select</h4><p style={{marginLeft:'3%'}}>Monitor</p></div>
              <div className='customize2-parent-child2'>
                  <div className='customize2-parent-child2-a'><LuMonitor className='processor'/></div>
                  <div className='customize2-parent-child2-b'><button><GoPlus/></button></div>
              </div>
        </div>


        <div className='customize2-parent'>
              <div className='customize2-parent-child1'><h4 style={{color:'#0075FF'}}>Select</h4><p style={{marginLeft:'3%'}}>Hard Drive</p></div>
              <div className='customize2-parent-child2'>
                  <div className='customize2-parent-child2-a'><LuHardDrive  className='processor'/></div>
                  <div className='customize2-parent-child2-b'><button><GoPlus/></button></div>
              </div>
        </div>


        <div className='customize2-parent'>
              <div className='customize2-parent-child1'><h4 style={{color:'#0075FF'}}>Select</h4><p style={{marginLeft:'3%'}}>Speaker</p></div>
              <div className='customize2-parent-child2'>
                  <div className='customize2-parent-child2-a'><MdOutlineSurroundSound  className='processor'/></div>
                  <div className='customize2-parent-child2-b'><button><GoPlus/></button></div>
              </div>
        </div>

    </div>
    <Footer/>
    </>
  )
}

export default Customize2
