const initialState = {};
const template = {
    automaticallyIP: true,
    IPaddress: '',
    subnetMask: '',
    gateway: '',
};

const SAVE_FIELD_VALUE = 'omertex-react/ipReducer/SAVE_FIELD_VALUE';

const ipReducer = (state = initialState, action) => {
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

export const onSaveFieldValue = (key, field, value) => ({type: SAVE_FIELD_VALUE, key, field, value});

export default ipReducer;