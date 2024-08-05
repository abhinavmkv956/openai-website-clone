import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import React, { FC } from 'react';
import './Header.css'
import { Nav } from 'react-bootstrap';



interface HeaderProps {
}

const Header: FC<HeaderProps> = ({ }) => {
  return (
    <>
   
      <Navbar className="bg-body-dark">
        <Container >
          <Navbar.Brand style={{ marginRight: '350px' }} href="#home">
            <img 
              src="https://i.pngimg.me/thumb/f/720/68fadfca37.jpg"
              width="30"
              height="30"
              className="d-inline-block align-top"
            />
          </Navbar.Brand>
          <div className='NavLink'>
            <Nav.Link style={{ textDecoration: 'none', color: 'white', marginRight: '20px' }} href="#home">Research</Nav.Link>
            <Nav.Link style={{ textDecoration: 'none', color: 'white', marginRight: '20px' }} href="#features">Product</Nav.Link>
            <Nav.Link style={{ textDecoration: 'none', color: 'white', marginRight: '20px' }} href="#pricing">Safety</Nav.Link>
            <Nav.Link style={{ textDecoration: 'none', color: 'white', marginRight: '20px' }} href="#pricing">Company</Nav.Link>
            <i style={{ marginLeft: '350px',color:'white' }} className="fa-solid fa-magnifying-glass"></i>
          </div>
        </Container>
      </Navbar>
      
    </>
  );
};

export default Header;

