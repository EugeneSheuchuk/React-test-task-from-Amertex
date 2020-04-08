import {
    checkData,
    CLEAR_ERROR_TEXT,
    CLEAR_REDUCER_TEXT,
    clearErrorMessages, clearReducersData,
    prepareData
} from "../assets/helperFunctions";

const initialState = {
    enableWifi: false,
    enableWifiSecurity: false,
    networkName: '',
    securityKey: '',
    errorNetworkName: '',
    errorSecurityKey: '',
};

const SAVE_FIELD_VALUE = 'omertex-react/netReducer/SAVE_FIELD_VALUE';
export const SAVE_ERROR_TEXT = 'omertex-react/netReducer/SAVE_ERROR_TEXT';


const netReducer = (state = initialState, action) => {
    switch (action.type) {
        case SAVE_FIELD_VALUE:
            return {
                ...state,
                [action.field]: action.value,
            };
        case SAVE_ERROR_TEXT:
            if (action.key === 'NET') {
                return {
                    ...state,
                    ...action.errors,
                }
            }
            return state;
        case CLEAR_ERROR_TEXT:
            if (action.key === 'NET') {
                return {
                    ...state,
                    errorNetworkName: '',
                    errorSecurityKey: '',
                }
            }
            return state;
        case CLEAR_REDUCER_TEXT:
            if (action.key === 'NET') {
                return {...initialState};
            }
            return state;
        default:
            return state;
    }
};

export const saveNetFieldValue = (field, value) => ({type: SAVE_FIELD_VALUE, field, value});

export const onSaveData = () => {
    return (dispatch, getState) => {
        const error = checkData(getState());
        clearErrorMessages(dispatch);
        let isErrorMessage = false;
        for (let key in error) {
            if (error[key].isError) {
                isErrorMessage = true;
                delete error[key].isError;
                dispatch({type: SAVE_ERROR_TEXT, key, errors: error[key]});
            }
        }
        if (isErrorMessage) return;
        const result = prepareData(getState());
        console.log('result ', result);
    }
};

export const onClearData = () => {
    return dispatch => clearReducersData(dispatch);
};

export default netReducer;