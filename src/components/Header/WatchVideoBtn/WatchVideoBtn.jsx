import React from 'react';
import s from './WatchVideoBtn.module.css'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

const WatchVideoBtn = () => {
    return (
        <div className={s.wrapper}>
            <span className={s.playIcon}>
                <FontAwesomeIcon icon={"play"}/> </span>
            <span className={s.playText}>  Watch Video! </span>
        </div>
    );
};

export default WatchVideoBtn;