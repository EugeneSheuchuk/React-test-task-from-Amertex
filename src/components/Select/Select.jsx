import React from 'react';
import style from './Select.module.css';
import PropTypes from 'prop-types';


const Select = (props) => {
    const {options, id, action} = props;
    const viewOptions = options.map((item, index) => {
        return <option value={item} key={`${item}_${index}`}>{item}</option>
    });

    return <select id={id} onChange={e => action(e)}>
        {viewOptions}
    </select>
};

Select.propTypes = {
    options: PropTypes.array,
    id: PropTypes.oneOfType([PropTypes.string, PropTypes.number, PropTypes.oneOf([null])]),
    action: PropTypes.func,
};

export default Select;