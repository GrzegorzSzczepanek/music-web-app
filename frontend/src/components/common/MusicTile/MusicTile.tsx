import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay, faEllipsisH, faHeart } from '@fortawesome/free-solid-svg-icons';
import { useState, useEffect } from 'react';
import './MusicTile.css';
import PopUpMenu from '../OptionPopup/OptionPopup';

interface MusicTileProps {
  title: string;
  artist: string;
  imageSrc: string;
}



const MusicTile: React.FC<MusicTileProps> = ({ title, artist, imageSrc }) => {
  const [showPopup, setShowPopup] = useState(false);

  document.addEventListener('click', (e) => {
    const popups = document.querySelectorAll('.hover-show');
    popups.forEach((popup) => {
      if (!popup.contains(e.target as Node)) {
        const dropdowns = document.querySelectorAll('.drop-down');
        dropdowns.forEach((dropdown) => {
          dropdown.classList.remove('show');
        });
      }
    });
  });

  return (
    <div className="tile">
      <div className="image-container">
        <img
          src={imageSrc}
          alt={title}
          className="image"
        />
        <div className="button-section">
          <button id="play" className="song-option-button">
            <FontAwesomeIcon icon={faPlay} />
          </button>
          <div className="right-buttons">
            <button id="more-options" className="song-option-button hover-show" onClick={() => setShowPopup(!showPopup)}>
              <FontAwesomeIcon icon={faEllipsisH} />
            </button>
            {showPopup && PopUpMenu()}
            <button id="favorite" className="song-option-button hover-show">
              <FontAwesomeIcon icon={faHeart} />
            </button>
          </div>
        </div>
      </div>
      <div className="bottom-text">
        <h3 className="title">{title}</h3>
        <p className="artist">{artist}</p>
      </div>
    </div>
  );
};


export default MusicTile;
