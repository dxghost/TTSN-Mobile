import React from 'react'
import { Image, StyleSheet, View } from 'react-native'
import BacklogList from '../components/backlogs/backlog_list/backlogs_list'
import BacklogsIcon from '../assets/icons/icons8-brief-64.png'
import { FAB } from 'react-native-paper'
import { Divider } from 'react-native-elements';


export default class BacklogScreen extends React.Component {
    render() {
        const { navigate } = this.props.navigation;
        return (
            <View style={styles.container}>
                <BacklogList navigation={this.props.navigation} />
                <FAB
                    style={styles.fab}
                    small={false}
                    icon="add"
                    onPress={() => navigate('AddBacklog')}
                />
            </View>
        )
    }
}
BacklogScreen.navigationOptions = {
    drawerLabel: 'Backlogs',
    drawerIcon: () => (
        <Image source={BacklogsIcon} style={{ width: 30, height: 30 }} />
    ),
};


const styles = StyleSheet.create({
    fab: {
        position: 'absolute',
        margin: 16,
        right: 0,
        bottom: 0,
    },
    container: {
        width: "100%",
        height: "100%",
        padding: 0
    }
})