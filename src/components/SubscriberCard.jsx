
import React from "react";
import logo from '../images/profile.png';

let SubscriberCard = () => {
    return (
        <li className="subscriberCard">
            <div className="subscriberImage">
                <a href="/">
                    <img src={logo} className="profileImg" alt="Profile" />
                </a>
            </div>
            <div className="subscriberInfo">
                <p className="subName">Shubham Shinde</p>
                <p className="subGame">Fortnite</p>
            </div>
        </li>
    );
};

export default SubscriberCard;
