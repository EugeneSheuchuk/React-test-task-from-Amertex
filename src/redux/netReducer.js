const initialState = {};
const template = {
    enableWifi: false,
    enableWifiSecurity: false,
    networkName: '',
    securityKey: '',
};

const SAVE_FIELD_VALUE = 'omertex-react/netReducer/SAVE_FIELD_VALUE';

const netReducer = (state = initialState, action) => {
    switch (action.type) {
        case SAVE_FIELD_VALUE:
            const newState = {...state};
            if ( !newState.hasOwnProperty(action.key)) {
                newState[action.key] = {...template, [action.field]: action.value};
            } else {
                newState[action.key] = {...newState[action.key], [action.field]: action.value};
            }
            return newState;
        default:
            return state;
    }
};

export const saveNetFieldValue = (key, field, value) => ({type: SAVE_FIELD_VALUE, key, field, value});

export default netReducer;