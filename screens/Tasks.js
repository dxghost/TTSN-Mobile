import React from 'react'
import {StyleSheet, View, Image, Text, ScrollView, Dimensions} from 'react-native'
import BoardsScrollView from '../components/task/BoardsScrollView'
import TaskIcon from '../assets/tasks.png'

export default class Tasks extends React.Component{
    render(){
        
        return (
        <View>
            <BoardsScrollView />
        </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#f0f',
      //alignItems: 'center',
      //justifyContent: 'center',
    },
  });

Tasks.navigationOptions = {
    drawerLabel: 'Tasks',
    drawerIcon: () => (
        <Image source={TaskIcon} style={{width:30, height:30}} />
    ),
}