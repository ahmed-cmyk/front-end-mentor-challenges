import React, { useEffect, useState } from 'react'

import Card from './Card'
import Profile from './Profile'
import activityService from '../services/activities'

const Cards = () => {
    const [ cards, setCards ] = useState([])

    useEffect(() => {
        async function fetchMyApi() {
            const cardList = await activityService.getAll()
            setCards(cardList)
        }

        fetchMyApi()
    }, [])

    return(
        <div className="container">
            <Profile />
            {cards.map((card, index) => 
                <Card key={index} card={card} />
            )}
        </div>
    )
}

export default Cards