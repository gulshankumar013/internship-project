import React, { useState } from 'react';
import { Container, Box, Typography, Button, TextField, CircularProgress } from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';
import { LockOutlined as LockIcon } from '@mui/icons-material';
import axios from 'axios';
import './adminSignup.css';// Import your CSS file
import { Bounce, toast } from 'react-toastify';

const AdminSignup = () => {
  const navigate = useNavigate();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError('');

    const payload = {
      eventID: "1001",
      addInfo: {
        name: name,
        email: email,
        password: password,
      }
    };

    try {
      const response = await axios.post('http://localhost:5164/giganexusAdmin', payload);
      console.log(response.data); // Log response for debugging

      if (response.data.rData.rMessage === "Admin added successfully") {
        // Handle successful signup
        
        navigate("/adminLogin");
        toast.success("Admin Created Sucsessfull")
        
      } else {
        // Handle signup failure
        setError('Signup failed. Please try again.');
      }
    } catch (error) {
      console.error('Error signing up:', error);
      setError('Signup failed. Please try again.');
    } finally {
      setIsSubmitting(false); // Ensure form submission state is reset
    }
  };

  return (
    <div className='Admin-Signup'>
      <div className='Admin-Signup-child'>
        <div className='Admin-Signupimg'></div>
        <div className='signup-box'>
          <LockIcon style={{ fontSize: '3rem', color: '#1976d2' }} />
          <Typography component="h1" variant="h5">
            Admin Signup
          </Typography>
          <form className='adminsignup' onSubmit={handleSubmit}>
            <Box mt={2}>
              <TextField
                name="name"
                variant="outlined"
                fullWidth
                label="Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              {error && <div className="error-message">{error}</div>}
            </Box>
            <Box mt={2}>
              <TextField
                name="email"
                variant="outlined"
                fullWidth
                label="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              {error && <div className="error-message">{error}</div>}
            </Box>
            <Box mt={2}>
              <TextField
                name="password"
                type="password"
                variant="outlined"
                fullWidth
                label="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              {error && <div className="error-message">{error}</div>}
            </Box>
            <Box mt={2}>
              <Button type="submit" fullWidth variant="contained" color="primary" disabled={isSubmitting}>
                {isSubmitting ? <CircularProgress size={24} /> : 'Signup'}
              </Button>
            </Box>
          </form>
          <br />
          <Link to={"/adminLogin"}><p>Allready have an Account?</p></Link>
        </div>
      </div>
    </div>
  );
};

export default AdminSignup;
