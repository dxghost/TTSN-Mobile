import React from 'react'
import PropTypes from 'prop-types'
import Profile from './Profile'
import AvatarBG from '../../assets/profile/bg.jpg'
const data = {
  "name": "Mahdi Pazooki",
  "avatar": "https://instagram.fevn1-2.fna.fbcdn.net/vp/673dd59ed74fb76fb86f1f19952d37c8/5D9E5A0B/t51.2885-19/s150x150/57414280_422448701852444_8741262464684916736_n.jpg?_nc_ht=instagram.fevn1-2.fna.fbcdn.net",
  "avatarBackground":
    AvatarBG,
  "bio": [
    {"description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum" }
  ],
  "emails": [
    { "id": 1, "name": "Personal", "email": "goddamnghost@dx.dx" }
  ],
}

class ProfileScreen extends React.Component {
  render() {
    return (
      <Profile {...data} />
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
