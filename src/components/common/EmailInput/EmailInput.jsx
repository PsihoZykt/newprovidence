import React from 'react';
import s from './EmailInput.module.css'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

const EmailInput = (props) => {
    return (
        <div className={s.inputWrapper}>
            <input placeholder={props.placeholder} className={s.inputText} type="text"/>
            <button className={s.inputSubmit}> {props.text} <FontAwesomeIcon className={s.arrow} icon="arrow-right"/>
            </button>
        </div>
    );
};

export default EmailInput;