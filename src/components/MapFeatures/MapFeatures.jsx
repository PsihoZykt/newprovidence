import React from 'react';
import s from './MapFeatures.module.css'
import evernote from '../../assets/Evernote_Logo.png'
import dropbox from '../../assets/Dropbox_Logo.png'
import map from '../../assets/World_Map.png'
const MapFeatures = () => {
    return (
        <div className={s.wrapper}>
            <h1> We are almost <br/> everywhere </h1>
            <p>
                Now the races of these two have been for some ages utterly extinct, and besides to discourse any further
                of them would not be at all to my purpose.
            </p>
            <p>
                Thus much I thought proper to tell you in relation to yourself, and to the trust I reposed in you.
            </p>
            <div className={s.partners}> partners</div>
            <div className={s.partnersImageWrapper}>
                <img src={evernote} alt="evernote" className={s.evernote}/>
                <img src={dropbox} alt="dropbox" className={s.dropbox}/>
            </div>
            <img src={map} alt="map" className={s.map} />
        </div>
    );
};

export default MapFeatures;