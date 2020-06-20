import React from 'react';
import s from './MapFeatures.module.css'
import MapHeader from "./MapText/MapHeader";
import MapText from "./MapText/MapText";
import Partners from "./Partners/Partners";
import MapImage from "./MapImage/MapImage";

const MapFeatures = () => {
    return (
        <div className={s.wrapper}>
            <MapHeader/>
            <MapText/>
            <Partners/>
            <MapImage/>
        </div>
    );
};

export default MapFeatures;