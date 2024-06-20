import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';

const DashbordHome = () => {
//for providing restriction to use without login
const usenavigate = useNavigate();
useEffect(()=>{
    let email = sessionStorage.getItem('email')
    if(email==='' || email===null){
        usenavigate("/adminLogin");
    }
},[]);

  return (
    <div>
      <h1>welcome To Admin pannel</h1>
    </div>
  )
}

export default DashbordHome
