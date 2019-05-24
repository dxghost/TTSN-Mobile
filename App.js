import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import PeopleList from './components/people/people_list/PeopleList'
import { Divider } from 'react-native-elements';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Divider style={styles.people_list}>
          <PeopleList />
        </Divider>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    backgroundColor: '#fff',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
  people_list:{
    // marginTop:"10%",
  }
});
