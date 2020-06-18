import React from 'react';
import s from './IphoneFeatures.module.css'
import iphone from '../../assets/iPhone_6.png'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

const IphoneFeatures = () => {
    return (
        <div className={s.wrapper}>
            <img src={iphone} alt="iphone" className={s.iphone}/>
            <div className={s.featuresText}>
                <h1> Your day <br/> is protected </h1>
                <p>
                    There have not been any since we have lived here, said my mother.

                </p>
                <p>
                    We thought - Mr. Copperfield thought - it was quite a large rookery; but the nests were very old
                    ones, and the birds have deserted them a long while.
                </p>
                <div className={s.buttonsWrapper}>
                    <div className={s.hackBtn}>
                        <span> Try to hack us </span>
                        <span className={s.arrowRight}> <FontAwesomeIcon icon="arrow-right"/>  </span>
                    </div>
                    <div className={s.learnMoreBtn}> Learn more</div>
                </div>
            </div>
        </div>
    );
};

export default IphoneFeatures;