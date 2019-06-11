import { createDrawerNavigator } from 'react-navigation';
import PeopleScreen from '../components/people/people_list/PeopleList';
import SamplePeople from '../components/people/people_list/samplePeople';
import Tasks from '../screens/Tasks';
import AddTask from '../screens/AddTask';
import Task from '../screens/Task';

const Drawer = createDrawerNavigator(
  {
    Drawer1: {
      screen: PeopleScreen,
    },
    Drawer2: {
      screen: SamplePeople,
    },
    Drawer3: {
      screen: Tasks,
    },
    Drawer4:{
      screen: AddTask,
    },
    Drawer5:{
      screen: Task,
    }
  },
  {
    initialRouteName: 'Drawer4',
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
