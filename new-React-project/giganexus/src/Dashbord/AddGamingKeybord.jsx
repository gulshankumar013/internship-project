import React, { useEffect, useState } from 'react'
import { BsPlus } from 'react-icons/bs';
import { useNavigate } from 'react-router-dom';

const AddGamingKeybord = () => {
  const [products, setProducts] = useState([]);
  const [name, setName] = useState('');
  const [brand, setBrand] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');
  const [imageFile, setImageFile] = useState(null);
  const [imageUrl, setImageUrl] = useState('');

  const handleAddProduct = (e) => {

    const usenavigate = useNavigate();
    useEffect(()=>{
        let email = sessionStorage.getItem('email')
        if(email==='' || email===null){
            usenavigate("/adminLogin");
        }
    },[]);
    e.preventDefault();
    if (name && brand && description && price && imageFile) {
      const newProduct = {
        id: Date.now(),
        name,
        brand,
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
      <h2>Add Product in Gaming Keybord</h2>
      <form className="product-form" onSubmit={handleAddProduct}>
        <input
          type="text"
          placeholder="Product Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <input
          type="number"
          placeholder="Price"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
        />
        <input
          type="file"
          accept="image/*"
          onChange={handleFileChange}
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

export default AddGamingKeybord
