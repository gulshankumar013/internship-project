// // import React, { useEffect, useState } from 'react'
// // import "../css/cart.css"
// // import { Link, useNavigate } from 'react-router-dom'
// // import axios from 'axios';

// // const Cart = ({cart,setCart}) => {

// //     const usenavigate = useNavigate();

// //     useEffect(()=>{
// //         let email = sessionStorage.getItem('email')
// //         let userData = sessionStorage.getItem('userData')

// //         if(userData=== "" || userData===null){
// //             usenavigate("/login");
// //         }
// //     },[]);

// //     const[CART,setCART] = useState([])

// // useEffect(()=>{
// //     setCART(cart)
// // },[cart])

// // const removeFromCart = (index) => {
// //     const updatedCart = [...cart];
// //     updatedCart.splice(index, 1); // Remove the item at the specified index
// //     setCart(updatedCart);

// // };

// //  // this  axios is use for fetch the product in cart page from database

// //  const [fetchcart, setFetchcart] = useState([]);
// //   useEffect(() => {
// //     fetchProduct();
// //   }, []);

// //   const fetchProduct = async (id) => {
// //     try {
// //         const payload = {
// //             eventID: "1001",
// //             addInfo: {
// //               id: id,
// //             },
// //           };

// //       const response = await axios.post("http://localhost:5164/fetchcart",payload);
// //       console.log("API Response:", response.data); // Log the entire response
// //       if (response.status === 200) {
// //         const responseData = response.data;
// //         if (responseData.rData && responseData.rData.users) {
// //             setFetchcart(responseData.rData.users);
// //           console.log("Users:", responseData.rData.users);
// //         } else {
// //           console.log("No users data in response");
// //         }
// //       }
// //     } catch (error) {
// //       console.error("Error fetching users:", error);
// //     }
// //   };

// //   return (
// //     <>
// //         <div className='cartpage-main'>
// //                 <div className='cartpage'>
// //                     <h3>Shopping Cart</h3>
// //                     {cart && CART?.map((cartItem, cartIndex) => {
// //                         return (
// //                             <div key={cartIndex} className='page'>
// //                                 <div className='page-child'>
// //                                     <img src={cartItem.image} alt="" />
// //                                     <div className="item-details">
// //                                         <span className="item-name">{cartItem.name}</span><br />
// //                                         <span className="item-description">{cartItem.discription}</span>
// //                                         <span className="item-price">Rs. {cartItem.price * cartItem.quantity}</span>
// //                                     </div>
// //                                     <div className="quantity">
// //                                         <button onClick={() => {
// //                                             const _CART = CART.map((item, index) => {
// //                                                 return cartIndex === index ? { ...item, quantity: item.quantity > 0 ? item.quantity - 1 : 0 } : item;
// //                                             });
// //                                             setCART(_CART);
// //                                         }}>-</button>
// //                                         <span className="item-quantity">{cartItem.quantity}</span>
// //                                         <button onClick={() => {
// //                                             const _CART = CART.map((item, index) => {
// //                                                 return cartIndex === index ? { ...item, quantity: item.quantity + 1 } : item;
// //                                             });
// //                                             setCART(_CART);
// //                                         }}>+</button>
// //                                     </div>
// //                                     <button className="remove-btn" onClick={() => removeFromCart(cartIndex)}>Remove</button>
// //                                 </div>
// //                             </div>
// //                         );
// //                     })}
// //                     <div className='amount'>
// //                         <h2>Total Amount = </h2>
// //                         {
// //                             cart && CART.map(item => item.price * item.quantity).reduce((total, value) => total + value, 0)
// //                         }
// //                     </div>
// //                     <div className="cart-payment">
// //                         <Link to={"/payment"}><button className='cart-payment-button'>Make Payment</button></Link>
// //                     </div>
// //                 </div>
// //             </div>
// //     </>
// //   )
// // }

// // export default Cart

