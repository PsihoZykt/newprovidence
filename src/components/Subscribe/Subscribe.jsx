import React from 'react';
import s from './Subscribe.module.css'
import Divider from "../common/Divider";
import EmailInput from "../common/EmailInput/EmailInput";

const Subscribe = () => {
    return (
        <div className={s.wrapper}>
            <div className={s.header} > Subscribe our newsletters </div>
           <EmailInput placeholder="Your e-mail" text="Subscribe"/>
            <div className={s.spam}>  We promise to never spam you. </div>
            <Divider/>
        </div>
    );
};

export default Subscribe;