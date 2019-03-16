import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image
} from 'react-native';
import { Button } from 'react-native-paper';
import { Actions } from 'react-native-router-flux';

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
        <View style={styles.topSec}>
          <Image style={ styles.logo } source={require("../../assets/images/yif-logo.png")} />
          <Text style={styles.welcome}>Welcome to yif mobile portal</Text>
        </View>
        <View style={styles.bottomSec}>
          <Button color='#2E303C' style={ styles.login } onPress={() => Actions.login()}>Login</Button>
          <Button color='#2E303C' style={ styles.signup } onPress={() => Actions.register()}>Register</Button>
        </View>
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
  topSec:{
    flex: 3,
    justifyContent: 'center',
    alignItems: 'center',
    // borderWidth: 2,
  },
  logo:{
    marginBottom: 20,
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    // padding: 10,
    color: '#ffffff',
  },
  bottomSec:{
    flex: 2.5,
    justifyContent: 'flex-start',
    alignItems: 'center',
    // borderWidth: 2,
  },
  login:{
    backgroundColor: '#A7D24A',
    margin: 10,
    width: 150
  },
  signup:{
    backgroundColor: '#A7D24A',
    margin: 10,
    width: 150
  }
});