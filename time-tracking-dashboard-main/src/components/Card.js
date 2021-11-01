import React from 'react';

const Card = ({ card }) => {
    return(
        <div>
            <h1>Card</h1>
            {card.title}
        </div>
    )
}

export default Card