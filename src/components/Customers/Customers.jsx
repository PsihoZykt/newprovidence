import React from 'react';
import s from './Customers.module.css'
import CustomerPhotos from "./CustomerPhotos/CustomerPhotos";
import CustomerText from "./CustomerText/CustomerText";
import Stars from "./Stars/Stars";

const Customers = () => {
    return (
        <div className={s.wrapper}>
            <CustomerPhotos />
            <CustomerText/>
            <Stars/>
            <div className={s.name}>
                Cameron Dowman
            </div>
        </div>

    );
};

export default Customers;