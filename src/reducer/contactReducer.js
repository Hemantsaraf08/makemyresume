import * as actionTypes from "./../actions/actionTypes";
import initialState from "./initialState.json"
//its a pure function taking 2 parameters 1. state 2. action

export default function contactReducer(state=initialState.contactSection, action){
    switch(action.type){
        case actionTypes.ADD_CONTACT:
            return {...state, contactSection: action.contactSection}
        case actionTypes.UPDATE_CONTACT:
            return {...action.contactSection}
        default:
            return state;
    }
}