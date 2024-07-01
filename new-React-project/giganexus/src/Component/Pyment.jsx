// import React, { useState } from 'react';
// import '../css/payment.css';

// const Payment = () => {
//   const [cardNumber, setCardNumber] = useState('');
//   const [expiryDate, setExpiryDate] = useState('');
//   const [cvv, setCvv] = useState('');
//   const [cardName, setCardName] = useState('');

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     alert('Payment Successful!');
//   };

//   return (
//     <>
//     <div className='payment-body'>
//     <div className="payment-container">
//       <h1><i className="fas fa-credit-card"></i> Payment Details</h1>
//       <form onSubmit={handleSubmit} className="payment-form">
//         <div className="input-group">
//           <label htmlFor="cardNumber">Card Number</label>
//           <div className="input-with-icon">
//             <i className="far fa-credit-card"></i>
//             <input 
//               type="text" 
//               id="cardNumber" 
//               value={cardNumber}
//               onChange={(e) => setCardNumber(e.target.value)} 
//               required
//               maxLength="16"
//             />
//           </div>
//         </div>
//         <div className="input-group">
//           <label htmlFor="expiryDate">Expiry Date</label>
//           <div className="input-with-icon">
//             <i className="far fa-calendar-alt"></i>
//             <input 
//               type="text" 
//               id="expiryDate" 
//               value={expiryDate}
//               onChange={(e) => setExpiryDate(e.target.value)} 
//               required
//               placeholder="MM/YY"
//             />
//           </div>
//         </div>
//         <div className="input-group">
//           <label htmlFor="cvv">CVV</label>
//           <div className="input-with-icon">
//             <i className="fas fa-lock"></i>
//             <input 
//               type="password" 
//               id="cvv" 
//               value={cvv}
//               onChange={(e) => setCvv(e.target.value)} 
//               required
//               maxLength="3"
//             />
//           </div>
//         </div>
//         <div className="input-group">
//           <label htmlFor="cardName">Cardholder Name</label>
//           <div className="input-with-icon">
//             <i className="far fa-user"></i>
//             <input 
//               type="text" 
//               id="cardName" 
//               value={cardName}
//               onChange={(e) => setCardName(e.target.value)} 
//               required
//             />
//           </div>
//         </div>
//         <button type="submit" className="submit-btn"><i className="fas fa-check-circle"></i> Pay Now</button>
//       </form>
//     </div>
//     </div>
//     </>
//   );
// };

// export default Payment;
import React, { useEffect, useState } from 'react';
import '../css/payment.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { FaTruckFast } from 'react-icons/fa6';

const Payment = ({ cart }) => {
  const [cardNumber, setCardNumber] = useState('');
  const [expiryDate, setExpiryDate] = useState('');
  const [cvv, setCvv] = useState('');
  const [cardName, setCardName] = useState('');
  const [cartItems, setCartItems] = useState([]);

  const navigate = useNavigate();

  useEffect(() => {
    setCartItems(cart || []);
  }, [cart]);

  useEffect(() => {
    const userDataString = sessionStorage.getItem("userData");
    if (!userDataString) {
      navigate("/login");
    } else {
      const userData = JSON.parse(userDataString);
      fetchCartItems(userData.id);
    }
  }, [navigate]);

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Payment Successful!');
  };

  const fetchCartItems = async (userId) => {
    try {
      const payload = {
        eventID: "1001",
        addInfo: {
          user_id: userId,
        },
      };

      const response = await axios.post("http://localhost:5164/fetchcart", payload);
      if (response.status === 200) {
        let responseData = response.data.rData.cards[0];
        if (responseData) {
          const itemsWithQuantity = responseData.map(item => ({
            ...item,
            quantity: item.quantity || 1,
          }));
          setCartItems(itemsWithQuantity);
        } else {
          console.log("No cart items data in response");
        }
      } else {
        console.log("Failed to fetch cart items");
      }
    } catch (error) {
      console.error("Error fetching cart items:", error);
    }
  };

  const calculateTotalAmount = () => {
    if (!cartItems || cartItems.length === 0) return 0;
    return cartItems.reduce((total, item) => {
      return total + (item.trending_product_details.price * item.quantity);
    }, 0);
  };

  const loadScript = (src) => {
    return new Promise((resolve) => {
      const script = document.createElement('script');
      script.src = src;
  
      script.onload = () => {
        resolve(true);
      };
  
      script.onerror = () => {
        resolve(false);
      };
  
      document.body.appendChild(script);
    });
  };


const handleScriptLoad = async () => {
  const scriptLoaded = await loadScript('https://checkout.razorpay.com/v1/checkout.js');
  console.log('Script loaded:', scriptLoaded);
  // Handle script loaded state or any other logic here
};
  return (
    <>
      <div className='payment-body'>
        <div className="payment-container">
          <div className="cart-details">
            <h2>Cart Details</h2>
            {cartItems.length > 0 ? (
              cartItems.map((cartItem, cartIndex) => (
                <div key={cartIndex} className='cart-item'>
                  <img src={cartItem.trending_product_details.image} alt={cartItem.name} />
                  <div className="item-details">
                    <span className="item-name">{cartItem.trending_product_details.name}</span><br />
                    <span className="item-description">{cartItem.description}</span><br />
                    <span className="item-price">Rs. {cartItem.trending_product_details.price * cartItem.quantity}</span>
                  </div>
                  <div className="quantity">
                    <span className="item-quantity">{cartItem.quantity}</span>
                  </div>
                </div>
              ))
            ) : (
              <p>Your cart is empty.</p>
            )}
            <div className="delivery-info">
              <i><FaTruckFast/></i>
              <span> Item will be delivered within 5 working days..</span>
            </div>
            <div className="total-amount">
              <h3>Total Amount: Rs. {calculateTotalAmount()}</h3>
            </div>
          </div>
          <div className="payment-details">
            <h1><i className="fas fa-credit-card"></i> Payment Details</h1>
            <form onSubmit={handleSubmit} className="payment-form">
              <div className="input-group">
                <label htmlFor="cardNumber">Card Number</label>
                <div className="input-with-icon">
                  <i className="far fa-credit-card"></i>
                  <input
                    type="text"
                    id="cardNumber"
                    value={cardNumber}
                    onChange={(e) => setCardNumber(e.target.value)}
                    
                    maxLength="16"
                  />
                </div>
              </div>
              <div className="input-group">
                <label htmlFor="expiryDate">Expiry Date</label>
                <div className="input-with-icon">
                  <i className="far fa-calendar-alt"></i>
                  <input
                    type="text"
                    id="expiryDate"
                    value={expiryDate}
                    onChange={(e) => setExpiryDate(e.target.value)}
                   
                    placeholder="MM/YY"
                  />
                </div>
              </div>
              <div className="input-group">
                <label htmlFor="cvv">CVV</label>
                <div className="input-with-icon">
                  <i className="fas fa-lock"></i>
                  <input
                    type="password"
                    id="cvv"
                    value={cvv}
                    onChange={(e) => setCvv(e.target.value)}
                    
                    maxLength="3"
                  />
                </div>
              </div>
              <div className="input-group">
                <label htmlFor="cardName">Cardholder Name</label>
                <div className="input-with-icon">
                  <i className="far fa-user"></i>
                  <input
                    type="text"
                    id="cardName"
                    value={cardName}
                    onChange={(e) => setCardName(e.target.value)}
                    
                  />
                </div>
              </div>
              <button type="submit" className="submit-btn" onClick={()=>{handleScriptLoad}}><i className="fas fa-check-circle"></i> Pay Now</button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Payment;
