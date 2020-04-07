import React from 'react';
import style from './FieldWithSelect.module.css';
import PropTypes from "prop-types";
import Select from "../Select/Select";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faRedoAlt} from '@fortawesome/free-solid-svg-icons'

const FieldWithSelect = (props) => {
    const {fieldName, id = null, required = false, options, styleClassName, uniqueKey, action} = props;
    const text = `${fieldName}${required ? ' *' : ''}`;
    return (
        <div className={style.field}>
            <div className={style.fieldName}>
                <label htmlFor={id} className={style[styleClassName]}>{text}</label>
            </div>
            <div>
                <Select id={id} options={options} key={uniqueKey} action={action}/>
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
    required: PropTypes.bool,
    options: PropTypes.array,
    styleClassName: PropTypes.string,
    uniqueKey: PropTypes.string.isRequired,
    action: PropTypes.func,
};

export default FieldWithSelect;