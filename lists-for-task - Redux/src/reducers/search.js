import * as types from '../constants/actionTypes'

var initalState = '';

var myReducer = (state = initalState, action) => {
    switch (action.type) {
        case types.SEARCH:
            return action.keyword;
        default:
            return state;
    }
}
export default myReducer;