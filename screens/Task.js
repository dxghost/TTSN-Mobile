import React from 'react'
import {ScrollView, Text, StyleSheet,StatusBar, View} from 'react-native'
import {ListItem, Header} from 'react-native-elements'

export default class Task extends React.Component{
    
    render(){

    const task = this.props.navigation.getParam("taskData")
        return(

          <View>
            <Header style={{color:'rgb(150, 13, 255'}}
              centerComponent={{ text: 'Task Detail', style: { color: '#fff' } }}
            />
        <ScrollView>

        <Text style={{ fontSize: 20 }}> {task.title} </Text>
        {/* <ListItem
          title={"Title: "}
          subtitle={task.title}
          titleStyle={{ color: "rgb(150, 13, 255)", fontSize: 20 }}
        /> */}
        <ListItem
          title={"Description : "}
          subtitle={task.description}
          titleStyle={{ color: "rgb(150, 13, 255)", fontSize: 20 }}
        />
        <ListItem
          title={"Task State : "}
          subtitle={task.TaskState}
          titleStyle={{ color: "rgb(150, 13, 255)", fontSize: 20 }}
        />
        <ListItem
          title={"Related BackLog : "}
          subtitle={task.BackLogID.toString()}
          titleStyle={{ color: "rgb(150, 13, 255)", fontSize: 20 }}
        />
        <ListItem
          title={"Task Picker : "}
          subtitle={(task.TaskState == "TO_DO" || !task.picker)? "not assigned yet": task.picker.toString() }
          titleStyle={{ color: "rgb(150, 13, 255)", fontSize: 20 }}
        />
        <ListItem
          title={"Task ID : "}
          subtitle={task.id.toString()}
          titleStyle={{ color: "rgb(150, 13, 255)", fontSize: 20 }}
        />
      </ScrollView>
      </View>
        );
    }
}

const styles = StyleSheet.create({
    text:{
        fontSize:18,
    }});