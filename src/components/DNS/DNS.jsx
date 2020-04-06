import React from 'react';
import style from './DNS.module.css';
import PropTypes from "prop-types";
import RadioInput from '../RadioInput/RadioInput';
import Field from "../Field/Field";

const DNS = (props) => {
    const {uniqueKey} = props;
    return (
        <React.Fragment>
            <div className={style.choose}>
                <label htmlFor={`ADNS-${uniqueKey}`}>Obtain DNS server address automatically
                    <RadioInput name={'automatically_DNS_server'} id={`ADNS-${uniqueKey}`}/>
                    <span></span>
                </label>
            </div>
            <div className={style.choose}>
                <label htmlFor={`SDNS-${uniqueKey}`}>Use the following DNS server address:
                    <RadioInput name={'automatically_DNS_server'} id={`SDNS-${uniqueKey}`}/>
                    <span></span>
                </label>
            </div>
            <Field fieldName={'Preferred DNS server:'} id={`P_DNS_server_${uniqueKey}`}
                   action={() => {
                   }}
                   required={true}/>
            <Field fieldName={'Alternative DNS server:'} id={`A_DNS_server_${uniqueKey}`}
                   action={() => {
                   }}
                   required={false}/>
        </React.Fragment>
    );
};

DNS.propTypes = {
    uniqueKey: PropTypes.string.isRequired,
};

export default DNS;