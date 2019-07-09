import React from 'react'
import { ScrollView, View, Text, StyleSheet, ActivityIndicator } from 'react-native'
import { Avatar, Header, Divider } from 'react-native-elements'

const profile = {
    "username": "mamaly",
    "email": "mama@gmail.com",
    "url": "http://mamaly100.pythonanywhere.com/accounts/userview/1/",
    "profile_picture": "https://instagram.fevn1-2.fna.fbcdn.net/vp/673dd59ed74fb76fb86f1f19952d37c8/5D9E5A0B/t51.2885-19/s150x150/57414280_422448701852444_8741262464684916736_n.jpg?_nc_ht=instagram.fevn1-2.fna.fbcdn.net"
  }

export default class Profile extends React.Component{
    render() {
        return(
            <View>
                <Header style={{color:'rgb(150, 13, 255'}}
                centerComponent={{ text: 'Profile', style: { color: '#fff' } }}
                />
                <View style={styles.userRow}>
                    <View style={styles.userImage}>
                        <Avatar
                        rounded
                        size="large"
                        source={{
                        uri: profile.profile_picture,
                        }}
                        />
                    </View>
                    <View>
                        <Text style={{ fontSize: 16 }}> {profile.username} </Text>
                        <Text
                        style={{
                        color: 'gray',
                        fontSize: 16,
                        }}
                        >
                        {profile.email}
                        </Text>
                    </View>
                </View>
                <Divider/>
                <View style={styles.container}>
                    <Text>other things</Text>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    userRow: {
      alignItems: 'center',
      flexDirection: 'row',
      paddingBottom: 8,
      paddingLeft: 15,
      paddingRight: 15,
      paddingTop: 6,
    },
    userImage: {
      marginRight: 12,
    },
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 10
    },
  })

Profile.navigationOptions = {
    drawerLabel: 'Profile',
}
