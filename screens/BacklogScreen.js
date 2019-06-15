import React from 'react'
import { Image, StyleSheet, View } from 'react-native'
import BacklogList from '../components/backlogs/backlog_list/backlogs_list'
import BacklogsIcon from '../assets/icons/icons8-brief-64.png'
import { Divider, Header } from 'react-native-elements';


export default class BacklogScreen extends React.Component {
    render() {
        const { navigate } = this.props.navigation;
        return (
            <View style={styles.container}>
                <Header style={{color:'rgb(150, 13, 255'}}
                centerComponent={{ text: 'BackLogs', style: { color: '#fff' } }}
                />
                <BacklogList navigation={this.props.navigation} />
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
    container: {
        width: "100%",
        height: "100%",
        padding: 0
    }
})