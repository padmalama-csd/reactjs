import React from 'react';
import { useParams } from 'react-router-dom';
import { tvs } from '../Data/TVslice';
import { useCart } from '../Context/Cartcontext';
import Header from '../Components/Header';

const TVView = () => {
  const { id } = useParams();
  const tv = tvs.find((t) => t.id === Number(id)); 
  const { addToCart } = useCart();
  
  if (!tv) {
    return <p>TV not found</p>;
  }

  const handleAddToCart = () => {
    addToCart(tv); 
  };

  return (
    <>
      <Header />
      <div className="view-page">
        <div className="view-img">
          <img src={tv.image} alt={tv.name} height="300px" />
        </div>
        <h1>{tv.name}</h1>
        <p>Price: {tv.price}</p>
        <button className="btn btn-warning" onClick={handleAddToCart}>
          ADD TO CART
        </button>
      </div>
    </>
  );
};

export default TVView;
