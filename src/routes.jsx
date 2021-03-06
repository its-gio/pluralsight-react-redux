import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./Components/Home";
import About from "./Components/About";
import Courses from "./Components/Courses/Courses";
import NotFound from "./Components/common/NotFound";

export default (
  <Switch>
    <Route path="/about" component={About} />
    <Route path="/courses" component={Courses} />
    <Route exact path="/" component={Home} />
    <Route component={NotFound} />
  </Switch>
);
