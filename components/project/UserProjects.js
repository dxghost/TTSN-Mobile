import React from 'react'
import {StyleSheet, View, ActivityIndicator} from 'react-native'
import { FlatList, State } from 'react-native-gesture-handler'
import { ListItem, Card, Button } from 'react-native-elements';
import {connect} from 'react-redux'
import Icon from 'react-native-vector-icons/FontAwesome';
import {updateProject} from '../../actions/projectActions'
import { clear } from '../../actions/taskActions'
import { getAllProjects } from '../../actions/fetcher'


class UserProjects extends React.Component{
    state = {
        isLoading: true,
        data: []
    }
    navigation = this.props.navigation
    componentWillMount = async () => {
        await getAllProjects().then((f) => { //request for user project is not available now.
            this.setState({data:f, isLoading:false})
        })
    }
    keyExtractor = (item, index) => index.toString()
    navigation = this.props.navigation
    renderItem = ({item}) => (
        <Card style={{paddingHorizontal : 1, flexDirection : 'row'}}>
            <ListItem 
            key={item.id}
            title={item.Name}
            titleStyle={{fontSize:21, color:'rgb(122,169,220)'}}
            subtitle={item.StartDate}
            rightElement={
                <Button
                icon={
                    <Icon
                      name="arrow-right"
                      size={15}
                      color="white"
                    />}
                onPress = {() => {
                    this.props.clear_tasks()
                    this.props.project_update(item)
                    this.navigation.navigate('ProjectDashboard', {project: item})
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
            <View style={this.state.isLoading? styles.container:{}}>
                {
                this.state.isLoading ? <ActivityIndicator size="large" color="#DE94FF" /> :
                <FlatList
                    keyExtractor={this.keyExtractor}
                    data={this.state.data}
                    renderItem={this.renderItem}
                />
                }
            </View>
        );
    }
}

function mapStateToProps(state) {
    return {
        user: state.user
    }
}

function mapDispatchToProps(dispatch) {
    return {
        project_update: (project) => dispatch(updateProject(project)),
        clear_tasks: () => dispatch(clear())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(UserProjects)

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
})