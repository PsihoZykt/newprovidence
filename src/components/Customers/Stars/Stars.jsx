import React from 'react';
import s from './Stars.module.css'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

const Stars = () => {
    return (
        <div className={s.starsWrapper}>
            <FontAwesomeIcon className={s.star} icon={"star"}/>
            <FontAwesomeIcon className={s.star} icon={"star"}/>
            <FontAwesomeIcon className={s.star} icon={"star"}/>
            <FontAwesomeIcon className={s.star} icon={"star"}/>
            <FontAwesomeIcon className={s.star} icon={"star"}/>
        </div>
    );
};

export default Stars;