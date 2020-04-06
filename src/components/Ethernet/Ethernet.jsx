import React from 'react';
import style from './Ethernet.module.css';
import PropTypes from "prop-types";
import RadioInput from '../RadioInput/RadioInput';
import Field from "../Field/Field";

class Ethernet extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const {key} = this.props;
        return (
            <React.Fragment>
                <div className={style.choose}>
                    <div className={style.item}>
                        <RadioInput name={'automatically IP address'}/>

                    </div>
                    <div className={style.item}>
                        <label htmlFor="">
                            Obtain an IP address automatically (DHCP/BootP)
                        </label>
                    </div>
                </div>
                <div className={style.choose}>
                    <div className={style.item}>
                        <RadioInput name={'automatically IP address'}/>

                    </div>
                    <div className={style.item}>
                        <label htmlFor="">
                            Use the following IP address:
                        </label>
                    </div>
                </div>
                <Field fieldName={'IP address:'} id={`IP_address_${key}`}
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

Ethernet.propTypes = {
    key: PropTypes.string.isRequired,
};

export default Ethernet;