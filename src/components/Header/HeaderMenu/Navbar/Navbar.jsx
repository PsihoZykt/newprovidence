import React from 'react';
import s from "./Navbar.module.css"
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'

const NavBar = () => {
    return (
        <div className={s.navBar}>
            <FontAwesomeIcon icon="bars"/>
            <div className={s.item}> Tour</div>
            <div className={s.item}> Features</div>
            <div className={s.item}> Pricing</div>
        </div>
    );
};

export default NavBar;