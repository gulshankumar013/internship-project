
import React, { useEffect, useState } from 'react';
import "../css/nav.css";
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { IoCartOutline } from 'react-icons/io5';
import { IoIosHeartEmpty, IoMdNotificationsOutline } from 'react-icons/io';
import { PiUser } from 'react-icons/pi';

const Nav = ({ count, countwish }) => {
  const [dropdownVisible, setDropdownVisible] = useState(false);

  const handleDropdownToggle = () => {
    setDropdownVisible(!dropdownVisible);
  };
//this is use for logout and clear the local stroage when user logout
  const navigate = useNavigate()
  const handellogout = () =>{
    sessionStorage.clear('userData');
    navigate("/");
  }

  let handelAdmin =()=>{
    let email = sessionStorage.getItem('email')

        if(email=== "" || email===null){
          navigate("/adminLogin");
        }
        else{
          navigate("/dasbord");
        }
  }
    return (
    <>
      <section className='nav-section'>
        <nav className='navbar-img'>
          <div className='logo'></div>
          <ul className='nav-list'>
            <NavLink to={"/"} className={(e) => { return e.isActive ? "blue" : " "; }}>Home</NavLink>
            <NavLink to={"/about"} className={(e) => { return e.isActive ? "blue" : " "; }}>About us</NavLink>
            <NavLink to={"/customize"} className={(e) => { return e.isActive ? "blue" : " "; }}>Customize</NavLink>
            <NavLink to={"/categories"} className={(e) => { return e.isActive ? "blue" : " "; }}>Categories</NavLink>

          </ul>
           
          <div className='dropdown' onMouseEnter={handleDropdownToggle} onMouseLeave={handleDropdownToggle}>
            {sessionStorage.getItem("userData")
              ? <button className='dropbtn' onClick={handellogout}>Logout</button>
              :<button className='dropbtn'>Login</button>
            }
                {dropdownVisible && (
                  <div className='dropdown-content'>
                    <Link to={"/login?role=user"}>User</Link>
                    {/* <Link to={"/adminLogin?role=admin"}>Admin</Link> */}
                    <button className='dropdown-content-a' onClick={()=>{handelAdmin()}}>Admin</button>
                  </div>
                )}
            </div>
           

          <div className='rightNav'>
            <input type="text" name='search' id='search' placeholder='Search' />
            <button className='btn'>Search</button>
          </div>
          <div className='nav-icon'>
            <NavLink to={'/cart'} className={(e) => { return e.isActive ? "blue" : " "; }}><IoCartOutline className='nav-icons' /> <sup>{count} </sup></NavLink>
            <NavLink to={'/profile'}><PiUser className='nav-icons' /></NavLink>
            <NavLink to={'/wishlist'}><IoIosHeartEmpty className='nav-icons' /><sup>{countwish} </sup></NavLink>
          </div>
        </nav>
      </section>
    </>
  );
};

export default Nav;
