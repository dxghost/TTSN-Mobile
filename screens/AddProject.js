import React from 'react'
import { ScrollView, View, Text, StyleSheet, StatusBar, Dimensions, Image, TouchableOpacity, Alert, AsyncStorage} from 'react-native'
import { Button, Icon, Header, CheckBox, Card, ButtonGroup } from 'react-native-elements';
import { FAB } from 'react-native-paper'
import DatePicker from 'react-native-datepicker'
import { TextField } from 'react-native-material-textfield'
import scrum from '../assets/methodologies/scrum.png'
import waterfall from '../assets/methodologies/waterfall.png'
import xp from '../assets/methodologies/xp.jpg'
import { addProject } from '../actions/fetcher'
import { connect } from 'react-redux'
import { getAllProjects, getUserProjects } from '../requests/ProjectActions'
import { updateUser, updateAll } from '../actions/projectsActions'


class CreateProject extends React.Component {
    state = {
        projectName: "",
        projectDescription: "",
        projectType: "",
        startDate: null,
        endDate: null,
        methodology: "",
        checkedType: null,
        checkedMethodology: null,
    }
    _addProj = async () => {
        var data = {
            "Name": this.state.projectName,
            "Description": this.state.projectDescription,
            "Type": this.state.projectType,
            "EndDate": this.state.endDate,
            "StartDate": this.state.startDate,
            "Methodology": this.state.methodology,
            // Creator:5
        }
        data=JSON.stringify(data)

        formData = new FormData();
        formData.append("Name", this.state.projectName)
        formData.append("Description", this.state.projectDescription)
        formData.append("Type", this.state.projectType)
        formData.append("EndDate", this.state.endDate)
        formData.append("StartDate", this.state.StartDate)
        formData.append("Methodology", this.state.methodology)
        console.log(data)
        let token = await AsyncStorage.getItem('token')
        let apiUrl = 'https://mamaly100.pythonanywhere.com//Projects/projects/'

        let options = {
            method: 'POST',
            body: data,
            headers: {
                'accept': '*/*',
                'Content-Type': 'application/json',
                'Authorization': `JWT ${token}`
            }

        }
        var response = await fetch(apiUrl, options)
        response_json = await response.json()

        if(response.ok){
            getUserProjects().then((f) => this.props.user_update(f))
            getAllProjects().then((f) => this.props.all_update(f))
        }

        Alert.alert(
            response.ok?'Done!':'Failed!',
            response.ok?'Project Added Successfully':`An Error Occurred (${response_json.detail})`,
            [
              response.ok? {text: 'See On Projects Board', onPress: () => this.props.navigation.navigate("Projects")}:{},
            
              {text: 'OK', onPress: () => console.log('OK Pressed')},
            ],
            {cancelable: false},
          );

        console.log(response_json)
    }
    render() {
        const { projectName, projectDescription, projectType, startDate, endDate, methodology, checked, checkedMethodology } = this.state
        return (
            <View style={styles.screen}>
                <Header
                    backgroundColor='rgb(73, 14, 97)'
                    centerComponent={{ text: 'Create Project', style: { color: '#fff' } }}
                />
                <ScrollView
                    pagingEnabled
                    horizontal={true}
                    ref={'scrollView'}
                    style={styles.container}
                    showsHorizontalScrollIndicator={false}
                >
                    <View style={styles.scrollViewItem}>
                        {/* General specifications */}
                        <View style={{ padding: 30 }}>
                            <TextField
                                label={"Project Name"}
                                value={this.state.projectName}
                                onChangeText={(username) => this.setState({ projectName: username })}
                            />
                            <TextField
                                label={"Description"}
                                value={this.state.projectDescriptio}
                                onChangeText={(value) => this.setState({ projectDescription: value })}
                                multiline={true}
                            />

                            <View style={{ flexDirection: "row", justifyContent: "center", marginTop: "5%" }}>
                                <View>
                                    <Text>Start Date</Text>
                                    <DatePicker
                                        style={{ marginTop: "2%" }}
                                        date={this.state.startDate}
                                        mode="date"
                                        placeholder="select date"
                                        format="YYYY-MM-DD"
                                        minDate="2017-05-01"
                                        maxDate="2023-06-01"
                                        onDateChange={(date) => { this.setState({ startDate: date }) }}
                                    />
                                </View>
                                <View style={{ marginLeft: "5%" }}>
                                    <Text>End Date</Text>
                                    <DatePicker
                                        style={{ marginTop: "2%" }}
                                        date={this.state.endDate}
                                        mode="date"
                                        placeholder="select date"
                                        format="YYYY-MM-DD"
                                        minDate="2017-05-01"
                                        maxDate="2023-06-01"
                                        onDateChange={(date) => { this.setState({ endDate: date }) }}
                                    />
                                </View>
                            </View>
                            <View style={{ flexDirection: "row", justifyContent: "center", marginTop: "5%" }} >
                                <CheckBox
                                    center
                                    title='B2B'
                                    checkedIcon='dot-circle-o'
                                    uncheckedIcon='circle-o'
                                    containerStyle={
                                        styles.projectTypes
                                    }
                                    checked={this.state.checkedType == 1 ? true : false}
                                    onPress={() => this.setState({ checkedType: 1, projectType: "B2B" })}
                                />
                                <CheckBox
                                    center
                                    title='B2C'
                                    checkedIcon='dot-circle-o'
                                    uncheckedIcon='circle-o'
                                    containerStyle={
                                        styles.projectTypes
                                    }
                                    checked={this.state.checkedType == 2 ? true : false}
                                    onPress={() => this.setState({ checkedType: 2, projectType: "B2C" })}
                                />
                                <CheckBox
                                    center
                                    title='C2C'
                                    checkedIcon='dot-circle-o'
                                    uncheckedIcon='circle-o'
                                    containerStyle={
                                        styles.projectTypes
                                    }
                                    checked={this.state.checkedType == 3 ? true : false}
                                    onPress={() => this.setState({ checkedType: 3, projectType: "C2C" })}
                                />
                            </View>
                        </View>
                        <FAB
                            style={styles.fab}
                            small={false}
                            icon="chevron-right"
                            color='white'

                            onPress={() => this.refs.scrollView.scrollToEnd({ animated: true })}
                        />
                    </View>
                    {/* Methodology */}
                    <ScrollView style={styles.scrollViewItem}>
                        <View style={{ paddingBottom: "5%" }}>
                            <TouchableOpacity
                                onPress={() => this.setState({ checkedMethodology: 1, methodology: "Scrum" })}
                            >
                                <Card
                                    title='Scrum'
                                    image={scrum}
                                >
                                    <Text style={{ marginBottom: 10 }}>
                                        The idea with React Native Elements is more about component structure than actual design.
                                    </Text>
                                    <CheckBox
                                        center
                                        title='Select Scrum'
                                        checkedIcon='dot-circle-o'
                                        uncheckedIcon='circle-o'
                                        checked={this.state.checkedMethodology == 1 ? true : false}

                                    />

                                </Card>
                            </TouchableOpacity>
                            <TouchableOpacity
                                onPress={() => this.setState({ checkedMethodology: 2, methodology: "Waterfall" })}
                            >
                                <Card
                                    title='Select Waterfall'
                                    image={waterfall}>
                                    <Text style={{ marginBottom: 10 }}>
                                        The idea with React Native Elements is more about component structure than actual design.
                        </Text>
                                    <CheckBox
                                        center
                                        title='Select XP'
                                        checkedIcon='dot-circle-o'
                                        uncheckedIcon='circle-o'
                                        checked={this.state.checkedMethodology == 2 ? true : false}
                                    />
                                </Card>
                            </TouchableOpacity>
                            <TouchableOpacity
                                onPress={() => this.setState({ checkedMethodology: 3, methodology: "XP" })}
                            >
                                <Card
                                    title='XP'
                                    image={xp}>
                                    <Text style={{ marginBottom: 10 }}>
                                        The idea with React Native Elements is more about component structure than actual design.
                        </Text>
                                    <CheckBox
                                        center
                                        title='B2C'
                                        checkedIcon='dot-circle-o'
                                        uncheckedIcon='circle-o'
                                        checked={this.state.checkedMethodology == 3 ? true : false}

                                    />
                                </Card>
                            </TouchableOpacity>
                        </View>
                    </ScrollView>

                    <FAB
                        style={styles.fab}
                        small={false}
                        icon="check"
                        color='white'

                        onPress={() => this._addProj()}//TODO Create request
                    />
                </ScrollView>
                {/* Stepper */}
            </View >
        )
    }

}

function mapDispatchToProps(dispatch) {
    return {
        all_update: (data) => dispatch(updateAll({data:data})),
        user_update: (data) => dispatch(updateUser({data:data}))
    }
}

export default connect(null, mapDispatchToProps)(CreateProject)


const styles = StyleSheet.create({
    scrollViewItem: {
        width: Dimensions.get('window').width * (1),
        // use Dimensions cuase '100%' doesnt work properly
        // padding: 30,"
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

CreateProject.navigationOptions = {
    drawerLabel: "Create a new Project",
    drawerIcon: () => (
        <Icon
            name='plus'
            type='material-community'
            color='rgb(150, 13, 255)'
        />
    ),
}