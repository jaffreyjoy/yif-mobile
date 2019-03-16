import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';
import { TextInput, Button, RadioButton } from 'react-native-paper';
import { Icon, Picker, Form } from "native-base";
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import Register from '../utils/request';

export default class Profile extends Component {
  constructor(props) {
    super(props);
    this.validPhone = true;
    this.validEmail = true;
    this.state = {
      user_type: 1,
      username: null,
      password: null,
      email_id: null,
      first_name: null,
      last_name: null,
      address: null,
      phone_no: null
    };
  };

  validatePhone = phone_no => {
    this.setState({ phone_no })
    if (phone_no.length == 10) {
        this.validPhone = false;
    } else {
        this.validPhone = true;
    }
  }

  validateEmail = email_id => {
    this.setState({ email_id });
    const re = /\S+@\S+\.\S+/;
    if (re.test(email_id)) {
        this.validEmail = false;
    } else {
        this.validEmail = true;
    }
  }
  
  onValueChange = value => {
    this.setState({
      user_type: value
    });
  }

  handleRegisterClick = () => {
    
    Register('register.php', this.state)
    .then((res) => console.log(res))
    .catch((err) => console.log(err));
  }

  render() {
    return (
      <KeyboardAwareScrollView>
          <View>
          <TextInput
            mode='outlined'
            label='First Name'
            value={this.state.first_name}
            onChangeText={first_name => this.setState({ first_name })}
            />
            <TextInput
                mode='outlined'
                label='Last Name'
                value={this.state.last_name}
                onChangeText={last_name => this.setState({ last_name })}
            />
            <TextInput
                mode='outlined'
                label='Phone Number'
                keyboardType='numeric'
                error={this.validPhone}
                value={this.state.phone_no}
                onChangeText={phone_no => this.validatePhone(phone_no)}
            />
            <TextInput
                mode='outlined'
                label='Email'
                error={this.validEmail}
                value={this.state.email_id}
                onChangeText={email_id => this.validateEmail(email_id)}
            />
            <TextInput
                mode='outlined'
                label='Address'
                multiline={true}
                numberOfLines={3}
                value={this.state.address}
                onChangeText={address => this.setState({ address })}
            />
            <Picker
                mode="dropdown"
                iosIcon={<Icon name="arrow-down" />}
                placeholder="Select your SIM"
                placeholderStyle={{ color: "#bfc6ea" }}
                placeholderIconColor="#007aff"
                style={{ width: undefined }}
                selectedValue={this.state.user_type}
                onValueChange={ (value) => this.onValueChange(value)}
            >
                <Picker.Item label="Participant" value={1} />
                <Picker.Item label="Organizer" value={0} />
            </Picker>
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
                Register
            </Button>
        </View>
      </KeyboardAwareScrollView>
    )
  }
}

const styles = StyleSheet.create({
  
});