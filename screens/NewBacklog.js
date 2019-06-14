import React from 'react'
import { ScrollView, View, Text, Image, StyleSheet, AsyncStorage,Alert } from 'react-native'
import { ListItem, Button, Divider } from "react-native-elements"
import Icon from 'react-native-vector-icons/FontAwesome'
import CreateNew from '../assets/icons/icons8-add-property-96.png'
import { TextField } from 'react-native-material-textfield';


export default class CreateBacklog extends React.Component {
    state = {
        success: false,
        name: '',
        description: '',
        definition_of_done: '',
        log: "no request sent",
        data: {}
    };
    _requestHandler = async () => {
        let apiUrl = 'http://mamaly100.pythonanywhere.com/Backlog/';
        let formData = new FormData();
        formData.append("name", this.state.name)
        formData.append("description", this.state.description)
        formData.append("definition_done", this.state.definition_of_done)
        // temp
        formData.append("priority", Math.floor(Math.random() * (+100 - +15)) + +15)
        let options = {
            method: 'POST',
            body: formData,
            headers: {
                Accept: '*/*',
                'Content-Type': 'multipart/form-data',
                // 'Authorization': 'JWT eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJvcmlnX2lhdCI6MTU1OTU1NjUxNCwiZXhwIjoxNTU5NTYyNTE0LCJ1c2VyX2lkIjoxLCJlbWFpbCI6Im1haGRpcGF6b29raTIxQGdtYWlsLmNvbSIsInVzZXJuYW1lIjoiZHgifQ.kCdXNmh_o28eLCPsHOwIMefYE12ckg2QI0uMkfIsWZw'
            }
        };
        // console.log(formData)
        response = await fetch(apiUrl, options)
        res_data = await JSON.parse(response._bodyText)
        res_body = response._bodyText
        this.setState({ log: res_body, data: res_data })
        if (response.ok == true) {
            this.setState({ success: true })
            this.props.navigation.state.params.onGoBack();
        }
        Alert.alert(
            response.ok?'Done!':'Failed!',
            response.ok?'Backlog Added Successfully':'An Error Occurred',
            [
              response.ok? {text: 'See On BacklogList Board', onPress: () => this.props.navigation.goBack()}:null,
              {text: 'OK'},
            ],
            {cancelable: false},
          );
    }
    _doNavigation = () => {
        const { navigate } = this.props.navigation;
        navigate('SingleBacklog', { backlogdata: this.state.data })
    }
    //   componentWillMount = async () => {
    //     var f = await this._requestHandler()
    //     f = await f.json()
    //     // console.log(f)
    //     this.setState({
    //       data: f,
    //       isLoading: false
    //     })
    //   }

    render() {
        let { name, description, definition_of_done, success, log } = this.state;
        return (
            <View>
                <View style={styles.formContainer}>
                    <TextField
                        label='Backlog Name:'
                        value={name}
                        onChangeText={(name) => this.setState({ name })}
                    />
                    <TextField
                        label='Descriptions:'
                        value={description}
                        onChangeText={(description) => this.setState({ description })}
                    />
                    <TextField
                        label='Definition of Done:'
                        value={definition_of_done}
                        onChangeText={(definition_of_done) => this.setState({ definition_of_done })}
                    />
                    <View style={{ marginTop: "10%" }}>
                        <Button
                            icon={success ?
                                <Icon
                                    name="check"
                                    size={15}
                                    color="white"
                                />
                                :
                                <Icon
                                    name="arrow-right"
                                    size={15}
                                    color="white"
                                />
                            }
                            iconRight
                            title={success ? "Saved SuccessFully " : "Save "}
                            onPress={this._requestHandler}
                        />
                    </View>
                    <Text style={{ marginTop: "10%" }}>logs:</Text>
                    <Text>{log}</Text>
                    {/* {success ?
                        <View style={{ marginTop: "10%" }}>
                            <Button
                                title="view created backlog"
                                onPress={this._doNavigation}
                            />
                        </View>
                        : null
                    } */}
                </View>
            </View>
        )
    }
}


CreateBacklog.navigationOptions = {
    drawerLabel: 'Create a new Backlog',
    drawerIcon: () => (
        <Image source={CreateNew} style={{ width: 30, height: 30 }} />
    ),
};
const styles = StyleSheet.create({
    formContainer: {
        marginHorizontal: '10%',
        padding: "5%",
        borderColor: "black",
    }
})