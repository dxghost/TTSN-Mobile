import { createDrawerNavigator, createStackNavigator, StackNavigator } from 'react-navigation';
import PeopleScreen from '../components/people/people_list/PeopleList';
import Tasks from '../screens/Tasks';
import AddTask from '../screens/AddTask';
import Task from '../screens/Task';
import BacklogScreen from '../screens/BacklogScreen'
import BacklogDetailScreen from '../screens/BacklogDetail'
import NewBacklog from '../screens/NewBacklog'
import LoginScreen from '../screens/LoginScreen';
import LogOut from '../components/authentication/signout'
import AddProj from '../screens/AddProject'
import Projects from '../screens/Projects';
import ProjectDashboard from '../screens/ProjectDashboard';
import Profile from '../components/profile/index';
import InviteUser from '../screens/InviteUser'


const MainDrawer = createDrawerNavigator(
  {
    SignOut: {
      screen: LogOut
    },
    Projects: {
      screen: Projects
    },
    Profile:{
      screen: Profile
    },
  },
  {
    initialRouteName: 'Profile',
    drawerPosition: 'left',
    contentOptions: {
      activeTintColor: '#e91e63',
      inactiveTintColor: '#CCC',
      activeBackgroundColor: '#EEE',
      inactiveBackgroundColor: '#FFF',
    },
  },
);

const ProjectDrawer = createDrawerNavigator(
  {
    PeopleList: {
      screen: PeopleScreen,
    },
    BacklogList: {
      screen: BacklogScreen,
    },
    TaskList: {
      screen: Tasks,
    },
    SignOut: {
      screen: LogOut
    },
    CreateProj: {
      screen: AddProj,
    },
    ProjectDashboard: {
      screen: ProjectDashboard
    },
    InviteUser:{
      screen:InviteUser
    }
  },
  {
    initialRouteName: 'ProjectDashboard',
    drawerPosition: 'left',
    contentOptions: {
      activeTintColor: '#e91e63',
      inactiveTintColor: '#CCC',
      activeBackgroundColor: '#EEE',
      inactiveBackgroundColor: '#FFF',
    },
  },
);


const mainFlow = createStackNavigator({
  Drawer: {
    screen: MainDrawer
  },
  Projects: {
    screen: Projects
  },
  Profile:{
    screen: Profile
}}, {
    headerMode: 'none'
  })


const ProjectFlow = createStackNavigator({
  Drawer: {
    screen: ProjectDrawer
  },
  PeopleList: {
    screen: PeopleScreen,
  },
  TaskList: {
    screen: Tasks,
  },
  AddTask: {
    screen: AddTask,
  },
  SingleTask: {
    screen: Task,
  },
  BacklogList: {
    screen: BacklogScreen,
  },
  AddBacklog: {
    screen: NewBacklog
  },
  SingleBacklog: {
    screen: BacklogDetailScreen,
  },
  CreateProj: {
    screen: AddProj,
  },
  ProjectDashboard: {
    screen: ProjectDashboard,
  }
}, {
    headerMode: 'none'
  })

const loginFlow = createStackNavigator({
  LoginScreen: {
    screen: LoginScreen
  },
  SignOut: {
    screen: LogOut
  }
}, {
    headerMode: "none"
  })
const Stack = createStackNavigator({
  mainFlow: {
    screen: mainFlow
  },
  ProjectFlow: {
    screen: ProjectFlow
  },
  loginFlow: {
    screen: loginFlow
  },
},
  {
    headerMode: 'none'
  })

export default Stack;
