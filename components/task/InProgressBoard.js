import React from 'react'
import TaskBoard from './TaskBoard';
import {Alert} from 'react-native'
import {ListItem, Button} from 'react-native-elements'
import { updateDone, updateInProgress } from '../../actions/taskActions';
import {connect} from 'react-redux'
import {getTasksWithState} from '../../actions/fetcher'
import { withNavigation } from 'react-navigation';

class InProgressBoard extends React.Component{

    componentWillMount = async () => {
        getTasksWithState("IN_PROGRESS").then((f) => this.props.inprogress_update(f))
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
                title = {'Done'} 
                onPress={() => {
                    doneTaskRequestHandler(item)
                }}/>
            }
            onPress={() => navigation.navigate('SingleTask', {taskData:item})}
            />
        );

        const doneTaskRequestHandler = async (task) => {
            let apiUrl = `http://mamaly100.pythonanywhere.com/Task/${task.id}/`;
            let formData = new FormData();
            formData.append("TaskState", "DONE")
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
            response = await fetch(apiUrl, options)
            //res_data = await JSON.parse(response._bodyText)
            res_body = response._bodyText
            if (response.ok == true) {
                getTasksWithState("IN_PROGRESS").then((f) => this.props.inprogress_update(f))
                getTasksWithState("DONE").then((f) => this.props.done_update(f))
            }
            else{
                console.log(`action failed ${res_body}`)
            }

            Alert.alert(
                response.ok?'Done!':'Failed!',
                response.ok?'Task Done Successfully':'An Error Occurred',
                [
                  {text: 'OK', onPress: () => console.log('OK Pressed')},
                ],
                {cancelable: false},
              );

            // return fetch(apiUrl, options)
        }

        return(
        <TaskBoard 
        renderItem={renderItem}
        data = {this.props.tasksData.in_progress}
        navigation = {this.props.navigation} />
    )
    }
}


function mapStateToProps(state) {
    return {
        tasksData: state.tasks
    }
}

function mapDispatchToProps(dispatch) {
    return {
        inprogress_update: (data) => dispatch(updateInProgress({data : data})),
        done_update: (data) => dispatch(updateDone({data : data}))
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(InProgressBoard) 
