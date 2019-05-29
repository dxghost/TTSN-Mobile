import React from 'react'
import {StyleSheet, ScrollView, View, Text,Dimensions} from 'react-native'
import TaskBoard from './TaskBoard';

//const style = 

export default class BoardsScrollView extends React.Component{
    render() {
        return (
            <ScrollView horizontal = {true} pagingEnabled = {true}>
                
                <TaskBoard buttonTitle='Pick'/>
                <TaskBoard buttonTitle='For Review'/>
                <TaskBoard buttonTitle='Done'/>
                <TaskBoard buttonTitle=''/>

            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        marginTop: 20,
        justifyContent: 'center',
        backgroundColor: '#faf',
        alignItems: 'center',
        width : Dimensions.get('screen').width,
        height : Dimensions.get('screen').height,
    },

    label:{
        fontSize: 20,
        textAlign: 'center',
        padding: 15
    }
});