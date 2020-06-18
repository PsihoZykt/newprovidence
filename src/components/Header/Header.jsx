import React from 'react';
import iphone from '../../assets/iphone6.png'
import s from './header.module.css'
import HeaderMenu from "./HeaderMenu/HeaderMenu";
import HeaderText from "./HeaderText/HeaderText";
import WatchVideo from "./WatchVideo/WatchVideo";

const Header = () => {
    return (
        <div className={s.header}>
            <HeaderMenu/>
            <HeaderText/>
            <WatchVideo/>
            <img src={iphone} className={s.iphone} alt="Iphone"/>
        </div>
    );
};

export default Header;