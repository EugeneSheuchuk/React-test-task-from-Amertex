import React from 'react';
import style from './Button.module.css';
import PropTypes from 'prop-types';

const Button = (props) => {
    const {value, action, styleClassName} = props;
    return <input type="button"
                  value={value}
                  onClick={(e) => action(e)}
                  className={`${style[styleClassName]}`}/>
};

Button.propTypes = {
    value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    action: PropTypes.func,
    styleClassName: PropTypes.string,
};

export default Button;