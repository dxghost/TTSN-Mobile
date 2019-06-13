import React from 'react'
import {View, StyleSheet} from 'react-native'
import {TextField} from 'react-native-material-textfield'
import {Button} from 'react-native-elements'

export default class Login extends React.Component{
    state = {
        username: "",
        password: ""
    }
    render(){
        let {username, password} = this.state
        return(
            <View>
                <TextField 
                label={"Username"}/>
                <TextField
                label={"Password"}/>
                <Button
                title={"log in"}/>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    formContainer: {
        marginHorizontal: '10%',
        padding: "5%",
        borderColor: "black",
    }
})