import React from 'react'
import {View, Text, StyleSheet} from 'react-native'

const task={
    name : "update database",
    description : "modify task moded and ...modify task moded and ...modify task",
    id : 1,
    user : null,
}

export default class Task extends React.Component{
    render(){
        return(
            <View style={styles.container}>
                <Text style={styles.text}>name : {task.name}</Text>
                <Text style={styles.text}>description : {task.description}</Text>
                <Text style={styles.text}>id : {task.id}</Text>
                <Text style={styles.text}>user : {task.user !== null? task.user:"not assigned yet" }</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container:{
        marginTop: 25,
        justifyContent: 'center',
        alignItems: 'center',
    },
    text:{
        fontSize:18,
    }});