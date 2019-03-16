import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';
import { TextInput, Button, RadioButton } from 'react-native-paper';
import Register from '../utils/request';

export default class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user_type: 'Participant',
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
    Register('register.php', this.state)
    .then((res) => console.log(res))
    .catch((err) => console.log(err));
  }

  render() {
    const { user_type } = this.state;
    return (
      <View>
        <RadioButton
          value="Participant"
          status={user_type === 'Participant' ? 'checked' : 'unchecked'}
          onPress={() => { this.setState({ user_type: 'Participant' }); }}
        />
        <RadioButton
          value="Organizer"
          status={user_type === 'Organizer' ? 'checked' : 'unchecked'}
          onPress={() => { this.setState({ user_type: 'Organizer' }); }}
        />
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
        <Button mode="contained" onPress={this.handleRegisterClick}>
            Login
        </Button>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  
});