import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import {library} from '@fortawesome/fontawesome-svg-core'
import {fab} from '@fortawesome/free-brands-svg-icons'
import {faArrowRight, faBars, faCheck, faPlay, faStar} from '@fortawesome/free-solid-svg-icons'
import Features from "./components/Features/Features";
import IphoneFeatures from "./components/IphoneFeatures/IphoneFeatures";
import MapFeatures from "./components/MapFeatures/MapFeatures";
import IphoneScreens from "./components/IphoneScreens/IphoneScreens";
import ReadyToBuy from "./components/ReadyToBuy/ReadyToBuy";
import Customers from "./components/Customers/Customers";
import Plan from "./components/Plan/Plan";
import Subscribe from "./components/Subscribe/Subscribe";
import Footer from "./components/Footer/Footer";

library.add(faPlay, fab, faBars, faArrowRight, faStar, faCheck)

const App = () => {
    return (
        <>
            <Header/>
            <Features/>
            <IphoneFeatures/>
            <MapFeatures/>
            <IphoneScreens/>
            <ReadyToBuy/>
            <Customers/>
            <Plan/>
            <Subscribe/>
            <Footer/>
        </>
    )
};

export default App;
