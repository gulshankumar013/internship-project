
import React, { useState } from 'react';
import { Container, Box, Typography, Button, TextField, CircularProgress } from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';
import { LockOutlined as LockIcon } from '@mui/icons-material';
import axios from 'axios'; // Import axios for API calls
import './adminLogin.css'; // Import your CSS file
import { Bounce,toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const AdminLoginPage = () => {
  const navigate = useNavigate();
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
        email: email,
        password: password,
      }
    };

    try {
      const response = await axios.post('http://localhost:5164/adminSignin', payload);
      console.log(response.data); // Log response for debugging
      console.log("Response",response)

      if (response.data.rData.rMessage === "Signin Successful") {
        // Handle successful login
        sessionStorage.setItem('email',email);
        navigate("/dasbord");
        toast.success(' Login Sucessful!', {
          position: "top-center",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
          transition: Bounce,
          });
      } else {
        // Handle invalid credentials
        setError('Invalid email or password');
      }
    } catch (error) {
      console.error('Error logging in:', error);
      setError('Invalid email or password');
    } finally {
      setIsSubmitting(false); // Ensure form submission state is reset
    }
  };

  return (
    <>
    <div className='Admin-Login'>
        <div className='Admin-Login-child'>
        <div className='Admin-Loginimg'></div>
      <div className='login-box'>
        <LockIcon style={{ fontSize: '3rem', color: '#1976d2' }} />
        <Typography component="h1" variant="h5">
          Admin Login
        </Typography>
        <form className='adminlogin' onSubmit={handleSubmit}>
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
              {isSubmitting ? <CircularProgress size={24} /> : 'Login'}
            </Button>
          </Box>
         
        </form><br />
        <Link to={"/adminSignup"}><p>Dont have an Account?</p></Link>
      </div>
      </div>
    </div>
   
    </>
  );
};

export default AdminLoginPage;
