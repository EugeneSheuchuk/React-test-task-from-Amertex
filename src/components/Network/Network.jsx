import React from 'react';
import style from './Network.module.css';
import IP from '../IP/IP';
import DNS from '../DNS/DNS';
import FieldWithSelect from '../FieldWithSelect/FieldWithSelect';
import Checkbox from '../Checkbox/Checkbox';
import Field from "../Field/Field";
import Button from "../Button/Button";
import {connect} from "react-redux";
import {onClearData, onSaveData, saveNetFieldValue} from "../../redux/netReducer";

const Network = (props) => {
    const {enableWifi, enableWifiSecurity, securityKey, networkName} = props.propState;
    let {errorNetworkName, errorSecurityKey} = props.propState;
    if (enableWifi && !enableWifiSecurity) {
        errorSecurityKey = '';
    } else if (!enableWifi) {
        errorNetworkName = '';
        errorSecurityKey = '';
    }

    const onChangeCheckbox = (id) => {
        switch (id) {
            case 'enableWifi':
                props.saveNetFieldValue('enableWifi', !enableWifi);
                break;
            case 'enableWifiSecurity':
                props.saveNetFieldValue('enableWifiSecurity', !enableWifiSecurity);
                break;
            default:
                return;
        }
    };

    const onChangeSelect = e => {
        const netName = e.target.value;
        props.saveNetFieldValue('networkName', netName);
    };

    const typeField = e => {
        const securityKey = e.target.value;
        props.saveNetFieldValue('securityKey', securityKey);
    };

    const disabledStyle = !enableWifi ? 'disabledLabel' : '';
    const disabledCheckbox = !enableWifi;

    return (
        <div className={style.container}>
            <div className={style.nets}>
                <div className={style.netsItem}>
                    <p>Ethernet Settings</p>
                    <IP uniqueKey={'Ethernet_IP'}/>
                    <DNS uniqueKey={'Ethernet_DNS'}/>
                </div>
                <div className={style.netsItem}>
                    <p>Wireless Settings</p>
                    <div>
                        <label htmlFor='enableWifi' className={`${style.labelContainer}`}>
                            Enable wifi:
                            <Checkbox id={'enableWifi'} value={'enableWifi'}
                                      name={'enableWifi'} action={onChangeCheckbox} checked={enableWifi}/>
                            <span className='checkmark'></span>
                        </label>
                    </div>
                    <FieldWithSelect fieldName={'Wireless Network Name:'} required={true}
                                     value={networkName}
                                     options={['Please select', 'Free net', 'Cool closed net']}
                                     uniqueKey={'Nets'} action={onChangeSelect}
                                     errorText={errorNetworkName} disabled={!enableWifi}/>
                    <div>
                        <label htmlFor='enableWifiSecurity' className={`${style.labelContainer} ${style[disabledStyle]}`}>
                            Enable wifi:
                            <Checkbox id={'enableWifiSecurity'} value={'enableWifiSecurity'}
                                      name={'enableWifiSecurity'} action={onChangeCheckbox}
                                      checked={enableWifiSecurity} disabled={disabledCheckbox}/>
                            <span className='checkmark'></span>
                        </label>
                        <Field type='password' fieldName={'Security Key:'} required={true}
                               value={securityKey} action={typeField}
                               errorText={errorSecurityKey} disabled={!enableWifiSecurity}/>
                    </div>
                    <IP uniqueKey={'Wireless_IP'} disabled={!enableWifi}/>
                    <DNS uniqueKey={'Wireless_DNS'} disabled={!enableWifi}/>
                </div>
            </div>
            <div className={style.footer}>
                <Button value={'Save'} action={props.saveData}/>
                <Button value={'Cancel'} action={props.clear}/>
            </div>
        </div>
    );
};

const mapStateToProps = (state) => ({propState: state.NET});

const mapDispatchToProps = dispatch => {
    return {
        saveNetFieldValue(field, value) {
            dispatch(saveNetFieldValue(field, value));
        },
        saveData() {
            dispatch(onSaveData());
        },
        clear() {
            dispatch(onClearData());
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Network);