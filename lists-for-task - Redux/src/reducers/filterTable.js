import * as types from '../constants/actionTypes'

var initalState = {
    name: '',
    status: -1,
};

var myReducer = (state = initalState, action) => {
    switch (action.type) {
        case types.FILTER_TABLE:
            // action.filter.status = parseInt(action.filter.status);
            // console.log(action);
            // return action.filter;
            return {
                name: action.filter.name,
                status: parseInt(action.filter.status, 10)
            }
        default:
            return state;
    }
}
export default myReducer;