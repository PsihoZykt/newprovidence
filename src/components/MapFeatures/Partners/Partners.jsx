import React from 'react';
import s from './Partners.module.css'
import evernote from "../../../assets/Evernote_Logo.png";
import dropbox from "../../../assets/Dropbox_Logo.png";

const Partners = () => {
    return (
        <div>
            <div className={s.partners}> partners</div>
            <div className={s.partnersImageWrapper}>
                <img src={evernote} alt="evernote" className={s.evernote}/>
                <img src={dropbox} alt="dropbox" className={s.dropbox}/>
            </div>
        </div>
    );
};

export default Partners;