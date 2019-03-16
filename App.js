import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import Test from './components/test';

import Routes from './src/Routes';

type Props = {};
export default class App extends Component<Props> {

  constructor(props){
    super(props)
    Test().then((res)=>console.log(res))
          .catch((err)=>console.log(err))
  }

  render() {
    return (
      <Routes />
    );
  }
}

