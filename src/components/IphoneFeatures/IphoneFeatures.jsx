import React from 'react';
import s from './IphoneFeatures.module.css'
import HackBtn from "./HackBtn/HackBtn";
import LearnMoreBtn from "./LearnMoreBtn/LearnMoreBtn";
import FeaturesHeader from "./Features/FeaturesHeader";
import FeaturesText from "./Features/FeaturesText";
import Iphone from "./Iphone/Iphone";

const IphoneFeatures = () => {
    return (
        <div className={s.wrapper}>
            <Iphone/>
            <div className={s.features}>
                <FeaturesHeader/>
                <FeaturesText/>
                <div className={s.buttonsWrapper}>
                    <HackBtn/>
                    <LearnMoreBtn/>
                </div>
            </div>
        </div>
    );
};

export default IphoneFeatures;