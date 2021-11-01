import React from 'react';

import work from '../images/icon-work.svg'

const Card = ({ card }) => {
    return(
        <div className="card">
            <div className="activity_card_top">
                <img src={work} alt="work" className="activity_card_img" />
            </div>
            <div className="activity_card_bottom">
                {card.title}
            </div>
        </div>
    )
}

export default Card