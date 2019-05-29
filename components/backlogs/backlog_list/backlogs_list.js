import React from 'react';
import {
    Animated,
    Easing,
    StyleSheet,
    Text,
    Image,
    View,
    Dimensions,
    Platform,
} from 'react-native';
import { Avatar, Divider, ListItem, Header, Icon, CheckBox } from "react-native-elements";
import SortableList from 'react-native-sortable-list';

const window = Dimensions.get('window');
const data = {
    0: {
        image: 'https://placekitten.com/200/240',
        text: 'Chloe',
    },
    1: {
        image: 'https://placekitten.com/200/201',
        text: 'Jasper',
    },
    2: {
        image: 'https://placekitten.com/200/202',
        text: 'Pepper',
    },
    3: {
        image: 'https://placekitten.com/200/203',
        text: 'Oscar',
    },
    4: {
        image: 'https://placekitten.com/200/204',
        text: 'Dusty',
    },
    5: {
        image: 'https://placekitten.com/200/205',
        text: 'Spooky',
    },
    6: {
        image: 'https://placekitten.com/200/210',
        text: 'Kiki',
    },
    7: {
        image: 'https://placekitten.com/200/215',
        text: 'Smokey',
    },
    8: {
        image: 'https://placekitten.com/200/220',
        text: 'Gizmo',
    },
    9: {
        image: 'https://placekitten.com/220/239',
        text: 'Kitty',
    },
};


export default class BacklogList extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.title}>React Native Sortable List</Text>
                <SortableList
                    style={styles.list}
                    contentContainerStyle={styles.contentContainer}
                    data={data}
                    renderRow={this._renderRow} 
                    
                    />
            </View>
        );
    }

    _renderRow = ({ data, active }) => {
        return <Row data={data} active={active} />
    }
}


class Row extends React.Component {
    state = {
        checked: false
    };

    constructor(props) {
        super(props);

        this._active = new Animated.Value(0);

    }

    componentWillReceiveProps(nextProps) {
        if (this.props.active !== nextProps.active) {
            Animated.timing(this._active, {
                duration: 300,
                easing: Easing.bounce,
                toValue: Number(nextProps.active),
            }).start();
        }
    }

    render() {
        const { data, active } = this.props;
        const { checked } = this.state;
        return (
            <ListItem
                style={styles.row}
                leftIcon={
                    <Icon
                        name='drag'
                        type='material-community'
                        color='#E0005A' />

                }
                rightElement={
                    <CheckBox
                        // center
                        title={this.state.checked ? "it's not done" : "consider it done"}
                        iconRight
                        iconType='material'
                        uncheckedIcon='check'
                        uncheckedColor='green'
                        checkedIcon='close'
                        checkedColor='red'
                        checked={this.state.checked}
                        onPress={() => {
                            // TODO add a function to move to footer
                            this.setState({ checked: !checked })
                        }
                        }
                    />
                }
                // key={item.index}
                // leftAvatar={{ source: { uri: item.avatar_url } }}
                title={data.text}
            // subtitle={item.subtitle}
            />
        );
    }
}



const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#eee',
    },

    title: {
        fontSize: 20,
        paddingVertical: 20,
        marginTop: "3%",
        color: '#999999',
    },

    list: {
        flex: 1,
    },

    contentContainer: {
        width: window.width,
    },

    row: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#fff',
        height: 60,
        flex: 1,
        marginTop: 2,
        marginBottom: 2,
    },
});
