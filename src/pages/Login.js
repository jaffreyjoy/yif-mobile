import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';
import { TextInput, Button } from 'react-native-paper';
import ExecLogin from '../utils/request';
import { Actions } from 'react-native-router-flux';

export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: null,
      password: null
    };
  };

  handleLoginClick = () => {
    ExecLogin('login.php', this.state)
      .then((res) => {
        console.log(res);
        if (res.data.user_type === 0) {
          Actions.organizer({ info: res.data.res });
        } else if (res.data.user_type === 1) {
          Actions.participant({ info: res.data.res });
        } else if (res.data.user_type === 2) {
          Actions.admin({ info: res.data.res });
        }
      })
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