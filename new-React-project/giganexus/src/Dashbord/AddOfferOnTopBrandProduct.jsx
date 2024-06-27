import React, { useEffect, useState } from "react";
import { BsPlus, BsTrash, BsPencil } from "react-icons/bs";
import "../Dashbord/addProduct.css";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";

const FETCH_API = "http://localhost:5164/fetchTopBrandProduct"; 

const AddOfferOnTopBrandProduct = () => {
  const usenavigate = useNavigate();
  useEffect(() => {
    let email = sessionStorage.getItem("email");
    if (email === "" || email === null) {
      usenavigate("/adminLogin");
    }
  }, []);

  const [formData, setFormData] = useState({
    image: "",
    brand: "",
    discount: "",
  
  });

 
  const handleSubmit = async (e) => {
    e.preventDefault();
    const payload = {
      eventID: "1001",
      addInfo: {
        image: formData.image,
        brand: formData.brand,
        discount: formData.discount,
        
      },
    };
    try {
      const response = await axios.post(
        "http://localhost:5164/offerOnBrands",
        payload
      );
      console.log(response.data, "api response"); // handle response
      // setShowPopup(true); // Show the popup after successful signup
      console.log("response",response)
      toast.success('Card added suscesfull')
      setFormData({
        image: "",
        brand: "",
        discount: "",
        
      })
    } catch (error) {
      console.error("Error in adding card up:", error);
      // Handle error
    }
  };


  const handleImage = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.onloadend = () => {
      setFormData({
        ...formData, image: reader.result,
       


      });
    };
    if (file) {
      reader.readAsDataURL(file);
    }
  };

  const navigateTo = (path) => {
    usenavigate(path);
  };



  const [editingUser, setEditingUser] = useState(null);

  const [topBrand, settopBrand] = useState([]);
  useEffect(() => {
    fetchProduct();
  }, []);

  const fetchProduct = async () => {
    try {
      const response = await axios.post(FETCH_API, { eventID: "1001" });
      console.log("API Response:", response.data); // Log the entire response
      if (response.status === 200) {
        const responseData = response.data;
        if (responseData.rData && responseData.rData.users) {
          settopBrand(responseData.rData.users);
          console.log("Users:", responseData.rData.users);
        } else {
          console.log("No users data in response");
        }
      }
    } catch (error) {
      console.error("Error fetching users:", error);
    }
  };

  return (
    <div className="product-page">
        <div className="top-buttons">
        <button onClick={() => navigateTo("/dasbord/addproduct")}>Best Selling</button>
        <button onClick={() => navigateTo("/dasbord/addTrendingProduct")}>Trending Products</button>
        <button onClick={() => navigateTo("/dasbord/addOfferOnTopbrand")}>Offers on Top Brands</button>
      </div>
      <h2>Add Brand in Offer In Top Brands Page</h2>
      <form
        className="product-form"
        onSubmit={handleSubmit}
      >
       
        <input
          type="file"
          
          onChange={handleImage}
        />
       
        <input
          type="text"
          placeholder="Brand"
          value={formData.price}
          onChange={(e) => setFormData({ ...formData, brand: e.target.value })}
        />
        
        <input
          type="text"
          placeholder="discount"
          value={formData.about}
          onChange={(e) => setFormData({ ...formData, discount: e.target.value })}
        />
        

       
        <button type="submit">
          <BsPlus /> Add Product
        </button>
      </form>

      <h2>Product List</h2>

      <div className="form-container-a">
      <div className="table-container">
        <h3>  list of offer on top brands  selling page</h3>
        <div className="main-content">
          <table className="form-table">
            <thead>
              <tr>
                <th>BRAND IMAGE</th>
                <th>BRAND NAME</th>
                <th>DISCOUNT</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {topBrand.length > 0 ? (
                topBrand.map((product) => (
                  <tr key={product.id}>
                    <td><img src={product.image} alt="" style={{height:"25px"}}/></td>
                    <td>{product.brand}</td>
                    <td>{product.discount}</td>
                    <td>
                      <button onClick={() => handleEdit(product)}>Edit</button>
                      <button onClick={() => handleDelete(product.id)}>Delete</button>
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
    </div>
  );
};

export default AddOfferOnTopBrandProduct;