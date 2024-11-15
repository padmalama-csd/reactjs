import React from 'react';
import { mobiles } from '../Data/Mobileslice';
import Header from '../Components/Header'
import Sidenav from '../Components/Sidenav'
import { Row,Col } from 'react-bootstrap'
import { Link } from 'react-router-dom';
function Mobiledata() {
  return (
    <div>
    <Header />
    <Row>
      <Col sm={2}>
      <Sidenav />
      </Col>
     
      <Col sm={10}>
          
      <div>
      <h1>Mobile Devices</h1>
      
      <div className='slicemobiles'>
        {mobiles.map((mobile) => ( 
          
          <div   className='slicedata' key={mobile.id}>
            <Link to= {`/mobiles/${mobile.id}`}>
            <img 
              src={mobile.image} 
              alt={mobile.name} 
            />
           
           </Link>
            <h3>{mobile.name}</h3>
            <p>{mobile.price}</p>
            <button className='btn btn-warning'>ADD TO CART</button>
          </div>
        
        
        ))}
         
      </div>
     
    </div>
      </Col>
    </Row>
  </div>
    
  );
}

export default Mobiledata;
