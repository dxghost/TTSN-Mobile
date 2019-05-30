import React from 'react'
import { Image } from 'react-native'
import BacklogList from '../components/backlogs/backlog_list/backlogs_list'
import BacklogsIcon from '../assets/icons/icons8-brief-64.png'


export default class BacklogScreen extends React.Component {
    render() {
        return (
            <BacklogList />
        )
    }
}
BacklogScreen.navigationOptions = {
    drawerLabel: 'Backlogs',
    drawerIcon: () => (
        <Image source={BacklogsIcon} style={{ width: 30, height: 30 }} />
    ),
};