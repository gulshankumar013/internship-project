import React, { useState } from 'react'
import { Navigate, RouterProvider, createBrowserRouter} from 'react-router-dom';
import Home from './Component/Home';
import Login from './Component/Login';
import Signup from './Component/Signup';
import Customize from './Component/Customize';
import Categories from './Component/Categories';
import About from './Component/About';
import Landing from './Component/Landing';
import Customizehedder from './Component/Customizehedder';
import Customize1 from './Component/Customize1';
import Customize2 from './Component/Customize2';
import Customize3 from './Component/Customize3';
import Cart from './Component/Cart';
import Profile from './Component/Profile';
import Wishlist from './Component/Wishlist';
import Gaming from './Component/Gaming';
import Workstation from './Component/Workstation';
import Vr from './Component/Vr';
import GamingKeyboard from './Component/GamingKeyboard';
import GamingMouse from './Component/GamingMouse';
import GamingConsol from './Component/GamingConsol';
import Payment from './Component/Pyment';
import ContactUs from './Component/ContactUs';
import DashMain from './Dashbord/DashMain';
import AdminLoginPage from './Dashbord/AdminLoginPage';
import AddProduct from './Dashbord/AddBestSellingProduct';
import DashbordHome from './Dashbord/DashbordHome';
import AddCoustomizeProduct from './Dashbord/AddCoustomizeProduct';
import AddProductCategories from './Dashbord/AddProductCategories';
import AddGamingController from './Dashbord/AddGamingController';
import AddGamingKeybord from './Dashbord/AddGamingKeybord';
import AddgammingMouse from './Dashbord/AddgammingMouse';
import AddWorkstation from './Dashbord/AddWorkstation';
import AddVr from './Dashbord/AddVr';
import AddGamingConsole from './Dashbord/AddGamingConsole';
import ContactusMessage from './Dashbord/ContactusMessage';
import UserDetails from './Dashbord/UserDetails';
import AdminSignup from './Dashbord/AdminSignup';
import AdminDetails from './Dashbord/AdminDetails';
import { Bounce, ToastContainer } from 'react-toastify';
import AddTrendingProduct from './Dashbord/AddTrendingProduct';
import AddOfferOnTopBrandProduct from './Dashbord/AddOfferOnTopBrandProduct';




