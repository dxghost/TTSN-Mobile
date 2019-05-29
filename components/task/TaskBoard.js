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
    },]

export default class TaskBoard extends React.Component{
    keyExtractor = (item, index) => index.toString()
    renderItem = ({item}) => (
        <ListItem 
        key={item.index}
        title={item.name}
        subtitle={item.description}
        />
    );
    render(){
        return (
            <View style={styles.container}>
                <FlatList 
                keyExtractor={this.keyExtractor}
                data={list}
                renderItem={this.renderItem}
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container:{
        //flex: 1,
        //marginTop: 20,
        //justifyContent: 'center',
        //backgroundColor: '#faf',
        //alignItems: 'center',
        width : Dimensions.get('screen').width,
        height : Dimensions.get('screen').height,
    },
});