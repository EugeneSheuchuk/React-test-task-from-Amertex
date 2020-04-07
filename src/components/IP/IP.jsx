import React from 'react';
import style from './IP.module.css';
import PropTypes from "prop-types";
import RadioInput from '../RadioInput/RadioInput';
import Field from "../Field/Field";

class IP extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            automaticallyIP: true,
            IPaddress: '',
            subnetMask: '',
            gateway: '',
        };
    }

    onClickRadio = (bool) => this.setState({automaticallyIP: bool});

    typeField = (e, id) => {
        const {uniqueKey} = this.props;
        switch (id) {
            case `IP_address_${uniqueKey}`:
                const ip = e.target.value;
                this.setState({IPaddress: ip});
                break;
            case `Subnet_Mask_${uniqueKey}`:
                const subnet = e.target.value;
                this.setState({subnetMask: subnet});
                break;
            case `Default_Gateway_${uniqueKey}`:
                const gateway = e.target.value;
                this.setState({gateway});
                break;
            default:
                return;
        }
    };

    render() {
        const {uniqueKey} = this.props;

        return (
            <React.Fragment>
                <div className={style.choose}>
                    <label htmlFor={`AIP-${uniqueKey}`} className='container'>
                        Obtain an IP address automatically (DHCP/BootP)
                        <RadioInput id={`AIP-${uniqueKey}`}
                                    value={true} action={this.onClickRadio} checked={this.state.automaticallyIP}/>
                        <span className='checkmark'></span>
                    </label>
                </div>
                <div className={style.choose}>
                    <label htmlFor={`SIP-${uniqueKey}`} className='container'>
                        Use the following IP address:
                        <RadioInput id={`SIP-${uniqueKey}`}
                                    value={false} action={this.onClickRadio} checked={!this.state.automaticallyIP}/>
                        <span className='checkmark'></span>
                    </label>
                </div>
                <Field fieldName={'IP address:'} id={`IP_address_${uniqueKey}`}
                       action={this.typeField} required={true}/>
                <Field fieldName={'Subnet Mask:'} id={`Subnet_Mask_${uniqueKey}`}
                       action={this.typeField} required={true}/>
                <Field fieldName={'Default Gateway:'} id={`Default_Gateway_${uniqueKey}`}
                       action={this.typeField} required={false}/>
            </React.Fragment>
        );
    }
}

IP.propTypes = {
    uniqueKey: PropTypes.string.isRequired,
};

export default IP;