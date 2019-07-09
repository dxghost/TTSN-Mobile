import React from 'react'
import {ScrollView, Text, StyleSheet, View} from 'react-native'
import {Header, Button} from 'react-native-elements'

export default class ProjectDashboard extends React.Component{
    
    render(){
        var project = this.props.navigation.getParam("project")
        return(
            <View>
                <Header 
                backgroundColor='rgb(73, 14, 97)'
                centerComponent={{ text: `Project ${project.Name}`, style: { color: 'white' } }}
                />
                    <View style={{paddingHorizontal:15,alignItems:'center',marginTop:"10%"}}>              
                        {/* <Button
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
                        onPress={()=>{        console.log(project)}}
                        /> */}
                        <Text>Project Name : {project.Name}</Text>
                        <Text>Project Creator : {project.Creator}</Text>
                        <Text>Methodology: {project.Methodology}</Text>
                        <Text>Creation Date:{project.CreationDate}</Text>
                        <Text>Start Date:{project.StartDate}</Text>
                        <Text>End Date:{project.EndDate}</Text>
                        <Text>Project Type:{project.Type}</Text>

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