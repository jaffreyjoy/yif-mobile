import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';
import { Button } from 'react-native-paper';
import { Actions } from 'react-native-router-flux';

export default class MainHome extends Component {
  constructor(props) {
    super(props);
    console.log(this.props.id);
    this.state = {
      key: "choco"
    };
  };

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>Welcome to organizer portal</Text>
        <Button onPress={() => Actions.login()}>Add Event</Button>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#2E303C',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
    color: '#ffffff',
  },
});