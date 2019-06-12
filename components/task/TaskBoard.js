import React from 'react'
import {StyleSheet, View, Text, Dimensions} from 'react-native'
import { FlatList } from 'react-native-gesture-handler';
import { ListItem, Button, Devider } from 'react-native-elements';

const list = [
    {
        name: 'update database',
        index: 1,
        description: 'modify task moded and ...modify task moded and ...modify task '
    },
    {
        name: 'update database',
        index: 2,
        description: 'modify task moded and ...modify task moded and ...modify task '
    }]



export default class TaskBoard extends React.Component{
    state = {
        isLoading: true,
        data: []
    }

    keyExtractor = (item, index) => index.toString()
    renderItem = ({item}) => (
        <ListItem 
        key={item.index}
        title={item.name}
        subtitle={item.description}
        rightElement={
            () => <Button 
            title = {'Pick'}/>
        } 
        />
    )

    requestHandler = async () => {
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

    componentWillMount = async () => {
        var f = await this.requestHandler()
        f = await f.json()
        console.log(f)
        this.setState({
            data: f,
            isLoading: false
        })
    }

    render(){
        return (
                this.state.isLoading ? <Text>loading</Text> :
                <FlatList 
                keyExtractor={this.keyExtractor}
                data={this.state.data}
                renderItem={this.renderItem}
                />
        );
    }
}
