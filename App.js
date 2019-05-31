import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import AppDrawer from './navigators/Drawer';
import { createAppContainer } from 'react-navigation';
import Task from './screens/Task'

const AppContainer = createAppContainer(AppDrawer);


export default class App extends React.Component {
  render() {
    return (
      <AppContainer />
    );
  }
}

