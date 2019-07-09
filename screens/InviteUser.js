import React from 'react'
import { ScrollView, View, Text, StyleSheet, StatusBar, Dimensions, Image, TouchableOpacity,AsyncStorage } from 'react-native'
import { Button, Icon, Header, CheckBox, Card, ButtonGroup } from 'react-native-elements';
import { FAB } from 'react-native-paper'
import DatePicker from 'react-native-datepicker'
import { TextField } from 'react-native-material-textfield'
import scrum from '../assets/methodologies/scrum.png'
import waterfall from '../assets/methodologies/waterfall.png'
import xp from '../assets/methodologies/xp.jpg'
import { addProject } from '../actions/fetcher'


export default class InviteUser extends React.Component {
    state = {
        userEmail: "",
    }
    _addProj = async () => {
        var f = await AsyncStorage.getItem()
        var data = {
            "email": this.state.userEmail,

        }
        data = JSON.stringify(data)

        let apiUrl = 'https://mamaly100.pythonanywhere.com//Projects/projects/'

        let options = {
            method: 'POST',
            body: data,
            headers: {
                'accept': '*/*',
                'Content-Type': 'application/json',
                'Authorization': 'JWT eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjo2LCJleHAiOjE1NjI2MzAwMTUsInVzZXJuYW1lIjoibSIsImVtYWlsIjoibUBtLmNvbSJ9.rXeSxgREY6Nmlfw8TidUiCYYcKL1nQPg_1OJvKoX230'
            }

        }
        var response = await fetch(apiUrl, options)
        response = await response.json()
        console.log(response)
    }
    render() {
        const { projectName, projectDescription, projectType, startDate, endDate, methodology, checked, checkedMethodology } = this.state
        return (
            <View style={styles.screen}>
                <Header
                    backgroundColor='rgb(73, 14, 97)'
                    centerComponent={{ text: 'Create Project', style: { color: '#fff' } }}
                />
                <View style={styles.scrollViewItem}>
                    {/* General specifications */}
                    <View style={{ padding: 30 }}>
                        <TextField
                            label={"User Email"}
                            value={this.state.userEmail}
                            onChangeText={(username) => this.setState({ userEmail: username })}
                        />
                        <View style={{alignItems:'center'}}>
                        <Button
                            title="Invite"
                            containerStyle={{width:"40%",marginTop:"5%"}}
                        />
                        </View>
                    </View>

                </View>
                <FAB
                    style={styles.fab}
                    small={false}
                    icon="check"
                    color='white'

                    onPress={() => this._inviteUser() }
                />
            </View>
        )
    }

}
const styles = StyleSheet.create({
    scrollViewItem: {
        width: Dimensions.get('window').width * (1),
        // use Dimensions cuase '100%' doesnt work properly
        // padding: 30,"
        alignContent:'center'
    },
    screen: {
        width: "100%",
        height: "100%",
        backgroundColor: "white",
        flex: 1,
    },
    container: {

    },
    projectTypes: {
        // width: "33%",

    },
    fab: {
        position: 'absolute',
        margin: 16,
        right: 0,
        bottom: 0,
        backgroundColor: 'rgb(87, 42, 112)'
    },
})

InviteUser.navigationOptions = {
    drawerLabel: "Invite a User",
    drawerIcon: () => (
        <Icon
            name='account-plus'
            type='material-community'
            color='rgb(150, 13, 255)'
        />
    ),
}