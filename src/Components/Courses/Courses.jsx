import React from "react";
import { connect } from "react-redux";
import Form from "./Form";
import CoursesMap from "./CoursesMap";

function Courses(props) {
  const coursesMap = props.courses.map((course, i) => (
    <CoursesMap key={i} course={course} />
  ));
  return (
    <>
      <Form />
      <h4>Video Name</h4>
      {coursesMap}
    </>
  );
}

const MapStateToProps = (reduxState) => ({
  courses: reduxState.courses.courses,
});

export default connect(MapStateToProps, {})(Courses);
