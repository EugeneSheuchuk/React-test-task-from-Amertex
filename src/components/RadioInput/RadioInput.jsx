import React from 'react';
import style from './Radio.module.css';
import PropTypes from 'prop-types';


const RadioInput = (props) => {
    const {
        id, value, action, styleClassName, checked = false} = props;
    return <input type='radio'
                  id={id}
                  value={value}
                  onChange={() => action(value)}
                  checked={checked}
                  className={`${style[styleClassName]}`}/>
};

RadioInput.propTypes = {
    id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    value: PropTypes.bool,
    action: PropTypes.func,
    styleClassName: PropTypes.string,
    checked: PropTypes.bool,
};

export default RadioInput;