const App = () => {

  const [product, setProduct] = useState([
    {
      url: "cardimage1.svg",
      name: 'Zebronics',
      brand:'ZEBRONICS ZIUM ',
      description: 'Mid-Tower Gaming Cabinet',
      about:"Make your gaming space ultra-cool by installing the ZEB-Zium a mid-tower gaming chassis that will take your gaming experience to the next level with its compact outlook. It is visually appealing with the acrylic and transparent side panel and a front panel multicolored LED strip giving the chassis a complete finish.",
      price: 1599,
      Specifications:'Ventilation for the chassis is provided by one 80mm fan on the rear.  These fans are fins focussed multicolor fans that add a vibrant touch to the chassis The top panel of the chassis features one USB 3.0 port,   2 USB port connections for HD audio, and other device connectivity. You can now put add-on cards into the chassis expansion slots on the back panel.'
    },
    {
      url: 'cardimage2.svg',
      name: 'Graphics card',
      brand:'Nvidia',
      description: 'Nvidia Geforce RTX 2080',
      about:"GIGABYTE NVIDIA GeForce RTX™ 2080 WINDFORCE OC 12GB GDDR6 Graphics Card (GV-N3060WF2OC-12GD) comes with NVIDIA Ampere Streaming, Multiprocessors, 2nd Generation RT Cores, 3rd Generation Tensor Cores, Powered by GeForce RTX™ 3060, Integrated with 12GB GDDR6 192-bit, memory interface, WINDFORCE 2X Cooling System with alternate spinning fans, Screen cooling, 200 mm compact card size.",
      price: 30000,
      Specifications:'Graphics Processing  GeForce RTX 2080 Core Clock  1792 MHz (Reference Card 1777 MHz) CUDA Cores  3584 Memory Clock  15000 MHz; Memory Size  12 GB Memory Type  GDDR6; Memory Bus  192 bit Memory Bandwidth (GB/sec)  360 GB/s Card Bus  PCI-E 4.0 x 16 Digital max resolution  7680x4320 Multi-view  4 PCB Form  ATX DirectX  12 Ultimate OpenGL  4.6 Recommended PSU  550W Power Connectors  8 pin*1 Output  DisplayPort 1.4a *2 HDMI 2.1 *2 Accessories  Quick guide'
    },
    {
      url: 'cardimage3.svg',
      name: 'Gaming Monitor',
      brand:'SAMSUNG',
      description: 'Samsung Odyssey G5',
      about:"Vivid scenes wrap around you. The all-encompassing 1000R display fills every part of your peripheral vision and draws you right into the character's shoes. Experience a level of gaming more heart-pounding than anything before",
      price: 44499,
      Specifications:'34 inch Smart LED monitor with Curved design (Resolution 3,440 x 1,440)Aspect Ratio: 21:09Refresh Rate: 165 Hz,Response Time: 1.0 ms'
    },
    {
      url: 'ps5.svg',
      name: 'Play Station5',
      brand:'SONY',
      description: 'Sony PS5 Husky White',
      about:"Brace yourself for a whole new world of possibilities as the PS5 unleashes unparalleled power and innovation Get ready to elevate your gaming experience to new heights with the Sony PlayStation 5 Console Unleash the power of play immerse yourself in stunning visuals and explore a world of endless possibilities With the PS5 gaming will never be the same again ",
      price: 66990,
      Specifications:'Model Number-PlayStation 5 console Sales Package-Gaming Console, Wireless Controller, Manual, AC Power Cord, USB Cable, HDMI Cable Console Type-Console HDMI-1 USB-3 Motion Controller Included-No',
    },
    {
      url: 'cardimage4.svg',
      name: 'X box',
      brand:'X-Box',
      description: 'Xbox Starter Bundle',
      about:"Go all-digital and enjoy disc-free, next-gen gaming with the smallest Xbox console ever madeXbox game Pass ultimate includes over 100 high-quality games, online multiplayer, and an EA play membership for one low monthly price (membership sold separately)Introducing the Xbox series S, the smallest, sleekest Xbox console ever. Experience the speed and performance of a next-gen all-digital console at an accessible price pointExperience next-gen speed and performance with the Xbox velocity architecture, powered by a custom SSD and integrated software",
      price: 39990,
      Specifications:'Product Dimensions  36 x 29.2 x 12.8 cm; 3.35 kg Release date  10 November 2020 ASIN B08J89D6BW Item model Microsoft, Microsoft Packer  Microsoft Importer  Redington India Item Weight   3 kg 350 g Item Dimensions LxWxH  36 x 29.2 x 12.8 Centimeters Net Quantity   1 count Included Components With Xbox Series S, an Xbox Series S console, controller, Ultra High Speed HDMI cable and power cord are included. '
    },
    {
      url: 'cardimage5.svg',
      name: 'PSP Remote play',
      brand:'SONY',
      description: 'Sony PSP Husky White',
      about:"NPlaystation 5 Not Included Put Your PS5 in the Palm of Your Hand - PlayStation Portal Remote Player gives you access to the games on your PS5 over your home Wi-Fi letting you jump right into gaming without needing to play on a TV Play Your Game Collection - PlayStation Portal Remote Player can play compatible games you have installed on your PS5 console, including your favorite games for PS5 and PS4.Experience Breathtaking Immersion with DualSense Wireless Controller Features - Feel the incredible immersion of haptic feedback and adaptive triggers in supported games",
      price: 28777,
      Specifications:'Beautiful 8” LCD Screen - Take in every exquisite detail of your favorite games as they come alive on a brightly lit and gorgeous full HD screen.60fps Capable at 1080p Resolution - PlayStation Portal Remote Player can deliver silky smooth gameplay at up to 60fps with high image clarity on its 1080p resolution screen.PlayStation Portal Remote  Player can stream compatible games.'
    },
    {
      url: 'cardimage6.svg',
      name: 'Gaming Mouse',
      brand:'Razer',
      description: 'Razer DeathAdder White',
      about:"High-Precision 6,400 DPI Optical Sensor: Offers on-the-fly sensitivity adjustment through dedicated DPI buttons (reprogrammable) for gaming and creative work Durable Mechanical Switches: Supports up to 10 million clicks, backed by a 2 year warranty",
      price: 1349,
      Specifications:'Ridged, Rubberized Scroll Wheel for Maximum Accuracy: Small, tactile bumps increases grip and allows for more controlled scrolling in high-stakes gaming situations 5 Programmable Buttons: Allows for button remapping and assignment of complex macro functions through Razer Synapse'
    },
  ])

  const [trending, setTrending] = useState([
    {
      url: "cardimage7.svg",
      name: 'SSD M.2',
      brand:'Corsair',
      description: 'Corsair MP600',
      about:"Extreme Gen4 Storage Performance on PS5: Expand your PS5 storage capacity with a PCIe Gen4 x4 SSD that delivers up to 7,100MB/sec sequential read and 5,800MB/sec sequential write speeds.",
      price: 10917,
      Specifications:""
    },
    {
      url: 'cardimage8.svg',
      name: 'Dell Monitor',
      description: 'Dell S3221QS 32',
      about:"This the Cabinate for gammer or workstation",
      price: 37899
    },
    {
      url: 'cardimage9.svg',
      name: 'HP CPU Z8 G5',
      description: 'HP CPU Z8 G5 Workstation',
      about:"This the Cabinate for gammer or workstation",
      price: 466672
    },
    {
      url: 'cardimage10.svg',
      name: 'HP CPU Z4 G5',
      description: 'HP CPU Z4 G5 Workstation',
      about:"This the Cabinate for gammer or workstation",
      price: 366672
    },
    {
      url: 'cardimage11.svg',
      name: 'Asus ZenBook ',
      description: 'ASUS Zenbook Pro 14 Duo',
      about:"This the Cabinate for gammer or workstation",
      price: 239000
    },
    {
      url: 'cardimgae12.svg',
      name: 'HP spector',
      description: 'Hp spector x360',
      about:"This the Cabinate for gammer or workstation",
      price: 145490
    },
    {
      url: 'cardimage13.svg',
      name: 'Keyboard',
      description: 'Redragon K617',
      about:"This the Cabinate for gammer or workstation",
      price:2890
    },
  ])

  const [brand, setBrand] = useState([
    {
      url:'pr1.svg',
      name:'Nvidia',
      discount:'Up to 30% off',
    },
    {
      url:'pr2.svg',
      name:'Razer',
      discount:'Up to 20% off',
    },
    {
      url:'pr3.svg',
      name:'X-Box',
      discount:'Up to 22% off',
    },
    {
      url:'pr4.svg',
      name:'Sony Play Station',
      discount:'Up to 35% off',
    },
    {
      url:'pr6.svg',
      name:'HP Workstation',
      discount:'Up to 35% off',
    },
    {
      url:'pr7.svg',
      name:'Asus Laptop & Pc',
      discount:'Up to 20% off',
    },
    {
      url:'pr8.svg',
      name:'Apple Computer',
      discount:'Up to 20% off',
    },
  ])

  const [cart,setCart] = useState([])

  const addToCart = (data)=>{
  //  console.log(cart)
    setCart([...cart,{...data,quantity:1}])
  }

  const [wishlist,setWishlist] = useState([])
  const addToWishlist = (data)=>{
    setWishlist([...wishlist,data])
    console.log(wishlist)
  }


  const router = createBrowserRouter([

  
    {
      path:"/",
      element: <Home count={cart.length} countwish={wishlist.length}/>,
      children:[
        {
          path:"/",
          element:<Landing product={product} trending={trending} brand={brand} addToCart={addToCart} addToWishlist={addToWishlist} />
        },
        {
          path: "/about",
          element: <About/>
        },
    
        {
          path:"/customize",
          element:<Customize/>,
          children:[
            
            {
                path:"/customize/",
                element:<Customize1/>
            },
            {
                 path:"/customize/hedder/customize2",
                element:<Customize2/>
            },
            {
                path:"/customize/hedder/customize3",
                element:<Customize3/>,
            }
          ]
        },
        {
          path:"/categories",
          element: <Categories/>  
        },
        {
            path:'/categories/gaming_controller',
            element:<Gaming />
        },
        {
          path: '/categories/workstation_monitor',
          element: <Workstation/> // Define the component to render for this path
        },
        {
          path: '/categories/vr_controller',
          element: <Vr/> // Define the component to render for this path
        },
        {
          path: '/categories/gaming_keyboard',
          element: <GamingKeyboard/> // Define the component to render for this path
        },
        {
          path: '/categories/gaming_mouse',
          element: <GamingMouse/> // Define the component to render for this path
        },
        {
          path: '/categories/gaming_console',
          element: <GamingConsol/> // Define the component to render for this path
        },
       
        {
          path:"/login",
          element:<Login/>
        },
        {
          path:"/signup",
          element: <Signup/>
        },
        {
          path:"/cart",
          element:<Cart cart={cart} setCart={setCart} />
        },
        {
          path:"/profile",
          element:<Profile/>
        },
        {
          path:"/wishlist",
          element:<Wishlist wishlist={wishlist} setWishlist={setWishlist} addToCart={addToCart} />
        },
        {
          path:"/payment",
          element:<Payment/>
        },
        {
          path:"/contactus",
          element:<ContactUs/>,
          
        },
       

      ]
    },
    {
      path:"/adminLogin",
      element:<AdminLoginPage/>
    },
    {
      path:"/adminSignup",
      element:<AdminSignup/>
    },

    {
      path:"/dasbord",
      element:<DashMain/>,
      children:[
        {
          path:"/dasbord/addproduct",
          element:<AddProduct/>
        },
        {
          path:"/dasbord/addTrendingProduct",
          element:<AddTrendingProduct/>
        },
        {
          path:"/dasbord/addOfferOnTopbrand",
          element:<AddOfferOnTopBrandProduct/>
        },
        {
          path:"/dasbord/addproductCoustomize",
          element:<AddCoustomizeProduct/>
        },
        {
          path:"/dasbord/message",
          element:<ContactusMessage/>
        },
        {
          path:"/dasbord/userDetails",
          element:<UserDetails/>
        },
        {
          path:"/dasbord/adminDetails",
          element:<AdminDetails/>
        },
        {
          path:"/dasbord/addproductCategories",
          element:<AddProductCategories/>
        },
        {
          path:"/dasbord/dashbordHome",
          element:<DashbordHome/>
        },
        {
          path:"/dasbord/addGammingControllers",
          element:<AddGamingController/>
        },
       {
        path:"/dasbord/addGammingKeybord",
        element:<AddGamingKeybord/>
       },
       {
        path:"/dasbord/addGamingMouse",
        element:<AddgammingMouse/>
       },
       {
        path:"/dasbord/addWorkstation",
        element:<AddWorkstation/>
       },
       {
        path:"/dasbord/addVr",
        element:<AddVr/>
       },
       {
        path:"/dasbord/gamingConsole",
        element:<AddGamingConsole/>
       }
      

      ]
    } 

  ])
  return (
    <>
    <RouterProvider router={router}/>
    
    <ToastContainer
position="top-center"
autoClose={5000}
hideProgressBar={false}
newestOnTop={false}
closeOnClick
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover
theme="light"
transition={Bounce}
/>
    </>
  )
}

export default App
