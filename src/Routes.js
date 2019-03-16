import React, { Component } from 'react';
import {Actions, Router, Stack, Scene} from 'react-native-router-flux';

import Home from './pages/Home';
import Events from './pages/Events';
import Profile from './pages/Profile';

import MainApp from "./components/MainApp";

export default class Routes extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  };

  render() {
    return (
      <Router>
        <Stack key="root">
        {/*  Pages start  */}
          <Scene key="mainApp" component={MainApp} title="MainApp" hideNavBar/>
          {/* <Scene key="login" component={Login} title="Login" hideNavBar/> */}
          {/* <Scene key="register" component={Register} title="Register" hideNavBar/> */}
        {/*  Pages end  */}
        </Stack>
      </Router>
    );
  }
}