import { createDrawerNavigator,createStackNavigator } from 'react-navigation';
import PeopleScreen from '../components/people/people_list/PeopleList';
import BacklogScreen from '../screens/BacklogScreen'
import BacklogDetailScreen from '../screens/BacklogDetail'
import NewBacklog from '../screens/NewBacklog'

const Drawer = createDrawerNavigator(
  {
    Drawer1: {
      screen: PeopleScreen,
    },
    Drawer3: {
      screen: BacklogScreen,
    },
    Drawer4:{
      screen:BacklogDetailScreen,
    },
    Drawer5:{
      screen:NewBacklog
    }
  },
  {
    initialRouteName: 'Drawer3',
    drawerPosition: 'left',
    contentOptions: {
      activeTintColor: '#e91e63',
      inactiveTintColor: '#CCC',
      activeBackgroundColor: '#EEE',
      inactiveBackgroundColor: '#FFF',
    },
  },
);

const Stack = createStackNavigator(
  {
    Drawer:{
      screen:Drawer
    },
    Drawer1: {
      screen: PeopleScreen,
    },
    Drawer3: {
      screen: BacklogScreen,
    },
    Drawer4:{
      screen:BacklogDetailScreen,
    },
    Drawer5:{
      screen:NewBacklog
    }
  },
  {
    headerMode:'none'
  }
)

export default Stack;
