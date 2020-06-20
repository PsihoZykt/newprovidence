import React from 'react';
import s from './Social.module.css'
import logo from "../../../../assets/NewProvidence.png";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

const Social = () => {
    return (
        <div className={s.social}>
            <div className={s.companyName}>
                <img src={logo} alt="logo"/>
            </div>
            <div className={s.text}> It was some time before he obtained any answer, and the reply, when made,
                was unpropitious.
            </div>
            <div className={s.appleStoreBtn}>
                <div className={s.appleIcon}><FontAwesomeIcon icon={['fab', 'apple']}/></div>
                <div className={s.textWrapper}>
                    <span className={s.download}> Download on the <br/> </span>
                    <span className={s.appStore}> App Store </span>
                </div>
            </div>
            <div className={s.iconsWrapper}>
                <FontAwesomeIcon className={s.icon} icon={['fab', 'vk']}/>
                <FontAwesomeIcon className={s.icon} icon={['fab', 'facebook']}/>
                <FontAwesomeIcon className={s.icon} icon={['fab', 'google-plus']}/>
                <FontAwesomeIcon className={s.icon} icon={['fab', 'twitter']}/>
                <FontAwesomeIcon className={s.icon} icon={['fab', 'pinterest']}/>
                <FontAwesomeIcon className={s.icon} icon={['fab', 'linkedin']}/>
            </div>
        </div>
    );
};

export default Social;