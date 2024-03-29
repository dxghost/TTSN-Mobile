import React from 'react';
import {
    AsyncStorage,
    Animated,
    Easing,
    StyleSheet,
    Text,
    Image,
    View,
    Dimensions,
    Platform,
    ActivityIndicator
} from 'react-native';
import { Avatar, Divider, ListItem, Header, Icon, CheckBox } from "react-native-elements";
import SortableList from 'react-native-sortable-list';
import { requestBacklogs, deleteBacklog, setPriority } from '../../../actions/fetcher'
import { FAB } from 'react-native-paper'
import {connect} from 'react-redux'

const window = Dimensions.get('window');
class BacklogList extends React.Component {
    state = {
        isLoading: true,
        data: [],
        priorities:[],
    }

    _refresh = async () => {
        await requestBacklogs(this.props.project.id)
        backlogList = await AsyncStorage.getItem('backlogs')
        backlogList = await JSON.parse(backlogList)
        this.setState({
            data: backlogList,
            isLoading: false
        })
    }
    componentWillMount = async () => {
        const result = await AsyncStorage.getItem('performFetch')
        if (result == null || result == "true") {
            await requestBacklogs()
        }

        backlogList = await AsyncStorage.getItem('backlogs')
        backlogList = await JSON.parse(backlogList)
        this.setState({
            data: backlogList,
            isLoading: false
        })
    }

    render() {
        const { isLoading, data,priorities } = this.state;
        const { navigate } = this.props.navigation;
        return (
            <View style={styles.container}>
                {
                    this.state.isLoading ? <ActivityIndicator size="large" color="#DE94FF" /> :
                        <View>
                            {/* <Text style={styles.title}>Backlogs</Text> */}
                            <SortableList
                                style={styles.list}
                                contentContainerStyle={styles.contentContainer}
                                data={this.state.data}
                                renderRow={this._renderRow}
                                onChangeOrder={(order) => this.setState({priorities:order})}
                            />
                        </View>
                }
                <FAB
                    style={styles.fab}
                    small={false}
                    icon="check"
                    onPress={async () =>{
                        // request
                        await setPriority(priorities)
                        this._refresh()
                        this.setState({priorities:[]})
                        }
                    }
                />
            </View>
        );
    }

    _renderRow = ({ data, active }) => {
        return <Row refresh={this._refresh} data={data} active={active} navigation={this.props.navigation} />
    }
}


class Row extends React.Component {
    constructor(props) {
        super(props);
        this._active = new Animated.Value(0);
    }
    state = {
        justifyContent: 'center'
    };

    _deleteRequest = async (ID) => {
        response = await deleteBacklog(ID)
        console.log(response)
        if (response == true) this.props.refresh()
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
        const { navigate } = this.props.navigation;
        return (
            <ListItem
                style={styles.row}
                leftElement={
                    <Icon
                        name='book-open'
                        type='material-community'
                        color='rgb(150, 13, 255)'
                        onPress={() => {
                            navigate('SingleBacklog', { backlogdata: data })
                        }}
                    />
                }
                // key={item.index}
                // leftAvatar={{ source: { uri: item.avatar_url } }}
                title={data.name}
            // subtitle={item.subtitle}
            />
        );
    }
}


function mapStateToProps(state) {
    return {
        project: state.project,
    }
}

export default connect(mapStateToProps,null)(BacklogList)


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
        borderBottomWidth: 1,
        borderBottomColor: "rgb(150, 13, 255)",
        height: 60,
        flex: 1,
        marginTop: 2,
        marginBottom: 3,
    },
    fab: {
        position: 'absolute',
        margin: 16,
        right: 0,
        bottom: 0,
        backgroundColor:'rgb(87, 42, 112)'
    },
});