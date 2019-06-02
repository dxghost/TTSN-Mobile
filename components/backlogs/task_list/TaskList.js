import React from 'react'
import { View, Text, Image, StyleSheet } from 'react-native'
// import BacklogDetailIcon from "../assets/icons/icons8-cashbook-64.png"
import CalendarIcon from "../../../assets/icons/icons8-calendar-64.png"
import { Divider, ListItem } from 'react-native-elements';
import Accordion from 'react-native-collapsible/Accordion';


export default class TaskList extends React.Component {
  state = {
    activeSections: [],
  };

  _renderSectionTitle = () => {
    return (
      <View></View>
    );
  };

  _renderHeader = section => {
    return (
      <ListItem
        // style={styles.taskHeaderContainer}
        title={section.title}
        subtitle={"picked by " + section.picker}
        rightAvatar={<Image source={CalendarIcon} style={{ width: 30, height: 30 }} />}
        rightSubtitle={section.created_date}
        rightSubtitleStyle={{ fontSize: 12 }}
      // bottomDivider={true}
      />
    );
  };

  _renderContent = section => {
    return (
      <ListItem
        title={section.description}
        titleStyle={{color:"#9B689C",fontSize:15}}
      />
    );
  };

  _updateSections = activeSections => {
    this.setState({ activeSections });
  };

  render() {
    return (
      <View style={styles.backlogDetailsContainer}>
        <Accordion
          sectionContainerStyle={styles.sectionContainer}
          sections={this.props.Tasks}
          activeSections={this.state.activeSections}
          renderSectionTitle={this._renderSectionTitle}
          renderHeader={this._renderHeader}
          renderContent={this._renderContent}
          onChange={this._updateSections}
        />
      </View>
    )
  }
}


const styles = StyleSheet.create({
  taskHeaderText: {
    fontSize: 25,

  },
  sectionContainer: {
    borderBottomWidth: 1,
    borderBottomColor: "rgb(150, 13, 255)",
    paddingHorizontal: "3%"
  }

})
