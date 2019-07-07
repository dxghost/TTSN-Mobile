import React from 'react'
import {StyleSheet, View, Text, StatusBar} from 'react-native'
import { FlatList } from 'react-native-gesture-handler'
import { ListItem, Card, Button } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';

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

export default class UserProjects extends React.Component{

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
                onPress = {() => this.navigation.navigate('ProjectDashboard')}
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