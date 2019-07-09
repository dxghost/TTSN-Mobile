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
    project = this.props.navigation.getParam("profile")
    var UserName = project.username
    var Email = project.email
    var Prof_Pic = project.profile_picture
    var Bio = project.bio
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