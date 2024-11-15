import React from 'react';
import { useCart } from '../Context/Cartcontext'; 
import Header from '../Components/Header';

function Cart() {
  const { cartItems, removeFromCart } = useCart(); 

  if (cartItems.length === 0) {
    return <div>Your cart is empty</div>;
  }

  return (
    <>
    <Header />
    <div className="cart-page">
      <h1>Shopping Cart</h1>
      <ul>
        {cartItems.map((item) => (
          <li key={item.id}>
            <div className="cart-item">
              <img src={item.image} alt={item.name} height="100px" />
              <div className="cart-item-details">
                <p>{item.name}</p>
                <p>{item.price}</p>
                <button
                  className="btn btn-danger"
                  onClick={() => removeFromCart(item.id)} 
                >
                  Remove
                </button>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
    </>
  );
}

export default Cart;
