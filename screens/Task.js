import React from 'react'
import { ScrollView, Text, StyleSheet, StatusBar, View } from 'react-native'
import { ListItem, Header, Badge, Icon } from 'react-native-elements'
import Separator from '../components/profile/Separator'
export default class Task extends React.Component {

  render() {

    const task = this.props.navigation.getParam("taskData")
    var stateColor
    var stateType
    if (task.TaskState=="TO_DO"){stateColor="red",stateType="To Do"}
    else if(task.TaskState=="IN_PROGRESS"){stateColor="yellow",stateType="In Progress"}
    else {stateColor="green",stateType="Done"}
    return (

      <View>
        <Header
          backgroundColor='rgb(73, 14, 97)'
          centerComponent={{ text: 'Task Detail', style: { color: '#fff' } }}
          containerStyle={{ marginBottom: "10%" }}
        />
        <ScrollView>
          <View style={styles.container}>
            <View style={styles.iconRow}>
              <Icon
                name="alpha-t-box"
                type="material-community"
                underlayColor="transparent"
                iconStyle={styles.telIcon}
              />
            </View>
            <View style={styles.telRow}>
              <View style={styles.telNumberColumn}>
                <Text style={styles.telNameText}>Task ID : </Text>
                <Text style={styles.telNumberText}>{task.id.toString()}</Text>
              </View>
            </View>
          </View>
          {Separator()}
          <View style={styles.container}>
            <View style={styles.iconRow}>
              <Icon
                name="calendar-text"
                type="material-community"
                underlayColor="transparent"
                iconStyle={styles.telIcon}
              />
            </View>
            <View style={styles.telRow}>
              <View style={styles.telNumberColumn}>
                <Text style={styles.telNameText}>Task Name : </Text>
                <Text style={styles.telNumberText}>{task.title}</Text>
              </View>
            </View>
          </View>
          {Separator()}
          <View style={styles.container}>
            <View style={styles.iconRow}>
              <Icon
                name="clipboard-text"
                type="material-community"
                underlayColor="transparent"
                iconStyle={styles.telIcon}
              />
            </View>
            <View style={styles.telRow}>
              <View style={styles.telNumberColumn}>
                <Text style={styles.telNameText}>Task Description : </Text>
                <Text style={styles.telNumberText}>{task.description}</Text>
              </View>
            </View>
          </View>
          {Separator()}
          <View style={styles.container}>
            <View style={styles.iconRow}>
              <Icon
                name="file-document-box-multiple"
                type="material-community"
                underlayColor="transparent"
                iconStyle={styles.telIcon}
              />
            </View>
            <View style={styles.telRow}>
              <View style={styles.telNumberColumn}>
                <Text style={styles.telNameText}>Related Backlog : </Text>
                <Text style={styles.telNumberText}>{task.BackLogID}</Text>
              </View>
            </View>
          </View>
          {Separator()}
          <View style={styles.container}>
            <View style={styles.iconRow}>
              <Icon
                name="alert-decagram"
                type="material-community"
                underlayColor="transparent"
                iconStyle={{
                  color: stateColor,
                  fontSize: 30,
                }}
              />
            </View>
            <View style={styles.telRow}>
              <View style={styles.telNumberColumn}>
                <Text style={styles.telNameText}>Task State : </Text>
                <Text style={styles.telNumberText}>{stateType}</Text>
              </View>
            </View>
          </View>
          {Separator()}
          <View style={styles.container}>
            <View style={styles.iconRow}>
              <Icon
                name="account-star"
                type="material-community"
                underlayColor="transparent"
                iconStyle={styles.telIcon}
              />
            </View>
            <View style={styles.telRow}>
              <View style={styles.telNumberColumn}>
                <Text style={styles.telNameText}>Task Picker : </Text>
                <Text style={styles.telNumberText}>{(task.TaskState == "TO_DO" || !task.picker) ? "not assigned yet" : task.picker.toString()}</Text>
              </View>
            </View>
          </View>
          {Separator()}
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    marginBottom: 25,
  },
  iconRow: {
    flex: 2,
    justifyContent: 'center',
  },
  smsIcon: {
    color: 'gray',
    fontSize: 30,
  },
  smsRow: {
    flex: 2,
    justifyContent: 'flex-start',
  },
  telIcon: {
    color: '#8d42f5',
    fontSize: 30,
  },
  telNameColumn: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
  },
  telNameText: {
    color: 'gray',
    fontSize: 14,
    fontWeight: '200',
  },
  telNumberColumn: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    marginBottom: 5,
  },
  telNumberText: {
    fontSize: 16,
  },
  telRow: {
    flex: 6,
    flexDirection: 'column',
    justifyContent: 'center',
  },
  text: {
    fontSize: 18,
  }
})
