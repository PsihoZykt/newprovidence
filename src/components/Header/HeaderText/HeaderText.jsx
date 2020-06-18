import React from 'react';
import s from './HeaderText.module.css'

const HeaderText = () => {
    return (
        <div className={s.headerText}>
            <h1> What happens tommorow?</h1>
            <h6> The sight of the tumblers restored Bob Sawyer to a degree of equanimity which he had not possessed
                since his interview with his landlady. His face brightened up, and he began to feel quite
                convivial.</h6>
        </div>
    );
};

export default HeaderText;