
// import React, { useEffect, useState } from "react";
// import "../css/profile.css";
// import { useNavigate } from "react-router-dom";
// import Footer from "./Footer";

// const Profile = () => {
//   const [userData, setUserData] = useState({});
//   const [profileImage, setProfileImage] = useState(null);
//   const [previewImage, setPreviewImage] = useState(null);
//   const [isEditing, setIsEditing] = useState(false);
//   const [newAddress, setNewAddress] = useState("");
//   const [newEmail, setNewEmail] = useState("");
//   const [newMobile, setNewMobile] = useState("");
//   const [newState, setNewState] = useState("");
//   const [newPin, setNewPin] = useState("");
//   const [newPassword, setNewPassword] = useState("");
//   const navigate = useNavigate();

//   useEffect(() => {
//     const data = JSON.parse(sessionStorage.getItem('userData'));
//     if (!data) {
//       navigate("/login");
//     } else {
//       setUserData(data);
//       if (data.profileImage) {
//         setProfileImage(data.profileImage);
//       }
//     }
//   }, [navigate]);

//   const handleImageChange = (e) => {
//     const file = e.target.files[0];
//     if (file) {
//       const reader = new FileReader();
//       reader.onloadend = () => {
//         setPreviewImage(reader.result);
//         setProfileImage(file);
//       };
//       reader.readAsDataURL(file);
//     }
//   };

//   const handleEditButtonClick = () => {
//     setIsEditing(true);
//     setNewAddress(userData.address || "");
//     setNewEmail(userData.email || "");
//     setNewMobile(userData.mobile || "");
//     setNewState(userData.state || "");
//     setNewPin(userData.pin || "");
//     setNewPassword(userData.password || "");
//   };

//   const handleSave = () => {
//     setUserData({ 
//       ...userData, 
//       address: newAddress, 
//       email: newEmail, 
//       mobile: newMobile, 
//       state: newState, 
//       pin: newPin ,
//       password: newPassword
//     });
//     setIsEditing(false);
//   };

//   return (
//     <>
//       <div className="profile-page">
//         <div className="profile-parrent">
//           <div className="profile-img"></div>
//           <div className="profile-details">
//             <div className="user-profile" style={{ backgroundImage: previewImage ? `url(${previewImage})` : 'url("defaultprofile.jpg")' }}>
//               <input type="file" accept="image/*" onChange={handleImageChange} />
//             </div>
//             <div className="profile-details-child">
//               <div className="profile-details-child-a"><h3>{userData.name}</h3></div>
//               <div className="profile-details-child-edit">
//                 <div className="profile-details-child-b">
//                   <h4>Privacy Settings</h4>
//                   <button className="profile-details-child-edit-button" onClick={handleEditButtonClick}>Edit</button>
//                 </div>
//               </div>
//               {isEditing ? (
//                 <>
//                   <div className="profile-details-child-c">
//                     <input 
//                       type="text" 
//                       value={newAddress} 
//                       onChange={(e) => setNewAddress(e.target.value)} 
//                       placeholder="Enter new address" 
//                     />
//                   </div>
//                   <div className="profile-details-child-c">
//                     <input 
//                       type="text" 
//                       value={newEmail} 
//                       onChange={(e) => setNewEmail(e.target.value)} 
//                       placeholder="Enter new email" 
//                     />
//                   </div>
//                   <div className="profile-details-child-c">
//                     <input 
//                       type="text" 
//                       value={newMobile} 
//                       onChange={(e) => setNewMobile(e.target.value)} 
//                       placeholder="Enter new mobile" 
//                     />
//                   </div>
//                   <div className="profile-details-child-c">
//                     <input 
//                       type="text" 
//                       value={newState} 
//                       onChange={(e) => setNewState(e.target.value)} 
//                       placeholder="Enter new state" 
//                     />
//                   </div>
//                   <div className="profile-details-child-c">
//                     <input 
//                       type="text" 
//                       value={newPin} 
//                       onChange={(e) => setNewPin(e.target.value)} 
//                       placeholder="Enter new pin" 
//                     />
//                   </div>
//                   <div className="profile-details-child-c">
//                     <input 
//                       type="password" 
//                       value={newPassword} 
//                       onChange={(e) => setNewPassword(e.target.value)} 
//                       placeholder="Enter new password" 
//                     />
//                   </div>
//                   <div className="profile-details-child-c">
//                     <button onClick={handleSave}>Save</button>
//                   </div>
//                 </>
//               ) : (
//                 <>
//                   <div className="profile-details-child-c"><p>Account: {userData.address || "Not provided"}</p></div>
//                   <div className="profile-details-child-c"><p>Email: {userData.email}</p></div>
//                   <div className="profile-details-child-c"><p>Mobile No: {userData.mobile}</p></div>
//                   <div className="profile-details-child-c"><p>State: {userData.state}</p></div>
//                   <div className="profile-details-child-c"><p>Pin: {userData.pin}</p></div>
//                   <div className="profile-details-child-c"><p>Password: {userData.password}</p></div>
                  
//                 </>
//               )}
             
//               <div className="profile-details-child-b"><h4>Account Settings</h4></div>
//               <div className="profile-details-child-c"><p>Register as seller</p></div>
//               <div className="profile-details-child-c"><p>Refer & Earn</p></div>
//               <div className="profile-details-child-c"><p>Close Your Account</p></div>
//               <div className="back-shopping"><button onClick={() => { navigate('/') }}>Back to the Shopping</button></div>
//             </div>
//           </div>
//         </div>
//       </div>
//       <Footer />
//     </>
//   );
// };

