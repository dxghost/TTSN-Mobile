import { createDrawerNavigator } from 'react-navigation';
import PeopleScreen from '../components/people/people_list/PeopleList';
import SamplePeople from '../components/people/people_list/samplePeople';
import BacklogScreen from '../screens/BacklogScreen'

const Drawer = createDrawerNavigator(
  {
    Drawer1: {
      screen: PeopleScreen,
    },
    Drawer2: {
      screen: SamplePeople,
    },
    Drawer3: {
      screen: BacklogScreen,
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

export default Drawer;
