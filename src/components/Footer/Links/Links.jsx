import React from 'react';
import s from './Links.module.css'
import Social from "./Social/Social";
// import LearnMore from "./LearnMore/LearnMore";
import AboutUs from "./AboutUs/AboutUs";
import Support from "./Support/Support";

const Links = () => {
    return (
        <div className={s.linksWrapper}>
            <Social/>
            {/*<LearnMore/>*/}
            <AboutUs/>
            <Support/>
        </div>
    );
};

export default Links;
