import React from 'react';
import s from './Subscribe.module.css'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import Divider from "../common/Divider";
const Subscribe = () => {
    return (
        <div className={s.wrapper}>
            <div className={s.header} > Subscribe our newsletters </div>
            <div className={s.inputWrapper}>
                <input placeholder="Your e-mail" className={s.inputText} type="text"/>
                <button className={s.inputSubmit}> Subscribe <FontAwesomeIcon className={s.arrow} icon="arrow-right"/>
                </button>
            </div>
            <div className={s.spam}>  We promise to never spam you. </div>
            <Divider/>
        </div>
    );
};

export default Subscribe;