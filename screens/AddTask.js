import React from 'react'
import {View, Text, Alert, StyleSheet} from 'react-native'
import {TextField} from 'react-native-material-textfield'
import {Dropdown} from 'react-native-material-dropdown'
import {Button, Header} from 'react-native-elements'
import {connect} from 'react-redux'
import { getTasksWithState, addTask } from '../requests/TaskActions';
import { updateTodo } from '../actions/taskActions';
import {getProjectBacklogs} from '../requests/BacklogActions'

class AddTask extends React.Component{
    
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

    addTask = async () => {
        response = await addTask(this.state.taskName, this.state.taskDsr, this.state.backlogId, this.props.project.id)
        res_body = response._bodyText
        if (response.ok == true) { 
        
            this.setState({taskDsr:'', 
            taskName:'', 
            backlogId:'',
            selectedBackLog : '',
            emptyName: false,
            emptyDsr: false,
            emptyBackLog: false,
           })
           
            console.log('task Added successfully')
            getTasksWithState("TO_DO", this.props.project.id).then((f) => this.props.todo_update(f))
        }
        else{
            console.log(`action failed ${res_body}`)
        }

        Alert.alert(
            response.ok?'Done!':'Failed!',
            response.ok?'Task Added Successfully':'An Error Occurred',
            [
              response.ok? {text: 'See On Task Board', onPress: () => this.props.navigation.goBack()}:{},
            
              {text: 'OK', onPress: () => console.log('OK Pressed')},
            ],
            {cancelable: false},
          );
        // return fetch(apiUrl, options)
    }

    componentWillMount = async () => {
        data = await getProjectBacklogs(this.props.project.id) 
        this.setState({
            backlogData: data,
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
        
        if(this.state.taskDsr == '' || this.state.backlogId == '' || this.state.taskName == ''){
            return false;
        }
        return true;
    }
    render(){
        let {taskDsr, taskName, backlogId} = this.state;
        return(
            <View >
                <Header style={{color:'rgb(150, 13, 255'}}
                centerComponent={{ text: 'New Task', style: { color: '#fff' } }}
                />
                
                <View style={styles.formContainer}>
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
                //ref={this.dropdown}
                label= {this.state.fetchingBacklogs? 'Related BackLog : (fetching data ...)': 'Related BackLog :'}
                error={this.state.emptyBackLog? "can't be blank":null}
                disabled = {this.state.fetchingBacklogs}
                value={backlogId}
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
                        this.addTask()
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

function mapStateToProps(state) {
    return {
        project: state.project,
    }
}

function mapDispatchToProps(dispatch) {
    return {
        todo_update: (data) => dispatch(updateTodo({data : data}))
    }
}

export default connect (mapStateToProps, mapDispatchToProps)(AddTask)

const styles = StyleSheet.create({
    formContainer: {
        marginHorizontal: '10%',
        padding: "5%",
        borderColor: "black",
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