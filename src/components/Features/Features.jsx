import React from 'react';
import Feature1 from "./Feature1/Feature1";
import Feature2 from "./Feature2/Feature2";
import s from './Features.module.css'
import Divider from "../common/Divider";

const Features = () => {
    return (
        <div className={s.wrapper}>
            <div className={s.features}>
                <Feature1/>
                <Feature2/>
            </div>
            <Divider/>
        </div>
    );
};

export default Features;