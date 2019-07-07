import React from 'react'
import {ScrollView, Text, StyleSheet, View} from 'react-native'
import {Header, Button} from 'react-native-elements'

export default class ProjectDashboard extends React.Component{
    
    render(){
        return(
            <View>
                <Header style={{color:'rgb(150, 13, 255'}}
                centerComponent={{ text: 'Dashboard', style: { color: '#fff' } }}
                />
                    <View style={{paddingHorizontal:15}}>              
                        <Button
                        title='Project Tasks'
                        buttonStyle={[styles.button, {backgroundColor:'rgb(109,193,140)'}]}
                        />
                        <Button
                        title='Project Bacllogs'
                        buttonStyle={[styles.button, {backgroundColor:'rgb(113,87,184)'}]}
                        />
                        <Button
                        title='Project Collabs'
                        buttonStyle={[styles.button, {backgroundColor:'rgb(87,106,164)'}]}
                        />
                    </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    button:{
        backgroundColor:'green',
        marginTop:8,
        height:65,
        borderRadius:20
    },
    container:{
        padding:20,
    },
    text:{
        fontSize:18,
    }});