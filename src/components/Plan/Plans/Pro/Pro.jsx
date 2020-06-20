import React from 'react';
import s from './Pro.module.css'
import plan from '../Plans.module.css'
import Feature from "../Feature/Feature";

const Pro = () => {
    return (
        <div className={s.pro}>
            <div className={s.header}> Pro</div>
            <div className={plan.price}> 4.99$</div>
            <div className={plan.text}> Make your life better</div>
            <div className={s.features}>
                <Feature text="Unlimited events"/>
                <Feature text="Connect Dropbox & Evernote"/>
                <Feature text="Personal Assistant"/>
                <div className={s.startBtn}>Make me a Pro</div>
            </div>
        </div>
    );
};

export default Pro;