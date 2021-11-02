import React from 'react';

import exercise from '../images/icon-exercise.svg'
import play from '../images/icon-play.svg'
import social from '../images/icon-social.svg'
import study from '../images/icon-study.svg'
import work from '../images/icon-work.svg'
import self_care from '../images/icon-self-care.svg'

const CardHeader = ({ title }) => {
    if(title === "Work") {
        return <img src={work} alt="work" className="activity_card_img work" />
    } else if(title === "Play") {
        return <img src={play} alt="play" className="activity_card_img play" />
    } else if(title === "Study") {
        return <img src={study} alt="study" className="activity_card_img study" />
    } else if(title === "Exercise") {
        return <img src={exercise} alt="exercise" className="activity_card_img exercise" />
    } else if(title === "Social") {
        return <img src={social} alt="social" className="activity_card_img social" />
    } else if(title === "Self Care") {
        return <img src={self_care} alt="self care" className="activity_card_img self_care" />
    } else {
        return null
    }
}

export default CardHeader