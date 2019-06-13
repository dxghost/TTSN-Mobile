import React from 'react'
import {View, Text, StyleSheet, StatusBar} from 'react-native'
import Login from '../components/authentication/Login';

export default class LoginScreen extends React.Component{
    render() {
        return (
            <View style={styles.screen}>

                <View style={styles.container}>
                    <Login/>
                </View>


            </View>
        );
    }
}

const styles = StyleSheet.create({
    screen:{
    width: "100%",
    height: "100%",
    backgroundColor: 'grey',
    flex:1,
    marginTop: StatusBar.currentHeight,
    },
    container:{
        marginVertical: '15%',
        marginHorizontal: '10%',
        padding: 30,
        backgroundColor: 'white',

    },
})

LoginScreen.navigationOptions = {
    drawerLabel: 'LoginScreen',
}

