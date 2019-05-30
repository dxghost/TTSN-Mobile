import React from 'react'
import { View, Text, Image } from 'react-native'
import BacklogDetailIcon from "../assets/icons/icons8-cashbook-64.png"
import CalendarIcon from "../assets/icons/icons8-calendar-64.png"


export default class BacklogDetailScreen extends React.Component {
    render() {
        return (
            <View>
                
            </View>
        )
    }
}
BacklogDetailScreen.navigationOptions = {
    drawerLabel: 'Backlog Details',
    drawerIcon: () => (
        <Image source={BacklogDetailIcon}  style={{width:30,height:30}} />
    ),
};