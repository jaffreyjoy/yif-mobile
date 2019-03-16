import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';
import { Button } from 'react-native-paper';
import { Actions } from 'react-native-router-flux';

export default class Organizer extends Component {
  constructor(props) {
    super(props);
    this.info = JSON.parse(props.info)
  };

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>Welcome to organizer portal</Text>
        <Button onPress={() => Actions.addevent({ id: this.info.id })}>Add Event</Button>
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