import React, { useState, useRef, useEffect } from 'react';
import LocalFloristIcon from '@mui/icons-material/LocalFlorist';
import RssFeedIcon from '@mui/icons-material/RssFeed';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import SearchIcon from '@mui/icons-material/Search';
import PersonIcon from '@mui/icons-material/Person';

const UpperToolbar = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [selectedIcon, setSelectedIcon] = useState(null);
  const popupRef = useRef(null);

  useEffect(() => {
    if (window.innerWidth > 600) {
      setIsPopupOpen(true);
    }
  }, []);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (popupRef.current && !popupRef.current.contains(event.target)) {
        if (window.innerWidth < 600) {
          setIsPopupOpen(false);
        }
      }
    };

    document.addEventListener('click', handleClickOutside);

    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);

  const handleSearchClick = (event) => {
    event.stopPropagation();
    if (window.innerWidth < 600) {
      setIsPopupOpen(!isPopupOpen);
    }
    setSelectedIcon('search');
  };

  const handleClosePopup = () => {
    if (window.innerWidth < 600) {
      setIsPopupOpen(false);
    }
  };

  const handleSearchSubmit = (event) => {
    console.log("Search submitted!");
    event.preventDefault();
  };

  const handleIconClick = (icon) => {
    setSelectedIcon(icon);
  };

  return (
    <div className='UpperToolbar'>
      <div className={`LocalFlorist ${selectedIcon === 'localFlorist' ? 'selected' : ''}`} onClick={() => handleIconClick('localFlorist')}>
        <div className='LocalFloristIcon'>
          <LocalFloristIcon className='iconA' />
        </div>
        <div className='LocalFloristText'>Honey</div>
      </div>
      <div className={`feed ${selectedIcon === 'feed' ? 'selected' : ''}`} onClick={() => handleIconClick('feed')}>
        <div className='RssFeedIcon'>
          <RssFeedIcon className='iconB' />
        </div>
        <div className='feedText'>Feeds</div>
      </div>
      <div className={`brightness ${selectedIcon === 'brightness' ? 'selected' : ''}`} onClick={() => handleIconClick('brightness')}>
        <div className='Brightness4Icon'>
          <Brightness4Icon className='iconC' />
        </div>
        <div className='brightnessText'>Brightness</div>
      </div>
      <div className={`search ${selectedIcon === 'search' ? 'selected' : ''}`} onClick={handleSearchClick}>
        <div className='SearchIcon'>
          <SearchIcon className='iconD' />
        </div>
        <div className='searchText'>Search</div>
      </div>
      {isPopupOpen && (
        <form onSubmit={handleSearchSubmit}>
          <div className='search-popup' ref={popupRef}>
            <div className='popup-content'>
              <input type='text' className='texting' placeholder='search......' />
              <button type="submit" className='close-up' onClick={handleClosePopup}>Submit</button>
            </div>
          </div>
        </form>
      )}
      <div className={`person ${selectedIcon === 'person' ? 'selected' : ''}`} onClick={() => handleIconClick('person')}>
        <div className='PersonIcon'>
          <PersonIcon className='iconE' />
        </div>
        <div className='personText'>Person</div>
      </div>
    </div>
  );
};

export default UpperToolbar;
