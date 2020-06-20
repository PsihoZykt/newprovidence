import React from 'react';
import s from './Plans.module.css'
import Starter from "./Starter/Starter";
import Pro from "./Pro/Pro";

const Plans = () => {
    return (
        <div className={s.plansWrapper}>
            <Starter/>
            <Pro/>

        </div>
    );
};

export default Plans;