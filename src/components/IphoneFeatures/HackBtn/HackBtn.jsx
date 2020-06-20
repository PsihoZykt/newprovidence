import React from 'react';
import s from './HackBtn.module.css'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

const HackBtn = () => {
    return (

            <div className={s.hackBtn}>
                <span> Try to hack us </span>
                <span className={s.arrowRight}> <FontAwesomeIcon icon="arrow-right"/>  </span>
            </div>
    );
};

export default HackBtn;