// import React, { useEffect, useState } from 'react'
// import "../css/cart.css"
// import { Link, useNavigate } from 'react-router-dom'
// import axios from 'axios';

// const Cart = ({ cart, setCart }) => {

//   const usenavigate = useNavigate();

//   useEffect(() => {
//     let email = sessionStorage.getItem('email')
//     let userData = sessionStorage.getItem('userData')

//     if (userData === "" || userData === null) {
//       usenavigate("/login");
//     }
//   }, []);

//   const [CART, setCART] = useState([])

//   useEffect(() => {
//     setCART(cart)
//   }, [cart])

//   const removeFromCart = (index) => {
//     const updatedCart = [...cart];
//     updatedCart.splice(index, 1); // Remove the item at the specified index
//     setCart(updatedCart);
//   };

//   // Fetch the cart products from the database

//   useEffect(() => {
//     const userDataString = sessionStorage.getItem("userData");
//     if (userDataString) {
//       const userData = JSON.parse(userDataString);
//       fetchProduct(userData.id);
//     }
//   }, []);

//   const [cartItem, setCartItem] = useState([]);

//   async function fetchProduct (user_id){
//     try {
//       const payload = {
//         eventID: "1001",
//         addInfo: {
//         user_id:user_id,
//         },
//       };

//       const response = await axios.post("http://localhost:5164/fetchcart", payload);
//       console.log("API Response:", response.data); // Log the entire response
//       if (response.status === 200) {
//         const responseData = response.data;
//         if (responseData.rData && responseData.rData.users) {
//           setCartItem(responseData.rData.cards);
//           console.log("setFetchcart",setFetchcart)
//           // console.log("Users:", responseData.rData.users);
//         } else {
//           console.log("No users data in response");
//         }
//       }
//     } catch (error) {
//       console.error("Error fetching users:", error);
//     }
//   };

//   return (
//     <>
//       <div className='cartpage-main'>
//         <div className='cartpage'>
//           <h3>Shopping Cart</h3>
//           {cart && CART?.map((cartItem, cartIndex) => {
//             return (
//               <div key={cartIndex} className='page'>
//                 <div className='page-child'>
//                   <img src={cartItem.image} alt="" />
//                   <div className="item-details">
//                     <span className="item-name">{cartItem.name}</span><br />
//                     <span className="item-description">{cartItem.discription}</span>
//                     <span className="item-price">Rs. {cartItem.price * cartItem.quantity}</span>
//                   </div>
//                   <div className="quantity">
//                     <button onClick={() => {
//                       const _CART = CART.map((item, index) => {
//                         return cartIndex === index ? { ...item, quantity: item.quantity > 0 ? item.quantity - 1 : 0 } : item;
//                       });
//                       setCART(_CART);
//                     }}>-</button>
//                     <span className="item-quantity">{cartItem.quantity}</span>
//                     <button onClick={() => {
//                       const _CART = CART.map((item, index) => {
//                         return cartIndex === index ? { ...item, quantity: item.quantity + 1 } : item;
//                       });
//                       setCART(_CART);
//                     }}>+</button>
//                   </div>
//                   <button className="remove-btn" onClick={() => removeFromCart(cartIndex)}>Remove</button>
//                 </div>
//               </div>
//             );
//           })}
//           <div className='amount'>
//             <h2>Total Amount = </h2>
//             {
//               cart && CART.map(item => item.price * item.quantity).reduce((total, value) => total + value, 0)
//             }
//           </div>
//           <div className="cart-payment">
//             <Link to={"/payment"}><button className='cart-payment-button'>Make Payment</button></Link>
//           </div>
//         </div>
//       </div>

//     </>
//   )
// }

// export default Cart








// import React, { useEffect, useState } from "react";
// import { Link, useNavigate } from "react-router-dom";
// import axios from "axios";
// import "../css/cart.css";

