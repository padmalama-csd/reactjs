import React from 'react';
import { FaShoppingCart } from 'react-icons/fa'; 
import { Link } from 'react-router-dom'; 
import { useCart } from '../Context/Cartcontext'; 
function Header() {

  const { cartItems } = useCart();

  return (
    <header className="header">
      <div className="header-title">
        <h1>Shop</h1>
      </div>
      <nav className="navigation">
        <Link to="/dashboard" className="nav-link">Home</Link>
        <Link to="/products" className="nav-link">Products</Link>
        <Link to="/about" className="nav-link">About</Link>
        <Link to="/contact" className="nav-link">Contact</Link>
      </nav>
      <Link to='/cart' style={{ textDecoration: 'none' }}>
        <div className="cart">
          <FaShoppingCart className="cart-icon" />
          <p>Cart</p>
       
          {cartItems.length > 0 && <span className="cart-count">{cartItems.length}</span>}
        </div>
      </Link>
    </header>
  );
}

export default Header;
