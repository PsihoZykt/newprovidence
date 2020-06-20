import React from 'react';
import s from './ReadyToBuy.module.css'
import AppleStoreBtn from "./AppleStoreBtn/AppleStoreBtn";
import NewProvidenceLogo from "./NewProvidenceLogo/NewProvidenceLogo";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

const ReadyToBuy = () => {
    return (
        <div className={s.wrapper}>
            <NewProvidenceLogo/>
            <div className={s.header}> Get it to your smartphone</div>
            <div className={s.inputWrapper}>
                <input placeholder="denis@getcraftwork.com" className={s.inputText} type="text"/>
                <button className={s.inputSubmit}>Send Invite<FontAwesomeIcon className={s.arrow} icon="arrow-right"/>
                </button>
            </div>
            <div className={s.downloadText}> OR DOWNLOAD IT FROM</div>
            <AppleStoreBtn/>
        </div>
    );
};

export default ReadyToBuy;