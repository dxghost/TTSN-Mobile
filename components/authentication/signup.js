import React from 'react'
import { View, Text, Image, StyleSheet } from 'react-native'
import { TextField } from 'react-native-material-textfield'
import { Button } from 'react-native-elements'


export default class SignUp extends React.Component {
    state = {
        username: '',
        password1: '',
        password2: '',
        email: ''
    }
    render() {
        const { username, password1, password2, email } = this.state;
        return (
            <View style={styles.container}>
                <TextField
                    label="Enter your desired username"
                    value={username}
                    onChangeText={(username) => this.setState({ username })}
                    textContentType='username'
                />
                <TextField
                    label="Enter your Email address"
                    value={email}
                    onChangeText={(email) => this.setState({ email })}
                    textContentType='emailAddress'
                />
                <TextField
                    label="Enter your password"
                    value={password1}
                    onChangeText={(password1) => this.setState({ password1 })}
                    secureTextEntry={true}
                />
                <TextField
                    label="Repeat your password"
                    value={password2}
                    onChangeText={(password2) => this.setState({ password2 })}
                    secureTextEntry={true}
                />
                <Button
                    title="SIGN UP" />
            </View>
        );
    }
}

styles = StyleSheet.create({
    container: {
        backgroundColor: "white",
        padding: '5%',
    }
})