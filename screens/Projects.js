import React from 'react'
import {StyleSheet, View, StatusBar} from 'react-native'
import { TabView } from 'react-native-tab-view'
import AllProjects from '../components/project/AllProjects'
import UserProjects from '../components/project/UserProjects'

export default class Projects extends React.Component{
    state = {
        index: 0,
        routes: [
          { key: 'user', title: 'User Projects' },
          { key: 'all', title: 'All Projects' },
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
                  case 'user':
                    return <UserProjects navigation = {navigation} />;
                  case 'all':
                    return <AllProjects/>;
                  default:
                    return null;
                }
              }
            }
            onIndexChange={(index) => this.setState({index})}
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
  });

Projects.navigationOptions = {
    drawerLabel: 'Projects',
}

