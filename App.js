import React, { Component } from 'react';
import { StatusBar } from 'react-native';

import Navigation from "./src/App/DrawerNavigator";

export default class App extends Component {
  render() {
    return (
      <>
        <StatusBar backgroundColor="#3d6f99" barStyle="light-content" />
        <Navigation />
      </>
    );
  }
}
