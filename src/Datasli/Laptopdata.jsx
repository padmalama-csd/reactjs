import React from 'react';
import { laptops } from '../Data/Laptopslice';
import { Link } from 'react-router-dom';

function LaptopData() {
  return (
    <div>
      <h1>Laptop Devices Data</h1>
      <div style={{display:'flex' , gap:'5%'}}>
        {laptops.slice(0, 4).map((laptop) => ( 
          <div key={laptop.id} style={{ border: '1px solid #ddd', padding: '15px', width: '200px', textAlign: 'center'}}>
            <img 
              src={laptop.image} 
              alt={laptop.name} 
              style={{ width: '100%', height: '150px', objectFit: 'cover' }}
            />
            <h3>{laptop.name}</h3>
            <p>{laptop.price}</p>
          </div>
        ))}
        
      </div>
      <Link to='/laptops'><button>VIEW ALL</button></Link>
    </div>
  );
}

export default LaptopData;
