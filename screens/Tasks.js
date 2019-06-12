import React from 'react'
import {StyleSheet, View, Image, Text, ScrollView, Dimensions, StatusBar} from 'react-native'
import TaskIcon from '../assets/tasks.png'
import { TabView, SceneMap } from 'react-native-tab-view'
import { FAB } from 'react-native-paper';
import TodoBoard from '../components/task/TodoBoard';
import InProgressBoard from '../components/task/InProgressBoard';
import DoneBoard from '../components/task/DoneBoard';


// export default class FirstRoute extends React.PureComponent {
//   render() {
//     return (
//       <View style={[styles.scene]}>
//       <TodoBoard
//       navigation = {navigation} />
//       </View>
//     );
//   }
// }
// export default class SecondRoute extends React.PureComponent {
//   render() {
//     return (
//       <View style={[styles.scene]}>
//       <InProgressBoard
//       navigation = {navigation} />
//       </View>
//     );
//   }
// }
// export default class ThirdRoute extends React.PureComponent {
//   render() {
//     return (
//       <View style={[styles.scene]}>
//       <DoneBoard
//       navigation = {navigation} />
//       </View>
//     );
//   }
// }

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

      const navigation = this.props.navigation
      return (
            <View style = {styles.container}>
            <TabView
            lazy = {true}
            lazyPreloadDistance={2}
            navigationState={this.state}
            renderScene = { 
              ({ route }) => {
                switch (route.key) {
                  case 'todo':
                    return <TodoBoard navigation = {navigation} />;
                  case 'inprog':
                    return <InProgressBoard navigation = {navigation} />;
                  case 'done':
                    return <DoneBoard navigation = {navigation} />;
                  default:
                    return null;
                }
              }
            }
            onIndexChange={(index) => this.setState({index})}
            initialLayout={{width: Dimensions.get('window').width}}
            />

            <FAB 
            style={styles.fab}
            small={false}
            icon="add"
            onPress={() => navigation.navigate('AddTask')}
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

