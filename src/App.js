import React, { Component ,Fragment} from 'react';
import logo from './logo.svg';
import './App.css';

import {BrowserRouter, Route, Switch} from "react-router-dom";
import Root from "./components/Root";
import Home from "./components/Home";
import User from "./components/User";



class App extends Component 
{
  render() {
    return (
      <Fragment>
        <BrowserRouter>
          <Switch>
            <Route path={"/"} component={Root}>
              <Route path={"user/:id"} component={User}/>
              <Route exact path={"home"} component={Home}/> 
            </Route> 
            <Route exact path={"home-single"} component={Home}/> 
          </Switch>
        </BrowserRouter>
      </Fragment>

    );
}
}

export default App;
