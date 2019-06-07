import React from 'react'
import {View, Text, Picker, StyleSheet} from 'react-native'
import {TextField} from 'react-native-material-textfield'
import {Dropdown} from 'react-native-material-dropdown'
import {Button} from 'react-native-elements'


export default class AddTask extends React.Component{

    state = {taskDsr:'', 
            taskName:'', 
            backlogId:'', 
            fetchingBacklogs:true, 
            backlogData: [],
            selectedBackLog : ''
        };

    requestHandler = async () => {
        let apiUrl = 'http://mamaly100.pythonanywhere.com/Backlog/';
        let formData = new FormData();
        let options = {
            method: 'GET',
            // body: formData,
            headers: {
                Accept: '*/*',
                'Content-Type': 'application/json',
                // 'Authorization': 'JWT eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJvcmlnX2lhdCI6MTU1OTU1NjUxNCwiZXhwIjoxNTU5NTYyNTE0LCJ1c2VyX2lkIjoxLCJlbWFpbCI6Im1haGRpcGF6b29raTIxQGdtYWlsLmNvbSIsInVzZXJuYW1lIjoiZHgifQ.kCdXNmh_o28eLCPsHOwIMefYE12ckg2QI0uMkfIsWZw'
            }
        };
        return fetch(apiUrl, options)
    }

    componentWillMount = async () => {
        var f = await this.requestHandler()
        f = await f.json()
        //console.log(f)
        this.setState({
            backlogData: f,
            fetchingBacklogs: false
        })
    }
    
    render(){
        let {taskDsr, taskName,} = this.state;
        return(
            <View style={styles.container}>
                <View>
                <TextField
                //style={styles.field}
                label='Task Name:'
                value={taskName}
                onChangeText={(taskName) => this.setState({taskName})}/>

                <TextField
                // style={styles.field}
                label='Task Description:'
                characterRestriction={100}
                value={taskDsr}
                onChangeText={(taskDsr) => this.setState({taskDsr})}/>

                <Dropdown
                label= {this.state.fetchingBacklogs? 'Related BackLog : (fetching data ...)': 'Related BackLog :'}
                disabled = {this.state.fetchingBacklogs}
                //baseColor = {this.state.fetchingBacklogs? 'blue':'black'}
                data={this.state.backlogData.map((item) => { return {value: item['name'],id: item['id']} })}
                onChangeText={(value, index, data) => {this.setState({backlogId: data[index].id})}}
                />

                <View style={{paddingTop:20}}>
                <Button 
                title='Add Task'
                onPress={() => console.log(`taskName : ${this.state.taskName}\ntask dsr : ${this.state.taskDsr}\n backlogId : ${this.state.backlogId}`)}
                type='solid'
                />
                </View>
            
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container:{
        paddingTop: 20,
        paddingRight: 20,
        paddingLeft: 20,
        // borderColor: 'red',
        // borderWidth: 2,
        flex: 1,
        // marginTop: 25,
        // justifyContent: 'center',
        // alignItems: 'center',
    },
    text:{
        fontSize:18,
    },
    field:{
        borderWidth:2,
        borderColor: 'blue',
    },});

    AddTask.navigationOptions = {
        drawerLabel: 'AddTask',
    }    