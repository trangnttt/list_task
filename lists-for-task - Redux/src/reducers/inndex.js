import {combineReducers} from 'redux';
import tasks from './tasks';
import isDisplayForm from './isDisplayForm';
import itemEditing from './itemEditing';

const myReducer = combineReducers({
    tasks, //tasks:tasks
    isDisplayForm
});
export default myReducer;