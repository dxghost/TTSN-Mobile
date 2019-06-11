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
    },{
        name: 'update database',
        index: 3,
        description: 'modify task moded and ...modify task moded and ...modify task '
    },{
        name: 'update database',
        index: 4,
        description: 'modify task moded and ...modify task moded and ...modify task '
    },{
        name: 'update database',
        index: 5,
        description: 'modify task moded and ...modify task moded and ...modify task '
    },{
        name: 'update database',
        index: 6,
        description: 'modify task moded and ...modify task moded and ...modify task '
    },{
        name: 'update database',
        index: 7,
        description: 'modify task moded and ...modify task moded and ...modify task '
    },{
        name: 'update database',
        index: 8,
        description: 'modify task moded and ...modify task moded and ...modify task '
    },{
        name: 'update database',
        index: 9,
        description: 'modify task moded and ...modify task moded and ...modify task '
    },{
        name: 'update database',
        index: 10,
        description: 'modify task moded and ...modify task moded and ...modify task '
    },{
        name: 'update database',
        index: 11,
        description: 'modify task moded and ...modify task moded and ...modify task '
    },]

export default class TaskBoard extends React.Component{
    keyExtractor = (item, index) => index.toString()
    renderItem = ({item}) => (
        <ListItem 
        key={item.index}
        title={item.name}
        subtitle={item.description}
        rightElement={
            () => {
            if (this.props.buttonTitle)
            return (<Button 
            title = {this.props.buttonTitle}/>);
        }
        }
        />
    );
    render(){
        return (
                <FlatList 
                keyExtractor={this.keyExtractor}
                data={list}
                renderItem={this.renderItem}
                />
        );
    }
}
