import React from 'react';
import iphone from "../../../assets/iPhone_6.png";
import s from "./Iphone.module.css";

const Iphone = () => {
    return (
        <div>
            <img src={iphone} alt="iphone" className={s.iphone}/>
        </div>
    );
};

export default Iphone;