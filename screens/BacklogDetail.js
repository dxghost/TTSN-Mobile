import React from 'react'
import { ScrollView, View, Text, Image, StyleSheet } from 'react-native'
import BacklogDetailIcon from "../assets/icons/icons8-cashbook-64.png"
import CalendarIcon from "../assets/icons/icons8-calendar-64.png"
import TaskList from "../components/backlogs/task_list/TaskList"
import { ListItem, Divider, Header, Icon } from "react-native-elements"
import Separator from "../components/profile/Separator"


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
        <Header
          backgroundColor='rgb(73, 14, 97)'
          centerComponent={{ text: 'Backlog Details', style: { color: '#fff' } }}
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
                <Text style={styles.telNameText}>Priority : </Text>
                <Text style={styles.telNumberText}>{(backlog_data.priority).toString()}</Text>
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
                <Text style={styles.telNameText}>Backlog Subject : </Text>
                <Text style={styles.telNumberText}>{backlog_data.name}</Text>
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
                <Text style={styles.telNameText}>Backlog Description : </Text>
                <Text style={styles.telNumberText}>{backlog_data.description}</Text>
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
                <Text style={styles.telNameText}>Definition of Done : </Text>
                <Text style={styles.telNumberText}>{backlog_data.definition_done}</Text>
              </View>
            </View>
          </View>
          {Separator()}
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
  },
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
