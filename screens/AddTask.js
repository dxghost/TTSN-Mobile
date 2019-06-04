import React from 'react'
import {View, Text, StyleSheet} from 'react-native'
import {TextField} from 'react-native-material-textfield'


export default class AddTask extends React.Component{
    state = {taskDsr:'', taskName:''};
    render(){
        let {taskDsr, taskName} = this.state;
        return(
            <View style={styles.container}>
                <TextField
                style={styles.field}
                label='Task Name:'
                value={taskName}
                onChangeText={(taskName) => this.setState({taskName})}/>

                <TextField
                style={styles.field}
                label='Task Description:'
                characterRestriction={100}
                value={taskDsr}
                onChangeText={(taskDsr) => this.setState({taskDsr})}/>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container:{
        paddingTop: 20,
        paddingRight: 20,
        paddingLeft: 20,
        // borderColor: 'red',
        // borderWidth: 2,
        flex: 1,
        // marginTop: 25,
        // justifyContent: 'center',
        // alignItems: 'center',
    },
    text:{
        fontSize:18,
    },
    field:{
        
        //borderColor: 'blue',
        //borderWidth: 2,
        // minWidth : 700,
    },});

    