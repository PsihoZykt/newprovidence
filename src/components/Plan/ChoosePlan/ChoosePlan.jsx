import React from 'react';
import s from './ChoosePlan.module.css'

const ChoosePlan = () => {
    return (
        <div className={s.choosePlan}>
            <div className={s.header}>
                Choose your perfect plan
            </div>
            <div className={s.youAre}> You are</div>
            <div className={s.choosePlanBtn}>
                <div className={s.individual}> Individual</div>
                <div className={s.company}> Company</div>
            </div>
            <div className={s.text}> Thus much I thought proper to tell you in relation to yourself, and to the
                trust I
                reposed in you.
            </div>
            <div className={s.teamText}>
                Have a bigger team? <a href={"#"}> Let‘s talk </a>
            </div>
        </div>
    );
};

export default ChoosePlan;