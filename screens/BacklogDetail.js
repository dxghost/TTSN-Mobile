import React from 'react'
import { ScrollView, View, Text, Image, StyleSheet } from 'react-native'
import BacklogDetailIcon from "../assets/icons/icons8-cashbook-64.png"
import CalendarIcon from "../assets/icons/icons8-calendar-64.png"
import TaskList from "../components/backlogs/task_list/TaskList"
import { ListItem, Divider } from "react-native-elements"

const Tasks = [
  {
    title: 'Do This',
    created_date: "Jan 21 2012",
    description: 'description sampleLorem ipsum.hfgfdrstufgohkjfgjkffgjh;jkl..',
    picker: "the great dx",
  },
  {
    title: 'Do That',
    created_date: "Jan 21 2012",
    description: 'Lorem ipsum...',
    picker: "the great ghost",
  },
  {
    title: 'Do that again',
    created_date: "Jan 21 2012",
    description: 'Lorem ipsum...',
    picker: "the great mahdi",
  },
  {
    title: 'refactor code',
    created_date: "Jan 21 2012",
    description: 'Lorem ipsum...',
    picker: "the great pazooki",
  },
  {
    title: 'Fifth',
    created_date: "Jan 21 2012",
    description: 'Lorem ipsum...',
    picker: "the great fullstack",
  },
  {
    title: 'Sixth',
    created_date: "Jan 21 2012",
    description: 'Lorem ipsum...',
    picker: "the great dx",
  },
];
const BacklogDetails = {
  name: "Sample backlog #1",
  priority: '3',
  definitionOfDone: "when the backlog is working properly",
  description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,",

}

export default class BacklogDetailScreen extends React.Component {

  render() {
    return (
      <ScrollView style={styles.container}>
        {/* TODO Header name would be BacklogDetails.name */}
        {/* <Text>{this.props.backlog_name}</Text> */}
        <Text style={{ fontSize: 20 }}> {BacklogDetails.name} </Text>
        <ListItem
          title={"Definition of done: "}
          subtitle={BacklogDetails.definitionOfDone}
          titleStyle={{ color: "rgb(150, 13, 255)", fontSize: 20 }}
        />
        <ListItem
          title={"Priority: "}
          subtitle={BacklogDetails.priority}
          titleStyle={{ color: "rgb(150, 13, 255)", fontSize: 20 }}
        />
        <ListItem
          title={"Description : "}
          subtitle={BacklogDetails.description}
          titleStyle={{ color: "rgb(150, 13, 255)", fontSize: 20 }}
        />
        <ListItem
          title="Tasks:"
          titleStyle={{ color: "rgb(150, 13, 255)", fontSize: 20 }}
        />
        <ScrollView style={styles.backlogDetailsContainer}>
          <TaskList Tasks={Tasks} />
        </ScrollView>
      </ScrollView>
    )
  }
}
BacklogDetailScreen.navigationOptions = {
  drawerLabel: 'Backlog Details',
  drawerIcon: () => (
    <Image source={BacklogDetailIcon} style={{ width: 30, height: 30 }} />
  ),
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: "8%",
    // alignItems: 'center',
  },
  backlogDetailsContainer: {
    // backgroundColor: 'grey',
    // marginTop: "5%",
    padding: "1%",
  }
})
