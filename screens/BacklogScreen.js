import React from 'react'
import { Image, StyleSheet, View, Text } from 'react-native'
import BacklogList from '../components/backlogs/backlog_list/backlogs_list'
import BacklogPrioritize from '../components/backlogs/backlog_list/backlog_prioritize'
import BacklogsIcon from '../assets/icons/icons8-brief-64.png'
import { Divider, Header, Icon } from 'react-native-elements';


export default class BacklogScreen extends React.Component {
    state = {
        edit: false
    }
    render() {
        const { navigate } = this.props.navigation;
        const { edit } = this.state
        return (
            <View style={styles.container}>
                <Header
                    backgroundColor='rgb(73, 14, 97)'
                    centerComponent={{ text: 'BackLogs', style: { color: '#fff' } }}
                    rightComponent={
                        <Icon
                            name={edit==false?'sort':'format-list-bulleted'}
                            type='material-community'
                            color='white'
                            onPress={() => {
                                this.setState({ edit: !edit })
                            }}
                        />
                    }
                />
                {
                    edit == false ?
                        <BacklogList navigation={this.props.navigation} />
                        : 
                        <BacklogPrioritize navigation={this.props.navigation} />
                }

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