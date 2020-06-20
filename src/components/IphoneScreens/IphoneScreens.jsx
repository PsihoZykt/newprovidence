import React from 'react';
import s from './IphoneScreen.module.css'
import IphoneScreensHeader from "./IphoneScreensHeader/IphoneScreensHeader";
import InterfaceExamples from "./InterfaceExamples/InterfaceExamples";

const IphoneScreens = () => {
    return (
        <div className={s.wrapper}>
            <IphoneScreensHeader/>
            <InterfaceExamples/>
        </div>
    );
};

export default IphoneScreens;