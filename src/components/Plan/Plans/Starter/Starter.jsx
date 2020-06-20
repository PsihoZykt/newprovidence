import React from 'react';
import s from './Starter.module.css'
import plan from '../Plans.module.css'
import Feature from "../Feature/Feature";

const Starter = () => {
    return (
        <div className={s.starter}>
            <div className={s.header}> Starter</div>
            <div className={plan.price}> Free</div>
            <div className={plan.text}> Build your schedule every day</div>
            <div className={plan.features}>
                <Feature text="Unlimited events"/>
                <Feature text="Connect Dropbox & Evernote"/>
                <div className={s.startBtn}> Get started</div>
            </div>
        </div>
    );
};

export default Starter;