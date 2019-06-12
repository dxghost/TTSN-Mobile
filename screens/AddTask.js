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
            selectedBackLog : '',
            emptyName: false,
            emptyDsr: false,
            emptyBackLog: false,
        };

    blRequestHandler = async () => {
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

    addTaskRequestHandler = async () => {
        let apiUrl = 'http://mamaly100.pythonanywhere.com/Task/';
        let formData = new FormData();
        formData.append("TaskState", "TO_DO")
        formData.append("BackLogID", this.state.backlogId)
        formData.append("title", this.state.name)
        formData.append("description", this.state.description)
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
        //res_data = await JSON.parse(response._bodyText)
        res_body = response._bodyText
        if (response.ok == true) { 
        
            this.setState({taskDsr:'', 
            taskName:'', 
            backlogId:'', 
            fetchingBacklogs:true, 
            backlogData: [],
            selectedBackLog : '',
            emptyName: false,
            emptyDsr: false,
            emptyBackLog: false,
           })
           this.dropdown.
            console.log('task Added successfully')
        }
        else{
            console.log(`action failed ${res_body}`)
        }
        // return fetch(apiUrl, options)
    }

    componentWillMount = async () => {
        var f = await this.blRequestHandler()
        f = await f.json()
        //console.log(f)
        this.setState({
            backlogData: f,
            fetchingBacklogs: false
        })
    }
    clientSideCheck(){

        if(!this.state.taskName){
            this.setState({emptyName: true});
        }
        if(!this.state.taskDsr){
            this.setState({emptyDsr: true});
        }
        if(!this.state.backlogId){
            this.setState({emptyBackLog: true});
        }
        
        if(this.state.name == '' || this.state.name == '' || this.state.backlogId == ''){
            return false;
        }
        return true;
    }
    render(){
        let {taskDsr, taskName,} = this.state;
        return(
            <View style={styles.container}>
                <View>
                <TextField
                //style={styles.field}
                label='Task Name:'
                error={this.state.emptyName? "can't be blank":null}
                value={taskName}
                onChangeText={(taskName) => {this.setState({taskName, emptyName:false})}}/>

                <TextField
                // style={styles.field}
                label='Task Description:'
                error={this.state.emptyDsr? "can't be blank":null}
                characterRestriction={100}
                value={taskDsr}
                onChangeText={(taskDsr) => this.setState({taskDsr, emptyDsr:false})}/>

                <Dropdown
                ref={this.dropdown}
                label= {this.state.fetchingBacklogs? 'Related BackLog : (fetching data ...)': 'Related BackLog :'}
                error={this.state.emptyBackLog? "can't be blank":null}
                disabled = {this.state.fetchingBacklogs}
                //baseColor = {this.state.fetchingBacklogs? 'blue':'black'}
                data={this.state.backlogData.map((item) => { return {value: item['name'],id: item['id']} })}
                onChangeText={(value, index, data) => {this.setState({backlogId: data[index].id, emptyBackLog:false})}}
                />

                <View style={{paddingTop:20}}>
                <Button 
                title='Add Task'
                onPress={() => {
                    console.log(`taskName : ${this.state.taskName}\ntask dsr : ${this.state.taskDsr}\n backlogId : ${this.state.backlogId}`)
                    if(this.clientSideCheck()){
                        //implement backend request and came back to tasks
                        this.addTaskRequestHandler()
                    }
                    
                }}
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