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
// const trueBacklogDetails = {
//   "id": 1,
//   "name": "cart",
//   "priority": 1,
//   "defenition_done": "be done",
//   "description": "some description",
//   "create_date": "2019-06-03"
// }

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
    const backlog_data=this.props.navigation.getParam("backlogdata")
    return (
      <ScrollView style={styles.container}>
        {/* TODO Header name would be BacklogDetails.name */}
        {/* <Text>{this.props.backlog_name}</Text> */}
        <Text style={{ fontSize: 20 }}> {backlog_data.name} </Text>
        <ListItem
          title={"Definition of done: "}
          subtitle={backlog_data.defenition_done}
          titleStyle={{ color: "rgb(150, 13, 255)", fontSize: 20 }}
        />
        <ListItem
          title={"Priority: "}
          subtitle={(backlog_data.priority).toString()}
          titleStyle={{ color: "rgb(150, 13, 255)", fontSize: 20 }}
        />
        <ListItem
          title={"Description : "}
          subtitle={backlog_data.description}
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
