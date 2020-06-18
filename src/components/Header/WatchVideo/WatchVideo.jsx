import React from 'react';
import s from './WatchVideo.module.css'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

const WatchVideo = () => {
    return (
        <div className={s.watchVideo}>
            <span className={s.playIcon}> <FontAwesomeIcon icon={"play"}/> </span>
            <span className={s.playText}>  Watch Video! </span>
        </div>
    );
};

export default WatchVideo;