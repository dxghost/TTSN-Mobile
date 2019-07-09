import React from 'react'
import {Alert, StyleSheet, View} from 'react-native'
import TaskBoard from './TaskBoard';
import {ListItem, Button} from 'react-native-elements'
import { FAB } from 'react-native-paper'
import {connect} from 'react-redux'
import { getTasksWithState } from '../../actions/fetcher'
import { updateInProgress, updateTodo } from '../../actions/taskActions'

class TodoBoard extends React.Component{

    componentWillMount = async () => {
        getTasksWithState("TO_DO", this.props.project.id).then((f) => this.props.todo_update(f))
    }

    render()
    {
        const navigation = this.props.navigation
        const renderItem = ({item}) => (
            <ListItem 
            key={item.key}
            title={item.title}
            subtitle={item.description}
            rightElement={
                <Button 
                title = {'Pick'} onPress={() => {
                    putTaskRequestHandler(item)
                    
                }}/>
            }
            onPress={() => navigation.navigate('SingleTask', {taskData:item})}
            />
        );

        const putTaskRequestHandler = async (task) => {
            
            let apiUrl = `http://mamaly100.pythonanywhere.com/Task/${task.id}/`
            let formData = new FormData();
            formData.append("TaskState", "IN_PROGRESS")
            formData.append("picker", 2)//should add picker 
            //formData.append("pickerid")
            let options = {
                method: 'PATCH',
                body: formData,
                headers: {
                    Accept: '*/*',
                    'Content-Type': 'multipart/form-data',
                    // 'Authorization': 'JWT eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJvcmlnX2lhdCI6MTU1OTU1NjUxNCwiZXhwIjoxNTU5NTYyNTE0LCJ1c2VyX2lkIjoxLCJlbWFpbCI6Im1haGRpcGF6b29raTIxQGdtYWlsLmNvbSIsInVzZXJuYW1lIjoiZHgifQ.kCdXNmh_o28eLCPsHOwIMefYE12ckg2QI0uMkfIsWZw'
                }
            };
            // console.log(formData)
            console.log(options)
            response = await fetch(apiUrl, options)
            //res_data = await JSON.parse(response._bodyText)
            res_body = response._bodyText
            if (response.ok == true) { 
                getTasksWithState("TO_DO", this.props.project.id).then((f) => this.props.todo_update(f))
                getTasksWithState("IN_PROGRESS", this.props.project.id).then((f) => this.props.inprogress_update(f))
            }
            else{
                console.log(`action failed ${res_body.substring(0, 300)}`)
            }

            Alert.alert(
                response.ok?'Done!':'Failed!',
                response.ok?'Task Picked Successfully':'An Error Occurred',
                [
                  {text: 'OK', onPress: () => console.log('OK Pressed')},
                ],
                {cancelable: false},
              );
            // return fetch(apiUrl, options)
        }
    

        return(
        <View style={{flex:1}}>

            <TaskBoard 
            renderItem={renderItem}
            data={this.props.tasksData.to_do}
            navigation = {this.props.navigation}
            />

            <FAB 
            style={styles.fab}
            small={false}
            icon="add"
            onPress={() => {
                navigation.navigate('AddTask')
            }}
            />

        </View>
        
    )
    }
}

function mapStateToProps(state) {
    return {
        tasksData: state.tasks,
        user: state.user,
        project: state.project,
    }
}

function mapDispatchToProps(dispatch) {
    return {
        todo_update: (data) => dispatch(updateTodo({data : data})),
        inprogress_update: (data) => dispatch(updateInProgress({data : data})),
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(TodoBoard) 

const styles = StyleSheet.create({
    fab: {
        position: 'absolute',
        margin: 16,
        right: 0,
        bottom: 0,
      },
  });