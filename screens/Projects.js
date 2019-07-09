import React from 'react'
import { StyleSheet, View, StatusBar } from 'react-native'
import { TabView, TabBar } from 'react-native-tab-view'
import AllProjects from '../components/project/AllProjects'
import UserProjects from '../components/project/UserProjects'
import { FAB } from 'react-native-paper'

export default class Projects extends React.Component {
  state = {
    index: 0,
    routes: [
      { key: 'user', title: 'User Projects' },
      { key: 'all', title: 'All Projects' },
    ],
  };

  render() {

    const navigation = this.props.navigation
    return (
      <View style={styles.container}>
        <TabView
          lazy={true}
          lazyPreloadDistance={2}
          navigationState={this.state}
          renderTabBar={props =>
            <TabBar
              {...props}
              indicatorStyle={{ backgroundColor: 'white' }}
              style={{ backgroundColor: 'rgb(73, 14, 97)' }}
            />
          }
          renderScene={
            ({ route }) => {
              switch (route.key) {
                case 'user':
                  return <UserProjects navigation={navigation} />;
                case 'all':
                  return <AllProjects navigation={navigation} />;
                default:
                  return null;
              }
            }
          }
          onIndexChange={(index) => this.setState({ index })}
        />
        <FAB
          style={styles.fab}
          small={false}
          icon="add"
          color='white'

          onPress={() =>
            this.props.navigation.navigate('CreateProj')
          }
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
    backgroundColor: 'rgb(87, 42, 112)'
  },
});

Projects.navigationOptions = {
  drawerLabel: 'Projects',
}

