import React from 'react'
import {View, Text, StyleSheet, StatusBar} from 'react-native'

export default class LoginScreen extends React.Component{
    render() {
        return (
            <View style={styles.container}>

            </View>
        );
    }
}

const styles = StyleSheet.create({
    container:{
    marginTop: StatusBar.currentHeight,
    backgroundColor: 'grey',
    flex:1}
})

LoginScreen.navigationOptions = {
    drawerLabel: 'LoginScreen',
}

