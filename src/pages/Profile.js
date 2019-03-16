import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Image
} from 'react-native';

import { Divider } from 'react-native-paper';
import {
  Thumbnail,
  Text,
  List,
  ListItem,
  Form,
  Item,
  Label,
  Input,
  Button,
} from 'native-base';

import Icon from "react-native-vector-icons/FontAwesome";

export default class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      key: "choco",
      details:{
        profilePic: {
          label: "Profile Picture",
          value: require("../../assets/images/user-avatar.jpg")
        },
        name:{
          label: "Name",
          value: "Choco Man"
        },
        username: {
          label: "Username",
          value: "chocoz"},
        email: {
          label: "Email address",
          value: "choco@chocomail.choco"
        },
        contactNo: {
          label: "Contact No.",
          value: "9845687456"
        },
      }
    };
  };

  generateProfileItems() {
    return Object.values(this.state.details).splice(1).map((el,ind) => {
      return(
        <Item key={ind} stackedLabel>
          <Label>{el.label}</Label>
          <Input disabled value={el.value}/>
        </Item>
      )
    })
  }

  render() {
    return (
      <View style={styles.container}>
        {/* <Image source={require("../../assets/images/user-avatar.jpg")} /> */}
        <Thumbnail
          style={{ width: 200, height: 200, margin: 20 }}
          large
          source={this.state.details.profilePic.value}
        />
        <Form style={styles.form}>
          {this.generateProfileItems()}
          {/* <Divider /> */}
          <Button iconLeft full bordered style={styles.saveButton}>
            <Icon name='save' size={20} color='#2E303C' />
            <Text>Save Details</Text>
          </Button>
        </Form>
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
  form:{
    backgroundColor: '#FFFFFF'
  },
  saveButton:{
    margin: 7,
    marginTop: 15
  }
});