import React from 'react'
import {ScrollView,View, Text, StyleSheet, StatusBar} from 'react-native'
import Login from '../components/authentication/login';
import SignUp from '../components/authentication/signup'

export default class LoginScreen extends React.Component{
    render() {
        return (
            <View style={styles.screen}>

                <ScrollView style={styles.container}>
                    <Login/>
                    <SignUp/>
                </ScrollView>

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

