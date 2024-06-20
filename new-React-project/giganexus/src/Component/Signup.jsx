import React, { useState } from 'react';
import "../css/signup.css";
import "@fontsource/rubik";
import { FaGoogle, FaFacebook, FaApple, FaTwitter, FaCheckCircle } from 'react-icons/fa';
import Nav from './Nav';
import Footer from './Footer';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Signup = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        mobile: '',
        state: '',
        pin: ''
    });
    const [showPopup, setShowPopup] = useState(false);
    const navigate = useNavigate();

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const payload = {
            eventID: "1001",
            addInfo: {
                name: formData.name,
                email: formData.email,
                password: formData.password,
                mobile: formData.mobile,
                state: formData.state,
                pin: formData.pin
            }
        };
        try {
            const response = await axios.post('http://localhost:5164/signup', payload);
            console.log(response.data, 'api response'); // handle response
            setShowPopup(true); // Show the popup after successful signup
        } catch (error) {
            console.error('Error signing up:', error);
            // Handle error
        }
    };

   
    const handleClosePopup = () => {
      const popupContent = document.querySelector('.signup-popup-content');
      popupContent.classList.add('slide-out');
      setTimeout(() => {
          setShowPopup(false);
          navigate('/login'); // Redirect to the login page after closing the popup
      }, 500); // Match this duration with your animation duration
  };

    return (
        <>
            <Nav />
            <section className='body'>
                <div className='logo-slogan'>
                    <div className='signup-logo'></div>
                    <div>
                        <h3>GIGANEXUS</h3>
                        <p>The Ultimate Paradise for Technovores</p>
                        <form action="#" method='post' onSubmit={handleSubmit}>
                            <div className='input-form'>
                                <h2>Create an account</h2>
                                <input className='signup-input' type="text" id="name" name="name" placeholder='Name' value={formData.name} onChange={handleChange} required />
                                <input className='signup-input' type="email" id="email" name="email" placeholder='Email' value={formData.email} onChange={handleChange} required />
                                <input className='signup-input' type="password" id="password" name="password" placeholder='Password' value={formData.password} onChange={handleChange} required />
                                <input className='signup-input' type="tel" id="mobile" name="mobile" pattern="[0-9]{10}" placeholder='Mobile' value={formData.mobile} onChange={handleChange} required />
                                <input className='signup-input' type="text" id="state" name="state" placeholder='State' value={formData.state} onChange={handleChange} required />
                                <input className='signup-input' type="number" id="pin" name="pin" placeholder='Pin' value={formData.pin} onChange={handleChange} required />
                                <button className='sign-btn'>Create</button>
                                <h4>or</h4>
                            </div>
                        </form>
                        <div className='signup-socical'>
                            <a className='signup-socical-icon' href=""><FaGoogle /> </a>
                            <a className='signup-socical-icon' href=""><FaFacebook /></a>
                            <a className='signup-socical-icon' href=""><FaApple /></a>
                            <a className='signup-socical-icon' href=""><FaTwitter /></a>
                        </div>
                    </div>
                </div>
                {showPopup && (
                    <div className="signup-popup">
                        <div className="signup-popup-content">
                            <FaCheckCircle className="signup-popup-icon" />
                            <span className="close" onClick={handleClosePopup}>&times;</span>
                            <p>Account created successfully!</p>
                        </div>
                    </div>
                )}
            </section>
        </>
    );
};

export default Signup;
