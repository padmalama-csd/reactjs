import React from 'react'
import { Row,Col } from 'react-bootstrap'
import Sidenav from '../Components/Sidenav'
import Header from '../Components/Header'

function Mobiles() {
  return (
    <div>
    <Header />
    <Row>
      <Col sm={2}>
      <Sidenav />
      </Col>
     
      <Col sm={10}>
    
        <h2>Contact Us</h2>
     
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            name="name"
           
          />
      </div>

      </Col>
    </Row>
  </div>
  )
}

export default Mobiles
