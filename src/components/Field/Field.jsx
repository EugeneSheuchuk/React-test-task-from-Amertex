import React from 'react';
import style from './Field.module.css';
import PropTypes from "prop-types";
import InputType from "../InputType/InputType";

const Field = (props) => {
    const {
        type, fieldName, id = null, value, action, required = false,
        styleClassName, errorText = '', disabled} = props;
    const star = required ? <span className={style.red}> *</span> : null;
    const disabledStyle = disabled ? 'disabledLabel' : '';
    return (
        <div className={style.field}>
            <div className={`${style.fieldName} ${style.fieldItem}`}>
                <label htmlFor={id}
                       className={`${style[styleClassName]} ${style[disabledStyle]}`}>
                    {fieldName}
                    {star}
                </label>
            </div>
            <div className={`${style.fieldBox} ${style.fieldItem}`}>
                <InputType type={type} id={id} value={value}
                           action={action} disabled={disabled}/>
                <p className={style.errorText}>{errorText}</p>
            </div>
        </div>
    );
};

Field.propTypes = {
    fieldName: PropTypes.string.isRequired,
    id: PropTypes.oneOfType([PropTypes.string, PropTypes.number, PropTypes.oneOf([null])]),
    value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    action: PropTypes.func,
    required: PropTypes.bool,
    styleClassName: PropTypes.string,
    errorText: PropTypes.string,
    disabled: PropTypes.bool,
};

export default Field;