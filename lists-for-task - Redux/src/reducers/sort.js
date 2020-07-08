import * as types from '../constants/actionTypes'

var initalState = {
    by :'name',
    value : 1
};

var myReducer = (state = initalState, action) => {
    switch (action.type) {
        case types.SORT:
            return {
                by : action.sort.by,
                value : action.sort.value
            }
        default:
            return state;
    }
}
export default myReducer;