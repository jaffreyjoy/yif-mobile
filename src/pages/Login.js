import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';
import { TextInput, Button } from 'react-native-paper';
import Login from '../utils/request';
import { Actions } from 'react-native-router-flux';

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
      .then((res) => {
        console.log(res);
        if (res.data.user_type === 0) {
          Actions.organizer({ id: res.data.res.id });
        } else if (res.data.user_type === 1) {
          Actions.participant({ id: res.data.res.id });
        } else if (res.data.user_type === 2) {
          Actions.admin({ id: res.data.res.id });
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