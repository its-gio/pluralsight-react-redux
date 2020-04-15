import React, { Component } from "react";
import { Button, Input } from "@material-ui/core";
import { connect } from "react-redux";
import { createCourse } from "../../redux/reducers/courses";

class Form extends Component {
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
    this.props.createCourse(this.state.course);
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

export default connect(null, { createCourse })(Form);
