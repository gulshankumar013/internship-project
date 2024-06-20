import React, { useState, useEffect } from "react";
import "../Dashbord/dasMain.css";
import { Link, Outlet, useNavigate } from "react-router-dom";
import {BsChevronRight,BsList,BsSearch,BsX,
} from "react-icons/bs";
import {BiSolidLogOutCircle,} from "react-icons/bi";


const DasMain = () => {
  //for providing restriction to use without login
  const usenavigate = useNavigate();
  useEffect(()=>{
      let email = sessionStorage.getItem('email')
      if(email==='' || email===null){
          usenavigate("/adminLogin");
      }
  },[]);


  const [activeMenu, setActiveMenu] = useState("");
  const [sidebarHidden, setSidebarHidden] = useState(window.innerWidth < 768);
  const [searchFormVisible, setSearchFormVisible] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const [logoutPopupVisible, setLogoutPopupVisible] = useState(false);
  const navigate = useNavigate(); // Use useNavigate instead of useHistory

  useEffect(() => {
    const allSideMenu = document.querySelectorAll(
      "#sidebar .side-menu.top li a"
    );
    allSideMenu.forEach((item) => {
      const li = item.parentElement;
      item.addEventListener("click", () => {
        allSideMenu.forEach((i) => {
          i.parentElement.classList.remove("active");
        });
        li.classList.add("active");
      });
    });

    const handleResize = () => {
      if (window.innerWidth < 768) {
        setSidebarHidden(true);
      } else if (window.innerWidth > 576) {
        setSearchFormVisible(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    if (darkMode) {
      document.body.classList.add("dark");
    } else {
      document.body.classList.remove("dark");
    }
  }, [darkMode]);

  const toggleSidebar = () => {
    setSidebarHidden(!sidebarHidden);
  };

  const toggleSearchForm = (e) => {
    if (window.innerWidth < 576) {
      e.preventDefault();
      setSearchFormVisible(!searchFormVisible);
    }
  };

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  const showLogoutPopup = () => {
    setLogoutPopupVisible(true);
    sessionStorage.clear('email');
  };

  const handleLogoutConfirm = () => {
    // Redirect to landing page
    navigate("/");
  };

  const handleLogoutCancel = () => {
    setLogoutPopupVisible(false);
  };
  const [dropdownVisible, setDropdownVisible] = useState(false);
  const handleDropdownToggle = () => {
    setDropdownVisible(!dropdownVisible);
  };

  return (
    <div className={darkMode ? "dark" : ""}>
      <section id="sidebar" className={sidebarHidden ? "hide" : ""}>
        <a href="#" className="brand">
          
          <span className="text">AdminHub</span>
        </a>
        <ul className="side-menu top">
          <li className={activeMenu === "dashboard" ? "active" : ""}>
            <Link to="/dasbord/dashbordHome" onClick={() => setActiveMenu("dashbordHome")}>
             
              <span className="text">Dashboard</span>
            </Link>
          </li>
          <li className={activeMenu === "Add product" ? "active" : ""}>
            <Link to="addproduct" onClick={() => setActiveMenu("addproduct")}>
              
              <span className="text">Add Home Product</span>
            </Link>
          </li>

          <li className={activeMenu === "Add product coustomize" ? "active" : ""}>
            <Link to="/dasbord/addproductCoustomize" onClick={() => setActiveMenu("addproductCoustomize")}>
             
              <span className="text">Add Coustomize Product</span>
            </Link>
          </li>

          <li className={activeMenu === "message" ? "active" : ""}>
            <Link to="/dasbord/message" onClick={() => setActiveMenu("message")}>
             
              <span className="text">Message</span>
            </Link>
          </li>

          <li className={activeMenu === "UserDetails" ? "active" : ""}>
            <Link to="/dasbord/userDetails" onClick={() => setActiveMenu("userDeatils")}>
             
              <span className="text">User Details</span>
            </Link>
          </li>

          <li className={activeMenu === "AdminDetails" ? "active" : ""}>
            <Link to="/dasbord/adminDetails" onClick={() => setActiveMenu("AdminDetails")}>
             
              <span className="text">Admin Details</span>
            </Link>
          </li>

          
            <li>
            <div className='dropdown' onMouseEnter={handleDropdownToggle} onMouseLeave={handleDropdownToggle}>
            
              <span className="text"><button className="das-cat-btn">Add Categories Product</button></span>
            
              {dropdownVisible && (
                <div className='dropdown-content'>
                  <Link to={"/dasbord/addGammingControllers?role=Gaming Controllers"}>Gaming Controllers</Link>
                  <Link to={"/dasbord/addGammingKeybord?role=Gamming Keybord"}>Gamming Keybord</Link>
                  <Link to={"/dasbord/addWorkstation?role=add Workstation"}>Add Workstation</Link>
                  <Link to={"/dasbord/addVr?role=add Vr"}>Add Vr Controller</Link>
                  <Link to={"/dasbord/gamingConsole?role=addgamingConsole "}>Add Gamming Console</Link>
                  <Link to={"/dasbord/addGamingMouse?role=addGamingMouse"}>Add Gaming Mouse</Link>
                </div>
                
              )}
              
            </div>
            </li>
            


          
        </ul>
        <ul className="side-menu">
          <li>
            <Link to="#" className="logout" onClick={showLogoutPopup}>
              <BiSolidLogOutCircle />
              <span className="text">Logout</span>
            </Link>
          </li>
        </ul>
      </section>

      <section id="content">
        <nav>
          <BsList className="bx bx-menu" onClick={toggleSidebar} />

          <form action="#">
            <div className={`form-input ${searchFormVisible ? "show" : ""}`}>
              <input type="search" placeholder="Search..." />
              <button
                type="submit"
                className="search-btn"
                onClick={toggleSearchForm}
              >
                {searchFormVisible ? <BsX /> : <BsSearch />}
              </button>
            </div>
          </form>
          <input type="checkbox" id="switch-mode" hidden />
          <label
            htmlFor="switch-mode"
            className="switch-mode"
            onClick={toggleDarkMode}
          />
        </nav>

        <main>
          <div className="head-title">
            <div className="left">
              <h1>Dashboard</h1>
              <ul className="breadcrumb">
                <li>
                  <Link to="#">Dashboard</Link>
                </li>
                <li>
                  <BsChevronRight />
                </li>
                <li>
                  <Link to="/dasbord/dashbordHome" className="active">
                    Home
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          {/* Main content */}
          <Outlet />
        </main>
      </section>

      {logoutPopupVisible && (
        <div className="logout-popup">
          <div className="popup-content">
            <h2>Confirm Logout</h2>
            <p>Are you sure you want to logout?</p>
            <button className="btn-confirm" onClick={handleLogoutConfirm}>
              Yes
            </button>
            <button className="btn-cancel" onClick={handleLogoutCancel}>
              No
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default DasMain;