// const Cart = ({ cart, setCart }) => {
//   const navigate = useNavigate();
//   const [cartItems, setCartItems] = useState([]);

//   useEffect(() => {
//     const userDataString = sessionStorage.getItem("userData");
//     if (!userDataString) {
//       navigate("/login");
//     } else {
//       const userData = JSON.parse(userDataString);
//       fetchCartItems(userData.id);
//     }
//   }, []);

//   useEffect(() => {
//     setCartItems(cart);
//   }, [cart]);

//   useEffect(() => {
//     // fetchCartItems()
//   }, [cartItems]);
//   // useEffect(() => {
//   //   fetchCartItems()
//   // }, [cartItems]);

//   const removeFromCart = (index) => {
//     const updatedCart = [...cartItems];
//     updatedCart.splice(index, 1);
//     setCartItems(updatedCart);
//     setCart(updatedCart); // Update parent component's cart state if needed
//   };

//   const updateCartItemQuantity = (index, newQuantity) => {
//     const updatedCart = cartItems.map((item, idx) =>
//       idx === index ? { ...item, quantity: newQuantity } : item
//     );
//     setCartItems(updatedCart);
//     setCart(updatedCart); // Update parent component's cart state if needed
//   };

//   const fetchCartItems = async (userId) => {
//     try {
//       const payload = {
//         eventID: "1001", // Adjust based on your API requirements
//         addInfo: {
//           user_id: userId,
//         },
//       };

//       const response = await axios.post(
//         "http://localhost:5164/fetchcart",
//         payload
//       );
//       // console.log("cartResponse",response)
//       if (response.status === 200) {
//         let responseData = response.data.rData.cards[0];
//         console.log("responseData", responseData);
//         if (responseData) {
//           setCartItems(responseData);
//           console.log("cartitem", cartItems);
//           // console.log("cartItems",cartItems)
//         } else {
//           console.log("No cart items data in response");
//         }
//       } else {
//         console.log("Failed to fetch cart items");
//       }
//     } catch (error) {
//       console.error("Error fetching cart items:", error);
//     }
//   };

//   const calculateTotalAmount = () => {
//     return cartItems.reduce(
//       (total, item) => total + item.price * item.quantity,
//       0
//     );
//   };

//   return (
//     <div className="cartpage-main">
//       <div className="cartpage">
//         <h3>Shopping Cart</h3>
//         {cartItems.map((cartItem, cartIndex) => (
          
//           <div className="page">
//             <div className="page-child">
//               <img src={cartItem.trending_product_details.image} alt={cartItem.trending_product_details.name} />
//               <div className="item-details">
//                 <span className="item-name">
//                   {cartItem.trending_product_details.name}
//                 </span>
//                 <br />
//                 <span className="item-description">{cartItem.trending_product_details.discription}</span>
//                 <span className="item-price">Rs. {cartItem.trending_product_details.price * cartItems.length}</span>
//               </div>
//               <div className="quantity">
//                 <button onClick={() => updateCartItemQuantity(cartIndex, cartItem.quantity - 1)}>-</button>
//                 <span className="item-quantity">{cartItem.quantity}</span>
//                 <button onClick={() => updateCartItemQuantity(cartIndex, cartItem.quantity + 1)}>+</button>
//               </div>
//               <button
//                 className="remove-btn"
//                 onClick={() => removeFromCart(cartIndex)}
//               >
//                 Remove
//               </button>
//             </div>
//           </div>
//         ))}
//         <div className="amount">
//           <h2>Total Amount = Rs. {calculateTotalAmount()}</h2>
//         </div>
//         <div className="cart-payment">
//           <Link to={"/payment"}>
//             <button className="cart-payment-button">Make Payment</button>
//           </Link>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Cart;



import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import "../css/cart.css";

