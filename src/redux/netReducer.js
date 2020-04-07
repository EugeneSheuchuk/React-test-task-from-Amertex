import {checkData, prepareData} from "../assets/helperFunctions";

const initialState = {
    enableWifi: false,
    enableWifiSecurity: false,
    networkName: '',
    securityKey: '',
};

const SAVE_FIELD_VALUE = 'omertex-react/netReducer/SAVE_FIELD_VALUE';

const netReducer = (state = initialState, action) => {
    switch (action.type) {
        case SAVE_FIELD_VALUE:
            return {
                ...state,
                [action.field]: action.value,
            };
        default:
            return state;
    }
};

export const saveNetFieldValue = (field, value) => ({type: SAVE_FIELD_VALUE, field, value});

export const onSaveData = () => {
    return (dispatch, getState) => {
        //console.log('state ', getState());
        const error = checkData(getState());
        console.log('error ', error);
        const result = prepareData(getState());
        //console.log('result ', result);
    }
};

export default netReducer;