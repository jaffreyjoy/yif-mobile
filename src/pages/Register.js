import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';
import { TextInput, Button } from 'react-native-paper';
import Register from '../utils/request';

export default class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user_type: null,
      username: null,
      password: null,
      email_id: null,
      first_name: null,
      last_name: null,
      address: null,
      phone_no: null
    };
  };

  handleRegisterClick = () => {
    const registerDetails = {
        username: this.state.username,
        password: this.state.password
    };
    Login('login.php', loginDetails)
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