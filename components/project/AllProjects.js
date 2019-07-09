import React from 'react'
import { StyleSheet, View, ActivityIndicator } from 'react-native'
import { FlatList } from 'react-native-gesture-handler'
import { ListItem, Card, Button } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import { getAllProjects } from '../../requests/ProjectActions'
import {connect} from 'react-redux'
import { updateAll } from '../../actions/projectsActions'


class AllProjects extends React.Component{
    navigation = this.props.navigation
    componentWillMount = async () => {
        getAllProjects().then((f) => this.props.all_update(f))

    }
    keyExtractor = (item, index) => index.toString()
    renderItem = ({ item }) => (
        <Card style={{ paddingHorizontal: 1, flexDirection: 'row' }}>
            <ListItem
                key={item.id}
                title={item.Name}
                titleStyle={{ fontSize: 21, color: 'rgb(122,169,220)' }}
                subtitle={item.StartDate}
                rightElement={
                    <Button
                        icon={
                            <Icon
                                name="arrow-right"
                                size={15}
                                color="white"
                            />}
                        onPress={() => {
                            console.log(item)
                            this.navigation.navigate('ProjectDetail', { project: item })
                        }
                        }
                    />
                }
            />

            {/* <Text style={{fontSize:21, color:'rgb(122,169,220)'}}>{item.name}</Text>
        <Text style={{color:'grey'}}>{item.description}</Text> */}

        </Card>
    );

    render(){
        return(
            <View style={!this.props.projects.all? styles.container:{}}>
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
        all_update: (data) => dispatch(updateAll({data:data}))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AllProjects)


const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
})