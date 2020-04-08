import React from 'react';
import style from './FieldWithSelect.module.css';
import PropTypes from "prop-types";
import Select from "../Select/Select";
import {ReactComponent as Arrow} from './../../assets/reload-arrow.svg';


const FieldWithSelect = (props) => {
    const {
        fieldName, id = null, required = false, options, value,
        styleClassName, uniqueKey, action, errorText = '', disabled
    } = props;
    const star = required ? <span className={style.red}> *</span> : null;
    const disabledStyle = disabled ? 'disabledLabel' : '';
    const disabledArrow = disabled ? 'disabledSvg' : '';
    const errorStyle = errorText !== '' ? 'errorStyle' : '';

    return (
        <div className={style.field}>
            <div className={`${style.fiedItem} ${style.fieldName}`}>
                <label htmlFor={id} className={`${style[styleClassName]} ${style[disabledStyle]}`}>
                    {fieldName}
                    {star}
                </label>
            </div>
            <div className={`${style.fiedItem} ${style.fieldSelect} ${style[errorStyle]}`}>
                <Select id={id} options={options} value={value}
                        key={uniqueKey} action={action} disabled={disabled}/>
            </div>
            <div className={style.fiedItem}>
                <div className={`${style.fieldArrow} ${style[disabledArrow]}`}
                     onClick={() => alert('reloading...')}>
                    <Arrow/>
                </div>
            </div>
            <p className={style.error}>{errorText}</p>
        </div>
    );
};

FieldWithSelect.propTypes = {
    fieldName: PropTypes.string.isRequired,
    id: PropTypes.oneOfType([PropTypes.string, PropTypes.number, PropTypes.oneOf([null])]),
    value: PropTypes.string,
    required: PropTypes.bool,
    options: PropTypes.array,
    styleClassName: PropTypes.string,
    uniqueKey: PropTypes.string.isRequired,
    action: PropTypes.func,
    errorText: PropTypes.string,
    disabled: PropTypes.bool,
};

export default FieldWithSelect;