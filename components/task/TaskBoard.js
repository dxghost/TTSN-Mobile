import React from 'react'
import {StyleSheet, View, Text, Dimensions} from 'react-native'
import { FlatList } from 'react-native-gesture-handler';
import { ListItem, Button, Devider } from 'react-native-elements';

export default class TaskBoard extends React.Component{
    state = {
        isLoading: true,
        data: []
    }

    keyExtractor = (item, index) => index.toString()

    renderItem = this.props.renderItem

    requestHandler = this.props.requestHandler

    componentWillMount = async () => {
        var f = await this.requestHandler()
        f = await f.json()
        console.log(f)
        this.setState({
            data: f,
            isLoading: false
        })
    }

    refreshData = async () => {
        var f = await this.requestHandler()
        f = await f.json()
        console.log(f)
        if(this.data != f){
        this.setState({
            data: f,
            isLoading: false
        })}
    }

    render(){
        return (
                <View>

                <Button 
                title = 'Reload'
                onPress= {this.refreshData}/> 

                {this.state.isLoading ? <Text>loading</Text> :
                <FlatList 
                keyExtractor={this.keyExtractor}
                data={this.state.data}
                renderItem={this.renderItem}
                />}

                </View>
        );
    }
}
