import React from 'react';
import s from './CompanyName.module.css'
import logo from '../../../../assets/NewProvidence.png'

const CompanyName = () => {
    return (
        <div className={s.companyName}>
            <img src={logo} alt="logo"/>
        </div>
    );
};

export default CompanyName;