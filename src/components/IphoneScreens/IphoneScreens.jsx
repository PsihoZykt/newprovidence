import React from 'react';
import s from './IphoneScreen.module.css'
import screen1 from '../../assets/Screen_1.png'
import screen2 from '../../assets/Screen_2.png'
import screen3 from '../../assets/Screen_3.png'
import screen4 from '../../assets/Screen_4.png'
import iphoneScreen from '../../assets/IphoneScreen.png'
const IphoneScreens = () => {
    return (
        <div className={s.wrapper}>
            <div className={s.textWrapper}>
            <h1> Beautiful Interface</h1>
            <div className={s.divider}> </div>
            <div className={s.landingScreen}> Landing screen </div>
            </div>
            <div className={s.imageWrapper}>
            <img src={screen1} alt="screen1" className={s.screen} />
            <img src={screen2} alt="screen2" className={s.screen} />
            <img src={iphoneScreen} alt="iphoneScreen" className={s.iphoneScreen} />
            <img src={screen3} alt="screen3" className={s.screen} />
            <img src={screen4} alt="screen4" className={s.screen} />
            </div>
        </div>
    );
};

export default IphoneScreens;