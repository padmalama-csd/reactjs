import React from 'react';
import { laptops } from '../Data/Laptopslice';
import Header from '../Components/Header'
import Sidenav from '../Components/Sidenav'
import { Row,Col } from 'react-bootstrap'
import { Link } from 'react-router-dom';

function LaptopData() {
  return (
    <div>
      <Header />
      <Row>
        <Col sm={2}>
        <Sidenav />
        </Col>
       
        <Col sm={10}>
        <div>
      <h1>Laptop Device Data</h1>
      <div >
      <div className='slicemobiles'>
        {laptops.map((laptop) => ( 
          <div className='slicedata' key={laptop.id}>
           <Link to= {`/laptops/${laptop.id}`}>
            <img 
              src={laptop.image} 
              alt={laptop.name} 
              style={{ width: '100%', height: '150px', objectFit: 'cover' }}
            />
            </Link>
            <h3>{laptop.name}</h3>
            <p>{laptop.price}</p>
            <button className='btn btn-warning'>ADD TO CART</button>
          </div>
        ))}
        
      </div>
      </div>
    </div>
        </Col>
      </Row>
    </div>
   
  );
}

export default LaptopData;
