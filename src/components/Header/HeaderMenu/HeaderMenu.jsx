import React from 'react';
import s from './HeaderMenu.module.css'
import NavBar from "./Navbar/Navbar";
import CompanyName from "./CompanyName/CompanyName";
import ContactsMenu from "./ContactsMenu/ContactsMenu";

const HeaderMenu = () => {
    return (
        <div className={s.headerMenu}>
            <NavBar/>
            <CompanyName/>
            <ContactsMenu/>
        </div>
    );
};

export default HeaderMenu;