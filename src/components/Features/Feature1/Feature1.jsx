import React from 'react';
import lock from '../../../assets/Lock.png'
import s from './Feature1.module.css'

const Feature1 = () => {
    return (
        <div className={s.wrapper}>
            <img src={lock} alt={"lock"} className={s.lock}/>
            <div className={s.header}> Real-time all the time</div>
            <p> Thus much I thought proper to tell you in relation to yourself, and to the trust I reposed in you. </p>
            <p>
                Just then her head struck against the roof of the hall: in fact she was now more than nine feet
                high,
                and she at once took up the little golden key and hurried off to the garden door.
            </p>
        </div>
    );
};

export default Feature1;