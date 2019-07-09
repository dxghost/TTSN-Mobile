import React from 'react'
import { StyleSheet, View, ActivityIndicator } from 'react-native'
import { FlatList } from 'react-native-gesture-handler'
import { ListItem, Card, Button } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import { getAllProjects } from '../../actions/fetcher'

export default class AllProjects extends React.Component {
    state = {
        isLoading: true,
        data: []
    }
    navigation = this.props.navigation
    componentWillMount = async () => {
        await getAllProjects().then((f) => {
            this.setState({ data: f, isLoading: false })
        })
    }
    keyExtractor = (item, index) => index.toString()
    renderItem = ({ item }) => (
        <Card style={{ paddingHorizontal: 1, flexDirection: 'row' }}>
            <ListItem
                key={item.id}
                title={item.Name}
                titleStyle={{ fontSize: 21, color: 'rgb(122,169,220)' }}
                subtitle={item.StartDate}
                rightElement={
                    <Button
                        icon={
                            <Icon
                                name="arrow-right"
                                size={15}
                                color="white"
                            />}
                        onPress={() => {
                            console.log(item)
                            this.navigation.navigate('ProjectDetail', { project: item })
                        }
                        }
                    />
                }
            />

            {/* <Text style={{fontSize:21, color:'rgb(122,169,220)'}}>{item.name}</Text>
        <Text style={{color:'grey'}}>{item.description}</Text> */}

        </Card>
    );

    render() {
        return (
            <View style={this.state.isLoading ? styles.container : {}}>
                {
                    this.state.isLoading ? <ActivityIndicator size="large" color="#DE94FF" /> :
                        <FlatList
                            keyExtractor={this.keyExtractor}
                            data={this.state.data}
                            renderItem={this.renderItem}
                        />
                }
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
})