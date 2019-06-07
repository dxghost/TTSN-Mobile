import React from 'react'
import { ScrollView, View, Text, Image, StyleSheet } from 'react-native'
import { ListItem, Divider } from "react-native-elements"
import CreateNew from '../assets/icons/icons8-add-property-96.png'


export default class CreateBacklog extends React.Component{
    render(){
        return(
            <View>

            </View>
        )
    }
}


CreateBacklog.navigationOptions = {
    drawerLabel: 'Create a new Backlog',
    drawerIcon: () => (
      <Image source={CreateNew} style={{ width: 30, height: 30 }} />
    ),
  };