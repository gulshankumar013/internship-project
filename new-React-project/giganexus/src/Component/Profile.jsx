// import React, { useEffect } from "react";
// import "../css/profile.css";
// import { useNavigate } from "react-router-dom";
// import Footer from "./Footer";


// const Profile = () => {
//   let email;
//   const usenavigate = useNavigate();
//   useEffect(()=>{
//        email = sessionStorage.getItem('email')
//       if(email==='' || email===null){
//           usenavigate("/login");
//       }
//       console.log("email",email)
//   },[]);



//     let navigate =useNavigate()
//   return (
//     <>
//       <div className="profile-page">
//         <div className="profile-parrent">
//           <div className="profile-img"></div>
//           <div className="profile-details">
//             <div className="user-profile"></div>
//             <div className="profile-details-child">

//                 <div className="profile-details-child-a"><h3>name</h3></div>
//                 <div className="profile-details-child-b"><h4>Account Seetings</h4></div>
//                 <div className="profile-details-child-c"><p>Manage Address</p></div>
//                 <div className="profile-details-child-c"><p>Register as seller</p></div>
//                 <div className="profile-details-child-c"><p>Refer & Earn</p></div>
//                 <div className="profile-details-child-b"><h4>Privacy Settings</h4></div>
//                 <div className="profile-details-child-c"><p>Close Your Account</p></div>
//                 <div className="profile-details-child-c"><p>Email</p></div>
//                 <div className="profile-details-child-c"><p>Phone-no</p></div>
//                     <div className="back-shopping"><button onClick={()=>{navigate('/')}}>Back to the Shoping</button></div>
                
//             </div>
//           </div>
//         </div>
//       </div>
//       <Footer/>
//     </>
//   );
// };

// export default Profile;


import React, { useEffect, useState } from "react";
import "../css/profile.css";
import { useNavigate } from "react-router-dom";
import Footer from "./Footer";

const Profile = () => {
  const [userData, setUserData] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    const data = JSON.parse(sessionStorage.getItem('userData'));
    if (!data) {
      navigate("/login");
    } else {
      setUserData(data);
    }
  }, [navigate]);

  return (
    <>
      <div className="profile-page">
        <div className="profile-parent">
          <div className="profile-img"></div>
          <div className="profile-details">
            <div className="user-profile"></div>
            <div className="profile-details-child">
              <div className="profile-details-child-a"><h3>{userData.name}</h3></div>
              <div className="profile-details-child-b"><h4>Account Settings</h4></div>
              <div className="profile-details-child-c"><p>Manage Address</p></div>
              <div className="profile-details-child-c"><p>Register as seller</p></div>
              <div className="profile-details-child-c"><p>Refer & Earn</p></div>
              <div className="profile-details-child-b"><h4>Privacy Settings</h4></div>
              <div className="profile-details-child-c"><p>Close Your Account</p></div>
              <div className="profile-details-child-c"><p>Email: {userData.email}</p></div>
              <div className="profile-details-child-c"><p>Phone: {userData.mobile}</p></div>
              <div className="back-shopping"><button onClick={() => { navigate('/') }}>Back to the Shopping</button></div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Profile;
