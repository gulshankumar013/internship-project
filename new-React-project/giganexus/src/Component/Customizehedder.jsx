import React from "react";
import "../css/customizehedder.css";
import { Link, NavLink, useNavigate } from "react-router-dom";


const Customizehedder = () => {


  return (
    <>
      <div className="cutomizehedder">
        <NavLink to={"/customize/hedder/customize1"}>
          <div className="cutomizehedder-child1">
                <div className="cutomizehedder-child1-name"><h1>Our Top Pick For you</h1></div>
                <div className="cutomizehedder-child1-img"></div>
          </div>
          </NavLink>
        <Link to={"/customize/hedder/customize2"}>
          <div className="cutomizehedder-child2">
            <div className="cutomizehedder-child2-name">
              <h1>Workstation</h1>
            </div>
            <div className="cutomizehedder-child2-img"></div>
          </div>
        </Link>

        <Link to={"/customize/hedder/customize3"}>
          <div className="cutomizehedder-child3">
            <div className="cutomizehedder-child3-name">
              <h1>Upcoming Products</h1>
            </div>
            <div className="cutomizehedder-child3-img"></div>
          </div>
        </Link>
      </div>
      
    </>
  );
};

export default Customizehedder;
