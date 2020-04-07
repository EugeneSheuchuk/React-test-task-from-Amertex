import React from 'react';
import style from './Field.module.css';
import PropTypes from "prop-types";
import InputType from "../InputType/InputType";

const Field = (props) => {
    const {type, fieldName, id = null, value, action, required = false, styleClassName} = props;
    const text = `${fieldName}${required ? ' *' : ''}`;
    return (
        <div className={style.field}>
            <div className={style.fieldName}>
                <label htmlFor={id} className={style[styleClassName]}>{text}</label>
            </div>
            <div>
                <InputType type={type} id={id} value={value} action={action}/>
            </div>
        </div>
    );
};

Field.propTypes = {
    fieldName: PropTypes.string.isRequired,
    id: PropTypes.oneOfType([PropTypes.string, PropTypes.number, PropTypes.oneOf([null])]),
    value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    action: PropTypes.func,
    required: PropTypes.bool,
    styleClassName: PropTypes.string,
};

export default Field;