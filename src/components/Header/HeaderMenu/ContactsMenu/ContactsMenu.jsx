import React from 'react';
import s from './ContactsMenu.module.css'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

const ContactsMenu = () => {
    return (
        <div className={s.wrapper}>
            <div className={`${s.item} ${s.help}`}> Help</div>
            <div className={`${s.item} ${s.contacts}`}> Contacts</div>
            <div className={`${s.item} ${s.getApp}`}>
                <span className={s.appleIcon}><FontAwesomeIcon icon={['fab', 'apple']}/></span>
                <span> Get App </span>
            </div>
        </div>
    );
};

export default ContactsMenu;