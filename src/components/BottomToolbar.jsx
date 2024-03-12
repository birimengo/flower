import React, { useState } from 'react';
import ChatIcon from '@mui/icons-material/Chat';
import ModeOfTravelIcon from '@mui/icons-material/ModeOfTravel';
import SwipeIcon from '@mui/icons-material/Swipe';
import CardGiftcardIcon from '@mui/icons-material/CardGiftcard';

const BottomToolbar = () => {
    const [selectedIcon, setSelectedIcon] = useState(null);

    const handleIconClick = (iconName) => {
        // Update selected icon state
        setSelectedIcon(iconName);
        // Handle icon click logic here
        console.log(`${iconName} icon clicked`);
    };

    return (
        <div className="BottomToolbar">
            <div className={`chat ${selectedIcon === 'Chats' ? 'selected' : ''}`} onClick={() => handleIconClick('Chats')}>
                <ChatIcon className="icon" />
                <div className="text">Chats</div>
            </div>
            <div className={`mode-of-travel ${selectedIcon === 'Nearby' ? 'selected' : ''}`} onClick={() => handleIconClick('Nearby')}>
                <ModeOfTravelIcon className="icon" />
                <div className="text">Nearby</div>
            </div>
            <div className={`swipe ${selectedIcon === 'Swipe' ? 'selected' : ''}`} onClick={() => handleIconClick('Swipe')}>
                <SwipeIcon className="icon" />
                <div className="text">Swipe</div>
            </div>
            <div className={`gifts ${selectedIcon === 'Gifts' ? 'selected' : ''}`} onClick={() => handleIconClick('Gifts')}>
                <CardGiftcardIcon className="icon" />
                <div className="text">Gifts</div>
            </div>
        </div>
    );
};

export default BottomToolbar;
