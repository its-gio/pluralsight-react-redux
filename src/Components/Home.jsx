import React from "react";
import { Link } from "react-router-dom";
import { Button, Container } from "@material-ui/core";

function Home() {
  return (
    <Container className="landing">
      <h1>Lorem ipsum</h1>
      <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
      <Link to="/about">
        <Button variant="contained" color="primary">
          See About
        </Button>
      </Link>
    </Container>
  );
}

export default Home;
