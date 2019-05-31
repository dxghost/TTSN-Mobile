import React from 'react'
import {StyleSheet, ScrollView, View, Text,Dimensions} from 'react-native'
import {FAB} from 'react-native-paper'
import TaskBoard from './TaskBoard';

//const style = 

export default class BoardsScrollView extends React.Component{
    render() {
        return (
            <View>
            <ScrollView horizontal = {true} pagingEnabled = {true}>
                
                <TaskBoard buttonTitle='Pick'/>
                <TaskBoard buttonTitle='For Review'/>
                <TaskBoard buttonTitle='Done'/>
                <TaskBoard buttonTitle=''/>
                
            </ScrollView>

            <FAB 
            style={styles.fab}
            small={false}
            icon="add"
            onPress={() => console.log('Pressed')}
            />

            </View>
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
    },

    fab: {
        position: 'absolute',
        margin: 16,
        right: 0,
        bottom: 0,
      },
});