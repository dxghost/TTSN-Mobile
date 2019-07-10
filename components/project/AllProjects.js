import React from 'react'
import { StyleSheet, View, ActivityIndicator, Text,TouchableOpacity } from 'react-native'
import { FlatList } from 'react-native-gesture-handler'
import { ListItem, Card, Button,Divider,Icon } from 'react-native-elements';
import { getAllProjects } from '../../actions/fetcher'
import { connect } from 'react-redux'
import { updateAll } from '../../actions/projectsActions'
import Separator from '../../components/profile/Separator'

class AllProjects extends React.Component {
    navigation = this.props.navigation
    componentWillMount = async () => {
        getAllProjects().then((f) => this.props.all_update(f))

    }
    keyExtractor = (item, index) => index.toString()
    renderItem = ({ item }) => (
        <TouchableOpacity
            onPress={() => {
                console.log(item)
                this.navigation.navigate('ProjectDetail', { project: item })
            }
            }
        >
            <ListItem
                // leftAvatar={{ source: { uri: l.avatar_url } }}
                title={<Text style={{ color: "purple" }}>{item.Name}</Text>}
                subtitle={item.StartDate}
                leftElement={<Icon
                    name='clipboard-text'
                    type="material-community"
                    color="purple"
                />}
                rightIcon={{ name: 'chevron-right', type: "material-community" }}
            />
            <Divider />
        </TouchableOpacity>
    );

    render() {
        return (
            <View style={!this.props.projects.all ? styles.container : {}}>
                {
                    !this.props.projects.all ? <ActivityIndicator size="large" color="#DE94FF" /> :
                        <FlatList
                            keyExtractor={this.keyExtractor}
                            data={this.props.projects.all}
                            renderItem={this.renderItem}
                        />
                }
            </View>
        );
    }
}

function mapStateToProps(state) {
    return {
        user: state.user,
        projects: state.projects
    }
}

function mapDispatchToProps(dispatch) {
    return {
        clear_tasks: () => dispatch(clear()),
        all_update: (data) => dispatch(updateAll({ data: data }))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AllProjects)


const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    iconRow: {
        flex: 2,
        justifyContent: 'center',
    },
    smsIcon: {
        color: 'gray',
        fontSize: 30,
    },
    smsRow: {
        flex: 2,
        justifyContent: 'flex-start',
    },
    telIcon: {
        color: '#8d42f5',
        fontSize: 30,
    },
    telNameColumn: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
    },
    telNameText: {
        color: 'gray',
        fontSize: 14,
        fontWeight: '200',
    },
    telNumberColumn: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        marginBottom: 5,
    },
    telNumberText: {
        fontSize: 16,
    },
    telRow: {
        flex: 6,
        flexDirection: 'column',
        justifyContent: 'center',
    },
    text: {
        fontSize: 18,
    }
})