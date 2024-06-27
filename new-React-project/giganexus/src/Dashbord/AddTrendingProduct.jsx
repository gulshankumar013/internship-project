import React, { useEffect, useState } from "react";
import { BsPlus, BsTrash, BsPencil } from "react-icons/bs";
import "../Dashbord/addProduct.css";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";


const FETCH_API = "http://localhost:5164/fetchTrandingProduct"; 

const AddTrendingProduct = () => {
  const usenavigate = useNavigate();
  useEffect(() => {
    let email = sessionStorage.getItem("email");
    if (email === "" || email === null) {
      usenavigate("/adminLogin");
    }
  }, []);

  const [formData, setFormData] = useState({
    name: "",
    image: "",
    discription: "",
    price: "",
    brand: "",
    about: "",
    specification: "",
  });


  
 //this Axios is use for add product in trainding product  by api
  const handleSubmit = async (e) => {
    e.preventDefault();
    const payload = {
      eventID: "1001",
      addInfo: {
        image: formData.image,
        name: formData.name,
        discription: formData.discription,
        price: formData.price,
        brand: formData.brand,
        about: formData.about,
        specifications: formData.specification,
      },
    };

    try {
      const response = await axios.post("http://localhost:5164/trandingProduct",payload);
      console.log(response.data, "api response"); // handle response
      // setShowPopup(true); // Show the popup after successful signup
      console.log("response",response)
      toast.success('Card added suscesfull')
      setFormData({
        name: "",
        image: "",
        discription: "",
        price: "",
        brand: "",
        about: "",
        specification: "",
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


  //this axios is use to fetch product from database by API
  const [editingUser, setEditingUser] = useState(null);

  const [bestTrendingProduct, setBestTrendingProduct] = useState([]);
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
          setBestTrendingProduct(responseData.rData.users);
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
      <h2>Add Product in Trending Page</h2>
      <form
        className="product-form"
        onSubmit={handleSubmit}
      >
        <input
          type="text"
          placeholder="Product Name"
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
        />
        <input
          type="file"
          
          onChange={handleImage}
        />
        <input
          placeholder="Description"
          value={formData.discription}
          onChange={(e) =>
            setFormData({ ...formData, discription: e.target.value })
          }
        />
        <input
          type="number"
          placeholder="Price"
          value={formData.price}
          onChange={(e) => setFormData({ ...formData, price: e.target.value })}
        />
        <input
          type="text"
          placeholder="brand"
          value={formData.brand}
          onChange={(e) => setFormData({ ...formData, brand: e.target.value })}
        />
        <input
          type="text"
          placeholder="about"
          value={formData.about}
          onChange={(e) => setFormData({ ...formData, about: e.target.value })}
        />
        <input
          type="text"
          placeholder="specification"
          value={formData.specification}
          onChange={(e) =>
            setFormData({ ...formData, specification: e.target.value })
          }
        />
        <button type="submit">
          <BsPlus /> Add Product
        </button>
      </form>
      <h2>Product List</h2>

<div className="form-container-a">
<div className="table-container">
  <h3> Product list in Trending product page</h3>
  <div className="main-content">
    <table className="form-table">
      <thead>
        <tr>
          <th>PRODUCT IMAGE</th>
          <th>NAME</th>
          <th>PRICE</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        {bestTrendingProduct.length > 0 ? (
          bestTrendingProduct.map((product) => (
            <tr key={product.id}>
              <td><img src={product.image} alt="" style={{height:"25px"}}/></td>
              <td>{product.name}</td>
              <td>{product.price}</td>
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

export default AddTrendingProduct;