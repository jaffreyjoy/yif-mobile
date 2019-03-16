import React, { Component } from 'react';
import { BottomNavigation, Text } from 'react-native-paper';
import { Actions } from 'react-native-router-flux';

import Home from "../pages/Home";
import Events from "../pages/Events";
import Profile from "../pages/Profile";


export default class MyComponent extends Component {
  state = {
    index: 0,
    routes: [
      { key: 'home', title: 'Home', icon: 'home' },
      { key: 'events', title: 'Events', icon: 'event' },
      { key: 'profile', title: 'Profile', icon: 'person-outline' },
    ],
  };

  _handleIndexChange = index => this.setState({ index });

  _renderScene = BottomNavigation.SceneMap({
    home: Home,
    events: Events,
    profile: Profile,
  });

  render() {
    return (
      <BottomNavigation
        navigationState={this.state}
        onIndexChange={this._handleIndexChange}
        renderScene={this._renderScene}
      />
    );
  }
}