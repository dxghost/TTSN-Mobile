import React from 'react'
import {ScrollView, Text, StyleSheet,StatusBar} from 'react-native'
import {ListItem} from 'react-native-elements'


export default class Task extends React.Component{
    render(){

    const task = this.props.navigation.getParam("taskData")
        return(

        <ScrollView style={styles.container}>

        <Text style={{ fontSize: 20 }}> {task.title} </Text>
        <ListItem
          title={"Title: "}
          subtitle={task.title}
          titleStyle={{ color: "rgb(150, 13, 255)", fontSize: 20 }}
        />
        <ListItem
          title={"Description: "}
          subtitle={(task.description).toString()}
          titleStyle={{ color: "rgb(150, 13, 255)", fontSize: 20 }}
        />
        <ListItem
          title={"Task State : "}
          subtitle={task.TaskState}
          titleStyle={{ color: "rgb(150, 13, 255)", fontSize: 20 }}
        />
        <ListItem
          title={"Related BackLog : "}
          subtitle={task.backLogID}
          titleStyle={{ color: "rgb(150, 13, 255)", fontSize: 20 }}
        />
        <ListItem
          title={"Task Picker : "}
          subtitle={task.TaskState != "TO_DO"? task.picker:"not assigned yet" }
          titleStyle={{ color: "rgb(150, 13, 255)", fontSize: 20 }}
        />
        <ListItem
          title={"Task ID : "}
          subtitle={task.id}
          titleStyle={{ color: "rgb(150, 13, 255)", fontSize: 20 }}
        />
        
      </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: StatusBar.currentHeight,
        // alignItems: 'center',
      },
    text:{
        fontSize:18,
    }});