import React from 'react';
import s from "./AppleStoreBtn.module.css";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

const AppleStoreBtn = () => {
    return (
        <div className={s.appleStoreBtn}>
            <div className={s.appleIcon}> <FontAwesomeIcon icon={['fab', 'apple']}/> </div>
            <div className={s.textWrapper}>
                <span className={s.download}> Download on the <br/> </span>
                <span className={s.appStore}> App Store </span>
            </div>
        </div>
    );
};

export default AppleStoreBtn;