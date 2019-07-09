import React from 'react'
import PropTypes from 'prop-types'
import Profile from './Profile'
import AvatarBG from '../../assets/profile/bg.jpg'
import {AsyncStorage, View, ActivityIndicator} from 'react-native'


class ProfileScreen extends React.Component {
  state = {
    data : {},
    isLoading : true
  }
  componentWillMount = async () => {
    var UserName = await AsyncStorage.getItem("userName")
    var Email = await AsyncStorage.getItem("email")
    var Prof_Pic = await AsyncStorage.getItem("pro_pic")
    var Bio = await AsyncStorage.getItem("bio")
    data = {
      "name": UserName? UserName:'noname',
      "avatar": Prof_Pic,
      "avatarBackground":
        AvatarBG,
      "bio": [
        {"description": Bio? Bio : 'Using Project Assistant App.' }
      ],
      "emails": [
        { "id": 1, "name": "Personal", "email": Email?Email:'no email' }
      ],
    }
    console.log(data)
    this.setState({data:data, isLoading:false})
  }
  render() {
    return (
      this.state.isLoading? <View style={{ justifyContent: 'center',marginTop:"50%"}}>
      <ActivityIndicator size="large" color="#DE94FF" />
      </View>  :
      <Profile {...this.state.data} />
  
    )
  }
}

ProfileScreen.navigationOptions = () => ({
  header: null,
})

ProfileScreen.propTypes = {
  navigation: PropTypes.object.isRequired,
}

export default ProfileScreen