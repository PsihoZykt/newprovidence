import React from 'react';
import s from "../../Footer.module.css";

const AboutUs = () => {
    return (
        <div className={s.aboutUs}>
            <div className={s.header}>About us</div>
            <div className={s.item}>About us</div>
            <div className={s.item}>Features</div>
            <div className={s.item}> Terms & Conditions</div>
        </div>
    );
};

export default AboutUs;