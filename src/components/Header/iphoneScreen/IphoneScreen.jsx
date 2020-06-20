import React from 'react';
import iphone from "../../../assets/iphone6.png";
import s from './IphoneScreen.module.css'

const IphoneScreen = () => {
    return (
        <div>
            <img src={iphone} className={s.iphone} alt="Iphone"/>
        </div>
    );
};

export default IphoneScreen;