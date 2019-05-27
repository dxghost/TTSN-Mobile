import React from 'react';
import { StyleSheet, Text, View, FlatList, Image } from 'react-native';
import { Avatar, Divider, ListItem, Header, Icon } from "react-native-elements";
import PeopleIcon from '../../../assets/Images/PeopleIcon2.png';

const list = [
    {
        name: 'Mahdi Pazooki',
        index: 1,
        avatar_url: 'https://instagram.fevn1-2.fna.fbcdn.net/vp/673dd59ed74fb76fb86f1f19952d37c8/5D9E5A0B/t51.2885-19/s150x150/57414280_422448701852444_8741262464684916736_n.jpg?_nc_ht=instagram.fevn1-2.fna.fbcdn.net',
        subtitle: 'Fullstack Developer'
    },
    {
        name: 'Mohammad Babaei',
        index: 3,
        avatar_url: 'https://instagram.fevn1-2.fna.fbcdn.net/vp/91b0e5dfc67541531255228b57deba90/5D85669F/t51.2885-19/s150x150/54513268_1367389923401670_7723396709211963392_n.jpg?_nc_ht=instagram.fevn1-2.fna.fbcdn.net',
        subtitle: 'Backend Developer'
    },
    {
        name: 'Mohammadreza Bagheri',
        index: 4,
        avatar_url: 'https://instagram.fevn1-2.fna.fbcdn.net/vp/82152ab0006f1ff6096016ee2b92283c/5D636118/t51.2885-19/s150x150/40959836_1994050987552311_3313716626351718400_n.jpg?_nc_ht=instagram.fevn1-2.fna.fbcdn.net',
        subtitle: 'Frontend Developer'
    },
    {
        name: 'MohammadSadegh Khavari',
        index: 5,
        avatar_url: 'https://instagram.fevn1-3.fna.fbcdn.net/vp/6e6771248fa871c87582ee8643a05300/5D8219FE/t51.2885-19/s150x150/43818025_319817555476164_6390214993400299520_n.jpg?_nc_ht=instagram.fevn1-3.fna.fbcdn.net',
        subtitle: 'Mobile App Developer'
    },
]
const list2 = [...list, ...list, ...list, ...list, ...list, ...list];


export default class PeopleList extends React.Component {
    keyExtractor = (item, index) => index.toString()
    renderItem = ({ item }) => (
        <ListItem
            key={item.index}
            rightIcon={
                <Icon
                    name='deleteuser'
                    type='antdesign'
                    color='#E0005A' />
            }
            leftAvatar={{ source: { uri: item.avatar_url } }}
            title={item.name}
            subtitle={item.subtitle}
        />
    )
    render() {
        return (
            <View>
                <Header
                    leftComponent={{ icon: 'menu', color: '#fff' }}
                    centerComponent={{ text: 'TTSN Project Collaborators', style: { color: '#fff' } }}
                />
                <FlatList
                    keyExtractor={this.keyExtractor}
                    data={list2}
                    renderItem={this.renderItem}
                />
            </View>
        );
    }
}
PeopleList.navigationOptions = {
    drawerLabel: 'SamplePeople',
    // drawerIcon: () => (
    //     <Image source={PeopleIcon} />
    // ),
};