import React from 'react'
import TaskBoard from './TaskBoard';
import {ListItem, Button} from 'react-native-elements'

export default class TodoBoard extends React.Component{
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

        const getTaskRequestHandler = async () => {
            let apiUrl = 'http://mamaly100.pythonanywhere.com/Task/TaskByState/TO_DO/';
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
            
                console.log('task Pcked Successfully')
                
            }
            else{
                console.log(`action failed ${res_body.substring(0, 300)}`)
            }
            // return fetch(apiUrl, options)
        }
    

        return(
        <TaskBoard 
        renderItem={renderItem}
        requestHandler={getTaskRequestHandler}
        navigation = {this.props.navigation} />
    )
    }
}