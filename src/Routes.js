import React, { Component } from 'react';
import {Actions, Router, Stack, Scene} from 'react-native-router-flux';

import Home from './pages/Home';
import Events from './pages/Events';
import Profile from './pages/Profile';
import Login from './pages/Login';
import Register from './pages/Register';

export default class Routes extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  };

  render() {
    return(
      <Router>
        <Stack key="root" >

        {/*  Pages start  */}
          <Scene key="home"
              component={Home}
              title="Home"
          />
          <Scene key="events"
              component={Events}
              title="Events"
          />
          <Scene key="profile"
              component={Profile}
              title="Profile"
          />
          <Scene key="login"
              component={Login}
              title="Login"
          />
          <Scene key="register"
              component={Register}
              title="Register"
          />
        {/*  Pages end  */}

        </Stack>
      </Router>
    )
  }
}