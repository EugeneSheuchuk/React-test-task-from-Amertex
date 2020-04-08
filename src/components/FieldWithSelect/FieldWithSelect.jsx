import React from 'react';
import style from './FieldWithSelect.module.css';
import PropTypes from "prop-types";
import Select from "../Select/Select";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faRedoAlt} from '@fortawesome/free-solid-svg-icons'

const FieldWithSelect = (props) => {
    const {
        fieldName, id = null, required = false, options, value,
        styleClassName, uniqueKey, action, errorText = '', disabled
    } = props;
    const text = `${fieldName}${required ? ' *' : ''}`;
    const disabledStyle = disabled ? 'disabledLabel' : '';

    return (
        <div className={style.field}>
            <div className={style.fieldName}>
                <label htmlFor={id} className={`${style[styleClassName]} ${style[disabledStyle]}`}>{text}</label>
            </div>
            <div>
                <Select id={id} options={options} value={value}
                        key={uniqueKey} action={action} disabled={disabled}/>
                <p>{errorText}</p>
            </div>
            <div>
                <FontAwesomeIcon icon={faRedoAlt}/>
            </div>
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