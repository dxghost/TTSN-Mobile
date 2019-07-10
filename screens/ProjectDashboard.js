import React from 'react'
import { ScrollView, Text, StyleSheet, View } from 'react-native'
import { Header, Button, Icon } from 'react-native-elements'
import Separator from '../components/profile/Separator'


export default class ProjectDashboard extends React.Component {

    render() {
        var project = this.props.navigation.getParam("project")
        return (
            <View>
                <Header
                    backgroundColor='rgb(73, 14, 97)'
                    centerComponent={{ text: `Project ${project.Name}`, style: { color: 'white' } }}
                />

                <ScrollView style={{marginTop:"10%"}}>
                    <View style={styles.container}>
                        <View style={styles.iconRow}>
                            <Icon
                                name="alpha-t-box"
                                type="material-community"
                                underlayColor="transparent"
                                iconStyle={styles.telIcon}
                            />
                        </View>
                        <View style={styles.telRow}>
                            <View style={styles.telNumberColumn}>
                                <Text style={{color: 'gray',fontSize: 20,fontWeight: '200'}}>Project Name : </Text>
                                <Text style={{fontSize:20}}>{project.Name}</Text>
                            </View>
                        </View>
                    </View>
                    {Separator()}
                    <View style={styles.container}>
                        <View style={styles.iconRow}>
                            <Icon
                                name="calendar-text"
                                type="material-community"
                                underlayColor="transparent"
                                iconStyle={styles.telIcon}
                            />
                        </View>
                        <View style={styles.telRow}>
                            <View style={styles.telNumberColumn}>
                                <Text style={styles.telNameText}>Created On : </Text>
                                <Text style={styles.telNumberText}>{project.CreationDate}</Text>
                            </View>
                        </View>
                    </View>
                    {Separator()}
                    <View style={styles.container}>
                        <View style={styles.iconRow}>
                            <Icon
                                name="account"
                                type="material-community"
                                underlayColor="transparent"
                                iconStyle={styles.telIcon}
                            />
                        </View>
                        <View style={styles.telRow}>
                            <View style={styles.telNumberColumn}>
                                <Text style={styles.telNameText}>Project Creator ID: </Text>
                                <Text style={styles.telNumberText}>{project.Creator}</Text>
                            </View>
                        </View>
                    </View>
                    {Separator()}
                    <View style={styles.container}>
                        <View style={styles.iconRow}>
                            <Icon
                                name="blender"
                                type="material-community"
                                underlayColor="transparent"
                                iconStyle={styles.telIcon}
                            />
                        </View>
                        <View style={styles.telRow}>
                            <View style={styles.telNumberColumn}>
                                <Text style={styles.telNameText}>Project Methodology : </Text>
                                <Text style={styles.telNumberText}>{project.Methodology}</Text>
                            </View>
                        </View>
                    </View>
                    {Separator()}
                    <View style={styles.container}>
                        <View style={styles.iconRow}>
                            <Icon
                                name="bullhorn"
                                type="material-community"
                                underlayColor="transparent"
                                iconStyle={styles.telIcon}
                            />
                        </View>
                        <View style={styles.telRow}>
                            <View style={styles.telNumberColumn}>
                                <Text style={styles.telNameText}>Project Type : </Text>
                                <Text style={styles.telNumberText}>{project.Type}</Text>
                            </View>
                        </View>
                    </View>
                    {Separator()}

                </ScrollView>
            </View>
        );
    }
}
ProjectDashboard.navigationOptions={
    drawerLabel: () => null
}
const styles = StyleSheet.create({

    container: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        marginBottom: 25,
    },
    iconRow: {
        flex: 2,
        justifyContent: 'center',
    },
    smsIcon: {
        color: 'gray',
        fontSize: 30,
    },
    smsRow: {
        flex: 2,
        justifyContent: 'flex-start',
    },
    telIcon: {
        color: '#8d42f5',
        fontSize: 30,
    },
    telNameColumn: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
    },
    telNameText: {
        color: 'gray',
        fontSize: 14,
        fontWeight: '200',
    },
    telNumberColumn: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        marginBottom: 5,
    },
    telNumberText: {
        fontSize: 16,
    },
    telRow: {
        flex: 6,
        flexDirection: 'column',
        justifyContent: 'center',
    },
    text: {
        fontSize: 18,
    }
});