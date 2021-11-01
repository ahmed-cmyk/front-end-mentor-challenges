import React from 'react';

import profile from '../images/image-jeremy.png'

const Profile = () => {
    return(
        <div className="profile">
            <div className="profile_head card card_section">
                <div className="card_left img_container">
                    <img className="profile_img" src={profile} alt="Profile" />
                </div>
                <div className="profile_text card_right">
                    <div className="text_subhead">Report for</div>
                    <div className="text_head">Jeremy Robson</div>
                </div>
            </div>
            <div className="profile_bottom card card_section">
                <button className="button">Daily</button>
                <button className="button active">Weekly</button>
                <button className="button">Monthly</button>
            </div>
        </div>
    )
}

export default Profile