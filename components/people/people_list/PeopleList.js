import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Avatar, Divider, ListItem, Header, Icon } from "react-native-elements";
import KeyvanIMG from '../../../assets/Images/People/KeyvanMirshekari.jpg'
import BardiaIMG from '../../../assets/Images/People/BardiaKarimi.jpg'

const list = [
    {
        name: 'Mahdi Pazooki',
        avatar_url: 'https://instagram.fevn1-2.fna.fbcdn.net/vp/673dd59ed74fb76fb86f1f19952d37c8/5D9E5A0B/t51.2885-19/s150x150/57414280_422448701852444_8741262464684916736_n.jpg?_nc_ht=instagram.fevn1-2.fna.fbcdn.net',
        subtitle: 'Fullstack Developer'
    },
    {
        name: 'Hamid Sanaee',
        avatar_url: 'https://instagram.fevn1-3.fna.fbcdn.net/vp/3aad28bd05601dc7425bf2b80ef41cc7/5D65AEC3/t51.2885-19/s150x150/32931619_1681830348521090_2221496079222833152_n.jpg?_nc_ht=instagram.fevn1-3.fna.fbcdn.net',
        subtitle: 'Backend Developer'
    },
    {
        name: 'Mohammad Babaei',
        avatar_url: 'https://instagram.fevn1-2.fna.fbcdn.net/vp/91b0e5dfc67541531255228b57deba90/5D85669F/t51.2885-19/s150x150/54513268_1367389923401670_7723396709211963392_n.jpg?_nc_ht=instagram.fevn1-2.fna.fbcdn.net',
        subtitle: 'Backend Developer'
    },
    {
        name: 'Mohammadreza Bagheri',
        avatar_url: 'https://instagram.fevn1-2.fna.fbcdn.net/vp/82152ab0006f1ff6096016ee2b92283c/5D636118/t51.2885-19/s150x150/40959836_1994050987552311_3313716626351718400_n.jpg?_nc_ht=instagram.fevn1-2.fna.fbcdn.net',
        subtitle: 'Frontend Developer'
    },
    {
        name: 'MohammadSadegh Khavari',
        avatar_url: 'https://instagram.fevn1-3.fna.fbcdn.net/vp/6e6771248fa871c87582ee8643a05300/5D8219FE/t51.2885-19/s150x150/43818025_319817555476164_6390214993400299520_n.jpg?_nc_ht=instagram.fevn1-3.fna.fbcdn.net',
        subtitle: 'Mobile App Developer'
    },
]
const secondlist = [
    {
        name: 'Keyvan Mirshekari',
        avatar_url: KeyvanIMG,
        subtitle: 'Frontend Developer'
    }
]

export default class PeopleList extends React.Component {
    render() {
        return (
            <View>
                <Header
                    leftComponent={{ icon: 'menu', color: '#fff' }}
                    centerComponent={{ text: 'TTSN Project Collaborators', style: { color: '#fff' } }}
                />
                <Divider>
                    <ListItem
                        leftAvatar={{source: BardiaIMG}}
                        title="Bardia Karimi"
                        subtitle="Project Owner"
                    />
                    {
                        secondlist.map((l, i) => (
                            <ListItem
                                key={i}
                                leftAvatar={{ source: l.avatar_url }}
                                rightElement={
                                    <Icon name='sc-telegram'
                                        type='evilicon'
                                        color='#517fa4' />
                                }
                                rightIcon={
                                    <Icon
                                        name='deleteuser'
                                        type='antdesign'
                                        color='#E0005A' />
                                }
                                title={l.name}
                                subtitle={l.subtitle}
                            />
                        ))
                    }
                    {
                        list.map((l, i) => (
                            <ListItem
                                key={i}
                                rightElement={
                                    <Icon name='sc-telegram'
                                        type='evilicon'
                                        color='#517fa4' />
                                }
                                rightIcon={
                                    <Icon
                                        name='deleteuser'
                                        type='antdesign'
                                        color='#E0005A' />
                                }
                                leftAvatar={{ source: { uri: l.avatar_url } }}
                                title={l.name}
                                subtitle={l.subtitle}
                            />
                        ))
                    }
                </Divider>
            </View>
        );
    }
}