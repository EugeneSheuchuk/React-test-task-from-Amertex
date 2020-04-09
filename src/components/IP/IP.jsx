import React from 'react';
import style from './IP.module.css';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import RadioInput from '../RadioInput/RadioInput';
import Field from '../Field/Field';
import { saveFieldValue } from '../../redux/netReducer';

class IP extends React.Component {
    componentDidMount(props) {
        //initialize redux state
        this.props.saveFieldValue(
            this.props.uniqueKey,
            'automaticallyIP',
            true
        );
    }

    onClickRadio = (bool) =>
        this.props.saveFieldValue(
            this.props.uniqueKey,
            'automaticallyIP',
            bool
        );

    typeField = (e, id) => {
        const { uniqueKey } = this.props;
        switch (id) {
            case `IP_address_${uniqueKey}`:
                const ip = e.target.value;
                this.props.saveFieldValue(uniqueKey, 'IPaddress', ip.trim());
                break;
            case `Subnet_Mask_${uniqueKey}`:
                const subnet = e.target.value;
                this.props.saveFieldValue(
                    uniqueKey,
                    'subnetMask',
                    subnet.trim()
                );
                break;
            case `Default_Gateway_${uniqueKey}`:
                const gateway = e.target.value;
                this.props.saveFieldValue(uniqueKey, 'gateway', gateway.trim());
                break;
            default:
                return;
        }
    };

    render() {
        const { uniqueKey, disabled } = this.props;
        const {
            automaticallyIP,
            IPaddress,
            subnetMask,
            gateway,
        } = this.props.propState;
        let {
            errorIPaddress,
            errorSubnetMask,
            errorGateway,
        } = this.props.propState;
        if (automaticallyIP) {
            errorIPaddress = '';
            errorSubnetMask = '';
            errorGateway = '';
        }
        const disabledStyle = disabled ? 'disabledLabel' : '';

        return (
            <React.Fragment>
                <div className={style.choose}>
                    <label
                        htmlFor={`AIP-${uniqueKey}`}
                        className={`${style.labelContainer} ${style[disabledStyle]}`}
                    >
                        Obtain an IP address automatically (DHCP/BootP)
                        <RadioInput
                            id={`AIP-${uniqueKey}`}
                            value={true}
                            action={this.onClickRadio}
                            checked={automaticallyIP}
                            disabled={disabled}
                        />
                        <span className={style.checkmark}></span>
                    </label>
                </div>
                <div className={style.choose}>
                    <label
                        htmlFor={`SIP-${uniqueKey}`}
                        className={`${style.labelContainer} ${style[disabledStyle]}`}
                    >
                        Use the following IP address:
                        <RadioInput
                            id={`SIP-${uniqueKey}`}
                            value={false}
                            action={this.onClickRadio}
                            checked={!automaticallyIP}
                            disabled={disabled}
                        />
                        <span className={style.checkmark}></span>
                    </label>
                </div>
                <Field
                    type="text"
                    fieldName={'IP address:'}
                    id={`IP_address_${uniqueKey}`}
                    value={IPaddress}
                    action={this.typeField}
                    required={true}
                    errorText={errorIPaddress}
                    disabled={automaticallyIP}
                />
                <Field
                    type="text"
                    fieldName={'Subnet Mask:'}
                    id={`Subnet_Mask_${uniqueKey}`}
                    value={subnetMask}
                    action={this.typeField}
                    required={true}
                    errorText={errorSubnetMask}
                    disabled={automaticallyIP}
                />
                <Field
                    type="text"
                    fieldName={'Default Gateway:'}
                    id={`Default_Gateway_${uniqueKey}`}
                    value={gateway}
                    action={this.typeField}
                    required={false}
                    errorText={errorGateway}
                    disabled={automaticallyIP}
                />
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
    return { propState: state.IP[ownProps.uniqueKey] || initial };
};

const mapDispatchToProps = (dispatch) => {
    return {
        saveFieldValue(key, field, value) {
            dispatch(saveFieldValue(key, field, value));
        },
    };
};

IP.propTypes = {
    uniqueKey: PropTypes.string.isRequired,
    disabled: PropTypes.bool,
};

export default connect(mapStateToProps, mapDispatchToProps)(IP);
