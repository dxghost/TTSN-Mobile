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
        text: 'Lorem ipsum dolor sit amet',
    },
    1: {
        text: ' consectetur adipiscing elit,',
    },
    2: {
        text: ' sed do eiusmod tempor',
    },
    3: {
        text: 'Os incididunt ut labore et dolore magna aliquacar',
    },
    4: {
        text: 'Ut enim ad minim veniam',
    }
};


export default class BacklogList extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.title}>Backlogs</Text>
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
                        color='rgb(150, 13, 255)' />

                }
                rightElement={
                    <CheckBox
                        // center
                        title={this.state.checked ? "it's not done" : "consider it done"}
                        iconRight
                        iconType='material'
                        uncheckedIcon='check'
                        uncheckedColor='rgb(142, 187, 255)'
                        checkedIcon='close'
                        checkedColor='rgb(198, 10, 255)'
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
    },

    title: {
        fontSize: 20,
        paddingVertical: 20,
        marginTop: "3%",
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
        borderBottomWidth: 5,
        borderBottomColor: "rgb(150, 13, 255)",
        height: 60,
        flex: 1,
        marginTop: 2,
        marginBottom: 3,
    },
});
