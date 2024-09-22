import { NavigationContainer } from '@react-navigation/native';
import React, { Component } from 'react';
import TabNavigator from './TabNavigator'; 

export default class App extends Component {
  render() {
    return (
      <NavigationContainer>
        <TabNavigator />
      </NavigationContainer>
    );
  }
}
