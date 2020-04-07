import {combineReducers} from 'redux';
import ipReducer from "./ipReducer";
import dnsReducer from "./dnsReducer";
import netReducer from "./netReducer";

const reducers = combineReducers({
    IP: ipReducer,
    DNS: dnsReducer,
    NET: netReducer
});

export default reducers;