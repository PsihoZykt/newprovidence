import React from 'react';
import s from './MapImage.module.css'
import map from "../../../assets/World_Map.png";

const MapImage = () => {
    return (
        <img src={map} alt="map" className={s.map} />
    );
};

export default MapImage;