import React from 'react';
import s from './Footer.module.css'
import Divider from "../common/Divider";
import Copyright from "./Copyright/Copyright";
import Links from "./Links/Links";

const Footer = () => {
    return (

        <div className={s.wrapper}>
            <Links/>
            <Divider/>
            <Copyright/>
        </div>
    );
};

export default Footer;