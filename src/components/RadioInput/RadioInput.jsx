import React from 'react';
import style from './Radio.module.css';
import PropTypes from 'prop-types';


const RadioInput = (props) => {
    const {
        id, value, name, action, styleClassName} = props;
    return <input type='radio'
                  id={id}
                  value={value}
                  name={name}
                  onChange={(e) => action(e)}
                  className={`${style[styleClassName]}`}/>
};

RadioInput.propTypes = {
    id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    name: PropTypes.string.isRequired,
    action: PropTypes.func,
    styleClassName: PropTypes.string,
};

export default RadioInput;