import React from 'react';
import s from './Plan.module.css'
import ChoosePlan from "./ChoosePlan/ChoosePlan";
import Plans from "./Plans/Plans";

const Plan = () => {
    return (
        <div className={s.wrapper}>
            <ChoosePlan/>
            <Plans/>
        </div>
    );
};

export default Plan;