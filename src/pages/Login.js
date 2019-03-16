import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';
import { TextInput, Button } from 'react-native-paper';
import Login from '../utils/request';

export default class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: null,
      password: null
    };
  };

  handleLoginClick = () => {
    Login('login.php', this.state)
    .then((res) => console.log(res))
    .catch((err) => console.log(err));
  }

  render() {
    return (
      <View>
        <TextInput
            mode='outlined'
            label='Username'
            value={this.state.username}
            onChangeText={username => this.setState({ username })}
        />
        <TextInput
            secureTextEntry={true}
            mode='outlined'
            label='Password'
            value={this.state.password}
            onChangeText={password => this.setState({ password })}
        />
        <Button mode="contained" onPress={this.handleLoginClick}>
            Login
        </Button>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  
});