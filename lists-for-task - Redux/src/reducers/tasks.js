import * as types from './../constants/actionTypes'


var data = JSON.parse(localStorage.getItem('tasks'));
var initalState = data ? data : [];

var myReducer = (state = initalState, action) => {
    var randomstring = require("randomstring");
    switch (action.type) {
        case types.LIST_ALL:
            return state;
        case types.ADD_TASK:
            var newTask = {
                id: randomstring.generate(7),
                name: action.task.name,
                status: action.task.status === 'true' ? true : false
            }
            state.push(newTask);
            localStorage.setItem('tasks',JSON.stringify(state));
            return [...state]; // coppy ra 1 array mới và trả về viết trong es6
        default: return state;
    }
    return state;
}
export default myReducer;