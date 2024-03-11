import React, { useState, useRef, useEffect } from 'react';
import LocalFloristIcon from '@mui/icons-material/LocalFlorist';
import RssFeedIcon from '@mui/icons-material/RssFeed';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import SearchIcon from '@mui/icons-material/Search';
import PersonIcon from '@mui/icons-material/Person';

const UpperToolbar = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(false); // Initially set to false to hide search input
  const popupRef = useRef(null);

  useEffect(() => {
    // Set isPopupOpen to true if screen width is larger than 600px
    if (window.innerWidth > 600) {
      setIsPopupOpen(true);
    }
  }, []);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (popupRef.current && !popupRef.current.contains(event.target)) {
        if (window.innerWidth < 600) {
          setIsPopupOpen(false); // Close popup only on small screens
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
      setIsPopupOpen(!isPopupOpen); // Toggle popup only on small screens
    }
  };

  const handleClosePopup = () => {
    if (window.innerWidth < 600) {
      setIsPopupOpen(false); // Close popup only on small screens
    }
  };

  const handleSearchSubmit = (event) => {
    // Handle search submit logic here
    console.log("Search submitted!");
    event.preventDefault(); // Prevent default form submission behavior
  };

  return (
    <div className='UpperToolbar'>
      <div className='LocalFlorist'>
        <div className='LocalFloristIcon'>
          <LocalFloristIcon className='iconA' />
        </div>
        <div className='LocalFloristText'>Honey</div>
      </div>
      <div className='feed'>
        <div className='RssFeedIcon'>
          <RssFeedIcon className='iconB' />
        </div>
        <div className='feedText'>Feeds</div>
      </div>
      <div className='brightness'>
        <div className='Brightness4Icon'>
          <Brightness4Icon className='iconC' />
        </div>
        <div className='brightnessText'>Brightness</div>
      </div>
      <div className='search'>
        <div className='SearchIcon' onClick={handleSearchClick}>
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
      <div className='person'>
        <div className='PersonIcon'>
          <PersonIcon className='iconE' />
        </div>
        <div className='personText'>Person</div>
      </div>
    </div>
  );
};

export default UpperToolbar;
