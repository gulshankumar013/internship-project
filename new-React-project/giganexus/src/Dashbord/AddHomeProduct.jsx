import React, { useEffect, useState } from 'react';
import { BsPlus, BsTrash, BsPencil } from 'react-icons/bs';
import "../Dashbord/addProduct.css";
import { useNavigate } from 'react-router-dom';



const AddHomeProduct = () => {

  const usenavigate = useNavigate();
  useEffect(()=>{
      let email = sessionStorage.getItem('email')
      if(email==='' || email===null){
          usenavigate("/adminLogin");
      }
  },[]);
  const [formData, setFormData] = useState({
    name: '',
    image: '',
    discription: '',
    price: ''  
});

const handleChange = (e) => {
  setFormData({ ...formData, [e.target.name]: e.target.value });
};

const handleSubmit = async (e) => {
  e.preventDefault();
  const payload = {
      eventID: "1001",
     addInfo: {
      name:formData.name,
      image:formData.image,
     discription:formData.discription,
    price:formData.price
    
  }
  };
  try {
    const response = await axios.post('http://localhost:5164/technexusCard', payload);
    console.log(response.data, 'api response'); // handle response
    // setShowPopup(true); // Show the popup after successful signup
} catch (error) {
    console.error('Error in adding card up:', error);
    // Handle error
}
};


  const [products, setProducts] = useState([]);
  const [name, setName] = useState('');
  const [brand, setBrand] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');
  const [imageFile, setImageFile] = useState(null);
  const [imageUrl, setImageUrl] = useState('');

  const handleAddProduct = (e) => {
    e.preventDefault();
    if (name && brand && description && price && imageFile) {
      const newProduct = {
        id: Date.now(),
        name,
        description,
        price,
        imageUrl: URL.createObjectURL(imageFile)
      };
      setProducts([...products, newProduct]);
      setName('');
      setDescription('');
      setPrice('');
      setImageFile(null);
    } else {
      alert('Please fill in all fields and select an image');
    }
  };

  const handleDeleteProduct = (id) => {
    setProducts(products.filter(product => product.id !== id));
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImageFile(file);
      setImageUrl(URL.createObjectURL(file));
    }
  };

  return (
    <div className="product-page">
      <h2>Add Product in Home Page</h2>
      <form action='#' method='post' className="product-form" onSubmit={()=>{handleAddProduct(),handleSubmit()}}>
        <input
          type="text"
          placeholder="Product Name"
          value={formData.name}
          onChange={()=>handleChange()}
        />
         <input
          type="file"
          accept="image/*"
          onChange={handleChange}
        />
        <input
          placeholder="Description"
          value={formData.discription}
          onChange={handleChange}
        />
        <input
          type="number"
          placeholder="Price"
          value={formData.price}
          onChange={handleChange}
        />
       
        {imageUrl && (
          <img src={imageUrl} alt="Selected" style={{ maxWidth: '200px', marginBottom: '10px' }} />
        )}
        <button type="submit">
          <BsPlus /> Add Product
        </button>
      </form>

      <h2>Product List</h2>
      <div className="product-list">
        {products.map(product => (
          <div key={product.id} className="product-card">
            <img src={product.imageUrl} alt={product.name} style={{ maxWidth: '100%' }} />
            <h3>{product.name}</h3>
            <p>{product.description}</p>
            <p>${product.price}</p>
            <div className="product-actions">
              <button onClick={() => handleDeleteProduct(product.id)}>
                <BsTrash /> Delete
              </button>
              <button>
                <BsPencil /> Edit
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AddHomeProduct;
