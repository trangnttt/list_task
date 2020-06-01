import * as types from './../constants/actionTypes'


var findIndex = (tasks, id) => {
    var result = -1;
    tasks.forEach((task, index) => { //duyệt qua forEach nhận task và biến index 
        if (task.id === id) {
            result = index;
        }
    });
    return result;
}

var data = JSON.parse(localStorage.getItem('tasks'));
var initalState = data ? data : [];

var myReducer = (state = initalState, action) => {
    var randomstring = require("randomstring");
    var id = '';
    var index = '';
    switch (action.type) {
        //hiển thị danh sách công việc
        case types.LIST_ALL:
            return state;
        //thêm công việc
        case types.ADD_TASK:
            var newTask = {
                id: randomstring.generate(7),
                name: action.task.name,
                status: action.task.status === 'true' ? true : false
            }
            state.push(newTask);
            localStorage.setItem('tasks', JSON.stringify(state));
            return [...state]; // coppy ra 1 array mới và trả về viết trong es6
        //cập nhật trạng thái(ẩn, kích hoạt)
        case types.UPDATE_STATUS_TASK:
            id = action.id;
            index = findIndex(state, id);
            var cloneTask = {...state[index]};
            cloneTask.status = !cloneTask.status;
            state[index] = cloneTask;

            localStorage.setItem('tasks', JSON.stringify(state));
            return [...state];
        //xóa công việc trong bảng
        case types.DELETE_TASK:
            id = action.id;
            index = findIndex(state, id);
            state.splice(index, 1);
            localStorage.setItem('tasks', JSON.stringify(state));
            return [...state];
        default: return state;
    }
}
export default myReducer;