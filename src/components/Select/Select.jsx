import React from 'react';
import PropTypes from 'prop-types';

const Select = (props) => {
    const { options, id, action, disabled = false } = props;
    let { value } = props;
    const viewOptions = options.map((item, index) => {
        return (
            <option value={item} key={`${item}_${index}`}>
                {item}
            </option>
        );
    });

    value = value === '' ? options[0] : value;

    return (
        <select
            id={id}
            onChange={(e) => action(e)}
            value={value}
            disabled={disabled}
        >
            {viewOptions}
        </select>
    );
};

Select.propTypes = {
    options: PropTypes.array,
    id: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number,
        PropTypes.oneOf([null]),
    ]),
    action: PropTypes.func,
    disabled: PropTypes.bool,
};

export default Select;
