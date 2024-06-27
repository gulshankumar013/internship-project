import React, { useEffect, useState } from 'react'
import "../css/cart.css"
import { Link, useNavigate } from 'react-router-dom'


const Cart = ({cart,setCart}) => {

    const usenavigate = useNavigate();

    useEffect(()=>{
        let email = sessionStorage.getItem('email')
        let userData = sessionStorage.getItem('userData')

        if(userData=== "" || userData===null){
            usenavigate("/login");
        }
    },[]);
  

    const[CART,setCART] = useState([])
    
useEffect(()=>{
    setCART(cart)
},[cart])

const removeFromCart = (index) => {
    const updatedCart = [...cart];
    updatedCart.splice(index, 1); // Remove the item at the specified index
    setCart(updatedCart);
    
};

  return (
    <>
        <div className='cartpage-main'>
                <div className='cartpage'>
                    <h3>Shopping Cart</h3>
                    {cart && CART?.map((cartItem, cartIndex) => {
                        return (
                            <div key={cartIndex} className='page'>
                                <div className='page-child'>
                                    <img src={cartItem.image} alt="" />
                                    <div className="item-details">
                                        <span className="item-name">{cartItem.name}</span><br />
                                        <span className="item-description">{cartItem.discription}</span>
                                        <span className="item-price">Rs. {cartItem.price * cartItem.quantity}</span>
                                    </div>
                                    <div className="quantity">
                                        <button onClick={() => {
                                            const _CART = CART.map((item, index) => {
                                                return cartIndex === index ? { ...item, quantity: item.quantity > 0 ? item.quantity - 1 : 0 } : item;
                                            });
                                            setCART(_CART);
                                        }}>-</button>
                                        <span className="item-quantity">{cartItem.quantity}</span>
                                        <button onClick={() => {
                                            const _CART = CART.map((item, index) => {
                                                return cartIndex === index ? { ...item, quantity: item.quantity + 1 } : item;
                                            });
                                            setCART(_CART);
                                        }}>+</button>
                                    </div>
                                    <button className="remove-btn" onClick={() => removeFromCart(cartIndex)}>Remove</button>
                                </div>
                            </div>
                        );
                    })}
                    <div className='amount'>
                        <h2>Total Amount = </h2>
                        {
                            cart && CART.map(item => item.price * item.quantity).reduce((total, value) => total + value, 0)
                        }
                    </div>
                    <div className="cart-payment">
                        <Link to={"/payment"}><button className='cart-payment-button'>Make Payment</button></Link>
                    </div>
                </div>
            </div>
    </>
  )
}

export default Cart
