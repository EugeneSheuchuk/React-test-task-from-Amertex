import React, {useState} from 'react';
import style from './Network.module.css';
import IP from '../IP/IP';
import DNS from '../DNS/DNS';
import FieldWithSelect from '../FieldWithSelect/FieldWithSelect';
import Checkbox from '../Checkbox/Checkbox';
import Field from "../Field/Field";
import Button from "../Button/Button";

const Network = () => {
    const [state, setState] = useState({
        enableWifi: false,
        enableWifiSecurity: false,
        networkName: '',
        securityKey: '',
    });

    const onChangeCheckbox = (id) => {
        switch (id) {
            case 'enableWifi':
                setState(prevState => {
                    const state = {...prevState};
                    state.enableWifi = !state.enableWifi;
                    return state;
                });
                break;
            case 'enableWifiSecurity':
                setState(prevState => {
                    const state = {...prevState};
                    state.enableWifiSecurity = !state.enableWifiSecurity;
                    return state;
                });
                break;
            default:
                return;
        }
    };

    const onChangeSelect = e => {
        const networkName = e.target.value;
        setState(prevState => {
            const state = {...prevState};
            state.networkName = networkName;
            return state;
        });
    };

    const typeField = e => {
        const securityKey = e.target.value;
        setState(prevState => {
            const state = {...prevState};
            state.securityKey = securityKey;
            return state;
        });
    };

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
                        <label htmlFor='enableWifi' className='container'>
                            Enable wifi:
                            <Checkbox id={'enableWifi'} value={'enableWifi'}
                                      name={'enableWifi'} action={onChangeCheckbox} checked={state.enableWifi}/>
                            <span className='checkmark'></span>
                        </label>
                    </div>
                    <FieldWithSelect fieldName={'Wireless Network Name:'} required={true}
                                     options={['Please select', 'Free net', 'Cool closed net']}
                                     uniqueKey={'Nets'} action={onChangeSelect}/>
                    <div>
                        <label htmlFor='enableWifiSecurity' className='container'>
                            Enable wifi:
                            <Checkbox id={'enableWifiSecurity'} value={'enableWifiSecurity'}
                                      name={'enableWifiSecurity'} action={onChangeCheckbox}
                                      checked={state.enableWifiSecurity}/>
                            <span className='checkmark'></span>
                        </label>
                        <Field fieldName={'Security Key:'} required={true}
                               value={state.securityKey} action={typeField}/>
                    </div>
                    <IP uniqueKey={'Wireless_IP'}/>
                    <DNS uniqueKey={'Wireless_DNS'}/>
                </div>
            </div>
            <div className={style.footer}>
                <Button value={'Save'} action={() => {
                }}/>
                <Button value={'Cancel'} action={() => {
                }}/>
            </div>
        </div>
    );
};

export default Network;