import React from 'react';
import style from './InputType.module.css';
import PropTypes from 'prop-types';

const InputType = (props) => {
    const {
        type = 'text',
        id,
        value,
        action,
        styleClassName,
        placeholder = null,
        disabled = false,
    } = props;
    return (
        <input
            type={type}
            id={id}
            value={value}
            onChange={(e) => action(e, id)}
            className={`${style[styleClassName]}`}
            placeholder={placeholder}
            disabled={disabled}
        />
    );
};

InputType.propTypes = {
    type: PropTypes.string.isRequired,
    id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    action: PropTypes.func,
    styleClassName: PropTypes.string,
    placeholder: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.oneOf([null]),
    ]),
    disabled: PropTypes.bool,
};

export default InputType;
