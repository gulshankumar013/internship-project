
import React, { useState, useEffect } from "react";
import axios from "axios";
import "../Dashbord/contactusMessage.css";
import { useNavigate } from "react-router-dom";

const API = "http://localhost:5164/fetchAllAdmin"; 
const DELETE_API = "http://localhost:5164/deleteGiganexusAdmin"; 
const UPDATE_API = "http://localhost:5164/updateGiganexusAdmin"; 

const AdminDetails = () => {
  const usenavigate = useNavigate();
  useEffect(()=>{
      let email = sessionStorage.getItem('email')
      if(email==='' || email===null){
          usenavigate("/adminLogin");
      }
  },[]);

  const [users, setUsers] = useState([]);
  const [editingUser, setEditingUser] = useState(null);
  const [editFormData, setEditFormData] = useState({
    id: '',
    name: '',
    email: '',
    password: ''
  });

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
          id: id
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

  const handleEdit = (user) => {
    setEditingUser(user.id);
    setEditFormData(user);
  };

  const handleEditChange = (e) => {
    const { name, value } = e.target;
    setEditFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleUpdate = async () => {
    try {
      const response = await axios.post(UPDATE_API, {
        eventID: "1001",
        addInfo: editFormData
      });
      console.log("Update Response:", response.data); // Log the entire response
      if (response.status === 200) {
        const responseData = response.data;
        if (responseData.rData.rMessage === "Admin Update successful.") {
          setUsers(users.map(user => (user.id === editFormData.id ? editFormData : user))); // Update user in local state
          setEditingUser(null);
          console.log(`User with ID ${editFormData.id} updated successfully`);
        } else {
          console.log("Failed to update user");
        }
      }
    } catch (error) {
      console.error("Error updating user:", error);
    }
  };

  return (
    <div className="form-container">
      <div className="table-container">
        <h3>Admin Detail's</h3>
        <div className="main-content">
          <table className="form-table">
            <thead>
              <tr>
                <th>FULL NAME</th>
                <th>EMAIL</th>
                <th>PASSWORD</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {users.length > 0 ? (
                users.map((user) => (
                  <tr key={user.id}>
                    <td>{user.name}</td>
                    <td>{user.email}</td>
                    <td>{user.password}</td>
                    <td>
                      <button onClick={() => handleEdit(user)}>Edit</button>
                      <button onClick={() => handleDelete(user.id)}>Delete</button>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="4">No data available</td>
                </tr>
              )}
            </tbody>
          </table>
          {editingUser && (
            <div className="edit-form">
              <h3>Edit Admin Details</h3>
              <form onSubmit={handleUpdate}>
                <div>
                  <label>Full Name</label>
                  <input
                    type="text"
                    name="name"
                    value={editFormData.name}
                    onChange={handleEditChange}
                  />
                </div>
                <div>
                  <label>Email</label>
                  <input
                    type="email"
                    name="email"
                    value={editFormData.email}
                    onChange={handleEditChange}
                  />
                </div>
                <div>
                  <label>Password</label>
                  <input
                    type="password"
                    name="password"
                    value={editFormData.password}
                    onChange={handleEditChange}
                  />
                </div>
                <button type="button" onClick={handleUpdate}>Update</button>
                <button type="button" onClick={() => setEditingUser(null)}>Cancel</button>
              </form>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default AdminDetails;
