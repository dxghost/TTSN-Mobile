import React from "react";
import {
  StyleSheet,
  View,
  ActivityIndicator,
  AsyncStorage
} from "react-native";
import { FlatList, State } from "react-native-gesture-handler";
import { ListItem, Card, Button } from "react-native-elements";
import { connect } from "react-redux";
import Icon from "react-native-vector-icons/FontAwesome";
import { updateProject } from "../../actions/projectActions";
import { updateUser } from "../../actions/projectsActions";
import { clear } from "../../actions/taskActions";
import { getUserProjects } from "../../actions/fetcher";


class UserProjects extends React.Component {
  navigation = this.props.navigation;
  componentWillMount = async () => {
    getUserProjects().then(f => this.props.user_update(f));
  };

  keyExtractor = (item, index) => index.toString();
  navigation = this.props.navigation;
  renderItem = ({ item }) => (
    <Card style={{ paddingHorizontal: 1, flexDirection: "row" }}>
      <ListItem
        key={item.id}
        title={item.Name}
        titleStyle={{ fontSize: 21, color: "rgb(122,169,220)" }}
        subtitle={item.StartDate}
        rightElement={
          <Button
            buttonStyle={{ backgroundColor: '#8f2883' }}
            icon={<Icon name="arrow-right" size={15} color="white" />}
            onPress={async () => {
              this.navigation.navigate("ProjectDashboard", { project: item });
              var projID = item.id.toString();
              console.log("current item", projID);
              await AsyncStorage.setItem("currentProjectID", projID);
              this.props.clear_tasks();
              await AsyncStorage.setItem("performFetch", "true");
              this.props.project_update(item);
            }}
          />
        }
      />
    </Card>
  );
  render() {
    return (
      <View style={!this.props.projects.user ? styles.container : {}}>
        {!this.props.projects.user ? (
          <ActivityIndicator size="large" color="#DE94FF" />
        ) : (
            <FlatList
              keyExtractor={this.keyExtractor}
              data={this.props.projects.user}
              renderItem={this.renderItem}
            />
          )}
      </View>
    );
  }
}

function mapStateToProps(state) {
  return {
    user: state.user,
    projects: state.projects
  };
}

function mapDispatchToProps(dispatch) {
  return {
    clear_tasks: () => dispatch(clear()),
    user_update: data => dispatch(updateUser({ data: data })),
    project_update: project => dispatch(updateProject(project))
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UserProjects);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  }
});
