import React, { useEffect } from 'react'
import '../css/wishlist.css'
import { useNavigate } from 'react-router-dom';

const Wishlist = ({wishlist,addToCart, setWishlist}) => {

   const usenavigate = useNavigate();
   useEffect(()=>{
       let userData = sessionStorage.getItem('userData')
       if(userData==='' || userData===null){
           usenavigate("/login");
       }
   },[]);
 
    
   let removeFromwishlist = (index)=>{
    const updateWishlist = [...wishlist];
    updateWishlist.splice(index, 1); // Remove the item at the specified index
    setWishlist(updateWishlist);

   }
  return (
    <>
    <div className='Wishlist-page'><h1>Your Wishlist</h1></div>
    <div className='wishlist-container'>
        
     {
        wishlist.map((wishlistItem)=>{
             return(

                <>
                
                    <div className='wishlist-item' key={wishlist.id}>
                        
                        <div className="wishlist-details">
                        <img src={wishlistItem.image} alt={wishlistItem.name}   className="wishlist-img"/> </div>
                    <div className='wishlist-name'>{wishlistItem.name}</div>
                    <div className='wishlist-description'>{wishlistItem.discription}</div>
                    <div className='wishlist-price'>{wishlistItem.price}</div>
                    <div className='wishlist-button-parent'>
                    <div className="wishlist-buttons">
                      <button 
                       className="add-to-cart-btn"
                    onClick={(e) => {
                       e.stopPropagation();
                        addToCart(wishlistItem); 
                        }}>Add to Cart</button></div>

                        <div><button className="wish-remove-btn" onClick={() => removeFromwishlist(wishlist.id)}>Remove</button></div>
                        </div>
                        </div>
                </>
             ) 
                
        })

     }
    </div>
    </>
  )
}

export default Wishlist
