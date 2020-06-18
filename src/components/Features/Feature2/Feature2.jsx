import React from 'react';
import alarm from "../../../assets/alarm.png";
import s from "./Feature2.module.css";

const Feature2 = (props) => {
    return (
        <div className={s.wrapper}>
            <img src={alarm} alt={"alarm"} className={s.alarm}/>
            <h1>Adopt without any obstacles </h1>
            <p>This sounded a very good reason, and Alice was quite pleased to know it. 'I never thought of that
                before!' she said.
                <p>
                    This I have produced as a scantling of Jack’s great eloquence and the force of his reasoning upon
                    such abstruse matters.</p>

            </p>
        </div>
    );
};

export default Feature2;