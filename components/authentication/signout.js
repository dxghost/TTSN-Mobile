import React from 'react'
import { View,ActivityIndicator, AsyncStorage } from 'react-native'


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
    // drawerIcon: () => (
    //     <Image source={PeopleIcon} style={{width:30,height:30}} />
    // ),
};