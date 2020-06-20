import React from 'react';
import s from './CustomerText.module.css'

const CustomerText = () => {
    return (
        <div>
            <div className={s.header}> New Providence is the great UI kit</div>
            <div className={s.text}>
                “Just then her head struck against the roof of the hall: in fact she was now more than nine feet
                high, and she at once took up the little golden key and hurried off to the garden door.”
            </div>
        </div>
    );
};

export default CustomerText;