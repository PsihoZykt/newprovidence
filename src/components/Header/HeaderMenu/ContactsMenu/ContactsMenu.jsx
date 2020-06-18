import React from 'react';
import s from './ContactsMenu.module.css'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

const ContactsMenu = () => {
    return (
        <div className={s.contactsMenu}>
            <div className={`${s.item} ${s.help}`}> Help</div>
            <div className={`${s.item} ${s.contacts}`}> Contacts</div>
            <div className={`${s.item} ${s.getApp}`}>
                <span className={s.appleIcon}><FontAwesomeIcon icon={['fab', 'apple']}/></span>
                <span className={s.getAppText}> Get App </span>
            </div>
        </div>
    );
};

export default ContactsMenu;