import React from 'react';
import s from './ReadyToBuy.module.css'

import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import AppleStoreBtn from "./AppleStoreBtn/AppleStoreBtn";

const ReadyToBuy = () => {
    return (
        <div className={s.wrapper}>
            <div className={s.companyName}><span className={s.bold}> NEW</span>PROVIDENCE</div>
            <div className={s.header}> Get it to your smartphone</div>
            <div className={s.inputWrapper}>
                <input placeholder="denis@getcraftwork.com" className={s.inputText} type="text"/>
                <button className={s.inputSubmit}> Sumbit <FontAwesomeIcon className={s.arrow} icon="arrow-right"/>
                </button>
            </div>
            <div className={s.downloadText}> OR DOWNLOAD IT FROM</div>
            <AppleStoreBtn />
        </div>
    );
};

export default ReadyToBuy;