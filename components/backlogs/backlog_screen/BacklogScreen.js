import React from 'react';
import { StyleSheet, Text, View, FlatList, Image } from 'react-native';
import { Avatar, Divider, ListItem, Header, Icon } from "react-native-elements";

const list = [
]


export default class BacklogScreen extends React.Component {
    keyExtractor = (item, index) => index.toString()
    renderItem = ({ item }) => (
        <ListItem
        />
    )
    render() {
        return (
            <View>

            </View>
        );
    }
}
PeopleList.navigationOptions = {
    drawerLabel: 'Backlogs',
    // drawerIcon: () => (
    //     <Image source={PeopleIcon} />
    // ),
};