import React from 'react'
import Nav from './Nav'
import { Outlet } from 'react-router-dom'
import "../css/home.css"
import Landing from './Landing'
const Home = ({count,countwish}) => {
  return (
    <div className='home'>
     
      <Nav count={count} countwish={countwish}/>
      
    <Outlet/>

    </div>

  )
}

export default Home
