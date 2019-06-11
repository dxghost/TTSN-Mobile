import React from 'react';
import {
    Animated,
    Easing,
    StyleSheet,
    Text,
    Image,
    View,
    Dimensions,
    Platform,
} from 'react-native';
import { Avatar, Divider, ListItem, Header, Icon, CheckBox } from "react-native-elements";
import SortableList from 'react-native-sortable-list';

const window = Dimensions.get('window');
// const data = [
//     { "id": 1, "name": "cart", "priority": 1, "defenition_done": "be done", "description": "some description", "create_date": "2019-06-03" },
//     { "id": 2, "name": "market", "priority": 2, "defenition_done": "can buy shit", "description": "some other description", "create_date": "2019-06-03" },
//     { "id": 3, "name": "some backlog", "priority": 3, "defenition_done": "some defenition", "description": "some description", "create_date": "2019-06-03" }
// ];

export default class BacklogList extends React.Component {
    state = {
        isLoading: true,
        data: []
    }

    requestHandler = async () => {
        let apiUrl = 'http://mamaly100.pythonanywhere.com/Backlog/';
        let formData = new FormData();
        let options = {
            method: 'GET',
            // body: formData,
            headers: {
                Accept: '*/*',
                'Content-Type': 'application/json',
                // 'Authorization': 'JWT eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJvcmlnX2lhdCI6MTU1OTU1NjUxNCwiZXhwIjoxNTU5NTYyNTE0LCJ1c2VyX2lkIjoxLCJlbWFpbCI6Im1haGRpcGF6b29raTIxQGdtYWlsLmNvbSIsInVzZXJuYW1lIjoiZHgifQ.kCdXNmh_o28eLCPsHOwIMefYE12ckg2QI0uMkfIsWZw'
            }
        };
        return fetch(apiUrl, options)
    }

    componentWillMount = async () => {
        var f = await this.requestHandler()
        f = await f.json()
        console.log(f)
        this.setState({
            data: f,
            isLoading: false
        })
    }

    render() {
        const { isLoading, data } = this.state;
        return (
            <View style={styles.container}>
                {
                    this.state.isLoading ? <Text>loading</Text> :
                        <View>
                            <Text style={styles.title}>Backlogs</Text>
                            <SortableList
                                style={styles.list}
                                contentContainerStyle={styles.contentContainer}
                                data={this.state.data}
                                renderRow={this._renderRow}
                            />
                        </View>
                }
            </View>
        );
    }

    _renderRow = ({ data, active }) => {
        return <Row data={data} active={active} navigation={this.props.navigation} />
    }
}


class Row extends React.Component {
    state = {
        checked: false
    };

    constructor(props) {
        super(props);
        this._active = new Animated.Value(0);
    }
    componentWillReceiveProps(nextProps) {
        if (this.props.active !== nextProps.active) {
            Animated.timing(this._active, {
                duration: 300,
                easing: Easing.bounce,
                toValue: Number(nextProps.active),
            }).start();
        }
    }
    render() {
        const { data, active } = this.props;
        const { checked } = this.state;
        const {navigate} = this.props.navigation;
        return (
            <ListItem
                style={styles.row}
                leftIcon={
                    <Icon
                        name='drag'
                        type='material-community'
                        color='rgb(150, 13, 255)' />

                }
                rightElement={
                    <CheckBox
                        // center
                        title={this.state.checked ? "it's not done" : "consider it done"}
                        iconRight
                        iconType='material'
                        uncheckedIcon='check'
                        uncheckedColor='rgb(142, 187, 255)'
                        checkedIcon='close'
                        checkedColor='rgb(198, 10, 255)'
                        checked={this.state.checked}
                        onPress={() => {
                            // TODO add a function to move to footer
                            this.setState({ checked: !checked })
                        }
                        }
                    />
                }
                // key={item.index}
                // leftAvatar={{ source: { uri: item.avatar_url } }}
                title={data.name}
                onPress={() => {
                    navigate('SingleBacklog', {backlogdata:data})
                }}
            // subtitle={item.subtitle}
            />
        );
    }
}



const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },

    title: {
        fontSize: 20,
        paddingVertical: 20,
        marginTop: "3%",
    },

    list: {
        flex: 1,
    },

    contentContainer: {
        width: window.width,
    },

    row: {
        flexDirection: 'row',
        alignItems: 'center',
        borderBottomWidth: 5,
        borderBottomColor: "rgb(150, 13, 255)",
        height: 60,
        flex: 1,
        marginTop: 2,
        marginBottom: 3,
    },
});
