import React from 'react';
import style from './Select.module.css';
import PropTypes from 'prop-types';


const Select = (props) => {
    const {options, id, action} = props;
    let {value} = props;
    const viewOptions = options.map((item, index) => {
        return <option value={item} key={`${item}_${index}`}>{item}</option>
    });

    value = value === '' ? options[0] : value;

    return <select id={id} onChange={e => action(e)} value={value}>
        {viewOptions}
    </select>
};

Select.propTypes = {
    options: PropTypes.array,
    id: PropTypes.oneOfType([PropTypes.string, PropTypes.number, PropTypes.oneOf([null])]),
    action: PropTypes.func,
};

export default Select;