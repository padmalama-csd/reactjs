import React from 'react'
import Header from '../Components/Header'
import Sidenav from '../Components/Sidenav'
import { Row,Col } from 'react-bootstrap'
import Mobiledata from '../Datasli/Mobiledata'
import Laptopdata from '../Datasli/Laptopdata'

import TvData from '../Datasli/TVdata'



function Dashboard() {
  return (
    <div>
      <Header />
      <Row>
        <Col sm={2}>
        <Sidenav />
        </Col>
       
        <Col sm={10}>
            <div>
              <Mobiledata />
            <div>
              <Laptopdata />
              </div>
              <div>
               <TvData/>
              </div>
            </div>

        </Col>
      </Row>
    </div>
  )
}

export default Dashboard