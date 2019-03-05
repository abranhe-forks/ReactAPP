import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import {BrowserRouter, Route, IndexRoute} from "react-router-dom";
import Root from "./components/Root";
import Home from "./components/Home";
import User from "./components/User";



class App extends Component 
{
  render() {
    return (
        <BrowserRouter>
          <Route path={"user"} Component={User}/> 
          <Route path={"home"} Component={Home}/> 
        </BrowserRouter>
    );
}
}

export default App;
