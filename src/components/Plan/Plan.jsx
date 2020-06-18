import React from 'react';
import s from './Plan.module.css'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

const Plan = () => {
    return (
        <div className={s.wrapper}>
            <div className={s.choosePlan}>
                <div className={s.header}>
                    Choose your perfect plan
                </div>
                <div className={s.youAre}> You are</div>
                <div className={s.choosePlanBtn}>
                    <div className={s.individual}> Invividual</div>
                    <div className={s.company}> Company</div>
                </div>
                <div className={s.text}> Thus much I thought proper to tell you in relation to yourself, and to the
                    trust I
                    reposed in you.
                </div>
                <div className={s.teamText}>
                    Have a bigger team? <a> Let‘s talk </a>
                </div>
            </div>
            <div className={s.plansWrapper}>
            <div className={s.starter}>
                <div className={s.header}> Starter</div>
                <div className={s.price}> Free</div>
                <div className={s.text}> Build your schedule every day</div>
                <div className={s.features}>
                    <div className={s.feature}>
                        <FontAwesomeIcon className={s.check} icon={"check"}/>
                        Unlimited events
                    </div>
                    <div className={s.feature}>
                        <FontAwesomeIcon className={s.check} icon={"check"}/>
                        Connect Dropbox & Evernote
                    </div>
                    <div className={s.startBtn}> Get started</div>
                </div>
            </div>
            <div className={s.pro}>
                <div className={s.header}> Pro</div>
                <div className={s.price}> 4.99$</div>
                <div className={s.text}> Make your life better</div>
                <div className={s.features}>
                    <div className={s.feature}>
                        <FontAwesomeIcon className={s.check} icon={"check"}/>
                        Unlimeted events</div>
                    <div className={s.feature}> <FontAwesomeIcon className={s.check} icon={"check"}/> Connect Dropbox & Evernote</div>
                    <div className={s.feature}>  <FontAwesomeIcon className={s.check} icon={"check"}/>Personal Assistant</div>
                    <div className={s.startBtn}>Make me a Pro</div>
                </div>
            </div>
            </div>
        </div>
    )
        ;
};

export default Plan;