import React from 'react';

import CardHeader from './CardHeader'

const Card = ({ card }) => {
    return(
        <div className="card">
            <div className="activity_card_top">
                <CardHeader title={card.title} />
            </div>
            <div className="activity_card_bottom">
                <div className="title">{card.title}</div>
                <div className="info">
                    <div className="info_current">{card.timeframes.daily.current}hrs</div>
                    <div className="info_previous">Yesterday - {card.timeframes.daily.previous}hrs</div>
                </div>
            </div>
        </div>
    )
}

export default Card