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
                <div className={style.item}>
                    <RadioInput name={'automatically_DNS_server_address'}/>

                </div>
                <div className={style.item}>
                    <label htmlFor="">
                        Obtain DNS server address automatically
                    </label>
                </div>
            </div>
            <div className={style.choose}>
                <div className={style.item}>
                    <RadioInput name={'use_DNS_server_address'}/>
                </div>
                <div className={style.item}>
                    <label htmlFor="">
                        Use the following DNS server address:
                    </label>
                </div>
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