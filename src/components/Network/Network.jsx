import React from 'react';
import style from './Network.module.css';
import IP from '../IP/IP';
import DNS from '../DNS/DNS';
import FieldWithSelect from '../FieldWithSelect/FieldWithSelect';
import Checkbox from '../Checkbox/Checkbox';
import Field from "../Field/Field";

const Network = () => {
    return (
        <div className={style.container}>
            <div className={style.nets}>
                <div>
                    <p>Ethernet Settings</p>
                    <IP uniqueKey={'Ethernet_1'}/>
                    <DNS uniqueKey={'DNS_1'}/>
                </div>
                <div>
                    <p>Wireless Settings</p>
                    <div>
                        <label htmlFor='enableWifi' className='container'>
                            Enable wifi:
                            <Checkbox id={'enableWifi'} value={'enableWifi'}
                                      name={'enableWifi'} onCange={() => {
                            }}/>
                            <span className='checkmark'></span>
                        </label>
                    </div>
                    <FieldWithSelect fieldName={'Wireless Network Name:'} required={true}
                                     options={['Please select', 'Free net', 'Cool closed net']}
                                     uniqueKey={'Nets'}/>
                    <div>
                        <label htmlFor='enableWifiSecurity' className='container'>
                            Enable wifi:
                            <Checkbox id={'enableWifiSecurity'} value={'enableWifiSecurity'}
                                      name={'enableWifiSecurity'} onCange={() => {
                            }}/>
                            <span className='checkmark'></span>
                        </label>
                        <Field fieldName={'Security Key:'} required={true} action={()=>{}}/>
                    </div>
                    <IP uniqueKey={'Ethernet_2'}/>
                    <DNS uniqueKey={'DNS_2'}/>
                </div>
            </div>
            <div className={style.footer}>
            </div>
        </div>
    );
};

export default Network;