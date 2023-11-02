import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { NavLink } from "react-router-dom";

// Check the bootstrap components here! https://react-bootstrap.netlify.app/docs/components/modal
export const ApplicationNavBar = () => {

  return (
    <header>
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <NavLink className='navbar-brand' to='/'>ReactBall</NavLink>
          <Nav className="me-auto">
            <NavLink to='/games' className='nav-link'>Current Games</NavLink>
          </Nav>
        </Container>
      </Navbar>      
    </header>
  );
};
