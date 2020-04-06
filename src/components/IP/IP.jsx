import React from 'react';
import style from './IP.module.css';
import PropTypes from "prop-types";
import RadioInput from '../RadioInput/RadioInput';
import Field from "../Field/Field";

class IP extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const {uniqueKey} = this.props;
        return (
            <React.Fragment>
                <div className={style.choose}>
                    <label htmlFor={`AIP-${uniqueKey}`} className='container'>
                        Obtain an IP address automatically (DHCP/BootP)
                        <RadioInput name={'automatically_IP'} id={`AIP-${uniqueKey}`}/>
                        <span className='checkmark'></span>
                    </label>
                </div>
                <div className={style.choose}>
                    <label htmlFor={`SIP-${uniqueKey}`} className='container'>
                        Use the following IP address:
                        <RadioInput name={'automatically_IP'} id={`SIP-${uniqueKey}`}/>
                        <span className='checkmark'></span>
                    </label>
                </div>
                <Field fieldName={'DNS address:'} id={`IP_address_${uniqueKey}`}
                       action={() => {
                       }}
                       required={true}/>
                <Field fieldName={'Subnet Mask:'} id={`Subnet_Mask_${uniqueKey}`}
                       action={() => {
                       }}
                       required={true}/>
                <Field fieldName={'Default Gateway:'} id={`Default_Gateway_${uniqueKey}`}
                       action={() => {
                       }}
                       required={false}/>
            </React.Fragment>
        );
    }
}

IP.propTypes = {
    uniqueKey: PropTypes.string.isRequired,
};

export default IP;