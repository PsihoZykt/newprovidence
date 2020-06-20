import React from 'react';
import s from './CustomerPhotos.module.css'
import photo1 from "../../../assets/Photo.png";
import photo2 from "../../../assets/Photo1.png";
import photo3 from "../../../assets/Photo2.png";

const CustomerPhotos = () => {
    return (
        <div className={s.photosWrapper}>
            <img src={photo1} alt="photo1" className={s.photo}/>
            <img src={photo2} alt="photo2" className={`${s.photo} ${s.active}`}/>
            <img src={photo3} alt="photo3" className={`${s.photo}`}/>
        </div>
    );
};

export default CustomerPhotos;