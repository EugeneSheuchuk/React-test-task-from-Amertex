import React, {useEffect} from 'react';
import style from './DNS.module.css';
import PropTypes from "prop-types";
import {connect} from 'react-redux';
import RadioInput from '../RadioInput/RadioInput';
import Field from "../Field/Field";
import {saveFieldValue} from "../../redux/netReducer";

const DNS = (props) => {
    //initialize redux state
    useEffect(() => props.saveDNSFieldValue(props.uniqueKey, 'AutoDNS', true), []);

    const {uniqueKey, disabled} = props;
    const {AutoDNS, pDNS, aDNS} = props.propState;
    let {errorpDNS, erroraDNS} = props.propState;
    if (AutoDNS) {
        errorpDNS = '';
        erroraDNS = '';
    }

    const onClickRadio = (bool) => props.saveDNSFieldValue(uniqueKey, 'AutoDNS', bool);
    const typeField = (e, id) => {
        switch (id) {
            case `P_DNS_server_${uniqueKey}`:
                const pDNS = e.target.value;
                props.saveDNSFieldValue(uniqueKey, 'pDNS', pDNS.trim());
                break;
            case `A_DNS_server_${uniqueKey}`:
                const aDNS = e.target.value;
                props.saveDNSFieldValue(uniqueKey, 'aDNS', aDNS.trim());
                break;
            default:
                return;
        }
    };

    const disabledStyle = disabled ? 'disabledLabel' : '';

    return (
        <React.Fragment>
            <div className={style.choose}>
                <label htmlFor={`ADNS-${uniqueKey}`} className={`${style[disabledStyle]}`}>Obtain DNS server address automatically
                    <RadioInput name={'automatically_DNS_server'} id={`ADNS-${uniqueKey}`} value={true}
                                action={onClickRadio} checked={AutoDNS} disabled={disabled}/>
                    <span></span>
                </label>
            </div>
            <div className={style.choose}>
                <label htmlFor={`SDNS-${uniqueKey}`} className={`${style[disabledStyle]}`}>Use the following DNS server address:
                    <RadioInput name={'automatically_DNS_server'} id={`SDNS-${uniqueKey}`} value={false}
                                action={onClickRadio} checked={!AutoDNS} disabled={disabled}/>
                    <span></span>
                </label>
            </div>
            <Field type='text' fieldName={'Preferred DNS server:'} id={`P_DNS_server_${uniqueKey}`} value={pDNS}
                   action={typeField} required={true} errorText={errorpDNS} disabled={AutoDNS}/>
            <Field type='text' fieldName={'Alternative DNS server:'} id={`A_DNS_server_${uniqueKey}`} value={aDNS}
                   action={typeField} required={false} errorText={erroraDNS} disabled={AutoDNS}/>
        </React.Fragment>
    );
};

const mapStateToProps = (state, ownProps) => {
    const initial = {
        AutoDNS: true,
        pDNS: '',
        aDNS: '',
    };
    return {propState: state.DNS[ownProps.uniqueKey] || initial,}
};

const mapDispatchToProps = dispatch => {
    return {
        saveDNSFieldValue(key, field, value) {
            dispatch(saveFieldValue(key, field, value));
        }
    };
};


DNS.propTypes = {
    uniqueKey: PropTypes.string.isRequired,
    disabled: PropTypes.bool,
};

export default connect(mapStateToProps, mapDispatchToProps)(DNS);