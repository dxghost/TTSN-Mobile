import React from 'react';
import { StyleSheet, Text, View, FlatList, Image, ActivityIndicator } from 'react-native';
import { Avatar, Divider, ListItem, Header, Icon } from "react-native-elements";
import PeopleIcon from '../../../assets/icons/icons8-students-64.png';
import { connect } from 'react-redux'
import { getCollabs } from '../../../actions/fetcher'
import { FAB } from 'react-native-paper'


class PeopleList extends React.Component {
    state = {
        isLoading: true,
        data: []
    }
    componentWillMount = async () => {
        getCollabs(this.props.project.id).then((f) => this.setState({ isLoading: false, data: f }))
    }
    keyExtractor = (item, index) => index.toString()
    renderItem = ({ item }) => (
        <ListItem
            key={item.id}
            rightIcon={
                <Icon
                    name='deleteuser'
                    type='antdesign'
                    color='#E0005A' />
            }
            leftAvatar={{ source: { uri: item.profile_picture } }}
            title={item.username}
            subtitle={item.email}
            onPress={() => this.props.navigation.navigate("CollabProfile", { profile: item })}
        />
    )
    render() {
        return (

            this.state.isLoading ? <View style={{ justifyContent: 'center', marginTop: "50%" }}>
                <ActivityIndicator size="large" color="#DE94FF" />
            </View> :
                <View style={styles.container}>
                    <Header
                        backgroundColor='rgb(73, 14, 97)'
                        centerComponent={{ text: `Collaborators`, style: { color: 'white' } }}
                    />
                    <FlatList
                        keyExtractor={this.keyExtractor}
                        data={this.state.data}
                        renderItem={this.renderItem}
                    />
                    <FAB
                        style={styles.fab}
                        small={false}
                        icon="add"
                        color='white'

                        onPress={() => this.props.navigation.navigate("InviteUser")}
                    />
                </View>

        );
    }
}

function mapStateToProps(state) {
    return {
        project: state.project,
    }
}

PeopleList.navigationOptions = {
    drawerLabel: 'Collaborators',
    drawerIcon: () => (
        <Image source={PeopleIcon} style={{ width: 30, height: 30 }} />
    ),
};


export default connect(mapStateToProps, null)(PeopleList)



const styles = StyleSheet.create({
    container: {
        flex: 1,
        // marginTop: "8%"
    },
    fab: {
        position: 'absolute',
        margin: 16,
        right: 0,
        bottom: 0,
        backgroundColor: 'rgb(87, 42, 112)'
    },
})