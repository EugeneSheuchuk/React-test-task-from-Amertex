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

const SAVE_FIELD_VALUE = 'omertex-react/ipReducer/SAVE_FIELD_VALUE';
const SAVE_ERROR_TEXT = 'omertex-react/SAVE_ERROR_TEXT';
const CLEAR_ERROR_TEXT = 'omertex-react/CLEAR_ERROR_TEXT';

const ipReducer = (state = initialState, action) => {
    let newState;
    switch (action.type) {
        case SAVE_FIELD_VALUE:
            newState = {...state};
            if (!newState.hasOwnProperty(action.key)) {
                newState[action.key] = {...template, [action.field]: action.value};
            } else {
                newState[action.key] = {...newState[action.key], [action.field]: action.value};
            }
            return newState;
        case SAVE_ERROR_TEXT:
            newState = {...state};
            if (newState.hasOwnProperty(action.key)) {
                newState[action.key] = {...newState[action.key], ...action.errors};
                return newState;
            }
            return state;
        case CLEAR_ERROR_TEXT:
            newState = {...state};
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
        default:
            return state;
    }
};

export const onSaveFieldValue = (key, field, value) => ({type: SAVE_FIELD_VALUE, key, field, value});

export default ipReducer;