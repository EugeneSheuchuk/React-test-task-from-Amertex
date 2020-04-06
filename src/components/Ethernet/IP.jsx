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
        const {key} = this.props;
        return (
            <React.Fragment>
                <div className={style.choose}>
                    <label htmlFor={`AIP-${key}`} className='container'>
                        Obtain an IP address automatically (DHCP/BootP)
                        <RadioInput name={'automatically_IP'} id={`AIP-${key}`}/>
                        <span className='checkmark'></span>
                    </label>
                </div>
                <div className={style.choose}>
                    <label htmlFor={`SIP-${key}`} className='container'>
                        Use the following IP address:
                        <RadioInput name={'automatically_IP'} id={`SIP-${key}`}/>
                        <span className='checkmark'></span>
                    </label>
                </div>
                <Field fieldName={'DNS address:'} id={`IP_address_${key}`}
                       action={() => {
                       }}
                       required={true}/>
                <Field fieldName={'Subnet Mask:'} id={`Subnet_Mask_${key}`}
                       action={() => {
                       }}
                       required={true}/>
                <Field fieldName={'Default Gateway:'} id={`Default_Gateway_${key}`}
                       action={() => {
                       }}
                       required={false}/>
            </React.Fragment>
        );
    }
}

IP.propTypes = {
    key: PropTypes.string.isRequired,
};

export default IP;