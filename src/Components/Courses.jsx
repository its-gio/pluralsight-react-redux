import React, { Component } from "react";
import { Button, Input } from "@material-ui/core";

export default class Courses extends Component {
  state = {
    course: {
      title: "",
    },
  };

  handleChange = (e) => {
    this.setState({ course: { [e.target.name]: e.target.value } });
  };

  handleSubmit = (e) => {
    e.preventDefault();

    console.log("Testing!");
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <h2>Courses</h2>
        <h4>Add Course</h4>
        <Input
          placeholder="Title"
          inputProps={{ "aria-label": "description" }}
          value={this.state.course.title}
          onChange={this.handleChange}
          name="title"
        />
        <Button type="submit" variant="contained" color="primary">
          Save
        </Button>
      </form>
    );
  }
}