// export default Profile;

import React, { useEffect, useState } from "react";
import "../css/profile.css";
import { useNavigate } from "react-router-dom";
import Footer from "./Footer";
import axios from "axios";

const UPDATE_API = "http://localhost:5164/update"; 

const Profile = () => {
  const [userData, setUserData] = useState({});
  const [profileImage, setProfileImage] = useState(null);
  const [previewImage, setPreviewImage] = useState(null);
  const [isEditing, setIsEditing] = useState(false);
  const [newAddress, setNewAddress] = useState("");
  const [newEmail, setNewEmail] = useState("");
  const [newMobile, setNewMobile] = useState("");
  const [newState, setNewState] = useState("");
  const [newPin, setNewPin] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const data = JSON.parse(sessionStorage.getItem('userData'));
    if (!data) {
      navigate("/login");
    } else {
      setUserData(data);
      if (data.profileImage) {
        setProfileImage(data.profileImage);
      }
    }
  }, [navigate]);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreviewImage(reader.result);
        setProfileImage(file);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleEditButtonClick = () => {
    setIsEditing(true);
    setNewAddress(userData.address || "");
    setNewEmail(userData.email || "");
    setNewMobile(userData.mobile || "");
    setNewState(userData.state || "");
    setNewPin(userData.pin || "");
  };

  const handleSave = async () => {
    const updatedUserData = { 
      ...userData, 
      address: newAddress, 
      email: newEmail, 
      mobile: newMobile, 
      state: newState, 
      pin: newPin 
    };
    
    if (profileImage) {
      const formData = new FormData();
      formData.append("profileImage", profileImage);
      formData.append("userData", JSON.stringify(updatedUserData));

      try {
        const response = await axios.post(UPDATE_API, formData, {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        });

        if (response.status === 200) {
          setUserData(updatedUserData);
          sessionStorage.setItem('userData', JSON.stringify(updatedUserData));
          setIsEditing(false);
          console.log(response,"response")
          alert("Profile updated successfully");
        } else {
          alert("Failed to update profile");
        }
      } catch (error) {
        console.error("Error updating profile:", error);
        alert("An error occurred while updating the profile");
      }
    } else {
      try {
        const response = await axios.post(UPDATE_API, updatedUserData);

        if (response.status === 200) {
          setUserData(updatedUserData);
          sessionStorage.setItem('userData', JSON.stringify(updatedUserData));
          setIsEditing(false);
          alert("Profile updated successfully");
        } else {
          alert("Failed to update profile");
        }
      } catch (error) {
        console.error("Error updating profile:", error);
        alert("An error occurred while updating the profile");
      }
    }
  };

  return (
    <>
      <div className="profile-page">
        <div className="profile-parrent">
          <div className="profile-img"></div>
          <div className="profile-details">
            <div className="user-profile" style={{ backgroundImage: previewImage ? `url(${previewImage})` : 'url("defaultprofile.jpg")' }}>
              <input type="file" accept="image/*" onChange={handleImageChange} />
            </div>
            <div className="profile-details-child">
              <div className="profile-details-child-a"><h3>{userData.name}</h3></div>
              <div className="profile-details-child-edit">
                <div className="profile-details-child-b">
                  <h4>Privacy Settings</h4>
                  <button className="profile-details-child-edit-button" onClick={handleEditButtonClick}>Edit</button>
                </div>
              </div>
              {isEditing ? (
                <>
                  <div className="profile-details-child-c">
                    <input 
                      type="text" 
                      value={newAddress} 
                      onChange={(e) => setNewAddress(e.target.value)} 
                      placeholder="Enter new address" 
                    />
                  </div>
                  <div className="profile-details-child-c">
                    <input 
                      type="text" 
                      value={newEmail} 
                      onChange={(e) => setNewEmail(e.target.value)} 
                      placeholder="Enter new email" 
                    />
                  </div>
                  <div className="profile-details-child-c">
                    <input 
                      type="text" 
                      value={newMobile} 
                      onChange={(e) => setNewMobile(e.target.value)} 
                      placeholder="Enter new mobile" 
                    />
                  </div>
                  <div className="profile-details-child-c">
                    <input 
                      type="text" 
                      value={newState} 
                      onChange={(e) => setNewState(e.target.value)} 
                      placeholder="Enter new state" 
                    />
                  </div>
                  <div className="profile-details-child-c">
                    <input 
                      type="text" 
                      value={newPin} 
                      onChange={(e) => setNewPin(e.target.value)} 
                      placeholder="Enter new pin" 
                    />
                  </div>
                  <div className="profile-details-child-c">
                    <button onClick={handleSave}>Save</button>
                  </div>
                </>
              ) : (
                <>
                  <div className="profile-details-child-c"><p>Address: {userData.address || "Not provided"}</p></div>
                  <div className="profile-details-child-c"><p>Email: {userData.email}</p></div>
                  <div className="profile-details-child-c"><p>Mobile No: {userData.mobile}</p></div>
                  <div className="profile-details-child-c"><p>State: {userData.state}</p></div>
                  <div className="profile-details-child-c"><p>Pin: {userData.pin}</p></div>
                </>
              )}
             
              <div className="profile-details-child-b"><h4>Account Settings</h4></div>
              <div className="profile-details-child-c"><p>Register as seller</p></div>
              <div className="profile-details-child-c"><p>Refer & Earn</p></div>
              <div className="profile-details-child-c"><p>Close Your Account</p></div>
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
