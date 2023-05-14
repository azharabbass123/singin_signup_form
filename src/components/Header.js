import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {Link, Outlet} from 'react-router-dom'

const Header = () => {
  return (
    <div>
        <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="/">User Registration</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/signin">SignIn</Nav.Link>
            <Nav.Link href="/features">Features</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      <Outlet />
    </div>
  )
}

export default Header