import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from './Components/Home';
import About from './Components/About';

export default (
  <Switch>
    <Route path='/about' component={About} />
    <Route path='/' component={Home} />
  </Switch>
)