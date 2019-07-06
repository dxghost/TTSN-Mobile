import React from 'react'
import {StyleSheet, View, StatusBar} from 'react-native'
import { FlatList } from 'react-native-gesture-handler'
import { ListItem } from 'react-native-elements';


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
]

export default class UserProjects extends React.Component{

    keyExtractor = (item, index) => index.toString()

    renderItem = ({item}) => (
        <ListItem
            key={item.id}
            title={item.name}
            subtitle={item.description}
        />
    );

    render(){
        return(
            <View style = {styles.container}>
                <FlatList
                    keyExtractor={this.keyExtractor}
                    data={data}
                    renderItem={this.renderItem}
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({

    container: {
        height: '100%',
        width: '100%',
        marginTop: StatusBar.currentHeight,
    },

  });

UserProjects.navigationOptions = {
    drawerLabel: 'UserProjects',
}
