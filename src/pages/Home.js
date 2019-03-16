import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      key: "choco"
    };
  };

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
         Hello this this.state.key has value = {this.state.key}
        </Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#bb0000',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
    color: '#ffffff',
  },
});