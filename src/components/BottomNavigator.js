import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import { Footer, FooterTab, Button, Icon, Text } from 'native-base';
import { Actions } from 'react-native-router-flux';

import Home from "../pages/MainHome";
import Events from "../pages/Events";
import Profile from "../pages/Profile";


export default class BottomNavigator extends Component {

  constructor(props) {
    super(props);
    this.state = {
      routes: [
        { key: 'mainHome', title: 'Home', icon: 'home', selected: true },
        { key: 'events', title: 'Events', icon: 'calendar', selected: false },
        { key: 'profile', title: 'Profile', icon: 'person', selected: false },
      ],
    };
  }

  changeRoute(routeKey) {
    Actions[routeKey]()
    newRoutes = this.state.routes.map((el) => {
                  if(el.key == routeKey) { el.selected=true; return el; }
                  else { el.selected = false; return el; }
                });
    this.setState({routes: newRoutes});
  }

  generateFooterChildern() {
    return(
      this.state.routes.map((el,ind) => {
        return(
          <Button
            key={ind}
            vertical
            active={this.state.routes[ind].selected}
            onPress={() => this.changeRoute(this.state.routes[ind].key)}
          >
            <Icon name={this.state.routes[ind].icon} />
            <Text>{this.state.routes[ind].title}</Text>
          </Button>
        );
      })
    );
  }

  render() {
    return (
      <Footer style={{ flex: 0.1 }}>
        <FooterTab>
          { this.generateFooterChildern() }
        </FooterTab>
      </Footer>
    );
  }

}

const styles = StyleSheet.create({
  footerBackColor: {
    backgroundColor: '#22C3F3'
  }
})