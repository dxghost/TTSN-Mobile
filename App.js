import React from 'react';
import { AsyncStorage, ActivityIndicator, View } from 'react-native';
import AppDrawer from './navigators/Drawer';
import { createAppContainer } from 'react-navigation';
import Login from './screens/LoginScreen'
import {Provider} from 'react-redux'
import store from './store'

const AppContainer = createAppContainer(AppDrawer);


export default class App extends React.Component {
  state = {
    loggedIn: "false",
    isLoading: true
  }
  componentWillMount = async () => {
    const result = await AsyncStorage.getItem('loggedIn')
    if (result == null || result === "false") this.setState({ loggedIn: "false" })
    else this.setState({ loggedIn: "true" })
    this.setState({ isLoading: false })
  }
  _refresh = async () => {
    const result = await AsyncStorage.getItem('loggedIn')
    if (result == null || result === "false") this.setState({ loggedIn: "false" })
    else this.setState({ loggedIn: "true" })
    this.setState({ isLoading: false })
  }
  render() {
    const { isLoading, loggedIn } = this.state
    return (
      isLoading ?
        <View style={{ justifyContent: 'center', marginTop: "50%" }}>
          <ActivityIndicator size="large" color="#DE94FF" />
        </View>
        :
        loggedIn === "true" ? <Provider store={store}><AppContainer/></Provider> : <Login refreshMain={this._refresh} />


    );
  }
}

