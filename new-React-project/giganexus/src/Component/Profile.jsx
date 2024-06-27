
import React, { useEffect, useRef, useState } from "react";
import "../css/profile.css";
import { useNavigate } from "react-router-dom";
import Footer from "./Footer";
import axios from "axios";
import { Password } from "@mui/icons-material";
import { toast } from "react-toastify";
import { FaEye, FaEyeSlash } from "react-icons/fa6";

const UPDATE_API = "http://localhost:5164/update"; 

const Profile = () => {
  const [userData, setUserData] = useState({});
  const [profileImage, setProfileImage] = useState(null);
  const [previewImage, setPreviewImage] = useState(null);
  const [fetchedImage, setfetchedImage] = useState("");
  const [isEditing, setIsEditing] = useState(false);
  const [newAddress, setNewAddress] = useState("");
  const [newEmail, setNewEmail] = useState("");
  const [newMobile, setNewMobile] = useState("");
  const [newState, setNewState] = useState("");  //
  const [newPin, setNewPin] = useState("");
  const [newProfile, setNewProfile] = useState({profile:''}); //
  const [newPassword, setNewPassword] = useState("");
  const [newName, setNewName] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

//This is use for password visibility icon use
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

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


useEffect(()=>{
// setPreviewImage(fetchedImage)
fetchProfileImage()
},[fetchedImage])


  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreviewImage(reader.result);
        setProfileImage(file);
        setNewProfile({
          ...newProfile, profile: reader.result,
        });
        console.log("profile",newProfile)
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
    setNewProfile(userData.profile|| "")
    setNewPassword(userData.password|| "")
    setNewName(userData.name|| "")

  };

  const handleSave = async () => {
    const updatedUserData = { 
      ...userData, 
      name:newName,
      email: newEmail, 
      password:newPassword,
      mobile: newMobile, 
      state: newState, 
      pin: newPin ,
      address:newAddress,
      profile:newProfile.profile
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
          
        } else {
         
        }
      } catch (error) {
        console.error("Error updating profile:", error);
        alert("An error occurred while updating the profile");
      }
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const payload = {
      eventID: "1001",
      addInfo: { 
        id:userData.id,
        name:newName,
        email: newEmail,
        password:newPassword,
        mobile: newMobile,
        state: newState,
        pin: newPin,
        address: newAddress,
        // profile: newProfile.profile,
      },
    };

    try {
      const response = await axios.post("http://localhost:5164/update",payload);
      console.log(response.data, "api response"); // handle response
      // setShowPopup(true); // Show the popup after successful signup
      console.log("response",response)
      toast.success('Profile Updated ')
      // setFormData()
    } catch (error) {
      console.error("Error in updating profile:", error);
      // Handle error
    }
  };

  
  //api for Profile image update
 const handleProfileImage = async (e) => {
    e.preventDefault();
    const payload = {
      eventID: "1001",
      addInfo: {
        id:userData.id,
        profile:newProfile.profile
      },
    };

    try {
      const response = await axios.post("http://localhost:5164/updateProfileImage",payload);
      console.log(response.data, "api response"); // handle response
      // setShowPopup(true); // Show the popup after successful signup
      console.log("response",response)
      toast.success('Image added suscesfull')
      fetchProfileImage()
    } catch (error) {
      console.error("Error in adding card up:", error);
      // Handle error
    }
  };

  //Api for fetch Profile image
  const fetchProfileImage = async () => {
    // e.preventDefault();
    const payload = {
      eventID: "1001",
      addInfo: {
        id:userData.id
      },
    };

    try {
      const response = await axios.post("http://localhost:5164/fetchProfileImage",payload);
      // console.log("Image response",response.data.rData.profile)
      setfetchedImage(response.data.rData.profile)      
      // console.log("fetchedImage",fetchedImage)
      setPreviewImage(fetchedImage)
      // console.log("previewImage",previewImage)

    } catch (error) {
      console.error("Error in adding card up:", error);
      // Handle error
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
              
              <div className="profile-details-child-edit">
                <div className="profile-details-child-a" >
                  <button name="Edit profile image" className="profile-image-child-edit-button" onClick={handleProfileImage}>Upload image</button>
                </div>
                
                <div className="profile-details-child-b">
                  <button className="profile-details-child-edit-button" onClick={handleEditButtonClick}>Edit Profile</button>
                </div>
              </div>
              {isEditing ? (
                <>
                <form onSubmit={handleSubmit} >
                  <div className="profile-details-child-c">

                  <input 
                      type="text" 
                      value={newName} 
                      onChange={(e) => setNewName(e.target.value)} 
                      placeholder="Enter new name" 
                    />

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
                        type={showPassword ? "text" : "password"}
                        value={newPassword}
                        onChange={(e) => setNewPassword(e.target.value)}
                        placeholder="Enter new password"
                      />
                      <span  onClick={togglePasswordVisibility}>
                        {showPassword ? <FaEyeSlash/> : <FaEye/>}
                      </span>
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
                    {/* <button>Save</button> */}
                  </div>
                  </form>
                </>
              ) : (
                <>
                <div className="profile-details-child-a"><h3>{userData.name}</h3></div>
                  <div className="profile-details-child-c"><p>Address: {userData.address || "Not provided"}</p></div>
                  <div className="profile-details-child-c"><p>Email: {userData.email}</p></div>
                  <div className="profile-details-child-c"><p>Password: {userData.password}</p></div>
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
