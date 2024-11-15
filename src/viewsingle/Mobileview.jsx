import React from 'react';
import { useParams } from 'react-router-dom';
import { mobiles } from '../Data/Mobileslice';
import { useCart } from '../Context/Cartcontext';
import Header from '../Components/Header';

const MobileView = () => {
  const { id } = useParams();


  const mobile = mobiles.find((mob) => mob.id === Number(id));


  const { addToCart } = useCart();


  const handleAddToCart = () => {
    addToCart(mobile); 
  };

  if (!mobile) {
    return <div>Mobile not found</div>;
  }

  return (
    <>
      <Header />
      <div className="view-page">
        <div className="view-img">
          <img src={mobile.image} alt={mobile.name} height="300px" />
        </div>
        <h1>{mobile.name}</h1>
        <p>Price: {mobile.price}</p>
        <button className="btn btn-warning" onClick={handleAddToCart}>
          ADD TO CART
        </button>
      </div>
    </>
  );
};

export default MobileView;
