import React from 'react';
import style from './DNS.module.css';
import PropTypes from "prop-types";
import RadioInput from '../RadioInput/RadioInput';
import Field from "../Field/Field";

const DNS = (props) => {
    const {key} = props;
    return (
        <React.Fragment>
            <div className={style.choose}>
                <label htmlFor={`ADNS-${key}`}>Obtain DNS server address automatically
                    <RadioInput name={'automatically_DNS_server'} id={`ADNS-${key}`}/>
                    <span></span>
                </label>
            </div>
            <div className={style.choose}>
                <label htmlFor={`SDNS-${key}`}>Use the following DNS server address:
                    <RadioInput name={'automatically_DNS_server'} id={`SDNS-${key}`}/>
                    <span></span>
                </label>
            </div>
            <Field fieldName={'Preferred DNS server:'} id={`P_DNS_server_${key}`}
                   action={() => {
                   }}
                   required={true}/>
            <Field fieldName={'Alternative DNS server:'} id={`A_DNS_server_${key}`}
                   action={() => {
                   }}
                   required={false}/>
        </React.Fragment>
    );
};

DNS.propTypes = {
    key: PropTypes.string.isRequired,
};

export default DNS;