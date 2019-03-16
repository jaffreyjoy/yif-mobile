import React, { Component } from 'react';
import {Actions, Router, Stack, Scene} from 'react-native-router-flux';
import { View } from 'react-native';

import BottomNavigator from "./components/BottomNavigator";

import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import MainHome from "./pages/MainHome";
import Events from "./pages/Events";
import Profile from "./pages/Profile";
import Organizer from "./pages/Organizer";
import Participant from "./pages/Participant";
import Admin from "./pages/Admin";
import AddEvent from "./pages/AddEvent";
import UpcomingEvents from "./pages/UpcomingEvents";

export default class Routes extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  };

  render() {
    return (
      <View style={{flex: 1}}>
        <Router style={{flex: 1}}>
          <Stack key="root">
            <Scene key="home" component={Home} title="Home" hideNavBar/>
            <Scene key="login" component={Login} title="Login"/>
            <Scene key="register" component={Register} title="Register"/>
            <Scene key="mainHome" component={MainHome} title="MainHome" hideNavBar/>
            <Scene key="events" component={Events} title="Events" hideNavBar/>
            <Scene key="profile" component={Profile} title="Profile" hideNavBar/>
            <Scene key="organizer" component={Organizer} title="Organizer" hideNavBar/>
            <Scene key="participant" component={Participant} title="Participant" hideNavBar/>
            <Scene key="admin" component={Admin} title="Admin" hideNavBar/>
            <Scene key="addevent" component={AddEvent} title="AddEvent" hideNavBar/>
            <Scene key="upcomingevents" component={UpcomingEvents} title="UpcomingEvents" hideNavBar/>
          </Stack>
        </Router>
        <BottomNavigator />
      </View>
    );
  }
}