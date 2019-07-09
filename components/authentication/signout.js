import React from 'react'
import { View,ActivityIndicator, AsyncStorage } from 'react-native'
import {Icon} from 'react-native-elements'

export default class SignOut extends React.Component {
    state = {
        isLoading: true
    }
    componentWillMount = async () => {
        console.log('called')
        await AsyncStorage.setItem("loggedIn", "false")
        this.props.navigation.navigate('LoginScreen')
    }
    render() {
        return (
            <View style={{ justifyContent: 'center', marginTop: "50%" }}>
                <ActivityIndicator size="large" color="#DE94FF" />
            </View>
        )
    }
}
SignOut.navigationOptions = {
    drawerLabel: "Sign Out",
    drawerIcon: () => (
        <Icon 
        name='exit-to-app'
        type='material-community'
        color='rgb(150, 13, 255)'
        />
    ),
};