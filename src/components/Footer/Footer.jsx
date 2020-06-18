import React from 'react';
import s from './Footer.module.css'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import logo from "../../assets/NewProvidence.png";
import loveLogo from '../../assets/Logo.png'
import Divider from "../common/Divider";
const Footer = () => {
    return (

        <div className={s.wrapper}>
            <div className={s.linksWrapper}>
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
                <div className={s.learnMore}>
                    <div className={s.header}> LEARN MORE</div>
                    <div className={s.item}> How it works?</div>
                    <div className={s.item}> Meeting tools</div>
                    <div className={s.item}> Live striming</div>
                    <div className={s.item}> Contact method</div>
                </div>
                <div className={s.aboutUs}>
                    <div className={s.header}>About us</div>
                    <div className={s.item}>About us</div>
                    <div className={s.item}>Features</div>
                    <div className={s.item}> Terms & Conditions</div>
                </div>
                <div className={s.support}>
                    <div className={s.header}>SUPPORT</div>

                    <div className={s.item}>F.A.Q.</div>
                    <div className={s.item}>Contact us</div>
                    <div className={s.item}>Live chat</div>
                    <div className={s.item}>Phone call</div>
                </div>
            </div>
            <Divider/>
            <div className={s.footer}>
                <div className={s.seeMore}>
                    For more freebies visit: <a> http://getcraftwork.com</a>
                </div>
                <div className={s.madeWithLove}>
                    <span className={s.text}>Made with Love by </span>
                     <img className={s.loveLogo} src={loveLogo} alt={"logo"}/>
                </div>
            </div>
        </div>
    );
};

export default Footer;