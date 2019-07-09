import React from 'react'
import { View, Text, Image, StyleSheet, AsyncStorage } from 'react-native'
import { TextField } from 'react-native-material-textfield'
import { Button } from 'react-native-elements'


export default class SignUp extends React.Component {
    constructor(props) {
        super(props);
    }
    state = {
        username: '',
        password1: '',
        password2: '',
        email: '',
        log: ""
    }
    _requestHandler = async () => {
        let apiUrl = 'http://mamaly100.pythonanywhere.com/accounts/registration/';
        let formData = new FormData();
        formData.append("username", this.state.username)
        formData.append("password1", this.state.password1)
        formData.append("password2", this.state.password2)
        formData.append("email", this.state.email)

        let options = {
            method: 'POST',
            body: formData,
            headers: {
                Accept: '*/*',
                'Content-Type': 'multipart/form-data',
                // 'Authorization': 'JWT eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJvcmlnX2lhdCI6MTU1OTU1NjUxNCwiZXhwIjoxNTU5NTYyNTE0LCJ1c2VyX2lkIjoxLCJlbWFpbCI6Im1haGRpcGF6b29raTIxQGdtYWlsLmNvbSIsInVzZXJuYW1lIjoiZHgifQ.kCdXNmh_o28eLCPsHOwIMefYE12ckg2QI0uMkfIsWZw'
            }
        };
        response = await fetch(apiUrl, options)
        res_body = response._bodyText
        this.setState({ log: res_body })
        if (response.ok) {
            // await AsyncStorage.setItem("token", res_body.token)
            await AsyncStorage.setItem("loggedIn", "true")
            this.props.refresh()
        }
    }

    render() {
        const { username, password1, password2, email, log } = this.state;
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
                    title="SIGN UP"
                    onPress={this._requestHandler}
                />
                <Text>logs:</Text>
                <Text> {log}</Text>
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