import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';
import { Button } from 'react-native-paper';

export default class MainHome extends Component {
  constructor(props) {
    super(props);
    this.state = {
      key: "choco"
    };
  };

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>Hello this is the Home page.</Text>
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