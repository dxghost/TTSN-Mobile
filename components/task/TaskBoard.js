import React from 'react'
import { StyleSheet, View, Text, Dimensions, ActivityIndicator } from 'react-native'
import { FlatList } from 'react-native-gesture-handler';


export default class TaskBoard extends React.Component {
   
    keyExtractor = (item, index) => index.toString()

    renderItem = this.props.renderItem
    
    render() {
    
        console.log(this.props.data)
        return (
            <View>
                {!this.props.data?
                    <View style={{ justifyContent: 'center',marginTop:"50%"}}>
                        <ActivityIndicator size="large" color="#DE94FF" />
                    </View> :
                    <FlatList
                        keyExtractor={this.keyExtractor}
                        data={this.props.data}
                        renderItem={this.renderItem}
                    />}

            </View>
        );
    }
}
