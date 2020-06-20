import React from 'react';
import alarm from "../../../assets/alarm.png";
import s from "./Feature2.module.css";

const Feature2 = () => {
    return (
        <div className={s.wrapper}>
            <img src={alarm} alt={"alarm"} className={s.alarm}/>
            <div className={s.header}>Adopt without any obstacles</div>
            <p>
                This sounded a very good reason, and Alice was quite pleased to know it. 'I never thought of that
                before!' she said.
            </p>
            <p>
                This I have produced as a scantling of Jack’s great eloquence and the force of his reasoning upon
                such abstruse matters.
            </p>

        </div>
    );
};

export default Feature2;