import React, { Component } from 'react';
import {Actions, Router, Stack, Scene} from 'react-native-router-flux';

import Home from './pages/Home';

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
        {/*  Pages end  */}

        </Stack>
      </Router>
    )
  }
}