import React from 'react'
import TaskBoard from './TaskBoard';
import {ListItem, Button} from 'react-native-elements'

export default class InProgressBoard extends React.Component{
    render()
    {
        const renderItem = ({item}) => (
            <ListItem 
            key={item.key}
            title={item.title}
            subtitle={item.description}
            
            />
        );

        const requestHandler = async () => {
            let apiUrl = 'http://mamaly100.pythonanywhere.com/Task/';
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
        requestHandler={requestHandler}
        />
    )
    }
}