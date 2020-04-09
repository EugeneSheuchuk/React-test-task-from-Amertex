import {
    CLEAR_ERROR_TEXT,
    CLEAR_REDUCER_TEXT,
} from '../assets/helperFunctions';
import { SAVE_ERROR_TEXT, SAVE_FIELD_VALUE } from './netReducer';

const initialState = {};
const template = {
    automaticallyIP: true,
    IPaddress: '',
    subnetMask: '',
    gateway: '',
    errorIPaddress: '',
    errorSubnetMask: '',
    errorGateway: '',
};

const ipReducer = (state = initialState, action) => {
    let newState;
    switch (action.type) {
        case SAVE_FIELD_VALUE:
            newState = { ...state };
            if (!newState.hasOwnProperty(action.key)) {
                newState[action.key] = {
                    ...template,
                    [action.field]: action.value,
                };
            } else {
                newState[action.key] = {
                    ...newState[action.key],
                    [action.field]: action.value,
                };
            }
            return newState;
        case SAVE_ERROR_TEXT:
            newState = { ...state };
            if (newState.hasOwnProperty(action.key)) {
                newState[action.key] = {
                    ...newState[action.key],
                    ...action.errors,
                };
                return newState;
            }
            return state;
        case CLEAR_ERROR_TEXT:
            newState = { ...state };
            if (newState.hasOwnProperty(action.key)) {
                newState[action.key] = {
                    ...newState[action.key],
                    errorIPaddress: '',
                    errorSubnetMask: '',
                    errorGateway: '',
                };
                return newState;
            }
            return state;
        case CLEAR_REDUCER_TEXT:
            newState = { ...state };
            if (newState.hasOwnProperty(action.key)) {
                newState[action.key] = { ...template };
                return newState;
            }
            return state;
        default:
            return state;
    }
};

export default ipReducer;
