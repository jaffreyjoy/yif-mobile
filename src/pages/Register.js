import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';
import { TextInput, Button, Snackbar } from 'react-native-paper';
import { Icon, Picker } from "native-base";
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import ExecRegister from '../utils/request';

export default class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user_type: 1,
      username: null,
      password: null,
      email_id: null,
      first_name: null,
      last_name: null,
      address: null,
      phone_no: null,
      validEmail: true,
      validPhone: true,
      snackVisible: false,
      snackText: null
    };
  };

  hasEmptyValue = object => {
    for (let property in object) {
      if (!object[property])
        return true;
    }
    return false;
  }

  validatePhone = phone_no => {
    this.setState({ phone_no })
    if (phone_no.length == 10) {
      this.setState({ validPhone: false })
    } else {
      this.setState({ validPhone: true });
    }
  }

  validateEmail = email_id => {
    this.setState({ email_id });
    const re = /\S+@\S+\.\S+/;
    if (re.test(email_id)) {
      this.setState({ validEmail: false });
    } else {
      this.setState({ validEmail: true });
    }
  }

  onValueChange = value => {
    this.setState({
      user_type: value
    });
  }

  hideModal = () => this.setState({ snackVisible: false });

  handleRegisterClick = () => {
    const registerDetails = {
      user_type: this.state.user_type,
      username: this.state.username,
      password: this.state.password,
      email_id: this.state.email_id,
      first_name: this.state.first_name,
      last_name: this.state.last_name,
      address: this.state.address,
      phone_no: this.state.phone_no
    };
    if (this.state.validPhone) {
      this.setState({
        snackText: 'Please enter a valid phone number !',
        snackVisible: true
      })
    }
    else if (this.state.validEmail) {
      this.setState({
        snackText: 'Please enter a valid Email ID !',
        snackVisible: true
      })
    }
    else if (this.hasEmptyValue(registerDetails)) {
      this.setState({
        snackText: 'Please fill all the fields',
        snackVisible: true
      })
    } else {
      ExecRegister('register.php', registerDetails)
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
    }
  }

  render() {
    return (
      <KeyboardAwareScrollView>
        <View>
          <Snackbar
            visible={this.state.snackVisible}
            onDismiss={() => this.setState({ snackVisible: false })}
            duration={1000}
          >
            {this.state.snackText}
          </Snackbar>
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
            error={this.state.validPhone}
            value={this.state.phone_no}
            onChangeText={phone_no => this.validatePhone(phone_no)}
          />
          <TextInput
            mode='outlined'
            label='Email'
            error={this.state.validEmail}
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
            onValueChange={(value) => this.onValueChange(value)}
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