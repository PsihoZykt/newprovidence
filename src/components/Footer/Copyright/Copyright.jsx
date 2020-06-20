import React from 'react';
import s from './Copyright.module.css'
import loveLogo from "../../../assets/Logo.png";

const Copyright = () => {
    return (
        <div className={s.copyright}>
            <div className={s.seeMore}>
                For more freebies visit: <a href={"http://getcraftwork.com"}> http://getcraftwork.com</a>
            </div>
            <div className={s.madeWithLove}>
                <span className={s.text}>Made with Love by </span>
                <img className={s.loveLogo} src={loveLogo} alt={"logo"}/>
            </div>
        </div>
    );
};

export default Copyright;