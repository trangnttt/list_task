import * as types from '../constants/actionTypes'

var initalState = false; //close form

var myReducer = (state = initalState, action) => {
    var randomstring = require("randomstring");
    switch (action.type) {
        case types.TOGGLE_FORM:
            return !state;
        case types.OPEN_FORM:
            state = true;
            return state;
        case types.CLOSE_FORM:
            state = false;
            return state;
        default: return state;
    }
    return state;
}
export default myReducer;