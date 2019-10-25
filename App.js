import React, { Component } from 'react';
import { StatusBar } from 'react-native';

import Navigation from "./src/RootNavigator";

export default class App extends Component {
  render() {
    // StatusBar.setBarStyle('steelblue', true);
    return (
      <>
        <StatusBar backgroundColor="#3d6f99" barStyle="light-content" />
        <Navigation />
      </>
    );
  }
}
