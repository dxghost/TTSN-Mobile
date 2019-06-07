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
// const trueBacklogDetails = {
//   "id": 1,
//   "name": "cart",
//   "priority": 1,
//   "defenition_done": "be done",
//   "description": "some description",
//   "create_date": "2019-06-03"
// }
// const data = [
//     { "id": 1, "name": "cart", "priority": 1, "defenition_done": "be done", "description": "some description", "create_date": "2019-06-03" },
//     { "id": 2, "name": "market", "priority": 2, "defenition_done": "can buy shit", "description": "some other description", "create_date": "2019-06-03" },
//     { "id": 3, "name": "some backlog", "priority": 3, "defenition_done": "some defenition", "description": "some description", "create_date": "2019-06-03" }
// ];

export default class BacklogDetailScreen extends React.Component {
  state = {
    isLoading: true,
    taskdata: []
  }
  _requestHandler = async () => {
    let apiUrl = 'http://mamaly100.pythonanywhere.com/Task/';
    let formData = new FormData();
    let options = {
      method: 'GET',
      // body: formData,
      headers: {
        Accept: '*/*',
        'Content-Type': 'application/json',
        // 'Authorization': 'JWT eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJvcmlnX2lhdCI6MTU1OTU1NjUxNCwiZXhwIjoxNTU5NTYyNTE0LCJ1c2VyX2lkIjoxLCJlbWFpbCI6Im1haGRpcGF6b29raTIxQGdtYWlsLmNvbSIsInVzZXJuYW1lIjoiZHgifQ.kCdXNmh_o28eLCPsHOwIMefYE12ckg2QI0uMkfIsWZw'
      }
    };
    return fetch(apiUrl, options)
  }

  componentWillMount = async () => {
    var f = await this._requestHandler()
    f = await f.json()
    // console.log(f)
    this.setState({
      data: f,
      isLoading: false
    })
  }

  render() {
    const { isLoading, data } = this.state;
    const trueBacklogDetails=this.props.navigation.getParam("backlogdata")
    return (
      <ScrollView style={styles.container}>
        {/* TODO Header name would be BacklogDetails.name */}
        {/* <Text>{this.props.backlog_name}</Text> */}
        <Text style={{ fontSize: 20 }}> {trueBacklogDetails.name} </Text>
        <ListItem
          title={"Definition of done: "}
          subtitle={trueBacklogDetails.defenition_done}
          titleStyle={{ color: "rgb(150, 13, 255)", fontSize: 20 }}
        />
        <ListItem
          title={"Priority: "}
          subtitle={(trueBacklogDetails.priority).toString()}
          titleStyle={{ color: "rgb(150, 13, 255)", fontSize: 20 }}
        />
        <ListItem
          title={"Description : "}
          subtitle={trueBacklogDetails.description}
          titleStyle={{ color: "rgb(150, 13, 255)", fontSize: 20 }}
        />
        <ListItem
          title="Tasks:"
          titleStyle={{ color: "rgb(150, 13, 255)", fontSize: 20 }}
        />
        <ScrollView style={styles.backlogDetailsContainer}>
          {/* <TaskList Tasks={this.props.data} isLoading={this.state.isLoading} /> */}
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
