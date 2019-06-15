import React from 'react'
import {ScrollView,View, Text, StyleSheet, StatusBar, Dimensions} from 'react-native'
import Login from '../components/authentication/login';
import SignUp from '../components/authentication/signup'
import { Button } from 'react-native-elements';

export default class LoginScreen extends React.Component{
    constructor(props) {
        super(props);
    }
    _rfMain=async ()=>{
        await this.props.refreshMain()
    }
    render() {
        return (
            <View style={styles.screen}>

                <ScrollView style={styles.container}
                ref={"scrollView"}
                pagingEnabled
                horizontal={true}
                >
                    <View style={styles.scrollViewItem}>
                        <Login refresh={this._rfMain} />
                        <Button
                        title="not registered?"
                        type="clear"
                        onPress={() => this.refs.scrollView.scrollToEnd({animated: true})}
                        />
                    </View>

                    <View style={styles.scrollViewItem}>
                        <SignUp  refresh={this._rfMain} />
                    </View>
                    
                </ScrollView>

            </View>
        );
    }
}

const styles = StyleSheet.create({
    screen:{
    width: "100%",
    height: "100%",
    backgroundColor: 'grey',
    flex:1,

    marginTop: StatusBar.currentHeight,
    },
    container:{
        marginVertical: '15%',
        marginHorizontal: '10%',
        backgroundColor: 'white',

    },
    scrollViewItem:{
        width: Dimensions.get('window').width*(0.8), 
        // use Dimensions cuase '100%' doesnt work properly
        padding: 30,
    }
})


LoginScreen.navigationOptions = {
    drawerLabel: ()=>null,
};