const Cart = ({ cart, setCart }) => {
  const navigate = useNavigate();
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    const userDataString = sessionStorage.getItem("userData");
    if (!userDataString) {
      navigate("/login");
    } else {
      const userData = JSON.parse(userDataString);
      fetchCartItems(userData.id);
    }
  }, []);

  useEffect(() => {
    setCartItems(cart);
  }, [cart]);

  const updateCartItemQuantity = (index, newQuantity) => {
    if (newQuantity <= 0) return; // Prevent quantity from becoming zero or negative
    const updatedCart = cartItems.map((item, idx) =>
      idx === index ? { ...item, quantity: newQuantity } : item
    );
    setCartItems(updatedCart);
    setCart(updatedCart); // Update parent component's cart state if needed
  };

  const fetchCartItems = async (userId) => {
    try {
      const payload = {
        eventID: "1001", // Adjust based on your API requirements
        addInfo: {
          user_id: userId,
        },
      };

      // this api use for fetch cart details
      const response = await axios.post("http://localhost:5164/fetchcart", payload);
      if (response.status === 200) {
        let responseData = response.data.rData.cards[0];
        if (responseData) {
          // Ensure each item has a default quantity of 1 if not already set
          const itemsWithQuantity = responseData.map((item) => ({
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

  //this api use for remove item from cart
  const handleDelete = async (trending_product_id) => {
    try {
      const response = await axios.post("http://localhost:5164/deletecart", {
        eventID: "1001",
        addInfo: {
          trending_product_id: trending_product_id,
        },
      });
      console.log("Delete Response:", response.data); // Log the entire response
      if (response.status === 200) {
        const responseData = response.data;
        if (responseData.rData.rMessage === "DELETE SUCCESSFULLY.") {
          const updatedCart = cartItems.filter(
            (item) => item.trending_product_details.id !== trending_product_id
          );
          setCartItems(updatedCart);
          setCart(updatedCart); // Update parent component's cart state if needed
          console.log(`Item with ID ${trending_product_id} deleted successfully`);
        } else {
          console.log("Failed to delete item");
        }
      }
    } catch (error) {
      console.error("Error deleting item:", error);
    }
  };

  const calculateTotalAmount = () => {
    return cartItems.reduce(
      (total, item) =>
        total +
        (item.trending_product_details.price || 0) * (item.quantity || 0),
      0
    );
  };

  return (
    <div className="cartpage-main">
      <div className="cartpage">
        <h3>Shopping Cart</h3>
        {cartItems.length === 0 ? (
          <p>Your cart is empty.</p>
        ) : (
          <>
            {cartItems.map((cartItem, cartIndex) => (
              <div className="page" key={cartIndex}>
                <div className="page-child">
                  <img
                    src={cartItem.trending_product_details.image}
                    alt={cartItem.trending_product_details.name}
                  />
                  <div className="item-details">
                    <span className="item-name">
                      {cartItem.trending_product_details.name}
                    </span>
                    <br />
                    <span className="item-description">
                      {cartItem.trending_product_details.description}
                    </span>
                    <span className="item-price">
                      Rs. {cartItem.trending_product_details.price}
                    </span>
                  </div>
                  <div className="quantity">
                    <button
                      onClick={() =>
                        updateCartItemQuantity(cartIndex, cartItem.quantity - 1)
                      }
                    >
                      -
                    </button>
                    <span className="item-quantity">{cartItem.quantity}</span>
                    <button
                      onClick={() =>
                        updateCartItemQuantity(cartIndex, cartItem.quantity + 1)
                      }
                    >
                      +
                    </button>
                  </div>
                  <button
                    className="remove-btn"
                    onClick={() =>
                      handleDelete(cartItem.trending_product_details.id)
                    }
                  >
                    Remove
                  </button>
                </div>
              </div>
            ))}
            <div className="amount">
              <h2>Total Amount = Rs. {calculateTotalAmount()}</h2>
            </div>
            <div className="cart-payment">
              <Link to={"/payment"}>
                <button className="cart-payment-button">Make Payment</button>
              </Link>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Cart;





