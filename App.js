import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';

import Routes from './src/Routes';

type Props = {};
export default class App extends Component<Props> {
  render() {
    return (
      <Routes />
    );
  }
}

