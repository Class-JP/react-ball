import { Button, Container } from "react-bootstrap";
import React from "react";
import { NavLink } from "react-router-dom";

export const ApplicationHome = () => {
  return (
    <Container>
      <div className="container-md">
        <h1>Welcome to ReactBall!</h1>
        <h2>Want to check the games?</h2>
        <NavLink to="/games">
          <Button>Take a look!</Button>
        </NavLink>
      </div>
    </Container>
  );
};
