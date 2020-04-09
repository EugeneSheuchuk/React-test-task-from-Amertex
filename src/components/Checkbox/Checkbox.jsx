import React from 'react';
import style from './Checkbox.module.css';
import PropTypes from 'prop-types';

const Checkbox = (props) => {
    const {
        id,
        value,
        name,
        action,
        styleClassName,
        checked,
        disabled = false,
    } = props;
    return (
        <input
            type="checkbox"
            id={id}
            value={value}
            name={name}
            onChange={() => action(id)}
            className={`${style[styleClassName]}`}
            checked={checked}
            disabled={disabled}
        />
    );
};

Checkbox.propTypes = {
    id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    name: PropTypes.string.isRequired,
    action: PropTypes.func,
    styleClassName: PropTypes.string,
    checked: PropTypes.bool,
    disabled: PropTypes.bool,
};

export default Checkbox;
