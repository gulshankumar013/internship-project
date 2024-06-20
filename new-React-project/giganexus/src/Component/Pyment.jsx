import React, { useState } from 'react';
import '../css/payment.css';

const Payment = () => {
  const [cardNumber, setCardNumber] = useState('');
  const [expiryDate, setExpiryDate] = useState('');
  const [cvv, setCvv] = useState('');
  const [cardName, setCardName] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Payment Successful!');
  };

  return (
    <>
    <div className='payment-body'>
    <div className="payment-container">
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
              required
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
              required
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
              required
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
              required
            />
          </div>
        </div>
        <button type="submit" className="submit-btn"><i className="fas fa-check-circle"></i> Pay Now</button>
      </form>
    </div>
    </div>
    </>
  );
};

export default Payment;
