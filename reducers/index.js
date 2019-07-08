import {combineReducers} from 'redux'
import tasks from './tasks'
import project from './project'
import user from './user'
//import all reducers

export default combineReducers({
    //add all reducers
    tasks,
    project,
    user
})