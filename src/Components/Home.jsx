import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Button, Container } from "@material-ui/core";

export default class Home extends Component {
  render() {
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
}
