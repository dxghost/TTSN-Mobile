import React from 'react'
import { ScrollView, View, Text, Image, StyleSheet } from 'react-native'
import BacklogDetailIcon from "../assets/icons/icons8-cashbook-64.png"
import CalendarIcon from "../assets/icons/icons8-calendar-64.png"
import TaskList from "../components/backlogs/task_list/TaskList"
import { ListItem, Divider, Header } from "react-native-elements"


export default class BacklogDetailScreen extends React.Component {
  state = {
    isLoading: true,
    taskdata: []
  }
  _requestHandler = async () => {
    const backlog_data = this.props.navigation.getParam("backlogdata")
    let apiUrl = `http://mamaly100.pythonanywhere.com/Backlog/${backlog_data.id}/Tasks/`;
    console.log(apiUrl)
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
    var result = await this._requestHandler()    
    result = await result.json()
    this.setState({
      data: result,
      isLoading: false
    })
  }

  render() {
    const { isLoading, data } = this.state;
    const backlog_data = this.props.navigation.getParam("backlogdata")
    return (
      <View>
        <Header style={{color:'rgb(150, 13, 255'}}
          centerComponent={{ text: 'BackLog Details', style: { color: '#fff' } }}
          />
      <ScrollView>
        {/* TODO Header name would be BacklogDetails.name */}
        {/* <Text>{this.props.backlog_name}</Text> */}
        <Text style={{ fontSize: 20 }}> {backlog_data.name} </Text>
        <ListItem
          title={"Definition of done: "}
          subtitle={backlog_data.definition_done}
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
          {isLoading ? <Text>Loading</Text> : <TaskList Tasks={data} />}
        </ScrollView>
      </ScrollView>
      </View>
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
  backlogDetailsContainer: {
    // backgroundColor: 'grey',
    // marginTop: "5%",
    padding: "1%",
  }
})
