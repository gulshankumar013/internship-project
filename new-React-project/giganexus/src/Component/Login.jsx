
import React, { useState } from 'react';
import "../css/login.css";
import { FaApple, FaCheckCircle, FaExclamationCircle, FaFacebook, FaGoogle, FaTwitter } from 'react-icons/fa';
import Nav from './Nav';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

const Login = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const [popupMessage, setPopupMessage] = useState('');
  const [showPopup, setShowPopup] = useState(false);
  const [popupType, setPopupType] = useState('');
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const payload = {
      eventID: "1001",
      addInfo: {
        email: formData.email,
        password: formData.password,
      }
    };
    console.log(payload ,"payload");
    try {
      const response = await axios.post('http://localhost:5164/signin', payload);
      console.log(response, 'response api');
      if (response.data.rData.rMessage === "Signin Successful") {
        setPopupMessage('Login successful!');
        setPopupType('success');
        
        try {
          const response2 = await axios.post("http://localhost:5164/fetchUser", {
            eventID: "1001",
            addInfo: {
              email: formData.email
            }
          });
          console.log("response2", response2);

          // Store the entire user data in session storage
          sessionStorage.setItem("userData", JSON.stringify(response2.data.rData));
        } catch (error) {
          console.error(error.message);
        }

        setShowPopup(true);

        setTimeout(() => {
          setShowPopup(false);
          navigate("/");
        }, 1000); // Redirect after 1 second
      } else {
        setPopupMessage('Invalid email or password!');
        setPopupType('error');
        setShowPopup(true);

        setTimeout(() => {
          setShowPopup(false);
        }, 2000); // Hide popup after 2 seconds
      }
    } catch (error) {
      console.error('Error logging in:', error);

      setPopupMessage('Invalid email or password!');
      setPopupType('error');
      setShowPopup(true);

      setTimeout(() => {
        setShowPopup(false);
      }, 2000); // Hide popup after 2 seconds
    }
  };

  return (
    <>
      <Nav />
      <div className='login-page'>
        <div className='login-logo-slogan'>
          <div className='login-logo'></div>
          <div>
            <h1 className='appname'>GIGANEXUS</h1>
            <p className='appslogan'>The Ultimate Paradise for Technovores</p>
            <form action="#" method='post' onSubmit={handleSubmit}>
              <div className='login-form'>
                <h2>Login or Signup</h2>
                <input className='login-input' type="text" id="email" name="email" placeholder="Enter your email" value={formData.email} onChange={handleChange} required />
                <input className='login-input' type="password" id="password" name="password" placeholder="Enter your password" value={formData.password} onChange={handleChange} required />
                <button className='login-btn'>Login</button>
                <Link to={"/signup"}><button className='acc-btn'>Create an Account</button></Link>
                <h4>or</h4>
              </div>
            </form>
            <div className='login-socical'>
              <a className='login-socical-icon' href=""><FaGoogle /></a>
              <a className='login-socical-icon' href=""><FaFacebook /></a>
              <a className='login-socical-icon' href=""><FaApple /></a>
              <a className='login-socical-icon' href=""><FaTwitter /></a>
            </div>
          </div>
          <div className='store-icon'>
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" />
            <a href="">
              <div className="download android">
                <i className="fa fa-android fa-2x"></i>
                <span className="p2">Play Store</span>
              </div>
            </a>
            <a href="https://www.apple.com/in/app-store/">
              <div className="download apple">
                <i className="fa fa-apple fa-2x"></i>
                <span className="p2">App Store</span>
              </div>
            </a>
          </div>
        </div>
      </div>
      {showPopup && (
        <div className={`login-popup ${popupMessage === 'Login successful!' ? 'success' : 'error'}`}>
          <div className="login-popup-content">
            <span className="close" onClick={() => setShowPopup(false)}>&times;</span>
            {popupType === 'success' ? <FaCheckCircle className="icon" color="#4caf50" /> : <FaExclamationCircle className="icon" color="#f44336" />}
            <p>{popupMessage}</p>
          </div>
        </div>
      )}
    </>
  );
};

export default Login;
