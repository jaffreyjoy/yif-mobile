import React, { Component } from 'react';
// import {Actions, Router, Stack, Scene} from 'react-native-router-flux';

import Home from './pages/Home';
import Events from './pages/Events';
import Profile from './pages/Profile';

import BottomNavigator from "./components/BottomNavigator";

export default class Routes extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  };

  render() {
    return (
      <BottomNavigator />
      // <Router>
      //   <Stack key="root">
      //     {/*  Pages start  */}
      //     <Scene key="home" component={Home} title="Home" />
      //     <Scene key="events" component={Events} title="Events" />
      //     <Scene key="profile" component={Profile} title="Profile" />
      //     {/*  Pages end  */}
      //   </Stack>
      // </Router>
    );
  }
}