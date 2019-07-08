import React from 'react'
import TaskBoard from './TaskBoard';
import {ListItem, Button} from 'react-native-elements'
import { updateDone } from '../../actions/taskActions';
import {connect} from 'react-redux'
import {getTasksWithState} from '../../actions/fetcher'

class DoneBoard extends React.Component{

    componentWillMount = async () => {
        getTasksWithState("DONE", this.props.project.id).then((f) => this.props.done_update(f))
    }

    render()
    {
        const navigation = this.props.navigation
        const renderItem = ({item}) => (
            <ListItem 
            key={item.key}
            title={item.title}
            subtitle={item.description}
            onPress={() => navigation.navigate('SingleTask', {taskData:item})}
            />
        );

        const requestHandler = async () => {
            let apiUrl = 'http://mamaly100.pythonanywhere.com/Task/TaskByState/DONE/';
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

        return(
        <TaskBoard 
        renderItem={renderItem}
        data={this.props.tasksData.done}
        navigation = {this.props.navigation} />
    )
    }
}

function mapDispatchToProps(dispatch) {
    return {
        done_update: (data) => dispatch(updateDone({data : data}))
    }
}

function mapStateToProps(state){
    return {
        tasksData: state.tasks,
        user: state.user,
        project: state.project,
    }
}

export default connect (mapStateToProps,mapDispatchToProps)(DoneBoard)
