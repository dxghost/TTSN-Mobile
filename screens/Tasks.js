import React from 'react'
import {StyleSheet, View, Image, Text, ScrollView, Dimensions, StatusBar} from 'react-native'
import TaskIcon from '../assets/tasks.png'
import { TabView, SceneMap } from 'react-native-tab-view'
import TaskBoard from '../components/task/TaskBoard';
import { FAB } from 'react-native-paper';
import TodoBoard from '../components/task/TodoBoard';
import InProgressBoard from '../components/task/InProgressBoard';
import DoneBoard from '../components/task/DoneBoard';

const FirstRoute = () => (
    <View style={[styles.scene]}>
    <TodoBoard/>
    </View>
  );
  const SecondRoute = () => (
    <View style={[styles.scene]}>
    <InProgressBoard/>
    </View>
);
const ThirdRoute = () => (
    <View style={[styles.scene]}>
    <DoneBoard />
    </View>
);


export default class Tasks extends React.Component{
    state = {
        index: 0,
        routes: [
          { key: 'todo', title: 'To Do' },
          { key: 'inprog', title: 'In Progress' },
          { key: 'done', title: 'Done'}
        ],
      };
      
    render(){
        return (
            <View style = {styles.container}>

            <TabView
            navigationState={this.state}
            renderScene={SceneMap({
                todo: FirstRoute,
                inprog: SecondRoute,
                done: ThirdRoute
              })}
            onIndexChange={(index) => this.setState({index})}
            initialLayout={{width: Dimensions.get('window').width}}
            
            />

            <FAB 
            style={styles.fab}
            small={false}
            icon="add"
            onPress={() => console.log('pressed')}
            />
            </View>
        );
    }
}

const styles = StyleSheet.create({

    container: {
        height: '100%',
        width: '100%',
        paddingTop: StatusBar.currentHeight,
    },
    scene: {
        flex: 1,
      },
    fab: {
        position: 'absolute',
        margin: 16,
        right: 0,
        bottom: 0,
      },
  });

Tasks.navigationOptions = {
    drawerLabel: 'Tasks',
    drawerIcon: () => (
        <Image source={TaskIcon} style={{width:30, height:30}} />
    ),
}