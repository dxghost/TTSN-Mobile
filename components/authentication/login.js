import React from 'react'
import { View, StyleSheet, Text, AsyncStorage } from 'react-native'
import { TextField } from 'react-native-material-textfield'
import { Button } from 'react-native-elements'

export default class Login extends React.Component {
    constructor(props) {
        super(props);
    }

    state = {
        username: "",
        password: "",
        log: "",
        token: "",
    }

    loginRequestHandler = async () => {
        let apiUrl = 'http://mamaly100.pythonanywhere.com/accounts/login/token-auth';
        let formData = new FormData();
        formData.append("username", this.state.username)
        formData.append("password", this.state.password)

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
        // response = response.json()
        if (response.ok) {
            response = await response.json()
            token = response.token
            await AsyncStorage.setItem("token", token)
            await AsyncStorage.setItem("loggedIn", "true")
            this._whoami(token)
            this.props.refresh()
        }

    }
    _whoami = async (token) => {
        let apiUrl = 'http://mamaly100.pythonanywhere.com/accounts/current_user/'
        let options = {
            method: 'GET',
            headers: {
                Accept: '*/*',
                'Content-Type': 'multipart/form-data',
                'Authorization': `JWT ${token}`
            }
        };
        response = await fetch(apiUrl,options)
        response = await response.json()
        ID = response[0].id
        ID=ID.toString()
        AsyncStorage.setItem("userID",ID)

    }
    render() {
        let { username, password } = this.state
        return (
            <View>
                <TextField
                    label={"Username"}
                    value={username}
                    onChangeText={(username) => this.setState({ username })}
                    textContentType='username' />

                <TextField
                    label={"Password"}
                    value={password}
                    onChangeText={(password) => this.setState({ password })}
                    secureTextEntry={true} />

                <Button
                    title={"log in"}
                    onPress={this.loginRequestHandler} />
                <Text>logs:</Text>
                <Text> {this.state.log}</Text>
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