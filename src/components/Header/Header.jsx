import React from 'react';
import s from './header.module.css'
import HeaderMenu from "./HeaderMenu/HeaderMenu";
import HeaderText from "./HeaderText/HeaderText";
import WatchVideoBtn from "./WatchVideoBtn/WatchVideoBtn";
import IphoneScreen from "./iphoneScreen/IphoneScreen";


const Header = () => {
    return (
        <div className={s.header}>
            <HeaderMenu/>
            <HeaderText/>
            <WatchVideoBtn/>
            <IphoneScreen />
        </div>
    );
};

export default Header;