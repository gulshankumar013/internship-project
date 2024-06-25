// import React, { useEffect, useState } from "react";
// import { BsPlus, BsTrash, BsPencil } from "react-icons/bs";
// import "../Dashbord/addProduct.css";
// import { useNavigate } from "react-router-dom";
// import axios from "axios";
// import { toast } from "react-toastify";

// const AddHomeProduct = () => {
//   const usenavigate = useNavigate();
//   useEffect(() => {
//     let email = sessionStorage.getItem("email");
//     if (email === "" || email === null) {
//       usenavigate("/adminLogin");
//     }
//   }, []);

//   const [formData, setFormData] = useState({
//     name: "",
//     image: "",
//     discription: "",
//     price: "",
//     brand: "",
//     about: "",
//     specification: "",
//   });

 
//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     const payload = {
//       eventID: "1001",
//       addInfo: {
//         image: formData.image,
//         name: formData.name,
//         discription: formData.discription,
//         price: formData.price,
//         brand: formData.brand,
//         about: formData.about,
//         specifications: formData.specification,
//       },
//     };
//     try {
//       const response = await axios.post(
//         "http://localhost:5164/technexusCard",
//         payload
//       );
//       console.log(response.data, "api response"); // handle response
//       // setShowPopup(true); // Show the popup after successful signup
//       console.log("response",response)
//       toast.success('Card added suscesfull')
//       setFormData({
//         name: "",
//         image: "",
//         discription: "",
//         price: "",
//         brand: "",
//         about: "",
//         specification: "",
//       })
//     } catch (error) {
//       console.error("Error in adding card up:", error);
//       // Handle error
//     }
//   };


//   const handleImage = (e) => {
//     const file = e.target.files[0];
//     const reader = new FileReader();
//     reader.onloadend = () => {
//       setFormData({
//         ...formData, image: reader.result,
       


//       });
//     };
//     if (file) {
//       reader.readAsDataURL(file);
//     }
//   };

//   return (
//     <div className="product-page">
//       <h2>Add Product in Home Page</h2>
//       <form
//         className="product-form"
//         onSubmit={handleSubmit}
//       >
//         <input
//           type="text"
//           placeholder="Product Name"
//           value={formData.name}
//           onChange={(e) => setFormData({ ...formData, name: e.target.value })}
//         />
//         <input
//           type="file"
          
//           onChange={handleImage}
//         />
//         <input
//           placeholder="Description"
//           value={formData.discription}
//           onChange={(e) =>
//             setFormData({ ...formData, discription: e.target.value })
//           }
//         />
//         <input
//           type="number"
//           placeholder="Price"
//           value={formData.price}
//           onChange={(e) => setFormData({ ...formData, price: e.target.value })}
//         />
//         <input
//           type="text"
//           placeholder="brand"
//           value={formData.brand}
//           onChange={(e) => setFormData({ ...formData, brand: e.target.value })}
//         />
//         <input
//           type="text"
//           placeholder="about"
//           value={formData.about}
//           onChange={(e) => setFormData({ ...formData, about: e.target.value })}
//         />
//         <input
//           type="text"
//           placeholder="specification"
//           value={formData.specification}
//           onChange={(e) =>
//             setFormData({ ...formData, specification: e.target.value })
//           }
//         />

       
//         <button type="submit">
//           <BsPlus /> Add Product
//         </button>
//       </form>
//     </div>
//   );
// };

// export default AddHomeProduct;




import React, { useEffect, useState } from "react";
import { BsPlus } from "react-icons/bs";
import "../Dashbord/addProduct.css";
import { Outlet, useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";

const AddBestSellingProduct = () => {
  const usenavigate = useNavigate();
  useEffect(() => {
    let email = sessionStorage.getItem("email");
    if (email === "" || email === null) {
      usenavigate("/adminLogin");
    }
  }, [usenavigate]);

  const [formData, setFormData] = useState({
    name: "",
    image: "",
    discription: "",
    price: "",
    brand: "",
    about: "",
    specification: "",
  });

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
      const response = await axios.post(
        "http://localhost:5164/technexusCard",
        payload
      );
      console.log(response.data, "api response"); // handle response
      toast.success('Card added successfully');
      setFormData({
        name: "",
        image: "",
        discription: "",
        price: "",
        brand: "",
        about: "",
        specification: "",
      });
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

  return (
    <div className="product-page">
      <div className="top-buttons">
        <button onClick={() => navigateTo("/dasbord/addproduct")}>Best Selling</button>
        <button onClick={() => navigateTo("/dasbord/addTrendingProduct")}>Trending Products</button>
        <button onClick={() => navigateTo("/dasbord/addOfferOnTopbrand")}>Offers on Top Brands</button>
      </div>
      <h2>Add Product in Best Selling</h2>
      <form className="product-form" onSubmit={handleSubmit}>
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
          placeholder="Brand"
          value={formData.brand}
          onChange={(e) => setFormData({ ...formData, brand: e.target.value })}
        />
        <input
          type="text"
          placeholder="About"
          value={formData.about}
          onChange={(e) => setFormData({ ...formData, about: e.target.value })}
        />
        <input
          type="text"
          placeholder="Specification"
          value={formData.specification}
          onChange={(e) =>
            setFormData({ ...formData, specification: e.target.value })
          }
        />
        <button type="submit">
          <BsPlus /> Add Product
        </button>
      </form>
      
    </div>
  );
};

export default AddBestSellingProduct;

