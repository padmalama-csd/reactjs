import React from 'react';
import { mobiles } from '../Data/Mobileslice';
import { Link } from 'react-router-dom';

function Mobiledata() {
  return (
    <div>
      <h1>Mobiles section</h1>
      <div className='slicemobiles'>
        {mobiles.slice(0, 4).map((mobile) => ( 
          <div   className='slicedata' key={mobile.id}>
            <img 
              src={mobile.image} 
              alt={mobile.name} 
            />
            <h3>{mobile.name}</h3>
            <p>{mobile.price}</p>
           
            

          </div>
        ))}
     
      </div>
     <Link to='/mobiles'> <button>VIEW ALL</button></Link>
    </div>
  );
}

export default Mobiledata;
