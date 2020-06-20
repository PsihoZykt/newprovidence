import React from 'react';
import s from './IphoneScreensHeader.module.css'

const IphoneScreensHeader = () => {
    return (
        <div className={s.wrapper}>
            <div className={s.header}> Beautiful Interface</div>
            <div className={s.divider}> </div>
            <div className={s.landingScreen}> Landing screen </div>
        </div>
    );
};

export default IphoneScreensHeader;