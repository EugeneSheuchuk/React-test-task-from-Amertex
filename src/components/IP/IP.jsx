import React from 'react';
import style from './IP.module.css';
import PropTypes from "prop-types";
import {connect} from 'react-redux';
import RadioInput from '../RadioInput/RadioInput';
import Field from "../Field/Field";
import {onSaveFieldValue} from "../../redux/ipReducer";

class IP extends React.Component {

    componentDidMount(props) {
        //initialize redux state
        this.props.saveFieldValue(this.props.uniqueKey, 'automaticallyIP', true);
    }

    onClickRadio = (bool) => this.props.saveFieldValue(this.props.uniqueKey, 'automaticallyIP', bool);

    typeField = (e, id) => {
        e.stopPropagation();
        const {uniqueKey} = this.props;
        switch (id) {
            case `IP_address_${uniqueKey}`:
                const ip = e.target.value;
                this.props.saveFieldValue(uniqueKey, 'IPaddress', ip);
                break;
            case `Subnet_Mask_${uniqueKey}`:
                const subnet = e.target.value;
                this.props.saveFieldValue(uniqueKey, 'subnetMask', subnet);
                break;
            case `Default_Gateway_${uniqueKey}`:
                const gateway = e.target.value;
                this.props.saveFieldValue(uniqueKey, 'gateway', gateway);
                break;
            default:
                return;
        }
    };

    render() {
        const {uniqueKey} = this.props;
        const {automaticallyIP, IPaddress, subnetMask, gateway} = this.props.propState;

        return (
            <React.Fragment>
                <div className={style.choose}>
                    <label htmlFor={`AIP-${uniqueKey}`} className='container'>
                        Obtain an IP address automatically (DHCP/BootP)
                        <RadioInput id={`AIP-${uniqueKey}`}
                                    value={true} action={this.onClickRadio}
                                    checked={automaticallyIP}/>
                        <span className='checkmark'></span>
                    </label>
                </div>
                <div className={style.choose}>
                    <label htmlFor={`SIP-${uniqueKey}`} className='container'>
                        Use the following IP address:
                        <RadioInput id={`SIP-${uniqueKey}`}
                                    value={false} action={this.onClickRadio}
                                    checked={!automaticallyIP}/>
                        <span className='checkmark'></span>
                    </label>
                </div>
                <Field type='text' fieldName={'IP address:'} id={`IP_address_${uniqueKey}`}
                       value={IPaddress} action={this.typeField} required={true}/>
                <Field type='text' fieldName={'Subnet Mask:'} id={`Subnet_Mask_${uniqueKey}`}
                       value={subnetMask} action={this.typeField} required={true}/>
                <Field type='text' fieldName={'Default Gateway:'} id={`Default_Gateway_${uniqueKey}`}
                       value={gateway} action={this.typeField} required={false}/>
            </React.Fragment>
        );
    }
}

const mapStateToProps = (state, ownProps) => {
    const initial = {
        automaticallyIP: true,
        IPaddress: '',
        subnetMask: '',
        gateway: '',
    };
    return {propState: state.IP[ownProps.uniqueKey] || initial,}
};

const mapDispatchToProps = dispatch => {
    return {
        saveFieldValue(key, field, value) {
            dispatch(onSaveFieldValue(key, field, value));
        }
    };
};

IP.propTypes = {
    uniqueKey: PropTypes.string.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(IP);