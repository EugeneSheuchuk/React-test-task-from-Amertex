import {combineReducers} from 'redux';
import ipReducer from "./ipReducer";
import dnsReducer from "./dnsReducer";

const reducers = combineReducers({
    IP: ipReducer,
    DNS: dnsReducer,
});

export default reducers;