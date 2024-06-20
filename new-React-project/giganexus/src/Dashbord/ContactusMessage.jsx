import React, { useState, useEffect } from "react";
import axios from "axios";
import "../Dashbord/contactusMessage.css";
import { useNavigate } from "react-router-dom";

const API = "http://localhost:5164/fetchAllMessage"; // Assuming this endpoint is correct
const DELETE_API = "http://localhost:5164/deleteMessageId"; // New endpoint for deleting user

const ContactusMessage = () => {

  const usenavigate = useNavigate();
  useEffect(()=>{
      let email = sessionStorage.getItem('email')
      if(email==='' || email===null){
          usenavigate("/adminLogin");
      }
  },[]);

  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    try {
      const response = await axios.post(API, { eventID: "1001" });
      console.log("API Response:", response.data); // Log the entire response
      if (response.status === 200) {
        const responseData = response.data;
        if (responseData.rData && responseData.rData.users) {
          setUsers(responseData.rData.users);
          console.log("Users:", responseData.rData.users);
        } else {
          console.log("No users data in response");
        }
      }
    } catch (error) {
      console.error("Error fetching users:", error);
    }
  };

  const handleDelete = async (id) => {
    try {
      const response = await axios.post(DELETE_API, {
        eventID: "1001",
        addInfo: {
          id:id
        }
      });
      console.log("Delete Response:", response.data); // Log the entire response
      if (response.status === 200) {
        const responseData = response.data;
        if (responseData.rData.rMessage === "DELETE SUCCESSFULLY.") {
          setUsers(users.filter(user => user.id !== id)); // Remove user from local state
          console.log(`User with ID ${id} deleted successfully`);
        } else {
          console.log("Failed to delete user");
        }
      }
    } catch (error) {
      console.error("Error deleting user:", error);
    }
  };

  return (
    <div className="form-container">
      <div className="table-container">
        <h3>Enquiry Form Details</h3>
        <div className="main-content">
          <table className="form-table">
            <thead>
              <tr>
                
                <th>FULL NAME</th>
                <th>EMAIL</th>
                <th>MESSAGE</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {users.length > 0 ? (
                users.map((user) => (
                  <tr key={user.id}>
                    
                    <td>{user.name}</td>
                    <td>{user.email}</td>
                    <td>{user.message}</td>
                    <td>
                      {/* <button onClick={() => handleEdit(user.id)}>Edit</button> */}
                      <button onClick={() => handleDelete(user.id)}>Delete</button>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="5">No data available</td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ContactusMessage;
