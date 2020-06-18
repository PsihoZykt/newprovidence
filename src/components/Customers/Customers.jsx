import React from 'react';
import s from './Customers.module.css'
import photo1 from '../../assets/Photo.png'
import photo2 from '../../assets/Photo1.png'
import photo3 from '../../assets/Photo2.png'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

const Customers = () => {
    return (
        <div className={s.wrapper}>
            <div className={s.photosWrapper}>
                <img src={photo1} alt="photo1" className={s.photo}/>
                <img src={photo2} alt="photo2" className={`${s.photo} ${s.active}`}/>
                <img src={photo3} alt="photo3" className={`${s.photo}`}/>
            </div>
                <div className={s.header}> New Providence is the great UI kit</div>
                <div className={s.text}>
                    “Just then her head struck against the roof of the hall: in fact she was now more than nine feet
                    high, and she at once took up the little golden key and hurried off to the garden door.”
                </div>
            <div className={s.starsWrapper}>
                <FontAwesomeIcon className={s.star} icon={"star"}/>
                <FontAwesomeIcon className={s.star} icon={"star"}/>
                <FontAwesomeIcon className={s.star} icon={"star"}/>
                <FontAwesomeIcon className={s.star} icon={"star"}/>
                <FontAwesomeIcon className={s.star} icon={"star"}/>
            </div>
            <div className={s.name}>
                Cameron Dowman
            </div>
        </div>

    );
};

export default Customers;