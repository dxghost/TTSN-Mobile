import React from 'react'
import {StyleSheet, View, Text, StatusBar} from 'react-native'
import { FlatList, State } from 'react-native-gesture-handler'
import { ListItem, Card, Button } from 'react-native-elements';
import {connect} from 'react-redux'
import Icon from 'react-native-vector-icons/FontAwesome';
import {updateProject} from '../../actions/projectActions'

const data = [
    {
        id : 0,
        name : 'project1',
        description : 'first project of ...'
    },
    {
        id : 1,
        name : 'project2',
        description : 'second project of ...'
    },
    {
        id : 0,
        name : 'project1',
        description : 'first project of ...'
    },
    {
        id : 1,
        name : 'project2',
        description : 'second project of ...'
    },
    {
        id : 0,
        name : 'project1',
        description : 'first project of ...'
    },

]

class UserProjects extends React.Component{

    keyExtractor = (item, index) => index.toString()
    navigation = this.props.navigation
    renderItem = ({item}) => (
        <Card style={{paddingHorizontal : 1, flexDirection : 'row'}}>
            <ListItem 
            key={item.id}
            title={item.name}
            titleStyle={{fontSize:21, color:'rgb(122,169,220)'}}
            subtitle={item.description}
            rightElement={
                <Button
                icon={
                    <Icon
                      name="arrow-right"
                      size={15}
                      color="white"
                    />}
                onPress = {() => {
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
            <View>
                <FlatList
                    keyExtractor={this.keyExtractor}
                    data={data}
                    renderItem={this.renderItem}
                />
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
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(UserProjects)