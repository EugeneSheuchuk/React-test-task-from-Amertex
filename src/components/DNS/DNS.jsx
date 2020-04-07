import React, {useState} from 'react';
import style from './DNS.module.css';
import PropTypes from "prop-types";
import RadioInput from '../RadioInput/RadioInput';
import Field from "../Field/Field";

const DNS = (props) => {

    const [state, setState] = useState({AutoDNS: true, pDNS: '', aDNS: ''});

    const {uniqueKey} = props;
    const onClickRadio = (bool) => setState(prevState => {
        const state = {...prevState};
        state.AutoDNS = bool;
        return state;
    });
    const typeField = (e, id) => {
        const {uniqueKey} = props;
        switch (id) {
            case `P_DNS_server_${uniqueKey}`:
                const pDNS = e.target.value;

                break;
            case `A_DNS_server_${uniqueKey}`:
                const aDNS = e.target.value;
                setState(prevState => {
                    const state = {...prevState};
                    state.aDNS = aDNS;
                    return state;
                });
                break;
            default:
                return;
        }
    };

    return (
        <React.Fragment>
            <div className={style.choose}>
                <label htmlFor={`ADNS-${uniqueKey}`}>Obtain DNS server address automatically
                    <RadioInput name={'automatically_DNS_server'} id={`ADNS-${uniqueKey}`} value={true}
                                action={onClickRadio} checked={state.AutoDNS}/>
                    <span></span>
                </label>
            </div>
            <div className={style.choose}>
                <label htmlFor={`SDNS-${uniqueKey}`}>Use the following DNS server address:
                    <RadioInput name={'automatically_DNS_server'} id={`SDNS-${uniqueKey}`} value={false}
                                action={onClickRadio} checked={!state.AutoDNS}/>
                    <span></span>
                </label>
            </div>
            <Field fieldName={'Preferred DNS server:'} id={`P_DNS_server_${uniqueKey}`} value={state.pDNS}
                   action={typeField} required={true}/>
            <Field fieldName={'Alternative DNS server:'} id={`A_DNS_server_${uniqueKey}`} value={state.aDNS}
                   action={typeField} required={false}/>
        </React.Fragment>
    );
};

DNS.propTypes = {
    uniqueKey: PropTypes.string.isRequired,
};

export default DNS;