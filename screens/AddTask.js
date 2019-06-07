import React from 'react'
import {View, Text, Picker, StyleSheet} from 'react-native'
import {TextField} from 'react-native-material-textfield'
import {Dropdown} from 'react-native-material-dropdown'
import {Button} from 'react-native-elements'


export default class AddTask extends React.Component{
    state = {taskDsr:'', taskName:'', backLog:''};
    render(){
        let data = [{
            value: 'updateDB',
          }, {
            value: 'AddName',
          }, {
            value: 'BuildMain',
          }];
        let {taskDsr, taskName, backLog} = this.state;
        return(
            <View style={styles.container}>
                <View>
                <TextField
                //style={styles.field}
                label='Task Name:'
                value={taskName}
                onChangeText={(taskName) => this.setState({taskName})}/>

                <TextField
                //style={styles.field}
                label='Task Description:'
                characterRestriction={100}
                value={taskDsr}
                onChangeText={(taskDsr) => this.setState({taskDsr})}/>

                <Dropdown
                label='Related BackLog'
                data={data}
                />

                <View style={{paddingTop:20}}>
                <Button 
                title='Add Task'
                onPress={() => console.log('Pressed')}
                type='solid'
                />
                </View>
                
                </View>
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
        borderWidth:2,
        borderColor: 'blue',
    },});

    AddTask.navigationOptions = {
        drawerLabel: 'AddTask',
    }    