import React from 'react';
import s from './Feature.module.css'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import plan from "../Plans.module.css";

const Feature = (props) => {
    return (
        <div className={s.feature}>
            <FontAwesomeIcon className={plan.check} icon={"check"}/>
            {props.text}
        </div>
    );
};

export default Feature;