import React, { Component } from 'react'
import { Container } from '@material-ui/core'

export default class About extends Component {
  render() {
    return (
      <Container className="landing">
        <h2>Technologies Used</h2>
        <p>react, redux, react-router, and material-ui</p>
      </Container>
    )
  }
}
