import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Nav, Button } from 'react-bootstrap';

function Sidenav() {
  const location = useLocation();

  const handleLogout = () => {
 
    console.log("User logged out");
  };

  return (
    <div className="sidenav">
      <Nav className="flex-column" style={{ height: '100%', padding: '20px', backgroundColor: '#f8f9fa' }}>
        <Nav.Link as={Link} to="/dashboard" active={location.pathname === '/dashboard'} style={{ marginBottom: '10px' }}>
          Dashboard
        </Nav.Link>
        <Nav.Link as={Link} to="/mobiles" active={location.pathname === '/mobiles'} style={{ marginBottom: '10px' }}>
          Mobiles
        </Nav.Link>
        <Nav.Link as={Link} to="/laptops" active={location.pathname === '/laptops'} style={{ marginBottom: '10px' }}>
          Laptops
        </Nav.Link>
        <Nav.Link as={Link} to="/tv" active={location.pathname === '/tv'} style={{ marginBottom: '10px' }}>
          TV
        </Nav.Link>
        <Nav.Link as={Link} to="/contact" active={location.pathname === '/contact'} style={{ marginBottom: '10px' }}>
          Contact
        </Nav.Link>
     
      <div style={{ marginTop: '300px', padding: '20px' }}>
        <Link to="/react9306">
        <Button variant="danger" onClick={handleLogout} style={{ width: '100%' }}>
          Logout
        </Button>
        </Link>
      </div>
      </Nav>
    </div>
  );
}

export default Sidenav;
