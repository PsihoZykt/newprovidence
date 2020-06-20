import React from 'react';
import s from './HeaderText.module.css'

const HeaderText = () => {
    return (
        <div className={s.wrapper}>
            <div className={s.header}> What happens tommorow?</div>
            <div className={s.text}> The sight of the tumblers restored Bob Sawyer to a degree of equanimity which he had not possessed
                since his interview with his landlady. His face brightened up, and he began to feel quite
                convivial.
            </div>
        </div>
    );
};

export default HeaderText;