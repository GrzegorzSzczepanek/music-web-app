import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay, faEllipsisH, faHeart } from '@fortawesome/free-solid-svg-icons';
import './MusicTile.css';

interface MusicTileProps {
  title: string;
  artist: string;
  imageSrc: string;
}

const MusicTile: React.FC<MusicTileProps> = ({ title, artist, imageSrc }) => {
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
            <button id="more-options" className="song-option-button hover-show">
              <FontAwesomeIcon icon={faEllipsisH} />
            </button>
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
