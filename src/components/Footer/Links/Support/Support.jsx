import React from 'react';
import s from "../../Footer.module.css";

const Support = () => {
    return (
        <div className={s.support}>
            <div className={s.header}>SUPPORT</div>
            <div className={s.item}>F.A.Q.</div>
            <div className={s.item}>Contact us</div>
            <div className={s.item}>Live chat</div>
            <div className={s.item}>Phone call</div>
        </div>
    );
};

export default Support;