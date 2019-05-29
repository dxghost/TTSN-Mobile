import React from 'react'
import BacklogList from '../components/backlogs/backlog_list/backlogs_list'

export default class BacklogScreen extends React.Component {
    render() {
        return (
            <BacklogList/>
        )
    }
}
BacklogScreen.navigationOptions = {
    drawerLabel: 'Backlogs',
    // drawerIcon: () => (
    //     <Image source={PeopleIcon} />
    // ),
};